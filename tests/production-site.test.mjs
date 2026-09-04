import assert from "node:assert/strict"
import { spawn } from "node:child_process"
import { after, before, test } from "node:test"

const port = 3112
const origin = `http://127.0.0.1:${port}`
let server
let serverOutput = ""

async function waitForServer() {
  const deadline = Date.now() + 20_000

  while (Date.now() < deadline) {
    try {
      const response = await fetch(origin)
      if (response.ok) return
    } catch {
      // The production server is still starting.
    }

    await new Promise((resolve) => setTimeout(resolve, 100))
  }

  throw new Error(`Next.js did not start.\n${serverOutput}`)
}

before(async () => {
  server = spawn(
    process.execPath,
    ["node_modules/next/dist/bin/next", "start", "-H", "127.0.0.1", "-p", String(port)],
    { cwd: process.cwd(), env: { ...process.env, NODE_ENV: "production" } },
  )

  server.stdout.on("data", (chunk) => {
    serverOutput += chunk.toString()
  })
  server.stderr.on("data", (chunk) => {
    serverOutput += chunk.toString()
  })

  await waitForServer()
})

after(() => {
  server?.kill("SIGTERM")
})

test("the homepage exposes the approved visit-decision surface", async () => {
  const response = await fetch(origin)
  const html = await response.text()

  assert.equal(response.status, 200)
  assert.match(html, /<html lang="zh-Hant"/)
  assert.match(html, /想喝杯咖啡/)
  assert.match(html, /中壢咖啡與輕食/)
  assert.match(html, /平日/)
  assert.match(html, /09:00[–-]18:00/)
  assert.match(html, /週末/)
  assert.match(html, /12:00[–-]18:00/)
  assert.match(html, />查看最新菜單</)
  assert.match(html, />導航到店</)
  assert.match(html, /https:\/\/shop\.ichefpos\.com\/store\/139TPDhT\/ordering/)
  assert.match(html, /tel:\+886-3-422-6209/)
  assert.doesNotMatch(html, /AI 選豆|30 秒開始|\/bean-match/)
})

test("the homepage exposes canonical search and verified cafe data", async () => {
  const html = await (await fetch(origin)).text()

  assert.match(html, /<link rel="canonical" href="https:\/\/mycoffeetaiwan\.com\/?"/)
  assert.match(html, /<meta property="og:title" content="買咖啡 MyCoffee｜中壢咖啡與輕食"/)
  assert.match(html, /<meta name="twitter:card" content="summary_large_image"/)
  assert.match(html, /application\/ld\+json/)
  assert.match(html, /"@type":"CafeOrCoffeeShop"/)
  assert.match(html, /"telephone":"\+886-3-422-6209"/)
  assert.match(html, /"dayOfWeek":\["Monday","Tuesday","Wednesday","Thursday","Friday"\]/)
  assert.doesNotMatch(html, /"priceRange"|aggregateRating|reviewCount/)
})

test("the retired bean matcher permanently redirects to the homepage", async () => {
  const response = await fetch(`${origin}/bean-match`, { redirect: "manual" })

  assert.equal(response.status, 308)
  assert.equal(new URL(response.headers.get("location"), origin).pathname, "/")
})

test("robots and sitemap expose only the canonical homepage", async () => {
  const robotsResponse = await fetch(`${origin}/robots.txt`)
  const robots = await robotsResponse.text()
  const sitemapResponse = await fetch(`${origin}/sitemap.xml`)
  const sitemap = await sitemapResponse.text()

  assert.equal(robotsResponse.status, 200)
  assert.match(robots, /User-Agent: \*/i)
  assert.match(robots, /Allow: \/$/m)
  assert.match(robots, /Sitemap: https:\/\/mycoffeetaiwan\.com\/sitemap\.xml/)

  assert.equal(sitemapResponse.status, 200)
  assert.match(sitemap, /<loc>https:\/\/mycoffeetaiwan\.com\/<\/loc>/)
  assert.doesNotMatch(sitemap, /bean-match|prototype/)
})

test("responses include the conservative security baseline", async () => {
  const response = await fetch(origin)

  assert.equal(response.headers.get("x-content-type-options"), "nosniff")
  assert.equal(response.headers.get("x-frame-options"), "DENY")
  assert.equal(response.headers.get("referrer-policy"), "strict-origin-when-cross-origin")
  assert.equal(response.headers.get("permissions-policy"), "camera=(), microphone=(), geolocation=()")
})

import assert from "node:assert/strict"
import { spawn } from "node:child_process"
import { once } from "node:events"
import { createServer } from "node:net"
import { after, before, test } from "node:test"

let origin
let server
let serverOutput = ""
let serverReady = false

const expectedLinks = {
  menu: "https://shop.ichefpos.com/store/139TPDhT/ordering",
  reserve: "https://shop.ichefpos.com/store/139TPDhT/reserve",
  maps: "https://www.google.com/maps/search/?api=1&query=%E6%A1%83%E5%9C%92%E5%B8%82%E4%B8%AD%E5%A3%A2%E5%8D%80%E4%B8%AD%E5%A4%AE%E6%9D%B1%E8%B7%AF52%E8%99%9F",
  instagram: "https://www.instagram.com/mycoffeetaiwan/",
  facebook: "https://www.facebook.com/mycoffeetaiwan/",
}

async function allocatePort() {
  const allocator = createServer()
  allocator.unref()
  await new Promise((resolve, reject) => {
    allocator.once("error", reject)
    allocator.listen(0, "127.0.0.1", resolve)
  })

  const address = allocator.address()
  assert(address && typeof address !== "string")
  const port = address.port
  await new Promise((resolve) => allocator.close(resolve))
  return port
}

async function waitForServer() {
  const deadline = Date.now() + 20_000

  while (Date.now() < deadline) {
    if (server.exitCode !== null) {
      throw new Error(`Next.js exited before becoming ready.\n${serverOutput}`)
    }

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

function hrefsFrom(html) {
  return new Set(
    [...html.matchAll(/href="([^"]+)"/g)].map((match) => match[1].replaceAll("&amp;", "&")),
  )
}

before(async () => {
  const port = await allocatePort()
  origin = `http://127.0.0.1:${port}`
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

  const earlyFailure = new Promise((_, reject) => {
    server.once("error", reject)
    server.once("exit", (code, signal) => {
      if (!serverReady) {
        reject(new Error(`Next.js exited early (${code ?? signal}).\n${serverOutput}`))
      }
    })
  })

  await Promise.race([waitForServer(), earlyFailure])
  serverReady = true
})

after(async () => {
  if (!server || server.exitCode !== null) return

  const gracefulExit = once(server, "exit")
  server.kill("SIGTERM")
  const exited = await Promise.race([
    gracefulExit.then(() => true),
    new Promise((resolve) => setTimeout(() => resolve(false), 1_000)),
  ])

  if (!exited && server.exitCode === null) {
    const forcedExit = once(server, "exit")
    server.kill("SIGKILL")
    await forcedExit
  }
})

test("the homepage exposes the approved visit-decision surface", async () => {
  const response = await fetch(origin)
  const html = await response.text()
  const hrefs = hrefsFrom(html)

  assert.equal(response.status, 200)
  assert.match(html, /<html lang="zh-Hant"/)
  assert.match(html, /想喝杯咖啡/)
  assert.match(html, /15 人包廂/)
  assert.match(html, /平日/)
  assert.match(html, /09:00[–-]18:00/)
  assert.match(html, /週末/)
  assert.match(html, /12:00[–-]18:00/)
  assert.match(html, /桃園市中壢區中央東路 52 號/)
  assert.match(html, />查看最新菜單</)
  assert.match(html, />導航到店</)
  assert(hrefs.has(expectedLinks.menu))
  assert(hrefs.has(expectedLinks.reserve))
  assert(hrefs.has(expectedLinks.maps))
  assert(hrefs.has(expectedLinks.instagram))
  assert(hrefs.has(expectedLinks.facebook))
  assert(hrefs.has("tel:+886-3-422-6209"))
  assert.doesNotMatch(html, /AI 選豆|30 秒開始|\/bean-match/)
})

test("the homepage integrates verified dine-in, takeout, and delivery clarity", async () => {
  const response = await fetch(origin)
  const html = await response.text()

  assert.match(html, /<nav class="site-nav" aria-label="頁面導覽"><a href="\/story">品牌故事<\/a><a href="\/#coffee">咖啡與輕食<\/a><a href="\/#space">空間與包廂<\/a><a href="\/#visit">來店資訊<\/a><\/nav>/)

  // Integrated service context
  assert.match(html, /店內提供內用與外帶；外送資訊請洽門市/)
  assert.match(html, /歡迎內用與到店外帶；外送資訊請洽門市/)

  // Nuanced menu platform note
  assert.match(html, /iCHEF 公開頁供瀏覽菜單；訂購／付款依門市或該官方頁公告為準/)
  assert.doesNotMatch(html, /不支援直接線上付款|不支援下單付款/)
})

test("the homepage exposes canonical search and verified cafe data", async () => {
  const html = await (await fetch(origin)).text()

  assert.match(html, /<link rel="canonical" href="https:\/\/mycoffeetaiwan\.com\/?"/)
  assert.match(html, /<meta property="og:title" content="買咖啡 MyCoffee｜中壢咖啡輕食・15 人包廂可聚會開會"/)
  assert.match(html, /<meta name="twitter:card" content="summary_large_image"/)
  assert.match(html, /application\/ld\+json/)
  assert.match(html, /"@type":"CafeOrCoffeeShop"/)
  assert.match(html, /"name":"買咖啡 MyCoffee \| 咖啡輕食"/)
  assert.match(html, /"telephone":"\+886-3-422-6209"/)
  assert.match(html, /"postalCode":"320"/)
  assert.match(html, /"dayOfWeek":\["Monday","Tuesday","Wednesday","Thursday","Friday"\]/)
  assert.match(html, /"@type":"FAQPage"/)
  assert.match(html, /"@type":"WebSite"/)
  assert.doesNotMatch(html, /"priceRange"|aggregateRating|reviewCount/)
})

test("the story page tells the brand lineage and labels generated scenes", async () => {
  const response = await fetch(`${origin}/story`)
  const html = await response.text()

  assert.equal(response.status, 200)
  assert.match(html, /<link rel="canonical" href="https:\/\/mycoffeetaiwan\.com\/story"/)
  assert.match(html, /迪麥便利商店/)
  assert.match(html, /法市咖啡/)
  assert.match(html, /榛果/)
  assert.match(html, /"@type":"AboutPage"/)
  assert.equal(html.match(/<figcaption[^>]*>AI 生成情境示意，非店內實景<\/figcaption>/g)?.length, 2)
})

test("llms.txt gives AI assistants the core brand facts", async () => {
  const response = await fetch(`${origin}/llms.txt`)
  const text = await response.text()

  assert.equal(response.status, 200)
  assert.match(response.headers.get("content-type"), /text\/plain/)
  assert.match(text, /^# 買咖啡 MyCoffee/)
  assert.match(text, /桃園市中壢區中央東路 52 號/)
  assert.match(text, /15 人包廂/)
  assert.match(text, /法市咖啡/)
  assert(text.includes(expectedLinks.menu))
})

test("retired routes no longer expose the old experience", async () => {
  const beanResponse = await fetch(`${origin}/bean-match`, { redirect: "manual" })
  const prototypeResponse = await fetch(`${origin}/prototype/brand`)

  assert.equal(beanResponse.status, 308)
  assert.equal(new URL(beanResponse.headers.get("location"), origin).pathname, "/")
  assert.equal(prototypeResponse.status, 404)
})

test("the links page exposes LINE, ordering, reservation, and social profiles", async () => {
  const response = await fetch(`${origin}/links`)
  const hrefs = hrefsFrom(await response.text())

  assert.equal(response.status, 200)
  for (const href of [
    "https://line.me/R/ti/p/@925tnupb",
    expectedLinks.menu,
    expectedLinks.reserve,
    expectedLinks.maps,
    expectedLinks.instagram,
    expectedLinks.facebook,
    "https://www.threads.com/@mycoffeetaiwan",
    "tel:+886-3-422-6209",
  ]) {
    assert(hrefs.has(href), href)
  }
})

test("robots and sitemap expose the public pages", async () => {
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
  assert.match(sitemap, /<loc>https:\/\/mycoffeetaiwan\.com\/story<\/loc>/)
  assert.match(sitemap, /<loc>https:\/\/mycoffeetaiwan\.com\/links<\/loc>/)
  assert.doesNotMatch(sitemap, /bean-match|prototype/)
})

test("responses include the conservative security baseline", async () => {
  const response = await fetch(origin)

  assert.equal(response.headers.get("x-content-type-options"), "nosniff")
  assert.equal(response.headers.get("x-frame-options"), "DENY")
  assert.equal(response.headers.get("referrer-policy"), "strict-origin-when-cross-origin")
  assert.equal(response.headers.get("permissions-policy"), "camera=(), microphone=(), geolocation=()")
})

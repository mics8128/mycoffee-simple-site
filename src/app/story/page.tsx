import type { Metadata } from "next"
import Image from "next/image"

import { ExternalLink, JsonLd, SiteFooter, SiteHeader } from "@/components/site-chrome"
import { cafeSchema, site } from "@/config/site"

import "../home.css"

const title = "品牌故事｜從迪麥便利商店、法市咖啡到買咖啡 MyCoffee"
const description =
  "買咖啡 MyCoffee 的故事：從迪麥便利商店、法市咖啡，到二十年前把風靡一時的榛果咖啡帶進台灣；休息一段時間後，由第二代在中壢重新開店，堅持店員面對面點餐的人情服務。"

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/story" },
  openGraph: { title, description, url: "/story", type: "article", images: ["/story/retro-hazelnut-scene.webp"] },
}

const chapters = [
  {
    label: "起點",
    title: "巷口的迪麥便利商店",
    image: "/story/retro-shop-scene.webp",
    alt: "復古便利商店櫃台與咖啡機（AI 生成情境示意）",
    body: [
      "故事從一間便利商店開始。那時候的櫃台不只是結帳的地方——熟客進門，先聊兩句天氣，再問問家裡的近況。",
      "櫃台旁的那台咖啡機，煮出了我們和咖啡最早的緣分：原來一杯咖啡，可以讓人多停留一下。",
    ],
  },
  {
    label: "二十年前",
    title: "法市咖啡，和那陣榛果香",
    image: "/story/retro-hazelnut-scene.webp",
    alt: "復古咖啡館桌上的一杯榛果拿鐵（AI 生成情境示意）",
    body: [
      "後來我們開了咖啡廳「法市咖啡」，也把當年風靡一時的榛果風味咖啡豆帶進台灣。豆袋一打開，整間店都是甜甜的堅果香。",
      "對很多人來說，那是第一次坐進咖啡館、第一次點一杯「有味道的咖啡」。",
    ],
  },
  {
    label: "休息",
    title: "店門暫時拉下",
    body: [
      "再後來，我們停下腳步，休息了一段時間。",
      "店關了，人情沒有斷。偶爾在路上遇到老客人，還是會被問一句：「那個榛果咖啡，現在還喝得到嗎？」",
    ],
  },
  {
    label: "現在",
    title: "兒子接手，新一代的買咖啡",
    body: [
      "這幾年，咖啡又熱了起來。手沖、義式，各種沖煮方式都有人研究；咖啡店越開越多，點餐也越來越快——掃個碼、按幾下，飲料就來了。",
      "兒子決定回來接手，在中壢中央東路重新開店，取了一個最直白的名字：買咖啡。想喝咖啡，就來買咖啡。",
      "咖啡可以跟著時代進步，但我們想留下老店的那一套：有人看著你點餐，跟你聊聊今天想喝什麼。",
    ],
  },
]

const promises = [
  { title: "不掃碼，人對人點餐", body: "進門有人打招呼。不知道怎麼選？跟店員聊聊你喜歡的味道就好，不必一個人對著手機和忙碌的櫃台。" },
  { title: "座位大，坐得住", body: "座位和走道都留得寬一點。一個人停一下、和朋友坐一會，都不擁擠。" },
  { title: "15 人包廂，可聚會也可開會", body: "包廂可容納 15 人並提供電視，家庭聚會、朋友聚餐、小型會議或簡報都適合。歡迎來電或用 LINE 詢問預約。" },
]

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": `${site.origin}/story#page`,
      url: `${site.origin}/story`,
      name: title,
      description,
      inLanguage: "zh-TW",
      about: { "@id": `${site.origin}/#cafe` },
    },
    { ...cafeSchema, "@context": undefined },
  ],
}

export default function StoryPage() {
  return (
    <div className="counter-home">
      <SiteHeader />

      <main id="main-content">
        <section className="story-hero page-shell" aria-labelledby="story-title">
          <p className="section-label">品牌故事</p>
          <h1 id="story-title">從一間便利商店，<br />到一杯有人陪你聊的咖啡。</h1>
          <p className="story-lead">
            迪麥便利商店、法市咖啡，到今天的買咖啡 MyCoffee。店名換了幾次，咖啡也越來越講究，我們想留下的始終是同一件事：人跟人之間，那幾句面對面的聊天。
          </p>
        </section>

        <div className="counter-fascia" aria-hidden="true">
          <span /><span /><span /><span />
        </div>

        <ol className="story-chapters page-shell">
          {chapters.map((c) => (
            <li key={c.title} className={c.image ? "story-chapter" : "story-chapter story-chapter--text"}>
              {c.image && (
                <figure className="story-image image-frame">
                  <Image src={c.image} alt={c.alt} fill sizes="(max-width: 720px) 100vw, 45vw" />
                  <figcaption className="scene-note">AI 生成情境示意，非店內實景</figcaption>
                </figure>
              )}
              <div className="story-copy">
                <p className="section-label">{c.label}</p>
                <h2>{c.title}</h2>
                {c.body.map((p) => <p key={p}>{p}</p>)}
              </div>
            </li>
          ))}
        </ol>

        <section className="story-promises page-shell" aria-labelledby="promises-title">
          <p className="section-label">我們堅持的事</p>
          <h2 id="promises-title">咖啡變快了，我們想慢一點。</h2>
          <ul>
            {promises.map((p) => (
              <li key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="visit page-shell" aria-labelledby="visit-title">
          <div>
            <p className="section-label">來店資訊</p>
            <h2 id="visit-title">中央東路 52 號，來聊聊吧。</h2>
            <p className="visit-service-note">
              平日 {site.hours.weekdays.display}・週末 {site.hours.weekends.display}｜{site.address.display}
            </p>
          </div>
          <div className="visit-actions-panel">
            <div className="visit-actions visit-actions--compact">
              <ExternalLink className="action action--primary" href={site.links.line}>LINE 詢問包廂</ExternalLink>
              <ExternalLink className="action action--secondary" href={site.links.maps}>導航到店</ExternalLink>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <JsonLd data={structuredData} />
    </div>
  )
}

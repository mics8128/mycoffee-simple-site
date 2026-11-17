import Image from "next/image"
import Link from "next/link"

import { ExternalLink, JsonLd, SiteFooter, SiteHeader } from "@/components/site-chrome"
import { cafeSchema, faqs, site } from "@/config/site"

import "./home.css"

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${site.origin}/#website`,
      url: site.origin,
      name: site.brandName,
      alternateName: site.alternateNames,
      inLanguage: "zh-TW",
      publisher: { "@id": `${site.origin}/#cafe` },
    },
    { ...cafeSchema, "@context": undefined },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
}

export default function Home() {
  return (
    <div className="counter-home">
      <SiteHeader />

      <main id="main-content">
        <section className="hero page-shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="hero-kicker">咖啡、輕食，還有坐一下的時間</p>
            <h1 id="hero-title">想喝杯咖啡，<br />就到買咖啡坐坐。</h1>
            <p className="hero-intro">
              買咖啡位於桃園市中壢區中央東路 52 號。這裡不用對著手機掃碼，店員會直接幫你點餐、陪你聊兩句；座位寬敞，也有 15 人包廂可以聚會、開會。
            </p>
            <div className="hero-location-summary">
              <p className="hero-address">{site.address.display}</p>
              <Hours />
            </div>
            <VisitActions />
            <p className="hero-service-note">
              店內提供內用與外帶；外送資訊請洽門市。iCHEF 公開頁供瀏覽菜單；訂購／付款依門市或該官方頁公告為準。
            </p>
          </div>

          <figure className="hero-image image-frame">
            <Image
              src="/brand/counter-real-aisle.webp"
              alt="買咖啡店內橘色吧台、座位與入口動線"
              fill
              preload
              sizes="(max-width: 720px) 100vw, 56vw"
            />
          </figure>
        </section>

        <div className="counter-fascia" aria-hidden="true">
          <span /><span /><span /><span />
        </div>

        <section id="story" className="space page-shell" aria-labelledby="story-title">
          <figure className="space-image image-frame">
            <Image
              src="/story/retro-hazelnut-scene.webp"
              alt="復古咖啡館桌上的一杯榛果拿鐵（AI 生成情境示意）"
              fill
              sizes="(max-width: 720px) 100vw, 45vw"
            />
            <figcaption className="scene-note">AI 生成情境示意，非店內實景</figcaption>
          </figure>
          <div className="space-copy">
            <p className="section-label">品牌故事</p>
            <h2 id="story-title">那杯榛果香，<br />換下一代來煮。</h2>
            <p>
              從迪麥便利商店到法市咖啡，二十年前，我們把當年風靡一時的榛果咖啡帶進台灣。休息了一段時間後，兒子接手，在中壢重新開了買咖啡——咖啡變得更講究了，但我們想留下的，還是那份面對面的人情味。
            </p>
            <Link className="text-link" href="/story">閱讀完整品牌故事</Link>
          </div>
        </section>

        <section id="coffee" className="everyday page-shell" aria-labelledby="everyday-title">
          <div>
            <p className="section-label">日常咖啡與輕食</p>
            <h2 id="everyday-title">不急著選，也不必懂很多。</h2>
          </div>
          <div>
            <p>
              現在的咖啡有手沖、義式，各種沖煮方式。不知道怎麼選沒關係，跟店員聊聊你喜歡的味道就好。咖啡、輕食和甜點的選擇，請以當日菜單為準。
            </p>
            <p className="menu-platform-note">
              iCHEF 公開頁供瀏覽菜單；訂購／付款依門市或該官方頁公告為準。
            </p>
          </div>
          <ExternalLink className="text-link" href={site.links.menu}>查看最新菜單</ExternalLink>
        </section>

        <section className="scenes page-shell" aria-label="咖啡與輕食情境">
          <div className="scenes-grid">
            <figure className="scene-image image-frame">
              <Image
                src="/brand/barista-brand-scene.webp"
                alt="咖啡沖煮的品牌情境圖"
                fill
                sizes="(max-width: 720px) 100vw, 48vw"
              />
            </figure>
            <figure className="scene-image image-frame">
              <Image
                src="/brand/table-brand-scene.webp"
                alt="咖啡、輕食與甜點的品牌情境圖"
                fill
                sizes="(max-width: 720px) 100vw, 48vw"
              />
            </figure>
          </div>
        </section>

        <section id="space" className="space page-shell" aria-labelledby="space-title">
          <figure className="space-image image-frame">
            <Image
              src="/images/store-01.jpg"
              alt="買咖啡店內的座位與動線"
              fill
              sizes="(max-width: 720px) 100vw, 45vw"
            />
          </figure>
          <div className="space-copy">
            <p className="section-label">空間與包廂</p>
            <h2 id="space-title">座位寬一點，聊天久一點。</h2>
            <p>
              一個人停一下，或和朋友坐一會，座位都留得大而寬敞。人多的時候，店內有一間可容納 15 人的包廂，提供電視，可以聚會、看影片，也能當會議室使用。包廂與訂位細節，歡迎來電或用 LINE 詢問。
            </p>
            <VisitDetails />
          </div>
        </section>

        <section id="faq" className="faq page-shell" aria-labelledby="faq-title">
          <p className="section-label">常見問題</p>
          <h2 id="faq-title">來之前，你可能想知道。</h2>
          <div className="faq-list">
            {faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="visit" className="visit page-shell" aria-labelledby="visit-title">
          <div>
            <p className="section-label">來店資訊</p>
            <h2 id="visit-title">中央東路 52 號，來喝杯咖啡。</h2>
            <p className="visit-service-note">
              歡迎內用與到店外帶；外送資訊請洽門市（<a href={`tel:${site.telephone}`}>{site.displayPhone}</a>）。
            </p>
          </div>
          <div className="visit-actions-panel">
            <Hours />
            <VisitActions compact />
          </div>
        </section>
      </main>

      <SiteFooter />
      <JsonLd data={structuredData} />
    </div>
  )
}

function Hours() {
  return (
    <dl className="hours" aria-label="營業時間">
      <div>
        <dt>{site.hours.weekdays.label}</dt>
        <dd>{site.hours.weekdays.display}</dd>
      </div>
      <div>
        <dt>{site.hours.weekends.label}</dt>
        <dd>{site.hours.weekends.display}</dd>
      </div>
    </dl>
  )
}

function VisitActions({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`visit-actions${compact ? " visit-actions--compact" : ""}`}>
      <ExternalLink className="action action--primary" href={site.links.menu}>查看最新菜單</ExternalLink>
      <ExternalLink className="action action--secondary" href={site.links.maps}>導航到店</ExternalLink>
    </div>
  )
}

function VisitDetails() {
  return (
    <address className="visit-details">
      <p>{site.address.display}</p>
      <div>
        <a href={`tel:${site.telephone}`}>{site.displayPhone}</a>
        <ExternalLink href={site.links.reserve}>訂位</ExternalLink>
        <ExternalLink href={site.links.line}>LINE 詢問</ExternalLink>
        <ExternalLink href={site.links.maps}>在 Maps 開啟</ExternalLink>
      </div>
    </address>
  )
}

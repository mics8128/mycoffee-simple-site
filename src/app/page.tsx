import Image from "next/image"
import Link from "next/link"

import "./home.css"

const site = {
  name: "買咖啡 MyCoffee",
  url: "https://mycoffeetaiwan.com/",
  telephone: "+886-3-422-6209",
  displayPhone: "03 422 6209",
  address: "桃園市中壢區中央東路 52 號",
  hours: {
    weekdays: "09:00–18:00",
    weekends: "12:00–18:00",
  },
  links: {
    menu: "https://shop.ichefpos.com/store/139TPDhT/ordering",
    reserve: "https://shop.ichefpos.com/store/139TPDhT/reserve",
    maps: "https://www.google.com/maps/search/?api=1&query=%E6%A1%83%E5%9C%92%E5%B8%82%E4%B8%AD%E5%A3%A2%E5%8D%80%E4%B8%AD%E5%A4%AE%E6%9D%B1%E8%B7%AF52%E8%99%9F",
    instagram: "https://www.instagram.com/mycoffeetaiwan/",
    facebook: "https://www.facebook.com/mycoffeetaiwan/",
  },
} as const

const structuredData = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: site.name,
  url: site.url,
  telephone: site.telephone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "中央東路 52 號",
    addressLocality: "中壢區",
    addressRegion: "桃園市",
    addressCountry: "TW",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "12:00",
      closes: "18:00",
    },
  ],
  menu: site.links.menu,
  sameAs: [site.links.instagram, site.links.facebook],
}

export default function Home() {
  return (
    <div className="counter-home">
      <a className="skip-link" href="#main-content">跳至主要內容</a>
      <header className="site-header page-shell">
        <Link className="brand-lockup" href="/" aria-label="買咖啡 MyCoffee 首頁">
          <Image
            src="/brand/mycoffee-mark.png"
            alt=""
            width={56}
            height={56}
            className="brand-mark"
          />
          <span>
            <strong>{site.name}</strong>
            <small>咖啡輕食</small>
          </span>
        </Link>
        <nav className="site-nav" aria-label="頁面導覽">
          <a href="#coffee">咖啡與輕食</a>
          <a href="#space">店內空間</a>
          <a href="#visit">來店資訊</a>
        </nav>
      </header>

      <main id="main-content">
        <section className="hero page-shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="hero-kicker">咖啡、輕食，還有坐一下的時間</p>
            <h1 id="hero-title">想喝杯咖啡，<br />就到買咖啡坐坐。</h1>
            <p className="hero-intro">
              買咖啡在中壢中央東路。想喝杯咖啡、吃點輕食，先看目前菜單，再決定要不要過來坐坐。
            </p>
            <Hours />
            <VisitActions />
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

        <section id="coffee" className="everyday page-shell" aria-labelledby="everyday-title">
          <div>
            <p className="section-label">日常咖啡與輕食</p>
            <h2 id="everyday-title">不急著選，也不必懂很多。</h2>
          </div>
          <p>
            日常咖啡、輕食和甜點的選擇，請以當日菜單為準。先看看現在有什麼，再決定今天想坐多久。
          </p>
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
            <p className="section-label">店內空間</p>
            <h2 id="space-title">一個人停一下，或和朋友坐一會。</h2>
            <p>
              店內有單人和多人座位。想先確認訂位或其他來店細節，可以直接打電話詢問。
            </p>
            <VisitDetails />
          </div>
        </section>

        <section id="visit" className="visit page-shell" aria-labelledby="visit-title">
          <div>
            <p className="section-label">來店資訊</p>
            <h2 id="visit-title">中央東路 52 號，來喝杯咖啡。</h2>
          </div>
          <div className="visit-actions-panel">
            <Hours />
            <VisitActions compact />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-footer-inner page-shell">
          <div>
            <p className="footer-name">買咖啡 MyCoffee｜咖啡輕食</p>
            <address>{site.address}</address>
          </div>
          <nav aria-label="聯絡與社群">
            <a href={`tel:${site.telephone}`}>{site.displayPhone}</a>
            <ExternalLink href={site.links.reserve}>訂位</ExternalLink>
            <ExternalLink href={site.links.instagram}>Instagram</ExternalLink>
            <ExternalLink href={site.links.facebook}>Facebook</ExternalLink>
          </nav>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </div>
  )
}

function Hours() {
  return (
    <dl className="hours" aria-label="營業時間">
      <div>
        <dt>平日</dt>
        <dd>{site.hours.weekdays}</dd>
      </div>
      <div>
        <dt>週末</dt>
        <dd>{site.hours.weekends}</dd>
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
      <p>{site.address}</p>
      <div>
        <a href={`tel:${site.telephone}`}>{site.displayPhone}</a>
        <ExternalLink href={site.links.reserve}>訂位</ExternalLink>
        <ExternalLink href={site.links.maps}>在 Maps 開啟</ExternalLink>
      </div>
    </address>
  )
}

function ExternalLink({ className, href, children }: { className?: string; href: string; children: React.ReactNode }) {
  return (
    <a className={className} href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}

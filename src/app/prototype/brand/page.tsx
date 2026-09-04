import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import "./brand-prototype.css"

const menuUrl = "https://shop.ichefpos.com/store/139TPDhT/ordering"
const reserveUrl = "https://shop.ichefpos.com/store/139TPDhT/reserve"
const mapsUrl = "https://www.google.com/maps/search/?api=1&query=%E6%A1%83%E5%9C%92%E5%B8%82%E4%B8%AD%E5%A3%A2%E5%8D%80%E4%B8%AD%E5%A4%AE%E6%9D%B1%E8%B7%AF52%E8%99%9F"

type Variant = "counter" | "station" | "table"

type PageProps = {
  searchParams: Promise<{ variant?: string | string[] }>
}

const prototypeTitle = "買咖啡 MyCoffee｜中壢咖啡輕食品牌原型"
const prototypeDescription = "買咖啡 MyCoffee 品牌網站本機原型：咖啡、輕食與來店資訊。"

export const metadata: Metadata = {
  title: prototypeTitle,
  description: prototypeDescription,
  robots: { index: false, follow: false },
  openGraph: {
    title: prototypeTitle,
    description: prototypeDescription,
    url: "/prototype/brand",
    siteName: "買咖啡 MyCoffee",
    locale: "zh_TW",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: prototypeTitle,
    description: prototypeDescription,
  },
}

function isVariant(value: string | string[] | undefined): value is Variant {
  return typeof value === "string" && ["counter", "station", "table"].includes(value)
}

export default async function BrandPrototypePage({ searchParams }: PageProps) {
  const params = await searchParams
  const variant: Variant = isVariant(params.variant) ? params.variant : "counter"

  return (
    <main className={`brand-prototype brand-prototype--${variant}`}>
      {variant === "counter" && <CounterDirection />}
      {variant === "station" && <StationDirection />}
      {variant === "table" && <TableDirection />}
      <BrandFooter />
      <PrototypeSwitcher active={variant} />
    </main>
  )
}

function BrandMark() {
  return (
    <div className="brand-mark-lockup">
      <Image
        src="/brand/mycoffee-mark.png"
        alt="買咖啡 MyCoffee"
        width={56}
        height={56}
        className="brand-mark"
      />
      <div>
        <p className="brand-name">買咖啡 MyCoffee</p>
        <p className="brand-kind">咖啡輕食 · 中壢</p>
      </div>
    </div>
  )
}

function PrototypeNote({ children }: { children: React.ReactNode }) {
  return <p className="prototype-note">PROTOTYPE · {children}</p>
}

function Hours() {
  return (
    <dl className="hours">
      <div>
        <dt>一般時段</dt>
        <dd>平日 09:00–18:00</dd>
      </div>
      <div>
        <dt>週末</dt>
        <dd>12:00–18:00</dd>
      </div>
      <div className="hours-note">
        <dt className="sr-only">提醒</dt>
        <dd>來店前請以現場最新公告為準</dd>
      </div>
    </dl>
  )
}

function ImageStatus({ children = "現有實景" }: { children?: React.ReactNode }) {
  return <span className="image-status">{children}</span>
}

function VisitActions({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`visit-actions${compact ? " visit-actions--compact" : ""}`}>
      <a className="action action--dark" href={menuUrl} target="_blank" rel="noreferrer">
        查看最新菜單 <span aria-hidden="true">↗</span>
      </a>
      <a className="action action--outline" href={mapsUrl} target="_blank" rel="noreferrer">
        導航到店 <span aria-hidden="true">↗</span>
      </a>
    </div>
  )
}

function VisitDetails({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <address className={`visit-details visit-details--${tone}`}>
      <p>桃園市中壢區中央東路 52 號</p>
      <div className="visit-detail-links">
        <a href="tel:+88634226209">03 422 6209</a>
        <a href={reserveUrl} target="_blank" rel="noreferrer">訂位</a>
        <a href={mapsUrl} target="_blank" rel="noreferrer">在 Maps 開啟</a>
      </div>
    </address>
  )
}

function CounterDirection() {
  return (
    <div className="counter-page">
      <header className="counter-header page-shell">
        <BrandMark />
        <PrototypeNote>Everyday Counter / 建議方向</PrototypeNote>
      </header>

      <section className="counter-hero page-shell" aria-labelledby="counter-title">
        <div className="counter-hero-copy">
          <p className="counter-kicker">咖啡 · 輕食 · 可以坐一下的日常</p>
          <h1 id="counter-title">今天想喝杯咖啡，<br />就到買咖啡坐坐。</h1>
          <p className="counter-intro">
            在中壢中央東路，留一杯日常咖啡和一份剛好的輕食時間。第一次來，也能先看菜單、確認位置，再決定今天的腳步。
          </p>
          <Hours />
          <VisitActions />
        </div>

        <figure className="counter-hero-image image-frame">
          <Image
            src="/images/store-02.jpg"
            alt="買咖啡的橘色咖啡吧台"
            fill
            preload
            sizes="(max-width: 720px) 100vw, 56vw"
          />
          <ImageStatus>現有實景 · 橘色吧台</ImageStatus>
        </figure>
      </section>

      <div className="counter-fascia" aria-hidden="true">
        <span></span><span></span><span></span><span></span>
      </div>

      <section className="counter-everyday page-shell" aria-labelledby="everyday-title">
        <div>
          <p className="section-label">EVERYDAY, AT YOUR PACE</p>
          <h2 id="everyday-title">不急著選，也不必懂很多。</h2>
        </div>
        <p>
          想喝日常咖啡、看看當日手沖，或找一份輕食和甜點搭配，都從目前菜單開始。品項與供應狀況，以菜單與現場為準。
        </p>
        <a className="text-link" href={menuUrl} target="_blank" rel="noreferrer">查看最新菜單 <span aria-hidden="true">→</span></a>
      </section>

      <section className="counter-space page-shell" aria-labelledby="counter-space-title">
        <figure className="counter-space-photo image-frame">
          <Image src="/images/store-01.jpg" alt="買咖啡店內的座位與動線" fill sizes="(max-width: 720px) 100vw, 45vw" />
          <ImageStatus>現有實景 · 店內座位</ImageStatus>
        </figure>
        <div className="counter-space-copy">
          <p className="section-label">THE ROOM</p>
          <h2 id="counter-space-title">一個人停一下，或和朋友坐一會。</h2>
          <p>
            空間、座位和來店條件會隨現場狀況調整；若在意座位、插座或停留規則，請以現場公告為準。
          </p>
          <VisitDetails />
        </div>
      </section>

      <section className="counter-visit page-shell" aria-labelledby="counter-visit-title">
        <div>
          <p className="section-label">COME BY</p>
          <h2 id="counter-visit-title">把地址和時間記下來。</h2>
        </div>
        <div>
          <Hours />
          <VisitActions compact />
        </div>
      </section>
    </div>
  )
}

function StationDirection() {
  return (
    <div className="station-page">
      <header className="station-header page-shell">
        <BrandMark />
        <PrototypeNote>Station Note / 城市路線方向</PrototypeNote>
      </header>

      <section className="station-hero" aria-labelledby="station-title">
        <div className="station-route-tag">ZHONGLI · CENTRAL EAST ROAD</div>
        <div className="station-hero-inner page-shell">
          <div className="station-copy">
            <p className="station-kicker">一間在日常路線上的咖啡店</p>
            <h1 id="station-title">往下一站之前，<br />先留一段時間給自己。</h1>
            <p>
              買咖啡在中壢中央東路。走到店前，先把今天是否適合來坐坐的資訊看清楚：時間、位置，還有現在的菜單。
            </p>
            <Hours />
            <VisitActions />
          </div>
          <figure className="station-hero-image image-frame">
            <Image src="/images/store-01.jpg" alt="買咖啡從座位區望向吧台的店內景象" fill preload sizes="(max-width: 720px) 100vw, 50vw" />
            <ImageStatus>現有實景 · 店內動線</ImageStatus>
          </figure>
        </div>
      </section>

      <section className="station-board page-shell" aria-labelledby="station-board-title">
        <div className="station-board-title">
          <p className="section-label">TODAY&apos;S STOP</p>
          <h2 id="station-board-title">先確認，再出發。</h2>
        </div>
        <Hours />
        <VisitDetails tone="dark" />
      </section>

      <section className="station-steps page-shell" aria-labelledby="station-steps-title">
        <div>
          <p className="section-label">ON THE WAY</p>
          <h2 id="station-steps-title">把來店需要的資訊放在前面。</h2>
        </div>
        <ol>
          <li>
            <span>01</span>
            <div><h3>看現在的菜單</h3><p>品項、價格與供應資訊，請以公開菜單為準。</p><a href={menuUrl} target="_blank" rel="noreferrer">查看最新菜單 ↗</a></div>
          </li>
          <li>
            <span>02</span>
            <div><h3>打開導航</h3><p>地址：桃園市中壢區中央東路 52 號。</p><a href={mapsUrl} target="_blank" rel="noreferrer">導航到店 ↗</a></div>
          </li>
          <li>
            <span>03</span>
            <div><h3>需要先問一聲</h3><p>訂位或來店細節，可直接聯絡店家確認。</p><a href="tel:+88634226209">撥打 03 422 6209</a></div>
          </li>
        </ol>
      </section>

      <section className="station-room page-shell" aria-labelledby="station-room-title">
        <figure className="station-room-photo image-frame">
          <Image src="/images/store-04.jpg" alt="買咖啡店內桌椅實景" fill sizes="(max-width: 720px) 100vw, 50vw" />
          <ImageStatus>現有實景 · 座位區</ImageStatus>
        </figure>
        <div>
          <p className="section-label">A SHORT STOP, OR A LONGER ONE</p>
          <h2 id="station-room-title">喝杯咖啡，吃點輕食，再回到自己的路線。</h2>
          <p>空間與供應狀況每天不同；來之前想確認的事，打電話問最直接。</p>
          <a className="text-link" href={reserveUrl} target="_blank" rel="noreferrer">訂位 ↗</a>
        </div>
      </section>
    </div>
  )
}

function TableDirection() {
  return (
    <div className="table-page">
      <header className="table-header page-shell">
        <BrandMark />
        <PrototypeNote>Coffee &amp; Plate / 桌上節奏方向</PrototypeNote>
      </header>

      <section className="table-hero page-shell" aria-labelledby="table-title">
        <div className="table-hero-copy">
          <p className="table-kicker">COFFEE, SOMETHING LIGHT, A LITTLE TIME</p>
          <h1 id="table-title">一杯咖啡，<br />配一份剛好的時間。</h1>
          <p>
            想坐下喝杯日常咖啡，也想吃一點輕食或甜點。買咖啡把這些平常的小選擇，留在同一張桌上。
          </p>
          <Hours />
          <VisitActions />
        </div>
        <div className="table-still-life" aria-label="咖啡與輕食圖片槽示意">
          <figure className="table-cup image-frame">
            <Image src="/images/ichef-real-01.jpg" alt="買咖啡現有的咖啡杯實景" fill preload sizes="(max-width: 720px) 100vw, 36vw" />
            <ImageStatus>現有實景暫代 · 咖啡近照</ImageStatus>
          </figure>
          <div className="food-placeholder">
            <span>COFFEE + PLATE</span>
            <strong>輕食桌景<br />待補拍</strong>
            <p>正式版需要咖啡與餐食同框的實拍；現階段不以其他圖片代替。</p>
          </div>
        </div>
      </section>

      <section className="table-rhythm page-shell" aria-labelledby="table-rhythm-title">
        <div>
          <p className="section-label">AT THE TABLE</p>
          <h2 id="table-rhythm-title">從當日菜單，找適合今天的一桌。</h2>
        </div>
        <div className="table-rhythm-list">
          <article>
            <span>01</span>
            <h3>日常咖啡</h3>
            <p>想喝什麼，先看現在的選擇。</p>
          </article>
          <article>
            <span>02</span>
            <h3>一點輕食</h3>
            <p>需要餐食時，以當日菜單為準。</p>
          </article>
          <article>
            <span>03</span>
            <h3>慢慢坐著</h3>
            <p>座位與來店規則，請看現場公告。</p>
          </article>
        </div>
        <a className="text-link" href={menuUrl} target="_blank" rel="noreferrer">查看最新菜單 <span aria-hidden="true">→</span></a>
      </section>

      <section className="table-room page-shell" aria-labelledby="table-room-title">
        <div className="table-room-copy">
          <p className="section-label">THE PLACE AROUND THE TABLE</p>
          <h2 id="table-room-title">咖啡、輕食，和一個能放慢一點的空間。</h2>
          <p>
            這裡適合把一段空檔留給自己或身邊的人。若想確認座位、訂位或現場條件，請直接聯絡店家。
          </p>
          <VisitDetails />
        </div>
        <figure className="table-room-photo image-frame">
          <Image src="/images/store-03.jpg" alt="買咖啡店內座位實景" fill sizes="(max-width: 720px) 100vw, 50vw" />
          <ImageStatus>現有實景 · 店內座位</ImageStatus>
        </figure>
      </section>

      <section className="table-last-call page-shell" aria-labelledby="table-last-call-title">
        <div>
          <p className="section-label">VISIT MYCOFFEE</p>
          <h2 id="table-last-call-title">中央東路 52 號，等你把今天坐下來。</h2>
        </div>
        <VisitActions compact />
      </section>
    </div>
  )
}

function BrandFooter() {
  return (
    <footer className="prototype-footer">
      <div className="prototype-footer-inner page-shell">
        <div>
          <p className="prototype-footer-name">買咖啡 MyCoffee | 咖啡輕食</p>
          <p>桃園市中壢區中央東路 52 號</p>
        </div>
        <nav aria-label="品牌聯絡方式">
          <a href="tel:+88634226209">03 422 6209</a>
          <a href="https://www.instagram.com/mycoffeetaiwan/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.facebook.com/mycoffeetaiwan/" target="_blank" rel="noopener noreferrer">Facebook</a>
        </nav>
        <p className="prototype-footer-source">資料基準：2026.08.09<br />正式發布前重新確認</p>
      </div>
    </footer>
  )
}

function PrototypeSwitcher({ active }: { active: Variant }) {
  const variants: Array<{ key: Variant; label: string }> = [
    { key: "counter", label: "Counter" },
    { key: "station", label: "Station" },
    { key: "table", label: "Table" },
  ]

  return (
    <aside className="prototype-switcher" aria-label="原型方向切換">
      <span className="prototype-switcher-label">PROTOTYPE</span>
      <nav aria-label="選擇品牌方向">
        {variants.map(({ key, label }) => (
          <Link
            key={key}
            href={`/prototype/brand?variant=${key}`}
            className={active === key ? "is-active" : undefined}
            aria-current={active === key ? "page" : undefined}
          >
            {label}
          </Link>
        ))}
      </nav>
      <span className="prototype-switcher-state">目前：{active}</span>
    </aside>
  )
}

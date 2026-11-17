import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { site } from "@/config/site"

import "./links.css"

export const metadata: Metadata = {
  title: `${site.brandName}｜連結`,
  description: "加入 LINE、線上點餐、訂位、導航，以及 MyCoffee 的 Instagram、Facebook、Threads。",
  alternates: { canonical: "/links" },
  openGraph: { title: `${site.brandName}｜連結`, description: "加入 LINE、線上點餐、訂位、導航與社群。", url: "/links", images: ["/opengraph-image.jpg"] },
}

// Stroke icons in lucide style (24×24); no icon dependency installed.
const icons = {
  line: (
    <>
      <path d="M12 3C6.5 3 2 6.6 2 11c0 3.9 3.5 7.2 8.3 7.9l-.6 2.6c-.1.4.3.7.7.5 2.1-1.2 6.4-3.9 8.5-6.5 1.3-1.3 2.1-2.9 2.1-4.5 0-4.4-4.5-8-10-8z" />
      <path d="M7 9v4h2M11 9v4M13.5 13V9l3 4V9" />
    </>
  ),
  order: (
    <>
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <path d="M3 6h18M16 10a4 4 0 0 1-8 0" />
    </>
  ),
  reserve: (
    <>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18M9 16l2 2 4-4" />
    </>
  ),
  maps: (
    <>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  phone: (
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
  ),
  instagram: (
    <>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.5 6.5h.01" />
    </>
  ),
  facebook: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
  threads: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
    </>
  ),
  arrow: <path d="M7 17 17 7M8 7h9v9" />,
}

function Icon({ name }: { name: keyof typeof icons }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {icons[name]}
    </svg>
  )
}

const actions = [
  { icon: "line", label: "加入 LINE 好友", note: "直接傳訊息問我們", href: site.links.line, tone: "line" },
  { icon: "order", label: "線上點餐", note: "iCHEF 最新菜單", href: site.links.menu, tone: "accent" },
  { icon: "reserve", label: "線上訂位", note: "選好時間，留個位子", href: site.links.reserve },
  { icon: "maps", label: "導航到店", note: site.address.display, href: site.links.maps },
  { icon: "phone", label: "打電話給我們", note: site.displayPhone, href: `tel:${site.telephone}` },
] as const

const socials = [
  { icon: "instagram", label: "Instagram", href: site.links.instagram },
  { icon: "facebook", label: "Facebook", href: site.links.facebook },
  { icon: "threads", label: "Threads", href: site.links.threads },
] as const

export default function LinksPage() {
  return (
    <main className="links-page">
      <div className="links-card">
        <div className="links-cover">
          <Image src="/brand/counter-real-aisle.webp" alt="買咖啡店內橘色吧台" fill preload sizes="30rem" />
        </div>

        <header className="links-profile">
          <Image className="links-avatar" src="/brand/mycoffee-mark.png" alt="" width={96} height={96} />
          <h1>{site.brandName}</h1>
          <p className="links-handle">@mycoffeetaiwan</p>
          <p className="links-bio">咖啡、輕食，還有坐一下的時間。</p>
          <dl className="links-hours">
            <div>
              <dt>{site.hours.weekdays.label}</dt>
              <dd>{site.hours.weekdays.display}</dd>
            </div>
            <div>
              <dt>{site.hours.weekends.label}</dt>
              <dd>{site.hours.weekends.display}</dd>
            </div>
          </dl>
        </header>

        <nav className="links-socials" aria-label="社群">
          {socials.map((s) => (
            <a key={s.icon} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
              <Icon name={s.icon} />
            </a>
          ))}
        </nav>

        <ul className="links-list">
          {actions.map((a) => (
            <li key={a.icon}>
              <a
                className="links-button"
                data-tone={"tone" in a ? a.tone : undefined}
                href={a.href}
                {...(a.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <span className="links-icon"><Icon name={a.icon} /></span>
                <span className="links-text">
                  <strong>{a.label}</strong>
                  <small>{a.note}</small>
                </span>
                <span className="links-arrow"><Icon name="arrow" /></span>
              </a>
            </li>
          ))}
          {socials.map((s) => (
            <li key={s.icon}>
              <a className="links-button" href={s.href} target="_blank" rel="noopener noreferrer">
                <span className="links-icon"><Icon name={s.icon} /></span>
                <span className="links-text">
                  <strong>{s.label}</strong>
                  <small>@mycoffeetaiwan</small>
                </span>
                <span className="links-arrow"><Icon name="arrow" /></span>
              </a>
            </li>
          ))}
        </ul>

        <footer className="links-footer">
          <Link href="/">mycoffeetaiwan.com</Link>
        </footer>
      </div>
    </main>
  )
}

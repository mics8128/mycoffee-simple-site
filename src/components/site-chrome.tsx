import Image from "next/image"
import Link from "next/link"

import { site } from "@/config/site"

export function SiteHeader() {
  return (
    <>
      <a className="skip-link" href="#main-content">跳至主要內容</a>
      <header className="site-header page-shell">
        <Link className="brand-lockup" href="/" aria-label="買咖啡 MyCoffee 首頁">
          <Image src="/brand/mycoffee-mark.png" alt="" width={56} height={56} className="brand-mark" />
          <span>
            <strong>{site.brandName}</strong>
            <small>咖啡輕食</small>
          </span>
        </Link>
        <nav className="site-nav" aria-label="頁面導覽">
          <Link href="/story">品牌故事</Link>
          <Link href="/#coffee">咖啡與輕食</Link>
          <Link href="/#space">空間與包廂</Link>
          <Link href="/#visit">來店資訊</Link>
        </nav>
      </header>
    </>
  )
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner page-shell">
        <div>
          <p className="footer-name">買咖啡 MyCoffee｜咖啡輕食</p>
          <address>{site.address.display}</address>
        </div>
        <nav aria-label="聯絡與社群">
          <a href={`tel:${site.telephone}`}>{site.displayPhone}</a>
          <ExternalLink href={site.links.reserve}>訂位</ExternalLink>
          <ExternalLink href={site.links.line}>LINE</ExternalLink>
          <ExternalLink href={site.links.instagram}>Instagram</ExternalLink>
          <ExternalLink href={site.links.facebook}>Facebook</ExternalLink>
          <ExternalLink href={site.links.threads}>Threads</ExternalLink>
          <Link href="/story">品牌故事</Link>
          <Link href="/links">所有連結</Link>
        </nav>
      </div>
    </footer>
  )
}

export function ExternalLink({ className, href, children }: { className?: string; href: string; children: React.ReactNode }) {
  return (
    <a className={className} href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}

export function JsonLd({ data }: { data: object }) {
  // `<` escaped so text content can never close the script tag.
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />
}

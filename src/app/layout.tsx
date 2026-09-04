import type { Metadata } from "next"
import { Geist } from "next/font/google"

import { site } from "@/config/site"

import "./globals.css"

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL(site.origin),
  title: site.title,
  description: site.description,
  applicationName: site.brandName,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: site.title,
    description: site.description,
    url: "/",
    siteName: site.brandName,
    locale: "zh_TW",
    type: "website",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "買咖啡 MyCoffee 店內橘色吧台與中壢咖啡輕食品牌資訊",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: ["/opengraph-image.jpg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-Hant" className={geist.variable} data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  )
}

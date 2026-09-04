import type { Metadata } from "next"
import { Geist } from "next/font/google"

import "./globals.css"

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const title = "買咖啡 MyCoffee｜中壢咖啡與輕食"
const description = "買咖啡 MyCoffee 位於桃園市中壢區中央東路 52 號，提供咖啡、手沖、輕食與甜點。查看最新菜單、營業時間、訂位與導航資訊。"

export const metadata: Metadata = {
  metadataBase: new URL("https://mycoffeetaiwan.com"),
  title,
  description,
  applicationName: "買咖啡 MyCoffee",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "買咖啡 MyCoffee",
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
    title,
    description,
    images: ["/opengraph-image.jpg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-Hant" className={geist.variable}>
      <body>{children}</body>
    </html>
  )
}

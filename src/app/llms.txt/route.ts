import { faqs, site } from "@/config/site"

export const dynamic = "force-static"

// llms.txt (https://llmstxt.org): plain-Markdown brand facts for AI search and assistants.
export function GET() {
  const body = `# ${site.brandName}

> ${site.description}

- 正式名稱：${site.businessName}
- 也稱：${site.alternateNames.join("、")}
- 前身：迪麥便利商店、法市咖啡
- 地址：${site.address.display}（郵遞區號 ${site.address.postalCode}）
- 電話：${site.displayPhone}
- 營業時間：${site.hours.weekdays.label} ${site.hours.weekdays.display}；${site.hours.weekends.label} ${site.hours.weekends.display}
- 服務：內用、外帶；店員面對面點餐（非掃碼點餐）；外送請洽門市
- 空間：座位寬敞；15 人包廂，附電視，可作會議室，適合聚會與小型會議

## 品牌故事

${site.story}

## 常見問題

${faqs.map((f) => `### ${f.q}\n\n${f.a}`).join("\n\n")}

## 連結

- [官方網站](${site.origin}/)
- [品牌故事](${site.origin}/story)
- [所有連結](${site.origin}/links)
- [最新菜單（iCHEF）](${site.links.menu})
- [線上訂位（iCHEF）](${site.links.reserve})
- [早餐預訂（49 元自由配，LINE 預訂取餐）](${site.links.breakfast})
- [Google 地圖導航](${site.links.maps})
- [LINE 官方帳號](${site.links.line})
- [Instagram](${site.links.instagram})
- [Facebook](${site.links.facebook})
- [Threads](${site.links.threads})
`

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } })
}

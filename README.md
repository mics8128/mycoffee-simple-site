# 買咖啡 MyCoffee 官方網站

https://mycoffeetaiwan.com — Next.js 16（App Router），部署在 Vercel。

## 頁面

| 路徑 | 內容 |
|---|---|
| `/` | 首頁：來店資訊、品牌故事摘要、空間與 15 人包廂、常見問題（FAQPage 結構化資料） |
| `/story` | 完整品牌故事（AboutPage） |
| `/links` | 社群自介用連結頁：LINE、iCHEF 點餐/訂位、導航、電話、IG/FB/Threads |
| `/llms.txt` | 給 AI 助理與 AI 搜尋的品牌事實摘要（[llms.txt](https://llmstxt.org)） |
| `/sitemap.xml`、`/robots.txt` | 搜尋引擎索引 |

## 修改資料

店名、地址、電話、營業時間、所有外部連結、品牌故事摘要、FAQ 與 schema.org 資料都在 `src/config/site.ts`，改一處，首頁、連結頁、llms.txt 與結構化資料會一起更新。

圖片規則見 `docs/adr/0001-authentic-imagery-boundary.md`：AI 生成圖只能當情境示意，畫面上必須標註「AI 生成情境示意，非店內實景」。

## 開發

```bash
bun install
bun run dev      # http://localhost:3000
bun run check    # lint + build + 整合測試
```

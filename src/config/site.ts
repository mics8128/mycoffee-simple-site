export const site = {
  brandName: "買咖啡 MyCoffee",
  businessName: "買咖啡 MyCoffee | 咖啡輕食",
  alternateNames: ["買咖啡", "MyCoffee", "MyCoffee Taiwan", "mycoffeetaiwan"],
  title: "買咖啡 MyCoffee｜中壢咖啡輕食・15 人包廂可聚會開會",
  description: "買咖啡 MyCoffee 位於桃園市中壢區中央東路 52 號。從迪麥便利商店、法市咖啡一路走來，二十年前把風靡一時的榛果咖啡帶進台灣；如今第二代重新開店：不必掃碼，店員親自點餐聊天，座位寬敞，另有 15 人包廂附電視，可聚會、可開會。",
  story: "買咖啡的前身是迪麥便利商店，後來開了法市咖啡。二十年前，我們把當時風靡一時的榛果風味咖啡豆帶進台灣。中間休息了一段時間，如今由兒子接手，在中壢中央東路重新開了新一代的買咖啡：咖啡再次流行，手沖、義式等各種沖煮方式都有人愛；我們不走掃碼點餐，而是保留店員面對面點餐、聊天的人情服務，座位大而寬敞，並有可容納 15 人、附電視、可當會議室的包廂。",
  slogan: "不用對著手機掃碼，來這裡有人陪你聊聊。",
  origin: "https://mycoffeetaiwan.com",
  telephone: "+886-3-422-6209",
  displayPhone: "03 422 6209",
  address: {
    display: "桃園市中壢區中央東路 52 號",
    street: "中央東路 52 號",
    locality: "中壢區",
    region: "桃園市",
    postalCode: "320",
    country: "TW",
  },
  hours: {
    weekdays: {
      label: "平日",
      display: "09:00–18:00",
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    weekends: {
      label: "週末",
      display: "12:00–18:00",
      days: ["Saturday", "Sunday"],
      opens: "12:00",
      closes: "18:00",
    },
  },
  links: {
    menu: "https://shop.ichefpos.com/store/139TPDhT/ordering",
    reserve: "https://shop.ichefpos.com/store/139TPDhT/reserve",
    maps: "https://www.google.com/maps/search/?api=1&query=%E6%A1%83%E5%9C%92%E5%B8%82%E4%B8%AD%E5%A3%A2%E5%8D%80%E4%B8%AD%E5%A4%AE%E6%9D%B1%E8%B7%AF52%E8%99%9F",
    instagram: "https://www.instagram.com/mycoffeetaiwan/",
    facebook: "https://www.facebook.com/mycoffeetaiwan/",
    threads: "https://www.threads.com/@mycoffeetaiwan",
    line: "https://line.me/R/ti/p/@925tnupb",
  },
} as const

export const cafeSchema = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  "@id": `${site.origin}/#cafe`,
  name: site.businessName,
  alternateName: site.alternateNames,
  description: site.description,
  slogan: site.slogan,
  url: site.origin,
  logo: `${site.origin}/brand/mycoffee-mark.png`,
  image: [`${site.origin}/opengraph-image.jpg`, `${site.origin}/brand/counter-real-aisle.webp`],
  telephone: site.telephone,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  hasMap: site.links.maps,
  openingHoursSpecification: [site.hours.weekdays, site.hours.weekends].map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: h.days,
    opens: h.opens,
    closes: h.closes,
  })),
  menu: site.links.menu,
  acceptsReservations: true,
  servesCuisine: ["咖啡", "手沖咖啡", "輕食", "甜點"],
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "15 人包廂", value: true },
    { "@type": "LocationFeatureSpecification", name: "包廂電視（可作會議室）", value: true },
    { "@type": "LocationFeatureSpecification", name: "寬敞座位", value: true },
    { "@type": "LocationFeatureSpecification", name: "店員面對面點餐", value: true },
  ],
  sameAs: [site.links.instagram, site.links.facebook, site.links.threads, site.links.line],
}

export const faqs = [
  {
    q: "買咖啡 MyCoffee 在哪裡？營業時間是？",
    a: `買咖啡位於${site.address.display}。平日 ${site.hours.weekdays.display}，週末 ${site.hours.weekends.display}。`,
  },
  {
    q: "需要掃碼點餐嗎？",
    a: "不用。直接跟店員點餐，想喝什麼、不確定怎麼選，都可以聊聊；想先看菜單，也可以瀏覽 iCHEF 公開菜單。",
  },
  {
    q: "有包廂嗎？可以聚會或開會嗎？",
    a: "有。店內有一間可容納 15 人的包廂，提供電視，可以當會議室使用，適合朋友聚會與小型會議。建議先來電或用 LINE 詢問預約。",
  },
  {
    q: "可以訂位嗎？",
    a: `可以透過 iCHEF 線上訂位，或來電 ${site.displayPhone}、用 LINE 詢問。`,
  },
  {
    q: "買咖啡和迪麥便利商店、法市咖啡有什麼關係？",
    a: "是同一家人的故事。我們最早是迪麥便利商店，後來開了法市咖啡；二十年前，我們把當年風靡一時的榛果咖啡豆帶進台灣。中間休息了一段時間後，由兒子接手重新開了新一代的買咖啡。",
  },
  {
    q: "有外帶或外送嗎？",
    a: "店內提供內用與外帶；外送資訊請洽門市。",
  },
] as const

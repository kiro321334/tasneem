// ✏️ عدّل البيانات دي بس: الاسم، الدومين، الواتساب، الإيميل، السوشيال
export const site = {
  url: "https://your-domain.com",
  name: "تسنيم حسام",
  nameEn: "Tasneem Hossam",
  role: "صانع محتوى UGC",
  whatsapp: "https://wa.me/201009770538",

  facebook: "https://www.facebook.com/share/19WVwZ1n7w/",
  instagram: "https://www.instagram.com/tasneemhossam97?stkn=amZ3MTV1dmdndm42",
  tiktok: "https://www.tiktok.com/@tasneemhossam97?_r=1&_t=ZS-9A2YFNZ4BSn",
  youtube: "https://www.youtube.com/@tasneemhossam97",
  title:
    "صانع محتوى UGC في مصر | فيديوهات UGC تزوّد مبيعات منتجك | UGC Creator Egypt",
  description:
    "صانع محتوى UGC محترف: بحوّل منتجك لفيديو يخلّي الناس توقف سكرول ويشتري. فيديوهات UGC لتيك توك وريلز وإعلانات ممولة، تسليم سريع وباقات أسعار واضحة. Professional UGC creator in Egypt for TikTok, Reels & paid ads.",
  keywords: [
    "صانع محتوى UGC",
    "فيديوهات UGC",
    "UGC مصر",
    "صانع محتوى مصري",
    "فيديو منتج",
    "مراجعات منتجات",
    "إعلانات تيك توك",
    "ريلز انستجرام",
    "محتوى إعلاني",
    "تسويق بالمحتوى",
    "تصوير منتجات",
    "سكريبت إعلان",
    "مونتاج فيديو",
    "باقات UGC",
    "UGC creator Egypt",
    "UGC videos",
    "UGC content creator",
    "TikTok ads creator",
    "product review videos",
    "Reels creator",
    "brand content creator",
    "UGC pricing",
  ],
};
export const wa = (msg) => `${site.whatsapp}?text=${encodeURIComponent(msg)}`;

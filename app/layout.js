import { Readex_Pro } from 'next/font/google';
import './globals.css';
import { site } from '@/lib/site';
const rx = Readex_Pro({ subsets: ['arabic', 'latin'], variable: '--font-rx', display: 'swap' });
export const metadata = {
  metadataBase: new URL(site.url), title: site.title, description: site.description, keywords: site.keywords,
  authors: [{ name: site.name }], alternates: { canonical: '/' },
  openGraph: { title: site.title, description: site.description, url: site.url, siteName: site.name, type: 'website', locale: 'ar_EG', alternateLocale: ['en_US'] },
  twitter: { card: 'summary_large_image', title: site.title, description: site.description },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-video-preview': -1 } },
};
export const viewport = { width: 'device-width', initialScale: 1, themeColor: '#fdf4ef' };
const ld = { '@context': 'https://schema.org', '@type': 'Person', name: site.name, alternateName: site.nameEn, jobTitle: 'UGC Creator', url: site.url, email: site.email, sameAs: [site.instagram, site.tiktok, site.linkedin], knowsAbout: ['UGC', 'TikTok content', 'Reels', 'Product videos'], address: { '@type': 'PostalAddress', addressCountry: 'EG' } };
export default function RootLayout({ children }) {
  return (<html lang="ar" dir="rtl" className={rx.variable}><body>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />{children}</body></html>);
}

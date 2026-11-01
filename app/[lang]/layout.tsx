import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { preload } from "react-dom";
import Script from "next/script";
import { getDictionary } from "@/lib/dictionaries";
import { LOCALES, OG_LOCALE, hasLocale, languageAlternates, localePath, type Locale } from "@/lib/i18n";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { CONVERSIONS, GOOGLE_TAG_IDS } from "@/lib/tracking";
import "../globals.css";

// Text and display faces of the first screen (@font-face in globals.css). Barlow 600 for subtitles loads on demand.
// Russian has its own Cyrillic files: RO/EN never download them, and RU never downloads the Latin ones.
const FONT_PRELOADS: Record<Locale, string[]> = {
  ro: ["/fonts/archivo-latin.woff2", "/fonts/barlow-condensed-800i-latin.woff2"],
  en: ["/fonts/archivo-latin.woff2", "/fonts/barlow-condensed-800i-latin.woff2"],
  ru: ["/fonts/roboto-cyrillic.woff2", "/fonts/roboto-condensed-italic-cyrillic.woff2"],
};

// Inline in <head>, so it runs before the page can be tapped: conversions from clicks on phone, Viber and WhatsApp
// links queue in dataLayer until gtag.js (loaded lazily, end of <body>) arrives and sends them.
// Beacon transport lets the hit go out while the link opens, so the click is never delayed.
const hits = (conversions: object[]) => JSON.stringify(conversions.map((c) => ({ ...c, transport_type: "beacon" })));

const GOOGLE_TAG_INIT = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
${GOOGLE_TAG_IDS.map((id) => `gtag('config', '${id}');`).join("\n")}
document.addEventListener('click', function (e) {
  var a = e.target instanceof Element ? e.target.closest('a[href]') : null;
  if (!a) return;
  var href = a.getAttribute('href') || '';
  var conversions = href.indexOf('tel:') === 0 ? ${hits(CONVERSIONS.call)}
    : href.indexOf('viber:') === 0 || href.indexOf('https://wa.me/') === 0 ? ${hits(CONVERSIONS.message)}
    : [];
  conversions.forEach(function (params) { gtag('event', 'conversion', params); });
});`;

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const { meta } = getDictionary(lang);

  return {
    metadataBase: new URL(SITE_URL),
    title: meta.title,
    description: meta.description,
    applicationName: SITE_NAME,
    alternates: { canonical: localePath(lang), languages: languageAlternates() },
    openGraph: {
      type: "website",
      url: localePath(lang),
      siteName: SITE_NAME,
      locale: OG_LOCALE[lang],
      alternateLocale: LOCALES.filter((l) => l !== lang).map((l) => OG_LOCALE[l]),
      title: meta.ogTitle,
      description: meta.description,
    },
    twitter: { card: "summary_large_image" },
    robots: { index: true, follow: true, googleBot: { "max-image-preview": "large", "max-snippet": -1 } },
    formatDetection: { telephone: false },
  };
}

export const viewport: Viewport = {
  themeColor: "#0B0B0C",
};

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  for (const href of FONT_PRELOADS[lang]) preload(href, { as: "font", type: "font/woff2", crossOrigin: "anonymous" });
  // The brush behind the call button is the LCP on mobile; as a CSS background it would only be requested once the button is styled.
  preload("/images/brush.webp", { as: "image", type: "image/webp", fetchPriority: "high" });

  return (
    <html lang={lang}>
      <head>
        {/* A plain inline script: next/script's beforeInteractive would only run it once the Next.js runtime loads. */}
        <script dangerouslySetInnerHTML={{ __html: GOOGLE_TAG_INIT }} />
      </head>
      <body>
        {children}
        {/* After the load event, when the browser is idle: the tags' ~350 KiB of JS stays out of the first paint. */}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TAG_IDS[0]}`} strategy="lazyOnload" />
      </body>
    </html>
  );
}

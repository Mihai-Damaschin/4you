import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import { Archivo, Barlow_Condensed, Roboto, Roboto_Condensed } from "next/font/google";
import { getDictionary } from "@/lib/dictionaries";
import { LOCALES, OG_LOCALE, hasLocale, languageAlternates, localePath } from "@/lib/i18n";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import "../globals.css";

const GOOGLE_ADS_ID = "AW-18486884978";
// Conversion action from the previous Google Ads account (AW-18482277256) — replace with the new account's label.
const CONTACT_CONVERSION = "AW-18482277256/CgOrCMCx4YsdEIjXhO1E";
const CALL_CONVERSION_VALUE = 1.0;
const CHAT_CONVERSION_VALUE = 0.1;

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin", "latin-ext"],
});

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin", "latin-ext"],
  weight: ["600", "800"],
  style: ["italic"],
});

// Archivo and Barlow have no Cyrillic; globals.css swaps to these on the Russian page.
// Not preloaded, so RO/EN pages never download them.
const roboto = Roboto({
  variable: "--font-cyr",
  subsets: ["latin", "cyrillic"],
  preload: false,
});

const robotoCondensed = Roboto_Condensed({
  variable: "--font-cyr-display",
  subsets: ["latin", "cyrillic"],
  weight: ["600", "800"],
  style: ["italic"],
  preload: false,
});

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

  const fonts = [archivo, barlow, roboto, robotoCondensed].map((f) => f.variable).join(" ");

  return (
    <html lang={lang} className={fonts}>
      <body>
        {children}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`} strategy="afterInteractive" />
        <Script id="google-tag" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GOOGLE_ADS_ID}');`}
        </Script>
        {/* Click-to-call conversion for every phone / Viber / WhatsApp link on the page.
            Beacon transport lets the hit go out while the link opens, so the click is never delayed. */}
        <Script id="google-ads-contact-conversion" strategy="afterInteractive">
          {`document.addEventListener('click', function (e) {
  var a = e.target instanceof Element ? e.target.closest('a[href]') : null;
  if (!a) return;
  var href = a.getAttribute('href') || '';
  var value = href.indexOf('tel:') === 0 ? ${CALL_CONVERSION_VALUE}
    : href.indexOf('viber:') === 0 || href.indexOf('https://wa.me/') === 0 ? ${CHAT_CONVERSION_VALUE}
    : null;
  if (value === null) return;
  gtag('event', 'conversion', {
    send_to: '${CONTACT_CONVERSION}',
    value: value,
    currency: 'EUR',
    transport_type: 'beacon'
  });
});`}
        </Script>
      </body>
    </html>
  );
}

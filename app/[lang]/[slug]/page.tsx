import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CallButton, CallCard, SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { getDictionary } from "@/lib/dictionaries";
import { GALLERY } from "@/lib/gallery";
import { LOCALES, OG_LOCALE, hasLocale, languageAlternates, localePath, type Locale } from "@/lib/i18n";
import { LANDING_SLUGS, getLanding, type Landing } from "@/lib/landing";
import { PHONE_E164, PHONE_LOCAL, SITE_NAME, SITE_URL, links } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.flatMap((lang) => LANDING_SLUGS.map((slug) => ({ lang, slug })));
}

async function load(params: PageProps<"/[lang]/[slug]">["params"]) {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getDictionary(lang);
  const page = getLanding(slug, lang, t);
  if (!page) notFound();
  return { lang, t, page };
}

export async function generateMetadata({ params }: PageProps<"/[lang]/[slug]">): Promise<Metadata> {
  const { lang, page } = await load(params);
  const path = localePath(lang, page.slug);
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: path, languages: languageAlternates(page.slug) },
    openGraph: {
      type: "website",
      url: path,
      siteName: SITE_NAME,
      locale: OG_LOCALE[lang],
      title: page.title,
      description: page.description,
    },
  };
}

function buildJsonLd(lang: Locale, page: Landing, homeName: string) {
  const home = new URL(localePath(lang), SITE_URL).href;
  const url = new URL(localePath(lang, page.slug), SITE_URL).href;
  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${url}#service`,
      name: page.kind === "area" ? page.h1 : page.name,
      description: page.description,
      url,
      inLanguage: lang,
      serviceType: "Towing",
      provider: {
        "@type": "AutomotiveBusiness",
        "@id": `${SITE_URL}/#business`,
        name: SITE_NAME,
        url: SITE_URL,
        telephone: PHONE_E164,
        sameAs: [links.facebook],
      },
      areaServed:
        page.kind === "area"
          ? { "@type": "Place", name: page.name }
          : [
              { "@type": "City", name: "Chișinău" },
              { "@type": "Country", name: "Moldova" },
            ],
      offers: {
        "@type": "Offer",
        priceSpecification: { "@type": "PriceSpecification", minPrice: 250, priceCurrency: "MDL" },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: homeName, item: home },
        { "@type": "ListItem", position: 2, name: page.name, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      inLanguage: lang,
      mainEntity: page.faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];
}

export default async function LandingPage({ params }: PageProps<"/[lang]/[slug]">) {
  const { lang, t, page } = await load(params);
  const photo = GALLERY[page.photo];
  const crumb = page.kind === "area" ? t.landing.areasCrumb : t.landing.servicesCrumb;

  return (
    <>
      <SiteHeader lang={lang} t={t} slug={page.slug} />

      <main>
        <nav className="container crumbs" aria-label={t.landing.breadcrumbLabel}>
          <ol>
            <li>
              <a href={localePath(lang)}>{t.landing.home}</a>
            </li>
            <li>
              <a href={`${localePath(lang)}#zone`}>{crumb}</a>
            </li>
            <li aria-current="page">{page.name}</li>
          </ol>
        </nav>

        <section className="container hero hero-page">
          <div className="hero-body">
            <div className="hero-main">
              <h1 className="display page-title">{page.h1}</h1>
              <div className="hero-copy">
                <p className="subdisplay hero-sub accent">{page.accent}</p>
                <p className="hero-lead">{page.lead}</p>
              </div>
              <CallButton t={t} />
            </div>

            <CallCard t={t} />
          </div>
        </section>

        <section className="services" aria-label={t.servicesLabel}>
          <div className="container">
            <div className="services-grid">
              {t.services.map((s) => (
                <div key={s.title} className="service">
                  <div className="display service-value">
                    {s.prefix && <span className="service-affix">{s.prefix} </span>}
                    {s.value}
                    <span className="service-affix"> {s.unit}</span>
                  </div>
                  <h3 className="service-title">{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container section-pad page-content">
          <figure className="tile page-photo">
            <Image
              src={photo.src}
              alt={t.gallery.items[page.photo].title}
              fill
              sizes="(min-width: 1000px) 45vw, 100vw"
              style={{ objectPosition: photo.pos }}
            />
          </figure>
          <div className="page-sections">
            {page.sections.map((s) => (
              <div key={s.heading}>
                <h2 className="display page-section-title">{s.heading}</h2>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="faq">
          <div className="container section-pad faq-grid">
            <div className="faq-intro">
              <div className="eyebrow">{t.faq.eyebrow}</div>
              <h2 className="display faq-title">
                {t.landing.faqTitle}
                <br />
                {t.landing.faqTitle2}
              </h2>
              <p className="section-lead faq-lead">
                {t.faq.leadBefore} <a href={links.tel}>{PHONE_LOCAL}</a> {t.faq.leadAfter}
              </p>
            </div>
            <div className="faq-list">
              {page.faq.map((f) => (
                <details key={f.q} className="faq-item">
                  <summary>
                    <h3>{f.q}</h3>
                    <span className="faq-icon" aria-hidden="true" />
                  </summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter lang={lang} t={t} current={page.slug} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildJsonLd(lang, page, t.landing.home)).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}

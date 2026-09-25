import Image from "next/image";
import { notFound } from "next/navigation";
import { CallButton, CallCard, LinkColumns, SiteFooter, SiteHeader } from "@/components/SiteChrome";
import Vrej from "@/components/Vrej";
import { GALLERY } from "@/lib/gallery";
import { getDictionary, type Dictionary } from "@/lib/dictionaries";
import { hasLocale, localePath, type Locale } from "@/lib/i18n";
import { PHONE_E164, PHONE_ALT_E164, PHONE_LOCAL, SITE_NAME, SITE_URL, links } from "@/lib/site";

function buildJsonLd(lang: Locale, t: Dictionary) {
  const url = new URL(localePath(lang), SITE_URL).href;
  return [
    {
      "@context": "https://schema.org",
      "@type": "AutomotiveBusiness",
      "@id": `${SITE_URL}/#business`,
      name: SITE_NAME,
      url,
      logo: `${SITE_URL}/icon.svg`,
      image: [`${SITE_URL}/images/hero-night.jpg`, `${SITE_URL}/images/platform.jpg`],
      description: t.schema.description,
      telephone: [PHONE_E164, PHONE_ALT_E164],
      priceRange: t.schema.priceRange,
      currenciesAccepted: "MDL",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
      areaServed: [
        { "@type": "City", name: t.schema.city },
        { "@type": "Country", name: t.schema.country },
      ],
      address: { "@type": "PostalAddress", addressLocality: t.schema.city, addressCountry: "MD" },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: PHONE_E164,
        contactType: "customer service",
        areaServed: "MD",
        availableLanguage: ["ro", "ru"],
        hoursAvailable: "Mo-Su 00:00-23:59",
      },
      makesOffer: t.schema.offers.map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
      sameAs: [links.facebook],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      inLanguage: lang,
      mainEntity: t.faq.items.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];
}

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getDictionary(lang);

  return (
    <>
      <SiteHeader lang={lang} t={t} />

      <main>
        <section id="sus" className="container hero">
          <div className="hero-side xwide-only">
            <Vrej width={44} />
          </div>

          <div className="hero-body">
            <div className="hero-main">
              <h1 className="display hero-title">
                <span className="hero-title-line">{t.hero.title}</span>
                <br />
                <span className="accent">{t.hero.accent}</span>
              </h1>
              <div className="hero-copy">
                <p className="subdisplay hero-sub">{t.hero.sub}</p>
                <p className="hero-lead">{t.hero.lead}</p>
              </div>
              <CallButton t={t} />
            </div>

            <CallCard t={t} />
          </div>

          <div className="hero-side mirrored xwide-only">
            <Vrej width={44} />
          </div>
        </section>

        <section className="banner" aria-label={t.banner.label}>
          <Image
            src="/images/hero-night.jpg"
            alt={t.banner.alt}
            fill
            sizes="100vw"
          />
          <div className="banner-shade" />
          <div className="banner-content">
            <div className="container">
              <p className="display banner-title">
                {t.banner.line}
                <br />
                <span className="accent">{t.banner.accent}</span>
              </p>
            </div>
          </div>
        </section>

        <section id="servicii" className="services" aria-label={t.servicesLabel}>
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

        <section id="galerie" className="container section-pad gallery">
          <div className="section-head">
            <div className="eyebrow">{t.gallery.eyebrow}</div>
            <h2 className="display section-title">{t.gallery.title}</h2>
            <p className="section-lead">{t.gallery.lead}</p>
          </div>
          <div className="gallery-grid">
            {GALLERY.map((g, i) => (
              <figure key={g.src} className={`tile ${g.tile}`}>
                <Image
                  src={g.src}
                  alt={t.gallery.items[i].title}
                  fill
                  sizes="(min-width: 1000px) 50vw, 100vw"
                  style={{ objectPosition: g.pos }}
                />
                <figcaption>
                  <span className="display tile-title">{t.gallery.items[i].title}</span>
                  <span className="tile-meta">{t.gallery.items[i].meta}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="gallery-foot">
            <p>{t.gallery.more}</p>
            <a href={links.facebook} className="underline-link">
              <span>{t.gallery.link}</span>
            </a>
          </div>
        </section>

        <section id="zone" className="container section-pad zones">
          <div className="section-head">
            <div className="eyebrow">{t.landing.linksEyebrow}</div>
            <h2 className="display section-title">{t.landing.linksTitle}</h2>
            <p className="section-lead">{t.landing.linksLead}</p>
          </div>
          <LinkColumns lang={lang} t={t} />
        </section>

        <section id="intrebari" className="faq">
          <div className="container section-pad faq-grid">
            <div className="faq-intro">
              <div className="eyebrow">{t.faq.eyebrow}</div>
              <h2 className="display faq-title">
                {t.faq.title}
                <br />
                {t.faq.title2}
              </h2>
              <p className="section-lead faq-lead">
                {t.faq.leadBefore} <a href={links.tel}>{PHONE_LOCAL}</a> {t.faq.leadAfter}
              </p>
            </div>
            <div className="faq-list">
              {t.faq.items.map((f) => (
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

        <section id="firme" className="container business">
          <div className="business-card">
            <div className="business-copy">
              <div className="eyebrow">{t.business.eyebrow}</div>
              <h2 className="display business-title">{t.business.title}</h2>
              <p>{t.business.text}</p>
            </div>
            <a href={links.tel} className="business-cta">
              {t.business.cta}
            </a>
          </div>
        </section>
      </main>

      <SiteFooter lang={lang} t={t} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd(lang, t)).replace(/</g, "\\u003c") }}
      />
    </>
  );
}

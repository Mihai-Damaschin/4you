import Image from "next/image";
import LangSwitch from "@/components/LangSwitch";
import Pom from "@/components/Pom";
import Vrej from "@/components/Vrej";
import VrejStrip from "@/components/VrejStrip";
import { FacebookIcon, ViberIcon, WhatsAppIcon } from "@/components/Icons";
import { FAQ } from "@/lib/faq";
import { PHONE_ALT_LOCAL, PHONE_E164, PHONE_ALT_E164, PHONE_LOCAL, links } from "@/lib/site";

const NAV = [
  { href: "#servicii", label: "Servicii" },
  { href: "#galerie", label: "Galerie" },
  { href: "#intrebari", label: "Întrebări" },
  { href: "#firme", label: "Pentru firme" },
];

const STEPS = [
  { title: "Unde ești", hint: "Stradă, reper sau locația pe Viber" },
  { title: "Ce mașină ai", hint: "Marca și dacă roțile se mai învârt" },
  { title: "Unde o ducem", hint: "Service, acasă, parcare — oriunde în zonă" },
];

// Each point leads with its key fact; label is the promise, text is the detail.
const SERVICES = [
  {
    value: "20–30",
    unit: "min",
    title: "Serviciu de urgență 24/7",
    text: "Sosire medie în Chișinău. Non-stop, inclusiv noaptea și de sărbători.",
  },
  {
    value: "Orice",
    unit: "stare",
    title: "Toate tipurile de vehicule",
    text: "Avariate, blocate sau care nu pornesc. Plus motociclete și ATV-uri.",
  },
  {
    value: "6",
    unit: "m",
    title: "Echipament profesional",
    text: "Platformă cu troliu electric. Încărcăm bateria și pe loc.",
  },
  {
    prefix: "de la",
    value: "250",
    unit: "lei",
    title: "Operatori licențiați",
    text: "Preț confirmat la telefon, fără costuri ascunse. Asigurare inclusă.",
  },
];

const GALLERY = [
  { src: "/images/sunset-service.jpg", title: "Spre service, la apus", meta: "Chișinău", pos: "center 55%", tile: "tile-big" },
  { src: "/images/delivered-service.jpg", title: "Livrat la service", meta: "Noaptea", pos: "center 62%", tile: "tile-tall" },
  { src: "/images/platform.jpg", title: "Platforma", meta: "Mercedes Sprinter", pos: "center 60%", tile: "" },
  { src: "/images/jump-start.jpg", title: "Pornire cu cabluri", meta: "Pe loc", pos: "center 50%", tile: "" },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    name: "Evacuator 4You",
    description: "Evacuator și tractări auto non-stop în Chișinău, suburbii și în toată Moldova.",
    telephone: [PHONE_E164, PHONE_ALT_E164],
    priceRange: "de la 250 MDL",
    openingHours: "Mo-Su 00:00-23:59",
    areaServed: ["Chișinău", "Republica Moldova"],
    address: { "@type": "PostalAddress", addressLocality: "Chișinău", addressCountry: "MD" },
    sameAs: [links.facebook],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
];

function MessengerButtons() {
  return (
    <>
      <a href={links.viber} aria-label="Viber" className="round-btn bg-viber lift">
        <ViberIcon />
      </a>
      <a href={links.whatsapp} aria-label="WhatsApp" className="round-btn bg-whatsapp lift">
        <WhatsAppIcon />
      </a>
    </>
  );
}

export default function Home() {
  return (
    <>
      <header className="header">
        <div className="container header-inner">
          <a href="#sus" className="brand">
            <Pom size={40} stroke={10} palette="Temperată" />
            <span className="display brand-name">
              <span className="accent">4</span>YOU PENTRU TINE
            </span>
          </a>
          <nav className="nav wide-only" aria-label="Principal">
            {NAV.map((n) => (
              <a key={n.href} href={n.href}>
                {n.label}
              </a>
            ))}
          </nav>
          <div className="header-actions">
            <LangSwitch />
            <a href={links.tel} className="brush header-phone wide-only">
              <span className="brush-label display">
                <span style={{ opacity: 0.75 }}>+373</span> 60 551 000
              </span>
            </a>
          </div>
        </div>
      </header>

      <VrejStrip thickness={22} className="narrow-only top-strip" />

      <main>
        <section id="sus" className="container hero">
          <div className="hero-side xwide-only">
            <Vrej width={44} />
          </div>

          <div className="hero-body">
            <div className="hero-main">
              <h1 className="display hero-title">
                <span className="hero-title-line">TE-AI OPRIT?</span>
                <br />
                <span className="accent">VENIM NOI.</span>
              </h1>
              <div className="hero-copy">
                <p className="subdisplay hero-sub">Evacuator non-stop în Chișinău și suburbii</p>
                <p className="hero-lead">
                  Mașini avariate, în pană sau blocate — le luăm de oriunde din oraș și le ducem unde spui tu, zi
                  sau noapte.
                </p>
              </div>
              <a href={links.tel} className="brush hero-cta">
                <span className="brush-label">
                  <span className="hero-cta-kicker">Sună acum</span>
                  <span className="display hero-cta-number">{PHONE_LOCAL}</span>
                </span>
              </a>
            </div>

            <div className="call-card-wrap">
              <div className="call-card">
                <h2 className="display">CE NE SPUI LA TELEFON</h2>
                {STEPS.map((s, i) => (
                  <div key={s.title} className="step">
                    <div className="display step-num">{i + 1}</div>
                    <div className="step-body">
                      <div className="step-title">{s.title}</div>
                      <div className="step-hint">{s.hint}</div>
                    </div>
                  </div>
                ))}
                <div className="price">
                  <span>Preț</span>
                  <span className="display">de la 250 lei</span>
                </div>
              </div>
              <div className="message-panel">
                <div className="message-panel-text">
                  <div className="step-title">Nu poți vorbi acum?</div>
                  <div className="step-hint">Scrie-ne sau trimite locația</div>
                </div>
                <div className="message-panel-buttons">
                  <MessengerButtons />
                </div>
              </div>
            </div>
          </div>

          <div className="hero-side mirrored xwide-only">
            <Vrej width={44} />
          </div>
        </section>

        <section className="banner" aria-label="Noaptea pe drum">
          <Image
            src="/images/hero-night.jpg"
            alt="Evacuatorul 4You noaptea, cu o mașină pe platformă"
            fill
            sizes="100vw"
          />
          <div className="banner-shade" />
          <div className="banner-content">
            <div className="container">
              <p className="display banner-title">
                PLOAIE, NOAPTE, SĂRBĂTOARE —
                <br />
                <span className="accent">NOI TOT VENIM.</span>
              </p>
            </div>
          </div>
        </section>

        <section id="servicii" className="services" aria-label="Servicii">
          <div className="container">
            <div className="services-grid">
              {SERVICES.map((s) => (
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
            <div className="eyebrow">Galerie</div>
            <h2 className="display section-title">DIN TEREN</h2>
            <p className="section-lead">Flota noastră și câteva intervenții de zi cu zi.</p>
          </div>
          <div className="gallery-grid">
            {GALLERY.map((g) => (
              <figure key={g.src} className={`tile ${g.tile}`}>
                <Image
                  src={g.src}
                  alt={g.title}
                  fill
                  sizes="(min-width: 1000px) 50vw, 100vw"
                  style={{ objectPosition: g.pos }}
                />
                <figcaption>
                  <span className="display tile-title">{g.title}</span>
                  <span className="tile-meta">{g.meta}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="gallery-foot">
            <p>Mai multe pe pagina noastră de Facebook.</p>
            <a href={links.facebook} className="underline-link">
              <span>Vezi pe Facebook →</span>
            </a>
          </div>
        </section>

        <section id="intrebari" className="faq">
          <div className="container section-pad faq-grid">
            <div className="faq-intro">
              <div className="eyebrow">Întrebări frecvente</div>
              <h2 className="display faq-title">
                ÎNTREBĂRI
                <br />
                ȘI RĂSPUNSURI
              </h2>
              <p className="section-lead faq-lead">
                Nu ai găsit răspunsul? Sună la <a href={links.tel}>{PHONE_LOCAL}</a> — îți spunem pe loc.
              </p>
            </div>
            <div className="faq-list">
              {FAQ.map((f) => (
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
              <div className="eyebrow">Pentru firme</div>
              <h2 className="display business-title">SERVICE-URI, DEALERI, FLOTE</h2>
              <p>
                Contract, factură lunară și un număr direct la dispecer. Mutăm mașinile voastre fără să le
                programați cu o zi înainte.
              </p>
            </div>
            <a href={links.tel} className="business-cta">
              Cere ofertă pentru firmă
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-contact">
              <div className="subdisplay">Non-stop, la orice oră</div>
              <a href={links.tel} className="display footer-phone">
                {PHONE_LOCAL}
              </a>
              <a href={links.telAlt} className="footer-alt">
                Linie alternativă: <strong>{PHONE_ALT_LOCAL}</strong>
              </a>
            </div>
            <div className="footer-social">
              <MessengerButtons />
              <a href={links.facebook} aria-label="Facebook" className="round-btn bg-facebook lift">
                <FacebookIcon />
              </a>
            </div>
          </div>
          <VrejStrip thickness={28} />
          <div className="footer-legal">
            <span>© 2026 Evacuator 4You · Chișinău</span>
            <span>Tractări auto în Chișinău, suburbii și în toată Moldova</span>
          </div>
        </div>
      </footer>

      <div className="call-bar narrow-only">
        <a href={links.tel} className="display call-bar-phone">
          {PHONE_LOCAL}
        </a>
        <a href={links.viber} aria-label="Viber" className="call-bar-icon bg-viber">
          <ViberIcon size={28} />
        </a>
        <a href={links.whatsapp} aria-label="WhatsApp" className="call-bar-icon bg-whatsapp">
          <WhatsAppIcon size={28} />
        </a>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
    </>
  );
}

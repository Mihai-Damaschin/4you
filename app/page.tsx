import Image from "next/image";
import LangSwitch from "@/components/LangSwitch";
import Pom from "@/components/Pom";
import Vrej from "@/components/Vrej";
import VrejStrip from "@/components/VrejStrip";
import { FacebookIcon, ViberIcon, WhatsAppIcon } from "@/components/Icons";
import { PHONE_LOCAL, links } from "@/lib/site";

const NAV = [
  { href: "#servicii", label: "Servicii" },
  { href: "#galerie", label: "Galerie" },
  { href: "#zona", label: "Zonă" },
  { href: "#firme", label: "Pentru firme" },
];

const STEPS = [
  { title: "Unde ești", hint: "Stradă, reper sau locația pe Viber" },
  { title: "Ce mașină ai", hint: "Marca și dacă roțile se mai învârt" },
  { title: "Unde o ducem", hint: "Service, acasă, parcare — oriunde în zonă" },
];

const SERVICES = [
  { title: "ACCIDENT", text: "Luăm mașina după ce s-au terminat actele și o ducem la service sau acasă." },
  { title: "NU PORNEȘTE", text: "Pană, baterie, cutie — o urcăm pe platformă așa cum e." },
  { title: "BLOCATĂ", text: "Noroi, zăpadă, șanț, parcare strâmtă — o scoatem și o mutăm." },
  { title: "LA SERVICE", text: "Transport programat între casă, service și dealer, la ora stabilită." },
];

const GALLERY = [
  { src: "/images/sunset-service.jpg", title: "Spre service, la apus", meta: "Chișinău", pos: "center 55%", tile: "tile-big" },
  { src: "/images/delivered-service.jpg", title: "Livrat la service", meta: "Noaptea", pos: "center 62%", tile: "tile-tall" },
  { src: "/images/platform.jpg", title: "Platforma", meta: "Mercedes Sprinter", pos: "center 60%", tile: "" },
  { src: "/images/jump-start.jpg", title: "Pornire cu cabluri", meta: "Pe loc", pos: "center 50%", tile: "" },
];

const SECTORS = ["Botanica", "Buiucani", "Centru", "Ciocana", "Râșcani"];
const SUBURBS = [
  "Durlești", "Codru", "Sângera", "Stăuceni", "Cricova", "Vatra", "Ghidighici",
  "Trușeni", "Bubuieci", "Budești", "Băcioi", "Grătiești", "Colonița", "Tohatin",
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
              <p className="banner-note">Mașina noastră, cu numărul nostru pe ea. Nu intermediem — venim noi.</p>
            </div>
          </div>
        </section>

        <section id="servicii" className="services" aria-label="Servicii">
          <div className="container">
            <div className="services-grid">
              {SERVICES.map((s) => (
                <div key={s.title} className="service">
                  <h3 className="display">{s.title}</h3>
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

        <section id="zona" className="area">
          <div className="container section-pad area-grid">
            <div className="area-intro">
              <div className="eyebrow">Zona noastră</div>
              <h2 className="display area-title">
                DOAR CHIȘINĂU.
                <br />
                DE ASTA AJUNGEM REPEDE.
              </h2>
              <p className="section-lead area-lead">Nu plecăm în curse lungi prin țară, deci mașina e mereu aproape de tine.</p>
            </div>
            <div className="area-lists">
              <div className="chip-group">
                <div className="chip-label">Toate sectoarele</div>
                <ul className="chips">
                  {SECTORS.map((s) => (
                    <li key={s} className="chip-solid">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="chip-group">
                <div className="chip-label">Suburbii</div>
                <ul className="chips">
                  {SUBURBS.map((s) => (
                    <li key={s} className="chip-outline">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="area-note">Nu ești sigur dacă ajungem? Sună — îți spunem pe loc.</p>
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
            <span>Tractări auto în Chișinău și suburbii</span>
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
    </>
  );
}

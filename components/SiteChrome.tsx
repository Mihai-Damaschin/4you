// Header, footer, call card and mobile call bar shared by the home page and the landing pages.

import LangSwitch from "@/components/LangSwitch";
import Pom from "@/components/Pom";
import VrejStrip from "@/components/VrejStrip";
import { FacebookIcon, ViberIcon, WhatsAppIcon } from "@/components/Icons";
import type { Dictionary } from "@/lib/dictionaries";
import { localePath, type Locale } from "@/lib/i18n";
import { areaLinks, serviceLinks } from "@/lib/landing";
import { PHONE_ALT_LOCAL, PHONE_LOCAL, SITE_NAME, links } from "@/lib/site";

export function MessengerButtons() {
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

export function SiteHeader({ lang, t, slug }: { lang: Locale; t: Dictionary; slug?: string }) {
  const home = localePath(lang);
  // On the home page the anchors scroll in place; elsewhere they lead back to the home page section.
  const at = (id: string) => (slug ? `${home}#${id}` : `#${id}`);
  const nav = [
    { href: at("servicii"), label: t.nav.services },
    { href: at("galerie"), label: t.nav.gallery },
    { href: at("intrebari"), label: t.nav.faq },
    { href: at("firme"), label: t.nav.business },
  ];

  return (
    <>
      <header className="header">
        <div className="container header-inner">
          <a href={slug ? home : "#sus"} className="brand">
            <Pom size={40} stroke={10} palette="Temperată" />
            <span className="display brand-name">
              <span className="accent">4</span>YOU
            </span>
          </a>
          <nav className="nav wide-only" aria-label={t.navLabel}>
            {nav.map((n) => (
              <a key={n.href} href={n.href}>
                {n.label}
              </a>
            ))}
          </nav>
          <div className="header-actions">
            <LangSwitch current={lang} label={t.langLabel} slug={slug} />
            <a href={links.tel} className="brush header-phone wide-only">
              <span className="brush-label display">
                <span style={{ opacity: 0.75 }}>+373</span> 60 551 000
              </span>
            </a>
          </div>
        </div>
      </header>

      <VrejStrip thickness={22} className="narrow-only top-strip" />
    </>
  );
}

export function CallCard({ t }: { t: Dictionary }) {
  return (
    <div className="call-card-wrap">
      <div className="call-card">
        <h2 className="display">{t.call.title}</h2>
        {t.call.steps.map((s, i) => (
          <div key={s.title} className="step">
            <div className="display step-num">{i + 1}</div>
            <div className="step-body">
              <div className="step-title">{s.title}</div>
              <div className="step-hint">{s.hint}</div>
            </div>
          </div>
        ))}
        <div className="price">
          <span>{t.call.priceLabel}</span>
          <span className="display">{t.call.price}</span>
        </div>
      </div>
      <div className="message-panel">
        <div className="message-panel-text">
          <div className="step-title">{t.call.messageTitle}</div>
          <div className="step-hint">{t.call.messageHint}</div>
        </div>
        <div className="message-panel-buttons">
          <MessengerButtons />
        </div>
      </div>
    </div>
  );
}

export function CallButton({ t }: { t: Dictionary }) {
  return (
    <a href={links.tel} className="brush hero-cta">
      <span className="brush-label">
        <span className="hero-cta-kicker">{t.hero.cta}</span>
        <span className="display hero-cta-number">{PHONE_LOCAL}</span>
      </span>
    </a>
  );
}

// Services and suburbs as plain links — the main internal linking between pages.
export function LinkColumns({ lang, t, current }: { lang: Locale; t: Dictionary; current?: string }) {
  const groups = [
    { heading: t.landing.servicesHeading, items: serviceLinks(lang) },
    { heading: t.landing.areasHeading, items: areaLinks(lang) },
  ];
  return (
    <div className="link-columns">
      {groups.map((g) => (
        <div key={g.heading} className="link-group">
          <h3 className="link-group-title">{g.heading}</h3>
          <ul>
            {g.items.map((i) => (
              <li key={i.slug}>
                <a href={localePath(lang, i.slug)} aria-current={i.slug === current ? "page" : undefined}>
                  {i.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export function SiteFooter({ lang, t, current }: { lang: Locale; t: Dictionary; current?: string }) {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-contact">
              <div className="subdisplay">{t.footer.kicker}</div>
              <a href={links.tel} className="display footer-phone">
                {PHONE_LOCAL}
              </a>
              <a href={links.telAlt} className="footer-alt">
                {t.footer.alt} <strong>{PHONE_ALT_LOCAL}</strong>
              </a>
            </div>
            <div className="footer-social">
              <MessengerButtons />
              <a href={links.facebook} aria-label="Facebook" className="round-btn bg-facebook lift">
                <FacebookIcon />
              </a>
            </div>
          </div>
          <nav className="footer-links" aria-label={t.landing.linksTitle}>
            <LinkColumns lang={lang} t={t} current={current} />
          </nav>
          <VrejStrip thickness={28} />
          <div className="footer-legal">
            <span>
              © 2026 {SITE_NAME} · {t.footer.city}
            </span>
            <span>{t.footer.tagline}</span>
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

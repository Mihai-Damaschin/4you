import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { getDictionary } from "@/lib/dictionaries";
import { OG_LOCALE, hasLocale, languageAlternates, localePath } from "@/lib/i18n";
import { PRIVACY, PRIVACY_SLUG } from "@/lib/privacy";
import { SITE_NAME } from "@/lib/site";

async function load(params: PageProps<"/[lang]/politica-de-confidentialitate">["params"]) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return { lang, t: getDictionary(lang), copy: PRIVACY[lang] };
}

export async function generateMetadata({ params }: PageProps<"/[lang]/politica-de-confidentialitate">): Promise<Metadata> {
  const { lang, copy } = await load(params);
  const path = localePath(lang, PRIVACY_SLUG);
  return {
    title: copy.title,
    description: copy.description,
    alternates: { canonical: path, languages: languageAlternates(PRIVACY_SLUG) },
    openGraph: { type: "website", url: path, siteName: SITE_NAME, locale: OG_LOCALE[lang], title: copy.title, description: copy.description },
  };
}

// Web and e-mail addresses in the copy become links (a comma or period right after one stays text).
function linkify(text: string): ReactNode[] {
  return text.split(/(https:\/\/\S*[^\s.,;:)]|[\w.+-]+@[\w-]+\.[\w.-]+\w)/).map((part, i) => {
    if (part.startsWith("https://")) return <a key={i} href={part}>{part.replace("https://", "")}</a>;
    if (part.includes("@")) return <a key={i} href={`mailto:${part}`}>{part}</a>;
    return part;
  });
}

export default async function PrivacyPage({ params }: PageProps<"/[lang]/politica-de-confidentialitate">) {
  const { lang, t, copy } = await load(params);

  return (
    <>
      <SiteHeader lang={lang} t={t} slug={PRIVACY_SLUG} />

      <main>
        <nav className="container crumbs" aria-label={t.landing.breadcrumbLabel}>
          <ol>
            <li>
              <a href={localePath(lang)}>{t.landing.home}</a>
            </li>
            <li aria-current="page">{copy.name}</li>
          </ol>
        </nav>

        <article className="container legal">
          <h1 className="display page-title">{copy.name}</h1>
          <p className="legal-updated">{copy.updated}</p>
          {copy.sections.map((s) => (
            <section key={s.heading}>
              <h2 className="display page-section-title">{s.heading}</h2>
              {s.paragraphs.map((p) => (
                <p key={p}>{linkify(p)}</p>
              ))}
            </section>
          ))}
        </article>
      </main>

      <SiteFooter lang={lang} t={t} />
    </>
  );
}

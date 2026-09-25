import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import { LOCALES, localePath } from "@/lib/i18n";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const archivo = Archivo({ variable: "--font-archivo", subsets: ["latin", "latin-ext"] });

const COPY = {
  ro: "Pagina nu există. Înapoi la prima pagină",
  ru: "Страница не найдена. На главную",
  en: "Page not found. Back to the home page",
};

export const metadata: Metadata = { metadataBase: new URL(SITE_URL), title: "404 — Evacuator 4You" };

export default function GlobalNotFound() {
  return (
    <html lang="ro" className={archivo.variable}>
      <body>
        <main className="container section-pad">
          <h1 className="display">404</h1>
          <ul>
            {LOCALES.map((l) => (
              <li key={l} lang={l}>
                <a href={localePath(l)} className="underline-link">
                  <span>{COPY[l]} →</span>
                </a>
              </li>
            ))}
          </ul>
        </main>
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { Archivo, Barlow_Condensed } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Evacuator 4You — non-stop în Chișinău",
  description:
    "Evacuator non-stop în Chișinău și suburbii. Mașini avariate, în pană sau blocate — le luăm de oriunde și le ducem unde spui tu. Sună: 060 551 000.",
};

export const viewport: Viewport = {
  themeColor: "#0B0B0C",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ro" className={`${archivo.variable} ${barlow.variable}`}>
      <body>{children}</body>
    </html>
  );
}

import type { Locale } from "@/lib/i18n";
import { COMPANY, PHONE_LOCAL, SITE_NAME } from "@/lib/site";

// The privacy policy page. It describes what the site actually loads: the Google tag (Google Ads conversions and
// remarketing, Google Analytics 4) set up in app/[lang]/layout.tsx and lib/tracking.ts. Keep the two in step.
// TODO: have the client (or their lawyer) read it once the company details in lib/site.ts are filled in.

export const PRIVACY_SLUG = "politica-de-confidentialitate";

type PrivacyCopy = {
  name: string;
  title: string;
  description: string;
  updated: string;
  // Plain paragraphs; https:// addresses and e-mail addresses become links.
  sections: { heading: string; paragraphs: string[] }[];
};

const operator = [COMPANY.legalName || SITE_NAME, COMPANY.idno && `IDNO ${COMPANY.idno}`, COMPANY.address]
  .filter(Boolean)
  .join(", ");
const contact = [PHONE_LOCAL, COMPANY.email].filter(Boolean).join(" · ");

export const PRIVACY: Record<Locale, PrivacyCopy> = {
  ro: {
    name: "Politica de confidențialitate",
    title: "Politica de confidențialitate și cookie-uri | Evacuator 4You",
    description:
      "Ce date colectează site-ul Evacuator 4You, ce cookie-uri folosesc Google Ads și Google Analytics și cum le poți refuza.",
    updated: "Ultima actualizare: 29 octombrie 2026",
    sections: [
      {
        heading: "Cine suntem",
        paragraphs: [
          `Site-ul evacuator-4you.md este administrat de ${operator}. Pentru orice întrebare despre datele tale ne găsești la ${contact}.`,
        ],
      },
      {
        heading: "Ce date primim de la tine",
        paragraphs: [
          "Site-ul nu are formulare și nici conturi. Date primim doar când ne suni sau ne scrii pe Viber sau WhatsApp: numărul tău de telefon și ce ne spui despre intervenție (unde ești, ce mașină ai, unde o ducem). Le folosim ca să trimitem evacuatorul și să stabilim prețul.",
        ],
      },
      {
        heading: "Cookie-uri: Google Ads și Google Analytics",
        paragraphs: [
          "Pe toate paginile se încarcă Google tag (gtag.js) de la Google. Prin el folosim:",
          "Google Ads, ca să știm ce reclame aduc apeluri și mesaje: când apeși pe numărul de telefon sau pe butoanele Viber și WhatsApp, se înregistrează o conversie. Tot Google Ads poate folosi vizita ta pentru liste de remarketing, adică pentru a-ți arăta reclamele noastre și pe alte site-uri. Cookie-ul principal este _gcl_au (implicit 90 de zile), iar Google mai poate seta cookie-uri pe domeniile proprii, de exemplu doubleclick.net.",
          "Google Analytics 4, pentru statistici despre vizite: ce pagini se deschid, de pe ce tip de dispozitiv și din ce oraș aproximativ. Cookie-urile sunt _ga și _ga_<ID> (implicit 2 ani).",
          "Google prelucrează aceste date ca furnizor al serviciilor, inclusiv pe servere din afara Republicii Moldova. Detalii: https://policies.google.com/privacy și https://policies.google.com/technologies/partner-sites",
        ],
      },
      {
        heading: "Cum poți refuza",
        paragraphs: [
          "Poți bloca sau șterge cookie-urile din setările browserului; site-ul și butoanele de apel funcționează la fel și fără ele. Reclamele personalizate le poți opri din https://myadcenter.google.com, iar Google Analytics cu extensia de la https://tools.google.com/dlpage/gaoptout",
        ],
      },
      {
        heading: "Drepturile tale",
        paragraphs: [
          "Ne poți cere să-ți spunem ce date avem despre tine, să le corectăm sau să le ștergem și te poți opune prelucrării lor. Dacă nu ești mulțumit de răspuns, te poți adresa Centrului Național pentru Protecția Datelor cu Caracter Personal: https://datepersonale.md",
        ],
      },
      {
        heading: "Modificări",
        paragraphs: ["Când schimbăm ce date colectăm sau ce servicii folosim, actualizăm această pagină și data de mai sus."],
      },
    ],
  },
  ru: {
    name: "Политика конфиденциальности",
    title: "Политика конфиденциальности и cookie | Evacuator 4You",
    description:
      "Какие данные собирает сайт Evacuator 4You, какие cookie используют Google Ads и Google Analytics и как от них отказаться.",
    updated: "Последнее обновление: 29 октября 2026",
    sections: [
      {
        heading: "Кто мы",
        paragraphs: [
          `Сайтом evacuator-4you.md управляет ${operator}. По любым вопросам о ваших данных пишите или звоните: ${contact}.`,
        ],
      },
      {
        heading: "Какие данные мы получаем",
        paragraphs: [
          "На сайте нет форм и учётных записей. Данные мы получаем, только когда вы звоните или пишете нам в Viber или WhatsApp: ваш номер телефона и то, что вы рассказываете о вызове (где вы, какая машина, куда её везти). Мы используем их, чтобы отправить эвакуатор и согласовать цену.",
        ],
      },
      {
        heading: "Cookie: Google Ads и Google Analytics",
        paragraphs: [
          "На всех страницах загружается Google tag (gtag.js) от Google. Через него мы используем:",
          "Google Ads — чтобы знать, какая реклама приносит звонки и сообщения: когда вы нажимаете на номер телефона или на кнопки Viber и WhatsApp, засчитывается конверсия. Google Ads также может использовать ваш визит для списков ремаркетинга, то есть показывать вам нашу рекламу на других сайтах. Основной cookie — _gcl_au (по умолчанию 90 дней), а на своих доменах, например doubleclick.net, Google может ставить и другие.",
          "Google Analytics 4 — для статистики посещений: какие страницы открывают, с каких устройств и примерно из какого города. Cookie — _ga и _ga_<ID> (по умолчанию 2 года).",
          "Google обрабатывает эти данные как поставщик сервисов, в том числе на серверах за пределами Республики Молдова. Подробнее: https://policies.google.com/privacy и https://policies.google.com/technologies/partner-sites",
        ],
      },
      {
        heading: "Как отказаться",
        paragraphs: [
          "Cookie можно заблокировать или удалить в настройках браузера; сайт и кнопки звонка работают и без них. Персонализированную рекламу можно отключить на https://myadcenter.google.com, а Google Analytics — расширением https://tools.google.com/dlpage/gaoptout",
        ],
      },
      {
        heading: "Ваши права",
        paragraphs: [
          "Вы можете попросить нас сообщить, какие данные о вас у нас есть, исправить или удалить их, а также возразить против их обработки. Если наш ответ вас не устроит, можно обратиться в Национальный центр по защите персональных данных: https://datepersonale.md",
        ],
      },
      {
        heading: "Изменения",
        paragraphs: ["Когда мы меняем состав данных или сервисы, мы обновляем эту страницу и дату вверху."],
      },
    ],
  },
  en: {
    name: "Privacy policy",
    title: "Privacy & Cookie Policy | Evacuator 4You",
    description:
      "What data the Evacuator 4You website collects, which cookies Google Ads and Google Analytics use, and how to opt out.",
    updated: "Last updated: 29 October 2026",
    sections: [
      {
        heading: "Who we are",
        paragraphs: [
          `The evacuator-4you.md website is run by ${operator}. For any question about your data, reach us at ${contact}.`,
        ],
      },
      {
        heading: "What data we get from you",
        paragraphs: [
          "The site has no forms and no accounts. We only get data when you call us or write to us on Viber or WhatsApp: your phone number and what you tell us about the job (where you are, what car you have, where it goes). We use it to send the tow truck and agree on the price.",
        ],
      },
      {
        heading: "Cookies: Google Ads and Google Analytics",
        paragraphs: [
          "Every page loads the Google tag (gtag.js) from Google. Through it we use:",
          "Google Ads, to see which ads bring calls and messages: when you tap the phone number or the Viber and WhatsApp buttons, a conversion is recorded. Google Ads may also use your visit for remarketing lists, i.e. to show you our ads on other websites. The main cookie is _gcl_au (90 days by default), and Google may set others on its own domains, such as doubleclick.net.",
          "Google Analytics 4, for visit statistics: which pages are opened, on what kind of device and from roughly which city. The cookies are _ga and _ga_<ID> (2 years by default).",
          "Google processes this data as the service provider, including on servers outside the Republic of Moldova. Details: https://policies.google.com/privacy and https://policies.google.com/technologies/partner-sites",
        ],
      },
      {
        heading: "How to opt out",
        paragraphs: [
          "You can block or delete cookies in your browser settings; the site and the call buttons work the same without them. You can turn off personalised ads at https://myadcenter.google.com and Google Analytics with the add-on at https://tools.google.com/dlpage/gaoptout",
        ],
      },
      {
        heading: "Your rights",
        paragraphs: [
          "You can ask us what data we hold about you, have it corrected or deleted, and object to its processing. If you are not satisfied with our answer, you can contact the National Center for Personal Data Protection of Moldova: https://datepersonale.md",
        ],
      },
      {
        heading: "Changes",
        paragraphs: ["When we change what data we collect or which services we use, we update this page and the date above."],
      },
    ],
  },
};

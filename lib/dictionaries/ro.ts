// Facts come from the client's current site (evacuator24acum.com) and the design copy.
// The FAQ is rendered as visible <details> and as FAQPage JSON-LD — edit only here (and in ru/en).

// Case forms of a town name, so templates read naturally in each language.
export type AreaNames = { name: string; inName: string; fromName: string };

const ro = {
  meta: {
    title: "Evacuator Chișinău non-stop 24/7 — de la 250 lei | 4You",
    ogTitle: "Evacuator Chișinău non-stop 24/7 — 4You",
    description:
      "Evacuator non-stop în Chișinău, suburbii și în toată Moldova. Platformă de 6 m cu troliu, orice mașină în orice stare, de la 250 lei. Sosim în 20–30 min. Sună: 060 551 000.",
  },
  langLabel: "Limba",
  navLabel: "Principal",
  nav: { services: "Servicii", gallery: "Galerie", faq: "Întrebări", business: "Pentru firme" },
  hero: {
    title: "TE-AI OPRIT?",
    accent: "VENIM NOI.",
    sub: "Evacuator non-stop în Chișinău și suburbii",
    lead: "Mașini avariate, în pană sau blocate — le luăm de oriunde din oraș și le ducem unde spui tu, zi sau noapte.",
    cta: "Sună acum",
  },
  call: {
    title: "CE NE SPUI LA TELEFON",
    steps: [
      { title: "Unde ești", hint: "Stradă, reper sau locația pe Viber" },
      { title: "Ce mașină ai", hint: "Marca și dacă roțile se mai învârt" },
      { title: "Unde o ducem", hint: "Service, acasă, parcare — oriunde în zonă" },
    ],
    priceLabel: "Preț",
    price: "de la 250 lei",
    messageTitle: "Nu poți vorbi acum?",
    messageHint: "Scrie-ne sau trimite locația",
  },
  banner: {
    label: "Noaptea pe drum",
    alt: "Evacuatorul 4You noaptea, cu o mașină pe platformă",
    line: "PLOAIE, NOAPTE, SĂRBĂTOARE\u00a0—",
    accent: "NOI TOT VENIM.",
  },
  servicesLabel: "Servicii",
  // Each point leads with its key fact; title is the promise, text is the detail.
  services: [
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
  ] as { prefix?: string; value: string; unit: string; title: string; text: string }[],
  gallery: {
    eyebrow: "Galerie",
    title: "DIN TEREN",
    lead: "Flota noastră și câteva intervenții de zi cu zi.",
    // Same order as the photos in the page.
    items: [
      { title: "Spre service, la apus", meta: "Chișinău" },
      { title: "Livrat la service", meta: "Noaptea" },
      { title: "Platforma", meta: "Mercedes Sprinter" },
      { title: "Pornire cu cabluri", meta: "Pe loc" },
    ],
    more: "Mai multe pe pagina noastră de Facebook.",
    link: "Vezi pe Facebook →",
  },
  faq: {
    eyebrow: "Întrebări frecvente",
    title: "ÎNTREBĂRI",
    title2: "ȘI RĂSPUNSURI",
    leadBefore: "Nu ai găsit răspunsul? Sună la",
    leadAfter: "— îți spunem pe loc.",
    items: [
      {
        q: "Cât costă un evacuator în Chișinău?",
        a: "Tractarea pornește de la 250 lei. Prețul final depinde de distanță și de tipul mașinii — ți-l spunem la telefon, înainte să plecăm, fără costuri ascunse.",
      },
      {
        q: "În cât timp ajunge evacuatorul?",
        a: "În medie în 20–30 de minute în Chișinău și suburbii. Pentru alte localități îți spunem ora estimată de sosire chiar în timpul apelului.",
      },
      {
        q: "Lucrați noaptea, în weekend și de sărbători?",
        a: "Da. Suntem non-stop, 24 de ore din 24, 7 zile din 7 — inclusiv noaptea, în weekend și de sărbători.",
      },
      {
        q: "Ce vehicule puteți transporta?",
        a: "Avem evacuator cu platformă de aproximativ 6 metri și troliu electric. Luăm orice autoturism, în orice stare — avariat, care nu pornește sau cu roțile blocate — precum și motociclete și ATV-uri.",
      },
      {
        q: "Mașina nu pornește. Puteți ajuta pe loc?",
        a: "Da. Venim cu echipament de pornire și încărcăm bateria oriunde te afli. Dacă mașina tot nu pornește, o urcăm pe platformă și o ducem la service sau acasă.",
      },
      {
        q: "Ce se întâmplă după un accident?",
        a: "După ce se termină actele cu poliția sau asiguratorul, încărcăm mașina și o ducem unde ne spui: la service, acasă sau într-o parcare.",
      },
      {
        q: "Mergeți și în afara Chișinăului?",
        a: "Da. Acoperim toate sectoarele Chișinăului și suburbiile (Durlești, Codru, Sângera, Stăuceni, Cricova, Ghidighici, Trușeni, Budești, Băcioi și altele), dar și restul Moldovei. La cerere facem curse și spre România sau Ucraina.",
      },
      {
        q: "Ce trebuie să spun când sun?",
        a: "Trei lucruri: unde ești (stradă, reper sau locația trimisă pe Viber/WhatsApp), ce mașină ai și unde vrei s-o ducem.",
      },
      {
        q: "Este mașina asigurată în timpul transportului?",
        a: "Da, fiecare transport include o asigurare de bază. Pentru mașini de valoare mare sau cerințe speciale, spune-ne la telefon și găsim o opțiune potrivită.",
      },
      {
        q: "Lucrați cu service-uri, dealeri și flote?",
        a: "Da. Oferim contract, factură lunară și un număr direct la dispecer, iar mașinile le mutăm fără programare cu o zi înainte.",
      },
      {
        q: "Cum chem evacuatorul?",
        a: "Sună la 060 551 000 sau pe linia alternativă 060 70 2828. Ne poți scrie și pe Viber sau WhatsApp — trimite locația și venim.",
      },
    ],
  },
  business: {
    eyebrow: "Pentru firme",
    title: "SERVICE-URI, DEALERI, FLOTE",
    text: "Contract, factură lunară și un număr direct la dispecer. Mutăm mașinile voastre fără să le programați cu o zi înainte.",
    cta: "Cere ofertă pentru firmă",
  },
  footer: {
    kicker: "Non-stop, la orice oră",
    alt: "Linie alternativă:",
    city: "Chișinău",
    tagline: "Tractări auto în Chișinău, suburbii și în toată Moldova",
  },
  landing: {
    home: "Acasă",
    breadcrumbLabel: "Navigare",
    areasCrumb: "Zone",
    servicesCrumb: "Servicii",
    linksEyebrow: "Unde și cu ce venim",
    linksTitle: "SERVICII ȘI ZONE",
    linksLead: "Tot Chișinăul, suburbiile și restul Moldovei — alege serviciul sau localitatea.",
    servicesHeading: "Servicii",
    areasHeading: "Suburbii",
    otherAreas: "Alte localități",
    otherServices: "Servicii",
    faqTitle: "ÎNTREBĂRI",
    faqTitle2: "FRECVENTE",
  },
  area: {
    accent: "NON-STOP, 24/7",
    title: (a: AreaNames) => `Evacuator ${a.name} non-stop 24/7 — de la 250 lei | 4You`,
    description: (a: AreaNames) =>
      `Evacuator ${a.inName}, non-stop. Platformă de 6 m cu troliu, orice mașină în orice stare, de la 250 lei. Sosim în medie în 20–30 min. Sună: 060 551 000.`,
    h1: (a: AreaNames) => `EVACUATOR ${a.inName.toUpperCase()}`,
    whatHeading: (a: AreaNames) => `Ce facem ${a.inName}`,
    whatText:
      "Tractăm mașini avariate, care nu pornesc sau cu roțile blocate, pornim motorul cu cabluri pe loc și transportăm motociclete și ATV-uri. Mașina ajunge unde spui tu: la service, acasă sau într-o parcare.",
    priceHeading: "Cât costă și cât durează",
    priceText:
      "De la 250 lei. Prețul final depinde de distanță și de tipul mașinii — îl afli la telefon, înainte să plecăm, fără costuri ascunse. În medie ajungem în 20–30 de minute.",
    noteHeading: "Bine de știut",
    faq: (a: AreaNames) => [
      {
        q: `Cât costă un evacuator ${a.inName}?`,
        a: "Tractarea pornește de la 250 lei. Prețul final depinde de distanță și de tipul mașinii și ți-l spunem la telefon, înainte să plecăm.",
      },
      {
        q: `În cât timp ajunge evacuatorul ${a.inName}?`,
        a: "În medie în 20–30 de minute, ca și în Chișinău. Ora estimată de sosire ți-o spunem chiar în timpul apelului.",
      },
      {
        q: `Puteți duce mașina ${a.fromName} în Chișinău sau în altă localitate?`,
        a: "Da. O ducem la orice service, acasă sau într-o parcare din Chișinău, în altă localitate din Moldova sau, la cerere, spre România ori Ucraina.",
      },
    ],
  },
  schema: {
    description: "Evacuator și tractări auto non-stop în Chișinău, suburbii și în toată Moldova.",
    priceRange: "de la 250 MDL",
    city: "Chișinău",
    country: "Republica Moldova",
    offers: [
      "Tractare auto",
      "Evacuare mașini avariate după accident",
      "Pornire mașină cu cabluri / încărcare baterie",
      "Transport motociclete și ATV-uri",
    ],
  },
};

export type Dictionary = typeof ro;
export default ro;

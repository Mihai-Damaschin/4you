import type { AreaNames, Dictionary } from "./ro";

const en: Dictionary = {
  meta: {
    title: "Tow Truck Chișinău 24/7 — from 250 MDL | 4You",
    ogTitle: "24/7 Tow Truck in Chișinău — 4You",
    description:
      "24/7 towing in Chișinău, the suburbs and all of Moldova. 6 m flatbed with winch, any car in any condition, from 250 MDL. We arrive in 20–30 min. Call: +373 60 551 000.",
  },
  langLabel: "Language",
  navLabel: "Main",
  nav: { services: "Services", gallery: "Gallery", faq: "FAQ", business: "For business" },
  hero: {
    title: "BROKEN DOWN?",
    accent: "WE'RE COMING.",
    sub: "24/7 tow truck in Chișinău and the suburbs",
    lead: "Damaged, broken down or with locked wheels — we pick your car up anywhere in the city and take it wherever you say, day or night.",
    cta: "Call now",
  },
  call: {
    title: "WHAT TO TELL US ON THE PHONE",
    steps: [
      { title: "Where you are", hint: "Street, landmark or your location on Viber" },
      { title: "What car you have", hint: "The make, and whether the wheels still turn" },
      { title: "Where to take it", hint: "Garage, home, parking — anywhere in the area" },
    ],
    priceLabel: "Price",
    price: "from 250 MDL",
    messageTitle: "Can't talk right now?",
    messageHint: "Text us or send your location",
  },
  banner: {
    label: "On the road at night",
    alt: "The 4You tow truck at night with a car on the flatbed",
    line: "RAIN, NIGHT, HOLIDAYS\u00a0—",
    accent: "WE STILL COME.",
  },
  servicesLabel: "Services",
  services: [
    {
      value: "20–30",
      unit: "min",
      title: "24/7 emergency service",
      text: "Average arrival time in Chișinău. Non-stop, including nights and holidays.",
    },
    {
      value: "Any",
      unit: "state",
      title: "All vehicle types",
      text: "Damaged, locked or won't start. Plus motorcycles and ATVs.",
    },
    {
      value: "6",
      unit: "m",
      title: "Professional equipment",
      text: "Flatbed with an electric winch. We can also jump-start your battery on the spot.",
    },
    {
      prefix: "from",
      value: "250",
      unit: "MDL",
      title: "Licensed operators",
      text: "Price confirmed on the phone, no hidden fees. Insurance included.",
    },
  ],
  gallery: {
    eyebrow: "Gallery",
    title: "IN THE FIELD",
    lead: "Our fleet and a few everyday jobs.",
    items: [
      { title: "To the garage at sunset", meta: "Chișinău" },
      { title: "Delivered to the garage", meta: "At night" },
      { title: "The flatbed", meta: "Mercedes Sprinter" },
      { title: "Jump-start", meta: "On the spot" },
    ],
    more: "More on our Facebook page.",
    link: "See on Facebook →",
  },
  faq: {
    eyebrow: "Frequently asked questions",
    title: "QUESTIONS",
    title2: "AND ANSWERS",
    leadBefore: "Didn't find your answer? Call",
    leadAfter: "— we'll tell you right away.",
    items: [
      {
        q: "How much does a tow truck cost in Chișinău?",
        a: "Towing starts at 250 MDL. The final price depends on the distance and the type of car — we tell you on the phone before we leave, with no hidden fees.",
      },
      {
        q: "How fast will the tow truck arrive?",
        a: "On average within 20–30 minutes in Chișinău and the suburbs. For other towns we give you an estimated arrival time during the call.",
      },
      {
        q: "Do you work at night, on weekends and holidays?",
        a: "Yes. We're open non-stop, 24 hours a day, 7 days a week — including nights, weekends and holidays.",
      },
      {
        q: "What vehicles can you transport?",
        a: "Our tow truck has a flatbed of about 6 metres and an electric winch. We take any passenger car in any condition — damaged, not starting or with locked wheels — as well as motorcycles and ATVs.",
      },
      {
        q: "My car won't start. Can you help on the spot?",
        a: "Yes. We come with jump-start equipment and charge the battery wherever you are. If the car still won't start, we load it onto the flatbed and take it to a garage or home.",
      },
      {
        q: "What happens after an accident?",
        a: "Once the paperwork with the police or the insurer is done, we load the car and take it wherever you tell us: to a garage, home or a car park.",
      },
      {
        q: "Do you go outside Chișinău?",
        a: "Yes. We cover every district of Chișinău and the suburbs (Durlești, Codru, Sângera, Stăuceni, Cricova, Ghidighici, Trușeni, Budești, Băcioi and more), as well as the rest of Moldova. On request we also drive to Romania or Ukraine.",
      },
      {
        q: "What should I say when I call?",
        a: "Three things: where you are (street, landmark or location sent on Viber/WhatsApp), what car you have and where you want it taken.",
      },
      {
        q: "Is my car insured during transport?",
        a: "Yes, every transport includes basic insurance. For high-value cars or special requirements, tell us on the phone and we'll find a suitable option.",
      },
      {
        q: "Do you work with garages, dealers and fleets?",
        a: "Yes. We offer a contract, monthly invoicing and a direct line to the dispatcher, and we move your cars without booking a day in advance.",
      },
      {
        q: "How do I call the tow truck?",
        a: "Call +373 60 551 000 or the alternative line +373 60 70 2828. You can also message us on Viber or WhatsApp — send your location and we'll come.",
      },
    ],
  },
  business: {
    eyebrow: "For business",
    title: "GARAGES, DEALERS, FLEETS",
    text: "A contract, monthly invoicing and a direct line to the dispatcher. We move your cars without booking a day in advance.",
    cta: "Request a business quote",
  },
  footer: {
    kicker: "Non-stop, any time",
    alt: "Alternative line:",
    city: "Chișinău",
    tagline: "Car towing in Chișinău, the suburbs and all of Moldova",
  },
  landing: {
    home: "Home",
    breadcrumbLabel: "Breadcrumb",
    areasCrumb: "Areas",
    servicesCrumb: "Services",
    linksEyebrow: "Where and how we help",
    linksTitle: "SERVICES AND AREAS",
    linksLead: "All of Chișinău, the suburbs and the rest of Moldova — pick a service or a town.",
    servicesHeading: "Services",
    areasHeading: "Suburbs",
    otherAreas: "Other towns",
    otherServices: "Services",
    faqTitle: "COMMON",
    faqTitle2: "QUESTIONS",
  },
  area: {
    accent: "24/7, NON-STOP",
    title: (a: AreaNames) => `Tow Truck ${a.name} 24/7 — from 250 MDL | 4You`,
    description: (a: AreaNames) =>
      `24/7 tow truck ${a.inName}. 6 m flatbed with winch, any car in any condition, from 250 MDL. We arrive in 20–30 min on average. Call: +373 60 551 000.`,
    h1: (a: AreaNames) => `TOW TRUCK ${a.inName.toUpperCase()}`,
    whatHeading: (a: AreaNames) => `What we do ${a.inName}`,
    whatText:
      "We tow damaged cars, cars that won't start or have locked wheels, jump-start on the spot and transport motorcycles and ATVs. Your car goes wherever you say: a garage, home or a car park.",
    priceHeading: "Price and arrival time",
    priceText:
      "From 250 MDL. The final price depends on the distance and the type of car — you get it on the phone before we leave, with no hidden fees. On average we arrive in 20–30 minutes.",
    noteHeading: "Good to know",
    faq: (a: AreaNames) => [
      {
        q: `How much does a tow truck ${a.inName} cost?`,
        a: "Towing starts at 250 MDL. The final price depends on the distance and the type of car, and we tell you on the phone before we leave.",
      },
      {
        q: `How fast will the tow truck arrive ${a.inName}?`,
        a: "On average within 20–30 minutes, same as in Chișinău. We give you an estimated arrival time during the call.",
      },
      {
        q: `Can you take my car ${a.fromName} to Chișinău or another town?`,
        a: "Yes. We take it to any garage, home or car park in Chișinău, to another town in Moldova or, on request, to Romania or Ukraine.",
      },
    ],
  },
  schema: {
    description: "24/7 tow truck and car transport in Chișinău, the suburbs and all of Moldova.",
    priceRange: "from 250 MDL",
    city: "Chișinău",
    country: "Republic of Moldova",
    offers: [
      "Car towing",
      "Recovery of damaged cars after an accident",
      "Jump-start / battery charging",
      "Motorcycle and ATV transport",
    ],
  },
};

export default en;

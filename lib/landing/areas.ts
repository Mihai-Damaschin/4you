import type { AreaNames } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";

// Suburbs of Chișinău we have a page for. `about` and `note` are the only per-town copy,
// so keep them specific to the place — the rest of the page comes from the `area` template in the dictionaries.
// Geography is deliberately coarse (direction, well-known landmarks); the client should confirm before adding more.

type AreaCopy = AreaNames & { about: string; note: string };

export type Area = {
  slug: string;
  // Index into GALLERY on the home page; picks the photo shown on the page.
  photo: number;
  copy: Record<Locale, AreaCopy>;
};

export const AREAS: Area[] = [
  {
    slug: "evacuator-durlesti",
    photo: 0,
    copy: {
      ro: {
        name: "Durlești",
        inName: "în Durlești",
        fromName: "din Durlești",
        about:
          "Durlești e lipit de sectorul Buiucani, în vestul Chișinăului — pentru noi e practic oraș. Venim la orice oră, pe străzile principale sau în sectorul privat.",
        note: "Pe străzile înguste din sectorul privat nu e nevoie să împingi mașina până la drum: platforma cu troliu electric o trage și dacă roțile sunt blocate.",
      },
      ru: {
        name: "Дурлешты",
        inName: "в Дурлештах",
        fromName: "из Дурлешт",
        about:
          "Дурлешты примыкают к сектору Буюканы на западе Кишинёва — для нас это практически город. Приезжаем в любое время, на главные улицы или в частный сектор.",
        note: "На узких улицах частного сектора не нужно выталкивать машину к дороге: платформа с электролебёдкой затянет её, даже если колёса заблокированы.",
      },
      en: {
        name: "Durlești",
        inName: "in Durlești",
        fromName: "from Durlești",
        about:
          "Durlești borders the Buiucani district on the west side of Chișinău — for us it is practically the city. We come at any hour, to the main streets or the residential lanes.",
        note: "On the narrow residential streets you don't need to push the car out to the road: the flatbed's electric winch pulls it up even with locked wheels.",
      },
    },
  },
  {
    slug: "evacuator-codru",
    photo: 1,
    copy: {
      ro: {
        name: "Codru",
        inName: "în Codru",
        fromName: "din Codru",
        about:
          "Codru e în sud-vestul Chișinăului, imediat după ieșirea din oraș. Luăm mașini din cartierele de blocuri, din sectorul privat și de pe drumurile din jur.",
        note: "Dacă mașina nu pornește dimineața, încercăm întâi să o pornim cu cabluri pe loc — de multe ori nu mai e nevoie de tractare.",
      },
      ru: {
        name: "Кодру",
        inName: "в Кодру",
        fromName: "из Кодру",
        about:
          "Кодру находится на юго-западе Кишинёва, сразу за выездом из города. Забираем машины из многоэтажек, частного сектора и с окрестных дорог.",
        note: "Если машина не заводится утром, сначала пробуем прикурить на месте — часто эвакуация уже не нужна.",
      },
      en: {
        name: "Codru",
        inName: "in Codru",
        fromName: "from Codru",
        about:
          "Codru sits on the south-west edge of Chișinău, right where the city ends. We pick up cars from the apartment blocks, the residential streets and the roads around them.",
        note: "If the car won't start in the morning, we first try a jump-start on the spot — often you don't need a tow at all.",
      },
    },
  },
  {
    slug: "evacuator-sangera",
    photo: 2,
    copy: {
      ro: {
        name: "Sângera",
        inName: "în Sângera",
        fromName: "din Sângera",
        about:
          "Sângera, împreună cu Revaca și Dobrogea, e în sudul municipiului Chișinău. Venim în oraș, în sate și pe drumurile de la ieșirea spre sud.",
        note: "Ai rămas pe drum între localități și nu știi adresa? Trimite locația pe Viber sau WhatsApp — găsim mașina după pin.",
      },
      ru: {
        name: "Сынжера",
        inName: "в Сынжере",
        fromName: "из Сынжеры",
        about:
          "Сынжера вместе с Ревакой и Доброджей находится на юге муниципия Кишинёв. Приезжаем в город, в сёла и на дороги на выезде в южном направлении.",
        note: "Встали на трассе между населёнными пунктами и не знаете адреса? Отправьте локацию в Viber или WhatsApp — найдём машину по метке.",
      },
      en: {
        name: "Sângera",
        inName: "in Sângera",
        fromName: "from Sângera",
        about:
          "Sângera, together with Revaca and Dobrogea, lies in the south of the Chișinău municipality. We come to the town, the villages and the roads heading south.",
        note: "Stuck on the road between towns and don't know the address? Send your location on Viber or WhatsApp — we find the car by the pin.",
      },
    },
  },
  {
    slug: "evacuator-stauceni",
    photo: 3,
    copy: {
      ro: {
        name: "Stăuceni",
        inName: "în Stăuceni",
        fromName: "din Stăuceni",
        about:
          "Stăuceni și Goianul Nou sunt în nordul municipiului Chișinău, la câteva minute de oraș. Venim zi și noapte, inclusiv în weekend și de sărbători.",
        note: "Bateria descărcată e cea mai frecventă problemă iarna. Venim cu echipament de pornire, iar dacă nu ajută, ducem mașina la service.",
      },
      ru: {
        name: "Ставчены",
        inName: "в Ставченах",
        fromName: "из Ставчен",
        about:
          "Ставчены и Гоянул Ноу находятся на севере муниципия Кишинёв, в нескольких минутах от города. Приезжаем днём и ночью, в том числе в выходные и праздники.",
        note: "Зимой чаще всего садится аккумулятор. Приезжаем с пусковым устройством, а если не поможет — отвезём машину в сервис.",
      },
      en: {
        name: "Stăuceni",
        inName: "in Stăuceni",
        fromName: "from Stăuceni",
        about:
          "Stăuceni and Goianul Nou lie in the north of the Chișinău municipality, a few minutes from the city. We come day and night, including weekends and holidays.",
        note: "A flat battery is the most common problem in winter. We bring jump-start equipment, and if that doesn't help, we take the car to a garage.",
      },
    },
  },
  {
    slug: "evacuator-cricova",
    photo: 0,
    copy: {
      ro: {
        name: "Cricova",
        inName: "în Cricova",
        fromName: "din Cricova",
        about:
          "Cricova e în nordul municipiului Chișinău, cunoscută pentru beciurile de vin. Venim în oraș și pe drumurile dintre Cricova și Chișinău.",
        note: "Dacă ai venit cu o mașină închiriată sau nu cunoști zona, trimite locația pe Viber sau WhatsApp — nu ai nevoie de o adresă exactă.",
      },
      ru: {
        name: "Криково",
        inName: "в Криково",
        fromName: "из Криково",
        about:
          "Криково находится на севере муниципия Кишинёв и известно своими винными подвалами. Приезжаем в город и на дороги между Криково и Кишинёвом.",
        note: "Если вы на арендованной машине или не знаете местность, отправьте локацию в Viber или WhatsApp — точный адрес не нужен.",
      },
      en: {
        name: "Cricova",
        inName: "in Cricova",
        fromName: "from Cricova",
        about:
          "Cricova, in the north of the Chișinău municipality, is known for its wine cellars. We come to the town and the roads between Cricova and Chișinău.",
        note: "If you're in a rental car or don't know the area, send your location on Viber or WhatsApp — you don't need an exact address.",
      },
    },
  },
  {
    slug: "evacuator-ghidighici",
    photo: 1,
    copy: {
      ro: {
        name: "Ghidighici",
        inName: "în Ghidighici",
        fromName: "din Ghidighici",
        about:
          "Ghidighici e în nord-vestul Chișinăului, lângă lacul de acumulare cu același nume, unde vara vine multă lume la odihnă.",
        note: "Luăm mașini și de pe drumurile de lângă lac sau din zonele de odihnă — trimite locația dacă nu ai o adresă.",
      },
      ru: {
        name: "Гидигич",
        inName: "в Гидигиче",
        fromName: "из Гидигича",
        about:
          "Гидигич находится на северо-западе Кишинёва, рядом с одноимённым водохранилищем, куда летом многие приезжают отдыхать.",
        note: "Забираем машины и с дорог у водохранилища, и из зон отдыха — отправьте локацию, если нет адреса.",
      },
      en: {
        name: "Ghidighici",
        inName: "in Ghidighici",
        fromName: "from Ghidighici",
        about:
          "Ghidighici lies north-west of Chișinău, next to the reservoir of the same name, where many people go to relax in summer.",
        note: "We also pick up cars from the roads by the lake and the leisure areas — send your location if there's no address.",
      },
    },
  },
  {
    slug: "evacuator-truseni",
    photo: 2,
    copy: {
      ro: {
        name: "Trușeni",
        inName: "în Trușeni",
        fromName: "din Trușeni",
        about:
          "Trușeni e în vestul municipiului Chișinău. Venim în sat, pe drumurile de legătură cu orașul și pe străzile din sectorul privat.",
        note: "Mașina nu mai merge după o groapă sau o bordură? Nu o forța — o urcăm pe platformă cu troliul și o ducem direct la service.",
      },
      ru: {
        name: "Трушены",
        inName: "в Трушенах",
        fromName: "из Трушен",
        about:
          "Трушены находятся на западе муниципия Кишинёв. Приезжаем в село, на дороги, ведущие в город, и на улицы частного сектора.",
        note: "Машина не едет после ямы или бордюра? Не пытайтесь ехать дальше — затянем её лебёдкой на платформу и отвезём прямо в сервис.",
      },
      en: {
        name: "Trușeni",
        inName: "in Trușeni",
        fromName: "from Trușeni",
        about:
          "Trușeni is in the west of the Chișinău municipality. We come to the village, the roads linking it to the city and the residential streets.",
        note: "Car won't drive after a pothole or a kerb? Don't force it — we winch it onto the flatbed and take it straight to a garage.",
      },
    },
  },
  {
    slug: "evacuator-budesti",
    photo: 3,
    copy: {
      ro: {
        name: "Budești",
        inName: "în Budești",
        fromName: "din Budești",
        about:
          "Budești e în estul municipiului Chișinău. Venim în sat și pe drumurile din jur, zi și noapte, inclusiv în weekend.",
        note: "Pentru mașini de valoare mare sau cu cerințe speciale la transport, spune-ne la telefon și găsim o soluție potrivită.",
      },
      ru: {
        name: "Будешты",
        inName: "в Будештах",
        fromName: "из Будешт",
        about:
          "Будешты находятся на востоке муниципия Кишинёв. Приезжаем в село и на окрестные дороги днём и ночью, в том числе в выходные.",
        note: "Для дорогих автомобилей или особых условий перевозки скажите по телефону — подберём подходящий вариант.",
      },
      en: {
        name: "Budești",
        inName: "in Budești",
        fromName: "from Budești",
        about:
          "Budești is in the east of the Chișinău municipality. We come to the village and the surrounding roads, day and night, including weekends.",
        note: "For high-value cars or special transport requirements, tell us on the phone and we'll find a suitable option.",
      },
    },
  },
  {
    slug: "evacuator-bacioi",
    photo: 0,
    copy: {
      ro: {
        name: "Băcioi",
        inName: "în Băcioi",
        fromName: "din Băcioi",
        about:
          "Băcioi e în sudul municipiului Chișinău. Venim în sat, în localitățile din jur și pe drumurile spre oraș.",
        note: "După un accident, așteptăm să se termine actele cu poliția sau asiguratorul, apoi încărcăm mașina și o ducem unde ne spui.",
      },
      ru: {
        name: "Бачой",
        inName: "в Бачое",
        fromName: "из Бачоя",
        about:
          "Бачой находится на юге муниципия Кишинёв. Приезжаем в село, в соседние населённые пункты и на дороги в сторону города.",
        note: "После ДТП дожидаемся окончания оформления с полицией или страховой, затем грузим машину и везём, куда скажете.",
      },
      en: {
        name: "Băcioi",
        inName: "in Băcioi",
        fromName: "from Băcioi",
        about:
          "Băcioi is in the south of the Chișinău municipality. We come to the village, the nearby settlements and the roads towards the city.",
        note: "After an accident, we wait until the paperwork with the police or the insurer is done, then load the car and take it where you say.",
      },
    },
  },
];

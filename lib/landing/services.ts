import type { Locale } from "@/lib/i18n";

// One page per service. Facts must stay in line with the home page (price, arrival time, equipment).

type ServiceCopy = {
  name: string;
  title: string;
  description: string;
  h1: string;
  accent: string;
  lead: string;
  sections: { heading: string; text: string }[];
  faq: { q: string; a: string }[];
};

export type Service = {
  slug: string;
  // Index into GALLERY on the home page; picks the photo shown on the page.
  photo: number;
  copy: Record<Locale, ServiceCopy>;
};

export const SERVICES: Service[] = [
  {
    slug: "tractare-auto",
    photo: 2,
    copy: {
      ro: {
        name: "Tractare auto",
        title: "Tractare auto Chișinău non-stop — de la 250 lei | 4You",
        description:
          "Tractare auto în Chișinău, suburbii și în toată Moldova, 24/7. Platformă de 6 m cu troliu electric, orice mașină în orice stare. De la 250 lei. Sună: 060 551 000.",
        h1: "TRACTARE AUTO",
        accent: "ORICE MAȘINĂ, ORICE STARE",
        lead: "Mașina nu mai merge, are roțile blocate sau nu vrei să riști pe drum? O urcăm pe platformă și o ducem unde spui tu — la service, acasă sau într-o parcare.",
        sections: [
          {
            heading: "Platformă, nu cârlig",
            text: "Transportăm mașina pe o platformă de aproximativ 6 metri, pe un Mercedes Sprinter. Roțile nu ating asfaltul, deci cutia de viteze și transmisia nu se uzează, indiferent dacă mașina e cu tracțiune față, spate sau integrală.",
          },
          {
            heading: "Și când roțile nu se învârt",
            text: "Troliul electric trage pe platformă mașini cu roțile blocate, fără baterie sau care nu pot fi puse în neutru. Nu e nevoie să o împingi până la drum.",
          },
          {
            heading: "Preț clar înainte de plecare",
            text: "Tractarea pornește de la 250 lei. Prețul final depinde de distanță și de tipul mașinii și îl afli la telefon, înainte să plecăm. Fiecare transport include o asigurare de bază.",
          },
        ],
        faq: [
          {
            q: "Ce mașini puteți tracta?",
            a: "Orice autoturism, în orice stare — avariat, care nu pornește sau cu roțile blocate — precum și motociclete și ATV-uri.",
          },
          {
            q: "Cât costă tractarea?",
            a: "De la 250 lei. Prețul final depinde de distanță și de tipul mașinii și ți-l spunem la telefon, înainte să plecăm.",
          },
          {
            q: "Unde puteți duce mașina?",
            a: "La orice service, acasă, într-o parcare sau în altă localitate din Moldova. La cerere facem curse și spre România sau Ucraina.",
          },
        ],
      },
      ru: {
        name: "Эвакуация автомобилей",
        title: "Эвакуация автомобилей Кишинёв 24/7 — от 250 лей | 4You",
        description:
          "Эвакуация автомобилей в Кишинёве, пригородах и по всей Молдове, круглосуточно. Платформа 6 м с электролебёдкой, любая машина в любом состоянии. От 250 лей. Звоните: 060 551 000.",
        h1: "ЭВАКУАЦИЯ АВТО",
        accent: "ЛЮБАЯ МАШИНА, ЛЮБОЕ СОСТОЯНИЕ",
        lead: "Машина не едет, колёса заблокированы или не хотите рисковать в дороге? Погрузим её на платформу и отвезём, куда скажете — в сервис, домой или на парковку.",
        sections: [
          {
            heading: "Платформа, а не крюк",
            text: "Перевозим машину на платформе длиной около 6 метров на базе Mercedes Sprinter. Колёса не касаются асфальта, поэтому коробка передач и трансмиссия не изнашиваются — будь то передний, задний или полный привод.",
          },
          {
            heading: "Даже если колёса не крутятся",
            text: "Электролебёдка затягивает на платформу машины с заблокированными колёсами, без аккумулятора или без возможности включить нейтраль. Толкать машину к дороге не нужно.",
          },
          {
            heading: "Понятная цена до выезда",
            text: "Эвакуация — от 250 лей. Итоговая цена зависит от расстояния и типа машины, и вы узнаёте её по телефону до выезда. Каждая перевозка включает базовую страховку.",
          },
        ],
        faq: [
          {
            q: "Какие машины вы эвакуируете?",
            a: "Любой легковой автомобиль в любом состоянии — битый, не заводится или с заблокированными колёсами, — а также мотоциклы и квадроциклы.",
          },
          {
            q: "Сколько стоит эвакуация?",
            a: "От 250 лей. Итоговая цена зависит от расстояния и типа машины, мы назовём её по телефону до выезда.",
          },
          {
            q: "Куда вы можете отвезти машину?",
            a: "В любой сервис, домой, на парковку или в другой населённый пункт Молдовы. По запросу выполняем рейсы в Румынию и Украину.",
          },
        ],
      },
      en: {
        name: "Car towing",
        title: "Car Towing Chișinău 24/7 — from 250 MDL | 4You",
        description:
          "Car towing in Chișinău, the suburbs and all of Moldova, 24/7. 6 m flatbed with electric winch, any car in any condition. From 250 MDL. Call: +373 60 551 000.",
        h1: "CAR TOWING",
        accent: "ANY CAR, ANY CONDITION",
        lead: "The car won't drive, the wheels are locked or you'd rather not risk the road? We load it onto the flatbed and take it wherever you say — a garage, home or a car park.",
        sections: [
          {
            heading: "A flatbed, not a hook",
            text: "Your car rides on a flatbed of about 6 metres on a Mercedes Sprinter. The wheels never touch the road, so the gearbox and drivetrain aren't strained — front, rear or all-wheel drive.",
          },
          {
            heading: "Even when the wheels won't turn",
            text: "The electric winch pulls cars with locked wheels, a dead battery or no way to shift into neutral onto the flatbed. You don't have to push it to the road.",
          },
          {
            heading: "A clear price before we leave",
            text: "Towing starts at 250 MDL. The final price depends on the distance and the type of car, and you get it on the phone before we leave. Every transport includes basic insurance.",
          },
        ],
        faq: [
          {
            q: "What cars can you tow?",
            a: "Any passenger car in any condition — damaged, not starting or with locked wheels — as well as motorcycles and ATVs.",
          },
          {
            q: "How much does towing cost?",
            a: "From 250 MDL. The final price depends on the distance and the type of car, and we tell you on the phone before we leave.",
          },
          {
            q: "Where can you take the car?",
            a: "To any garage, home, a car park or another town in Moldova. On request we also drive to Romania or Ukraine.",
          },
        ],
      },
    },
  },
  {
    slug: "evacuare-auto-accident",
    photo: 1,
    copy: {
      ro: {
        name: "Evacuare după accident",
        title: "Evacuare auto după accident Chișinău 24/7 | 4You",
        description:
          "Evacuator pentru mașini avariate după accident, în Chișinău și în toată Moldova, non-stop. Încărcăm și mașini cu roțile blocate. De la 250 lei. Sună: 060 551 000.",
        h1: "DUPĂ ACCIDENT",
        accent: "LUĂM MAȘINA DE ACOLO",
        lead: "Ai avut un accident și mașina nu mai poate merge? După ce termini actele cu poliția sau asiguratorul, o încărcăm și o ducem unde ne spui.",
        sections: [
          {
            heading: "Mașini avariate, roți blocate",
            text: "După un impact, roțile sunt adesea blocate sau direcția e strâmbă. Troliul electric trage mașina pe platformă fără să fie nevoie să ruleze, iar pe platformă ea stă fixată până la destinație.",
          },
          {
            heading: "Unde o ducem",
            text: "La service-ul ales de tine, la cel indicat de asigurator, acasă sau într-o parcare. Dacă nu știi încă unde, spune-ne și o putem duce mai întâi acasă.",
          },
          {
            heading: "Non-stop, oriunde",
            text: "Accidentele nu se întâmplă doar în orele de program. Venim zi și noapte, în weekend și de sărbători, în Chișinău, suburbii și în restul Moldovei.",
          },
        ],
        faq: [
          {
            q: "Când poate fi mutată mașina după accident?",
            a: "După ce se termină actele cu poliția sau asiguratorul. Poți suna dinainte — pornim spre tine, ca să nu aștepți după ce se încheie formalitățile.",
          },
          {
            q: "Puteți lua o mașină care nu mai are roțile drepte?",
            a: "Da. Cu troliul electric o tragem pe platformă chiar dacă roțile sunt blocate sau direcția e avariată.",
          },
          {
            q: "Mașina este asigurată în timpul transportului?",
            a: "Da, fiecare transport include o asigurare de bază. Pentru mașini de valoare mare spune-ne la telefon și găsim o opțiune potrivită.",
          },
        ],
      },
      ru: {
        name: "Эвакуация после ДТП",
        title: "Эвакуатор после ДТП Кишинёв 24/7 | 4You",
        description:
          "Эвакуатор для битых машин после ДТП в Кишинёве и по всей Молдове, круглосуточно. Грузим даже машины с заблокированными колёсами. От 250 лей. Звоните: 060 551 000.",
        h1: "ПОСЛЕ ДТП",
        accent: "ЗАБЕРЁМ МАШИНУ",
        lead: "Попали в аварию и машина не может ехать? Когда оформление с полицией или страховой закончено, мы погрузим её и отвезём, куда скажете.",
        sections: [
          {
            heading: "Битые машины, заблокированные колёса",
            text: "После удара колёса часто заблокированы или повреждено рулевое. Электролебёдка затягивает машину на платформу без качения, и она надёжно закреплена до места назначения.",
          },
          {
            heading: "Куда отвезём",
            text: "В выбранный вами сервис, в сервис страховой компании, домой или на парковку. Если ещё не решили — можем сначала отвезти машину домой.",
          },
          {
            heading: "Круглосуточно и везде",
            text: "Аварии случаются не только в рабочее время. Приезжаем днём и ночью, в выходные и праздники — по Кишинёву, пригородам и всей Молдове.",
          },
        ],
        faq: [
          {
            q: "Когда можно увезти машину после ДТП?",
            a: "После окончания оформления с полицией или страховой. Можно позвонить заранее — мы выедем, чтобы вам не ждать после формальностей.",
          },
          {
            q: "Возьмёте машину, у которой повреждены колёса?",
            a: "Да. Электролебёдкой затянем её на платформу, даже если колёса заблокированы или повреждено рулевое.",
          },
          {
            q: "Машина застрахована во время перевозки?",
            a: "Да, каждая перевозка включает базовую страховку. Для дорогих автомобилей скажите по телефону — подберём подходящий вариант.",
          },
        ],
      },
      en: {
        name: "Accident recovery",
        title: "Accident Recovery & Towing Chișinău 24/7 | 4You",
        description:
          "Tow truck for cars damaged in an accident, in Chișinău and all of Moldova, 24/7. We load cars even with locked wheels. From 250 MDL. Call: +373 60 551 000.",
        h1: "AFTER AN ACCIDENT",
        accent: "WE TAKE THE CAR AWAY",
        lead: "Had an accident and the car can't be driven? Once the paperwork with the police or the insurer is done, we load it and take it wherever you tell us.",
        sections: [
          {
            heading: "Damaged cars, locked wheels",
            text: "After an impact the wheels are often locked or the steering is bent. The electric winch pulls the car onto the flatbed without it having to roll, and it stays secured until it arrives.",
          },
          {
            heading: "Where we take it",
            text: "To the garage you choose, the one your insurer names, home or a car park. If you don't know yet, we can take it home first.",
          },
          {
            heading: "Non-stop, anywhere",
            text: "Accidents don't keep office hours. We come day and night, on weekends and holidays, in Chișinău, the suburbs and the rest of Moldova.",
          },
        ],
        faq: [
          {
            q: "When can the car be moved after an accident?",
            a: "Once the paperwork with the police or the insurer is done. You can call ahead — we'll set off so you don't wait after the formalities are over.",
          },
          {
            q: "Can you take a car whose wheels are damaged?",
            a: "Yes. With the electric winch we pull it onto the flatbed even if the wheels are locked or the steering is damaged.",
          },
          {
            q: "Is the car insured during transport?",
            a: "Yes, every transport includes basic insurance. For high-value cars tell us on the phone and we'll find a suitable option.",
          },
        ],
      },
    },
  },
  {
    slug: "pornire-auto-baterie",
    photo: 3,
    copy: {
      ro: {
        name: "Pornire auto / baterie",
        title: "Pornire auto cu cabluri Chișinău 24/7 — baterie descărcată | 4You",
        description:
          "Baterie descărcată? Venim cu echipament de pornire oriunde în Chișinău și suburbii, non-stop, în 20–30 min în medie. Dacă nu pornește, o tractăm. Sună: 060 551 000.",
        h1: "MAȘINA NU PORNEȘTE?",
        accent: "O PORNIM PE LOC",
        lead: "Bateria s-a descărcat peste noapte sau pe frig? Venim cu echipament de pornire și încărcăm bateria oriunde te afli — acasă, la birou sau pe drum.",
        sections: [
          {
            heading: "Pornire pe loc",
            text: "În cele mai multe cazuri mașina pornește din prima și poți pleca singur mai departe, fără tractare.",
          },
          {
            heading: "Dacă tot nu pornește",
            text: "Problema poate fi la demaror, alternator sau altceva. Atunci urcăm mașina pe platformă și o ducem la service sau acasă — cu același evacuator, fără să mai chemi pe altcineva.",
          },
          {
            heading: "Iarna, noaptea, de sărbători",
            text: "Bateriile cedează cel mai des la frig, dimineața devreme. Suntem non-stop, 24 de ore din 24, inclusiv în weekend și de sărbători.",
          },
        ],
        faq: [
          {
            q: "Cât durează până ajungeți?",
            a: "În medie 20–30 de minute în Chișinău și suburbii. Pentru alte localități îți spunem ora estimată în timpul apelului.",
          },
          {
            q: "Ce se întâmplă dacă mașina nu pornește nici cu cabluri?",
            a: "O urcăm pe platformă și o ducem la service sau acasă. Prețul pentru tractare ți-l spunem înainte.",
          },
          {
            q: "Ce trebuie să spun când sun?",
            a: "Unde ești (sau trimite locația pe Viber/WhatsApp), ce mașină ai și ce se întâmplă când încerci s-o pornești.",
          },
        ],
      },
      ru: {
        name: "Прикуривание / аккумулятор",
        title: "Прикурить авто Кишинёв 24/7 — сел аккумулятор | 4You",
        description:
          "Сел аккумулятор? Приедем с пусковым устройством в любую точку Кишинёва и пригородов круглосуточно, в среднем за 20–30 мин. Не заведётся — эвакуируем. Звоните: 060 551 000.",
        h1: "НЕ ЗАВОДИТСЯ?",
        accent: "ЗАВЕДЁМ НА МЕСТЕ",
        lead: "Аккумулятор сел за ночь или на морозе? Приедем с пусковым устройством и зарядим аккумулятор, где бы вы ни были — дома, у офиса или в дороге.",
        sections: [
          {
            heading: "Запуск на месте",
            text: "В большинстве случаев машина заводится с первого раза, и вы едете дальше сами, без эвакуации.",
          },
          {
            heading: "Если всё равно не заводится",
            text: "Причина может быть в стартере, генераторе или в чём-то другом. Тогда погрузим машину на платформу и отвезём в сервис или домой — тем же эвакуатором, никого больше вызывать не нужно.",
          },
          {
            heading: "Зимой, ночью, в праздники",
            text: "Чаще всего аккумуляторы сдают на морозе, рано утром. Мы работаем круглосуточно, 24 часа в сутки, в том числе в выходные и праздники.",
          },
        ],
        faq: [
          {
            q: "Как быстро вы приедете?",
            a: "В среднем за 20–30 минут по Кишинёву и пригородам. Для других населённых пунктов назовём время прибытия во время звонка.",
          },
          {
            q: "Что если машина не заведётся и с прикуривателем?",
            a: "Погрузим её на платформу и отвезём в сервис или домой. Стоимость эвакуации назовём заранее.",
          },
          {
            q: "Что сказать при звонке?",
            a: "Где вы находитесь (или отправьте локацию в Viber/WhatsApp), какая у вас машина и что происходит, когда вы пытаетесь её завести.",
          },
        ],
      },
      en: {
        name: "Jump-start / battery",
        title: "Jump-Start Service Chișinău 24/7 — Flat Battery | 4You",
        description:
          "Flat battery? We bring jump-start equipment anywhere in Chișinău and the suburbs, 24/7, in 20–30 min on average. If it still won't start, we tow it. Call: +373 60 551 000.",
        h1: "CAR WON'T START?",
        accent: "WE START IT ON THE SPOT",
        lead: "Battery died overnight or in the cold? We come with jump-start equipment and charge the battery wherever you are — at home, at the office or on the road.",
        sections: [
          {
            heading: "Started on the spot",
            text: "In most cases the car starts right away and you drive on yourself, no tow needed.",
          },
          {
            heading: "If it still won't start",
            text: "The problem may be the starter, the alternator or something else. Then we load the car onto the flatbed and take it to a garage or home — same truck, no need to call anyone else.",
          },
          {
            heading: "Winter, night, holidays",
            text: "Batteries fail most often in the cold, early in the morning. We're open non-stop, 24 hours a day, including weekends and holidays.",
          },
        ],
        faq: [
          {
            q: "How long until you arrive?",
            a: "On average 20–30 minutes in Chișinău and the suburbs. For other towns we give you an estimated time during the call.",
          },
          {
            q: "What if the car won't start even with a jump?",
            a: "We load it onto the flatbed and take it to a garage or home. We tell you the towing price first.",
          },
          {
            q: "What should I say when I call?",
            a: "Where you are (or send your location on Viber/WhatsApp), what car you have and what happens when you try to start it.",
          },
        ],
      },
    },
  },
  {
    slug: "transport-moto-atv",
    photo: 2,
    copy: {
      ro: {
        name: "Transport moto și ATV",
        title: "Transport motociclete și ATV Chișinău 24/7 | 4You",
        description:
          "Transport motociclete, scutere și ATV-uri pe platformă, în Chișinău și în toată Moldova, non-stop. Fixare sigură, asigurare inclusă. Sună: 060 551 000.",
        h1: "MOTO ȘI ATV",
        accent: "PE PLATFORMĂ, ÎN SIGURANȚĂ",
        lead: "Motocicleta a rămas în pană, ai cumpărat un ATV sau trebuie să-l duci la service? Îl urcăm pe platformă, îl fixăm și îl ducem unde ai nevoie.",
        sections: [
          {
            heading: "Fixare sigură",
            text: "Motocicletele și ATV-urile se transportă fixate pe platformă, ca să nu se miște pe drum. Troliul ajută la urcarea celor care nu mai pornesc.",
          },
          {
            heading: "În pană sau după o cumpărătură",
            text: "Venim după motocicleta rămasă pe drum, după una cumpărată de la alt proprietar sau o ducem la service la începutul sezonului.",
          },
          {
            heading: "Preț și asigurare",
            text: "Prețul depinde de distanță și îl afli la telefon, înainte să plecăm. Fiecare transport include o asigurare de bază.",
          },
        ],
        faq: [
          {
            q: "Ce vehicule pe două sau patru roți luați?",
            a: "Motociclete, scutere și ATV-uri. Dacă ai altceva, spune-ne la telefon ce e și îți spunem dacă îl putem lua.",
          },
          {
            q: "Puteți lua o motocicletă care nu pornește?",
            a: "Da. O urcăm pe platformă cu ajutorul troliului, chiar dacă nu pornește.",
          },
          {
            q: "Transportați și în alte orașe?",
            a: "Da, în toată Moldova, iar la cerere și spre România sau Ucraina.",
          },
        ],
      },
      ru: {
        name: "Перевозка мото и квадроциклов",
        title: "Перевозка мотоциклов и квадроциклов Кишинёв 24/7 | 4You",
        description:
          "Перевозка мотоциклов, скутеров и квадроциклов на платформе по Кишинёву и всей Молдове, круглосуточно. Надёжное крепление, страховка включена. Звоните: 060 551 000.",
        h1: "МОТО И КВАДРОЦИКЛЫ",
        accent: "НА ПЛАТФОРМЕ, НАДЁЖНО",
        lead: "Мотоцикл сломался, вы купили квадроцикл или его нужно отвезти в сервис? Погрузим на платформу, закрепим и доставим, куда нужно.",
        sections: [
          {
            heading: "Надёжное крепление",
            text: "Мотоциклы и квадроциклы перевозятся закреплёнными на платформе, чтобы не сдвигались в дороге. Лебёдка помогает погрузить тех, что не заводятся.",
          },
          {
            heading: "Поломка или покупка",
            text: "Заберём мотоцикл, который встал в дороге, купленный у другого владельца или отвезём его в сервис в начале сезона.",
          },
          {
            heading: "Цена и страховка",
            text: "Цена зависит от расстояния — вы узнаёте её по телефону до выезда. Каждая перевозка включает базовую страховку.",
          },
        ],
        faq: [
          {
            q: "Какую двух- и четырёхколёсную технику вы берёте?",
            a: "Мотоциклы, скутеры и квадроциклы. Если у вас что-то другое, скажите по телефону — ответим, сможем ли взять.",
          },
          {
            q: "Возьмёте мотоцикл, который не заводится?",
            a: "Да. Погрузим его на платформу с помощью лебёдки, даже если он не заводится.",
          },
          {
            q: "Перевозите в другие города?",
            a: "Да, по всей Молдове, а по запросу — в Румынию и Украину.",
          },
        ],
      },
      en: {
        name: "Motorcycle & ATV transport",
        title: "Motorcycle & ATV Transport Chișinău 24/7 | 4You",
        description:
          "Motorcycle, scooter and ATV transport on a flatbed, in Chișinău and all of Moldova, 24/7. Secured for the ride, insurance included. Call: +373 60 551 000.",
        h1: "MOTO AND ATV",
        accent: "ON THE FLATBED, SECURED",
        lead: "Motorcycle broke down, bought an ATV or need it at the garage? We load it onto the flatbed, secure it and take it where you need.",
        sections: [
          {
            heading: "Secured for the ride",
            text: "Motorcycles and ATVs travel strapped down on the flatbed so they don't move on the road. The winch helps load ones that won't start.",
          },
          {
            heading: "Broken down or just bought",
            text: "We pick up a bike stuck on the road, one you bought from another owner, or take it to the garage at the start of the season.",
          },
          {
            heading: "Price and insurance",
            text: "The price depends on the distance and you get it on the phone before we leave. Every transport includes basic insurance.",
          },
        ],
        faq: [
          {
            q: "What two- and four-wheelers do you take?",
            a: "Motorcycles, scooters and ATVs. If you have something else, tell us on the phone and we'll say whether we can take it.",
          },
          {
            q: "Can you take a motorcycle that won't start?",
            a: "Yes. We load it onto the flatbed with the winch, even if it doesn't start.",
          },
          {
            q: "Do you transport to other cities?",
            a: "Yes, across Moldova, and on request to Romania or Ukraine.",
          },
        ],
      },
    },
  },
  {
    slug: "evacuator-moldova",
    photo: 0,
    copy: {
      ro: {
        name: "Curse în Moldova și peste hotare",
        title: "Evacuator în toată Moldova, curse spre România și Ucraina | 4You",
        description:
          "Transport auto pe platformă între orașe: Chișinău — orice localitate din Moldova, iar la cerere spre România sau Ucraina. Preț confirmat la telefon. Sună: 060 551 000.",
        h1: "ÎN TOATĂ MOLDOVA",
        accent: "ȘI PESTE HOTARE",
        lead: "Mașina trebuie dusă în alt oraș, ai cumpărat una din altă regiune sau ai rămas pe traseu departe de casă? Facem curse în toată Moldova, iar la cerere și spre România sau Ucraina.",
        sections: [
          {
            heading: "Între orașe",
            text: "Luăm mașina din Chișinău și o ducem în orice localitate din Moldova — sau invers, o aducem la Chișinău. Ora estimată de sosire ți-o spunem în timpul apelului.",
          },
          {
            heading: "Spre România și Ucraina",
            text: "La cerere facem curse și peste hotare. Sună-ne din timp, spune-ne unde trebuie dusă mașina și îți confirmăm prețul și ziua.",
          },
          {
            heading: "Pe platformă, cu asigurare",
            text: "Mașina călătorește pe platformă, cu roțile pe loc, deci nu adună kilometri și nu se uzează. Fiecare transport include o asigurare de bază.",
          },
        ],
        faq: [
          {
            q: "Cât costă o cursă în alt oraș?",
            a: "Prețul depinde de distanță și de tipul mașinii. Ți-l spunem la telefon, înainte să plecăm, fără costuri ascunse.",
          },
          {
            q: "Mergeți și în România sau Ucraina?",
            a: "Da, la cerere. Sună din timp ca să stabilim ziua și prețul.",
          },
          {
            q: "Pot trimite mașina fără să merg cu ea?",
            a: "Da. Ne spui unde o luăm și cui o predăm la destinație, iar noi ne ocupăm de transport.",
          },
        ],
      },
      ru: {
        name: "Межгород и заграница",
        title: "Эвакуатор по всей Молдове, рейсы в Румынию и Украину | 4You",
        description:
          "Перевозка машин на платформе между городами: Кишинёв — любой населённый пункт Молдовы, по запросу в Румынию или Украину. Цена по телефону. Звоните: 060 551 000.",
        h1: "ПО ВСЕЙ МОЛДОВЕ",
        accent: "И ЗА ГРАНИЦУ",
        lead: "Машину нужно отвезти в другой город, вы купили её в другом регионе или встали на трассе далеко от дома? Выполняем рейсы по всей Молдове, а по запросу — в Румынию и Украину.",
        sections: [
          {
            heading: "Между городами",
            text: "Забираем машину в Кишинёве и везём в любой населённый пункт Молдовы — или наоборот, доставляем в Кишинёв. Примерное время прибытия назовём во время звонка.",
          },
          {
            heading: "В Румынию и Украину",
            text: "По запросу выполняем рейсы за границу. Позвоните заранее, скажите, куда нужно доставить машину, и мы подтвердим цену и день.",
          },
          {
            heading: "На платформе, со страховкой",
            text: "Машина едет на платформе, колёса не крутятся — она не набирает километры и не изнашивается. Каждая перевозка включает базовую страховку.",
          },
        ],
        faq: [
          {
            q: "Сколько стоит рейс в другой город?",
            a: "Цена зависит от расстояния и типа машины. Назовём её по телефону до выезда, без скрытых платежей.",
          },
          {
            q: "Вы ездите в Румынию или Украину?",
            a: "Да, по запросу. Позвоните заранее, чтобы договориться о дне и цене.",
          },
          {
            q: "Можно отправить машину без меня?",
            a: "Да. Скажите, где забрать машину и кому передать её на месте, а перевозку мы возьмём на себя.",
          },
        ],
      },
      en: {
        name: "Long distance & abroad",
        title: "Tow Truck Across Moldova, Trips to Romania & Ukraine | 4You",
        description:
          "Flatbed car transport between cities: Chișinău to any town in Moldova, and on request to Romania or Ukraine. Price confirmed on the phone. Call: +373 60 551 000.",
        h1: "ALL OF MOLDOVA",
        accent: "AND ABROAD",
        lead: "Need the car taken to another city, bought one in another region or broke down on the highway far from home? We drive all over Moldova, and on request to Romania or Ukraine.",
        sections: [
          {
            heading: "Between cities",
            text: "We pick the car up in Chișinău and take it to any town in Moldova — or the other way round, bring it to Chișinău. We give you an estimated arrival time during the call.",
          },
          {
            heading: "To Romania and Ukraine",
            text: "On request we also drive abroad. Call us in advance, tell us where the car needs to go and we'll confirm the price and the day.",
          },
          {
            heading: "On a flatbed, insured",
            text: "The car rides on the flatbed with its wheels still, so it doesn't add kilometres or wear. Every transport includes basic insurance.",
          },
        ],
        faq: [
          {
            q: "How much is a trip to another city?",
            a: "The price depends on the distance and the type of car. We tell you on the phone before we leave, with no hidden fees.",
          },
          {
            q: "Do you go to Romania or Ukraine?",
            a: "Yes, on request. Call in advance so we can agree on the day and the price.",
          },
          {
            q: "Can I send the car without going with it?",
            a: "Yes. Tell us where to pick it up and who receives it at the destination, and we handle the transport.",
          },
        ],
      },
    },
  },
];

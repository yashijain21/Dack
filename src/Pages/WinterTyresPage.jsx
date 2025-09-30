// src/Pages/SummerTyresPage.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ChevronDown,
  ChevronUp,
  Truck,
  ArrowRight,
  Volume2,
  Droplets,
  Fuel,
} from "lucide-react";
import demoImage from "../assets/Demo/product-demo-image.avif";
import summerTyre from "../assets/Pages/SummerTyres/changing-tyres.avif";
import winterTyre from "../assets/Pages/SummerTyres/renovate-rims.webp";
import summerWheel from "../assets/Pages/SummerTyres/store-tyres.avif";
import winterWheel from "../assets/Pages/SummerTyres/wheel-angle.webp";
import MoreTyres1 from "../assets/Pages/SummerTyres/about-tyres/summer-about-tyres-1.avif";
import MoreTyres2 from "../assets/Pages/SummerTyres/about-tyres/summer-about-tyres-2.avif";
import MoreTyres3 from "../assets/Pages/SummerTyres/about-tyres/summer-about-tyres-3.avif";

const products = [
  {
    id: 1,
    name: "GoodYear Eagle F1 Asymmetric 6",
    size: "225/45R17 91Y +141",
    price: "2,007 SEK",
    image: demoImage,
    specs: ["C", "B", "A"],
    brand: "GoodYear",
    wetGrip: "A",
    soundLevel: "B",
    fuelEconomy: "C",
    isPunctureFree: false,
    isReinforced: true,
    priceValue: 2007,
    category: "Friktionsdäck",
  },
  {
    id: 2,
    name: "Continental UltraContact",
    size: "175/65R14 82T +113",
    price: "1,599 SEK",
    image: demoImage,
    specs: ["D", "B", "B"],
    brand: "Continental",
    wetGrip: "B",
    soundLevel: "B",
    fuelEconomy: "D",
    isPunctureFree: true,
    isReinforced: false,
    priceValue: 1599,
    category: "Dubbat vinterdäck",
  },
  {
    id: 3,
    name: "Bridgestone Turanza 6",
    size: "205/55R16 91V +124",
    price: "2,093 SEK",
    image: demoImage,
    specs: ["C", "A", "A"],
    brand: "Bridgestone",
    wetGrip: "A",
    soundLevel: "A",
    fuelEconomy: "C",
    isPunctureFree: false,
    isReinforced: true,
    priceValue: 2093,
    category: "Friktionsdäck",
  },
  {
    id: 4,
    name: "Continental Premium Contact 7",
    size: "205/55R16 91H +65",
    price: "1,899 SEK",
    image: demoImage,
    specs: ["B", "B", "A"],
    brand: "Continental",
    wetGrip: "A",
    soundLevel: "B",
    fuelEconomy: "B",
    isPunctureFree: true,
    isReinforced: true,
    priceValue: 1899,
    category: "Dubbat vinterdäck",
  },
  {
    id: 5,
    name: "Michelin Pilot Sport 4",
    size: "235/40R18 95Y +167",
    price: "2,345 SEK",
    image: demoImage,
    specs: ["B", "A", "A"],
    brand: "Michelin",
    wetGrip: "A",
    soundLevel: "A",
    fuelEconomy: "B",
    isPunctureFree: true,
    isReinforced: false,
    priceValue: 2345,
    category: "Friktionsdäck",
  },
  {
    id: 6,
    name: "Pirelli P Zero",
    size: "245/35R19 93Y +189",
    price: "2,567 SEK",
    image: demoImage,
    specs: ["C", "B", "A"],
    brand: "Pirelli",
    wetGrip: "A",
    soundLevel: "B",
    fuelEconomy: "C",
    isPunctureFree: false,
    isReinforced: true,
    priceValue: 2567,
    category: "Dubbat vinterdäck",
  },
];

const SummerTyreProducts = [
  {
    title: "Byta däck",
    description: "Däckbyte utfört av experter.",
    image: summerTyre,
    link: "/sommardack",
  },
  {
    title: "Förvara däck",
    description: "Däckförvaring i bra förhållanden.",
    image: winterTyre,
    link: "/vinterdack",
  },
  {
    title: "Kolla hjulvinklarna",
    description: "Kontroll av hjulens vinklar.",
    image: summerWheel,
    link: "/sommarhjul",
  },
  {
    title: "Renovera fälgarna",
    description: "Reparation av skadade fälgar.",
    image: winterWheel,
    link: "/vinterhjul",
  },
];

const features = [
  {
    title: "Fri hemleverans",
    description: "Vi garanterar att däcken du väljer passar din bil.",
  },
  {
    title: "Räntefri delbetalning",
    description: "Räntefri delbetalning upp till 12 månader.",
  },
  {
    title: "Helhetsleverantör",
    description: "Köp däck och få hjälp med däcktjänster.",
  },
];

const faqs = [
  {
    question: "När ska man ha vinterdäck?",
    answer: [
      "Från 1 december till 31 mars måste vinterdäck användas vid vinterväglag. Vinterväglag innebär underlag som snö, is, snömodd eller frost på hela eller delar av vägbanan. Dubbdäck får användas mellan 1 oktober och 15 april. Befaras det bli vinterväglag är det lagligt att köra med dubbdäck efter 15 april och innan 1 oktober.",
    ],
  },
  {
    question: "Dubb- eller odubbade däck?",
    answer:[
      "Om du mestadels kör på snö kan du välja fritt mellan dubbade eller odubbade däck (friktionsdäck) eftersom greppet är likvärdigt mellan däcktyperna.",
      "Kör du på vägar där det ofta är isigt ska du välja dubbade vinterdäck. Den svarta halkan som vi ofta har i de södra delarna i landet, då det fryser till is, gör att dubbdäck är att föredra för att ha bästa grepp.",
      "Friktionsdäck fungerar bäst i landets norra delar där det oftast ligger snö på vägarna. Odubbade vinterdäck fungerar även utmärkt på barmark, men då en torr sådan.",
      "Om du skall åka ut i Europa, så är dubbade vinterdäck förbjudna i ett antal länder däribland Tyskland. Det har också blivit vanligare i storstäder i Sverige att dubbdäck är förbjudna på vissa vägar."
    ]
  },
  {
    question: "Vilka däck är godkända som vinterdäck?",
    answer:
      "Vinterdäck som används på bilar och på släpvagnar till bilar med en totalvikt av högst 3.500 kilo ska vara märkta med symbolen alptopp/snöflinga (ett berg med tre toppar och snöflinga), eller vara dubbade. Äldre vinterdäck som saknar alptopp/snöflingaär inte godkända som vinterdäck från 1 dec 2024.",
  },
  {
    question: "Varför ska jag inte köra med dubbfria vinterdäck på sommaren?",
    answer: [
      "Vinterdäck har mönster och gummiblandning som är anpassade för att fungera på vinterväglag samt när det är kallt ute. På sommaren ger dubbfria vinterdäck sämre väggrepp, längre bromssträcka och försämrad stabilitet vid en undermanöver.",
    ],
  },
  {
    question: "Vad är minsta tillåtna mönsterdjup för vinterdäck?",
    answer: [
      "Minsta mönsterdjup som lagen kräver på vinterdäck är 3 mm. Om mönstret har nötts ner till nivån för indikatorn är det dags att byta däck. Men vi rekommenderar 5 mm för att du ska få ett bra grepp på isiga och blöta vägar. Mät alltid där däcket är som mest slitet.Kontrollera däckens mönsterdjup, lufttryck, skador och tecken på oregelbundet slitage regelbundet. Kom ihåg att alltid anpassa hastigheten och körning till väder- och trafikförhållanden.",
    ]
  },
  {
    question: "Hur mäter jag mönsterdjupet på mina däck?",
    answer: [
      "Mät mönsterdjupet på det mest slitna stället i däckets huvudmönster. Det finns speciella mätstickor man kan använda, men det går lika bra med en tumstock. Se bara upp så att du inte mäter där det finns en slitagevarnare, som är en liten upphöjning på 1,6 mm i huvudmönstret på personbilsdäck. ",
    ],
  },
  {
    question: "När behöver jag göra en hjulinställning?",
    answer:[
      "När du köper nya däck är det extra viktigt att göra en hjulvinkelkontroll och eventuell inställning för att du inte ska få snedslitage på dina nya däck.",
       "Vår rekommendation är att göra en hjulinställning en gång per år eller var 1.500 mil. Värt att tänka på att är om du har råkat köra över en trottoarkant eller liknande kan det vara bra att komma in och göra en hjulvinkelkontroll. ",
    ]
  },
  {
    question: "Hur påverkar däcken bilens egenskaper?",
    answer: [
      "För att bibehålla bilens egenskaper är det bra att välja det däckmärke och modell som bilen utrustades med från fabrik. Men du kan också byta till ett annat varumärke och dimension som biltillverkaren rekommenderar.",
            "Med hjälp av ditt registreringsnummer kan du se vilken dimension som suttit på din bil från fabriken. Du kan även välja att se vilka andra dimensioner som passar till din bil. Om du skall vara helt säker på att du beställer rätt så kontrollera dimensionen på dina befintliga däck.",

    ],
  },
  {
    question: "Hur påverkar däckens kvalitet körupplevelsen?",
    answer:[
      "Däck av hög kvalitet minskar både bromssträckan och bränsleförbrukningen men alla däck har olika egenskaper. Mjukare gummi ger bättre väggrepp men slits snabbare. Styvare stomme ger bra stabilitet men sämre komfort eftersom man känner av vägens ojämnheter mer. Tänk därför igenom vilka egenskaper du värdesätter allra mest.",
      "Vårt nordiska, och mycket varierande, klimat ställer höga krav på däcken. På våta vägar är bromssträckan upp till tre gånger så lång som på torrt väglag. Särskilt på vintern sätter vädret däcken på prov. Välj därför däck utefter det väglag du mestadels kör på – vått, torrt, slask, is eller snö.",
      "Tänk också på att ta väl hand om dina däck. Då håller de mycket längre. Med vårt däckhotell så får du en enkel och bra hantering samt hjälp med att byta däck (hjulskifte) när det är dags."
    ]
  },
  {
    question: "Hur påverkar priset däckets egenskaper?",
    answer: [
      "Störst skillnad på billigare och dyrare däck är de egenskaper som EU-klassificeringen visar. De billigare däcken har oftast sämre våtgrepp, längre bromssträcka och ger högre däckljud.",
      "I vår webshop kan du filtrera utifrån EU-klassificeringen och pris vilket ger dig en bra överblick på sambandet mellan däckets egenskaper och pris. ",
    ],
  },
  {
    question: "Hur påverkar var jag kör mitt däckval?",
    answer:
      "Kör du ofta på landsväg eller växlar du mellan motorväg och att sitta still i stadstrafiken? Om du kör långa sträckor på landsväg kan det vara skönt med ett däck som ger bästa möjliga komfort. Ett däck som har bra rullmotstånd minskar både bränsleförbrukningen och påverkan på miljön. Kör du mycket i trafikerade miljöer bör du välja ett däck med bästa möjliga bromssträcka.Med EU-klassificeringen får du vägledning om däckets egenskaper, vilket gör ditt val enklare. EU-klassificeringen finns dock endast för vinterdäck utan dubb. ",
  },
  {
    question: "Vad ingår i monterat och klart?",
    answer: [
      "Vi monterar av hjulen och demonterar däcken. Sedan monteras och balanseras de nya däcken på fälgen och vi fyller dina däck till rätt lufttryck. Därefter återmonteras hjulen på bilen. Arbetet tar ca 1,5 timme. I många fall kombinerar man även detta med att byta säsong på hjulen som sitter på bilen.",
      "Allt ingår i kostnaden, men vi rekommenderar att du väljer till en hjulvinkelkontroll, och hjulinställning om det skulle behövas, för att du inte ska få felaktigt slitage på dina nya däck.",
    ],
  },
  {
    question: "Vad betyder EU-märkningen?",
    answer: [
      "EU har infört en obligatorisk däckmärkning som visar däckets bränsleeffektivitet, våtgrepp (bromsförmåga) och bullernivå. Det gör det enklet att jämföra olika däck och välja utifrån deras egenskaper.",
      "Vid varje däck får du en överblick över däckets specifika egenskaper på olika väglag. Viktigt att tänka på är dock att klassificeringen inte visar hur bra ett vinterdäck är i nordiska vinterförhållanden. Nordiska, dubbfria vinterdäck är utvecklade för hala vinterväglag på snö och is. Dubbfria vinterdäck för centraleuropeiska förhållanden är mer lämpade för körning i mildare vinterklimat. ",
      "På svenska sommarvägar är våtgreppet en viktig faktor, klass A innebär att däcket har bästa möjliga våtgrepp. "
    ]
  },
];

const SummerTyresPage = () => {
  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);
  const frictionProducts = products.filter(p => p.category === "Friction tires");
const studdedProducts = products.filter(p => p.category === "Studded tires");


  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const shortText = `Vi har vinterdäck från ledande varumärken som Goodyear, Barum, Continental, Gislaved, Pirelli, Michelin, Bridgestone, Nordman och Nokian. Hos oss hittar du både dubbdäck och dubbfria vinterdäck (friktionsdäck). `;

  const fullText = `
Vi har vinterdäck från ledande varumärken som Goodyear, Barum, Continental, Gislaved, Pirelli, Michelin, Bridgestone, Nordman och Nokian. Hos oss hittar du både dubbdäck och dubbfria vinterdäck (friktionsdäck).

Vilka vinterdäck ska du välja?

Det bästa är att välja vinterdäck utefter det väglag du vanligtvis kommer att köra på. Dubbdäck är säkrast på vintervägar med is och packad snö men river upp hälsofarliga partiklar på barmark.

Friktionsdäck fungerar bäst när det är slask och barmark och har likvärdiga egenskaper som dubbdäck på snö. De fungerar även på isigt underlag, och ger en något bättre komfort än dubbdäck. Väljer du dubbfria vinterdäck är det viktigt att däcken är avsedda för nordiska förhållanden (då är de oftast Q-märkta). Om du har en äldre bil utan antisladdsystem eller är en oerfaren förare är dubbdäck att föredra. Friktionsdäck har lägre rullmotstånd och är tystare viket lämpar sig bättre för exempelvis elbilar.

Under perioden 1 december–31 mars ska du ha vinterdäck på din bil om det är vinterväglag.

Behöver du hjälp av en däckexpert? Du kan alltid kontakta oss via chatt, mail eller på 0771 - 400 000 så hjälper vi dig till rätt val. Vi vet vilka vinterdäck som är säkrast vid olika vinterväglag.
`;

  // Product Card Component for Grid View
const ProductGridCard = ({ product }) => (
  <div className="group bg-[#1a1a1a] border border-gray-700 shadow-sm hover:shadow-orange-500/20 
                 rounded-xl p-4 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-orange-500">
    {/* Image */}
    <div className="relative flex items-center justify-center p-3 bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] rounded-xl shadow-inner overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-28 h-28 object-contain transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1"
      />
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
    </div>

    {/* Category Badge */}
    <span className="mt-3 inline-flex items-center gap-1 bg-orange-500/20 text-orange-500 text-[11px] px-2.5 py-1 rounded-full font-medium w-max">
      <Droplets size={11} className="text-orange-500" />
      {product.category}
    </span>

    {/* Title */}
    <h2 className="font-semibold text-base mt-2 text-white leading-snug line-clamp-2 group-hover:text-orange-500 transition-colors">
      {product.name}
    </h2>

    {/* Size */}
    <p className="text-xs text-gray-400">{product.size}</p>

    {/* Specs row */}
    <div className="flex flex-wrap gap-1.5 mt-3">
      <div className="flex items-center gap-1 text-[11px] bg-[#2a2a2a] border border-gray-600 px-2 py-0.5 rounded-full shadow-sm">
        <Fuel size={12} className="text-orange-500" />
        <span className="text-white">{product.specs[0]}</span>
      </div>
      <div className="flex items-center gap-1 text-[11px] bg-[#2a2a2a] border border-gray-600 px-2 py-0.5 rounded-full shadow-sm">
        <Volume2 size={12} className="text-orange-500" />
        <span className="text-white">{product.specs[1]}</span>
      </div>
      <div className="flex items-center gap-1 text-[11px] bg-[#2a2a2a] border border-gray-600 px-2 py-0.5 rounded-full shadow-sm">
        <Droplets size={12} className="text-orange-500" />
        <span className="text-white">{product.specs[2]}</span>
      </div>
    </div>

    {/* Divider */}
    <div className="border-t border-gray-700 mt-4"></div>

    {/* Delivery */}
    <div className="flex items-center text-gray-400 text-xs mt-2">
      <Truck size={14} className="mr-1 text-orange-500" />
      <span>Varying delivery times</span>
    </div>

    {/* Price */}
    <p className="mt-3 font-bold text-lg text-orange-500">
      From {product.price}
      <span className="text-gray-400 text-xs font-normal"> /pc</span>
    </p>

    {/* CTA Button */}
    <button
      className="mt-auto self-end p-2.5 bg-orange-500 text-white rounded-full 
                 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-110 hover:bg-orange-600"
    >
      <ArrowRight size={16} />
    </button>
  </div>
);

  return (
    <div className="px-0 bg-[#0d0d0d] min-h-screen poppins-regular text-white relative">
      {/* Main Content Container */}
      <div className="px-2 md:px-3 lg:px-4 py-6">
        {/* Breadcrumb */}
        <p className="text-sm text-gray-400 mb-4">
          <Link to="/" className="hover:underline text-gray-400">
            Deck
          </Link>{" "}
          &gt; <span className="text-white">Vinterdäck</span>
        </p>

        {/* Title & Description */}
        <h1 className="text-3xl font-semibold mb-2 text-white">Vinterdäck</h1>
        <p className="text-gray-300 max-w-3xl whitespace-pre-line">
          {showMore ? fullText : shortText}
        </p>
        <button
          className="mt-2 flex items-center gap-1 text-orange-500 font-medium text-sm"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Visa mindre" : "Visa mer"}
          {showMore ? (
            <ChevronUp className="w-4 h-4 transition-transform" />
          ) : (
            <ChevronDown className="w-4 h-4 transition-transform" />
          )}
        </button>

        {/* Search box */}
        <div className="bg-[#1a1a1a] border border-gray-700 text-white mt-6 p-4 rounded-lg flex flex-col gap-3">
          <p className="font-semibold">Hitta rätt sommardäck till din bil</p>
          <div className="flex flex-col md:flex-row items-center gap-3 w-full">
            <div className="flex items-center bg-[#2a2a2a] rounded-md overflow-hidden w-64 border border-gray-600">
              <div className="flex items-center justify-center bg-[#004B87] text-white w-12 relative">
                <span className="absolute top-1 left-1 text-[8px]">🇪🇺</span>
                <span className="text-lg font-bold">S</span>
              </div>
              <input
                type="text"
                placeholder="Fyll i regnummer"
                className="p-2 flex-1 text-white bg-transparent outline-none placeholder-gray-400"
              />
            </div>
            <button className="underline text-sm text-gray-300">
              Ange däckstorlek manuellt
            </button>
          </div>
        </div>

        {/* Product Count */}
        <div className="flex justify-between items-center my-6">
          <p className="text-gray-400">{products.length} Products</p>
        </div>

        {/* Products Grid */}
        {/* Friction Tires Section */}
<section className="mt-8">
  <div className="flex justify-between items-center mb-4">
    <h2 className="text-2xl font-semibold text-white border-l-4 border-orange-500 pl-3">
      Friction tires
    </h2>
    <p className="text-gray-400">
      {products.filter(p => p.category === "Friction tires").length} Products
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {products
      .filter(p => p.category === "Friktionsdäck")
      .map(product => (
        <ProductGridCard key={product.id} product={product} />
      ))}
  </div>
</section>

{/* Studded Tires Section */}
<section className="mt-10">
  <div className="flex justify-between items-center mb-4">
    <h2 className="text-2xl font-semibold text-white border-l-4 border-orange-500 pl-3">
      Studded tires
    </h2>
    <p className="text-gray-400">
      {products.filter(p => p.category === "Dubbat vinterdäck").length} Products
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {products
      .filter(p => p.category === "Studded tires")
      .map(product => (
        <ProductGridCard key={product.id} product={product} />
      ))}
  </div>
</section>

      </div>

      {/* Services Section */}
      <section className="w-full bg-[#0d0d0d] py-5 poppins-regular text-white">
        {/* Products */}
        <div className="mt-10 px-2 md:px-3 lg:px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {SummerTyreProducts.map((item, index) => (
              <div
                key={index}
                onClick={() => navigate(item.link)}
                className="bg-[#1a1a1a] rounded-lg shadow-lg overflow-hidden flex w-full h-44 border border-gray-700 hover:border-orange-500 transition cursor-pointer"
              >
                {/* Left side image */}
                <div className="w-1/2 flex-shrink-0 p-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover w-full h-full rounded"
                  />
                </div>
                {/* Right side text */}
                <div className="p-2 flex-1 flex flex-col justify-end">
                  <h3
                    className="mb-1 text-orange-500"
                    style={{
                      fontWeight: 600,
                      fontSize: "18px",
                      lineHeight: "22px",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 px-2 md:px-3 lg:px-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] p-5 rounded-md flex items-start border border-gray-700 hover:border-orange-500 transition"
            >
              <div>
                <h4 className="font-semibold text-white text-base mb-1">
                  {feature.title}
                </h4>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full bg-black py-8 px-2 md:px-3 lg:px-4 poppins-regular relative">
        {/* Section Heading */}
        <h2 className="text-center font-semibold mb-12 text-3xl md:text-4xl text-white uppercase tracking-wide">
          Vanliga frågor om vinterdäck
        </h2>

        {/* FAQ List */}
        <div className="divide-y divide-gray-800">
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                className="w-full flex justify-between items-center py-5 text-left text-md font-medium text-white focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <ChevronDown
                  className={`w-6 h-6 text-orange-500 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                    }`}
                />
              </button>

              {openIndex === index && (
                <div className="pb-6 text-gray-200 text-sm leading-relaxed">
                  {typeof faq.answer === "string" ? (
                    <p>{faq.answer}</p>
                  ) : Array.isArray(faq.answer) ? (
                    faq.answer.map((para, i) => (
                      <p key={i} className="mb-3">
                        {para}
                      </p>
                    ))
                  ) : (
                    <>
                      <h4 className="font-semibold text-orange-500 mb-2">
                        {faq.answer.heading}
                      </h4>
                      <ul className="list-disc list-inside space-y-1">
                        {faq.answer.points.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* More Articles Section */}
      <section className="relative w-full bg-gradient-to-b from-black via-[#0d0d0d] to-black py-10 px-2 md:px-3 lg:px-4 poppins-regular">
        {/* Subtle background glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 left-20 w-72 h-72 bg-orange-500/10 blur-3xl rounded-full"></div>
          <div className="absolute bottom-10 right-20 w-72 h-72 bg-orange-600/10 blur-3xl rounded-full"></div>
        </div>

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8 border-l-4 border-orange-500 pl-3">
          Läs mer om däck
        </h2>

        {/* Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="bg-[#1a1a1a] border border-gray-700 rounded-lg shadow-md overflow-hidden flex flex-col group hover:-translate-y-1 hover:shadow-orange-500/30 hover:border-orange-500 transition">
            <img
              src={MoreTyres1}
              alt="Snow tire"
              className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-3 text-white">
                Behöver elbilar särskilda däck?
              </h3>
              <p className="text-base text-gray-400 mb-6 flex-grow">
                Elbilar väger mer och har andra köregenskaper än fossildrivna bilar.
                Vår däckexpert har råden till dig som ska välja däck till elbil.
              </p>
              <a
                href="#"
                className="block w-full text-center px-6 py-3 rounded-lg bg-orange-500 text-white text-sm font-medium hover:bg-orange-600 transition"
              >
                Läs mer
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#1a1a1a] border border-gray-700 rounded-lg shadow-md overflow-hidden flex flex-col group hover:-translate-y-1 hover:shadow-orange-500/30 hover:border-orange-500 transition">
            <img
              src={MoreTyres2}
              alt="Winter road"
              className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-3 text-white">
                Vilket lufttryck ska du ha i däcken?
              </h3>
              <p className="text-base text-gray-400 mb-6 flex-grow">
                Med rätt däcktryck rullar bilen bättre och körningen blir mer säker och ekonomisk. Med för lågt eller högt tryck ökar olycksrisken, slitaget och bränsleförbrukningen.
              </p>
              <a
                href="#"
                className="block w-full text-center px-6 py-3 rounded-lg bg-orange-500 text-white text-sm font-medium hover:bg-orange-600 transition"
              >
                Läs mer
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#1a1a1a] border border-gray-700 rounded-lg shadow-md overflow-hidden flex flex-col group hover:-translate-y-1 hover:shadow-orange-500/30 hover:border-orange-500 transition">
            <img
              src={MoreTyres3}
              alt="More tires"
              className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-3 text-white">
                Mönsterdjup på däck
              </h3>
              <p className="text-base text-gray-400 mb-6 flex-grow">
                Bra däck är avgörande för säkerheten. Kontrollera mönsterdjupet regelbundet för bästa grepp och kortast möjliga bromssträcka.
              </p>
              <a
                href="#"
                className="block w-full text-center px-6 py-3 rounded-lg bg-orange-500 text-white text-sm font-medium hover:bg-orange-600 transition"
              >
                Läs mer
              </a>
            </div>
          </div>
        </div>

        {/* Bottom button */}
        <div className="flex justify-center mt-8">
          <a
            href="#"
            className="px-10 py-4 rounded-lg bg-orange-500 text-white text-base font-semibold shadow-md hover:bg-orange-600 transition-transform duration-300 hover:scale-105"
          >
            Fler artiklar om däck
          </a>
        </div>
      </section>
    </div>
  );
};

export default SummerTyresPage;
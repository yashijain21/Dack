// src/Pages/SummerTyresPage.jsx
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ChevronDown,
  ChevronUp,
  Truck,
  ArrowRight,
  Volume2,
  Droplets,
  Fuel,
  X,
  SlidersHorizontal,
  Grid,
  List,
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
    question: "Vad är minsta tillåtna mönsterdjup för sommardäck?",
    answer: [
      "Minsta mönsterdjup som lagen kräver på sommardäck är 1,6 mm. Om mönstret nötts ner till nivån för indikatorn är det dags att byta däck. Men vi rekommenderar däckbyte innan den nås, vid 4 mm för att vara på den säkra sidan.Med slitna däck ökar risken för vattenplaning, och även bromsförmågan försämras. Kontrollera däckens mönsterdjup, lufttryck, skador och tecken på oregelbundet slitage regelbundet. Mät alltid mönsterdjup där däcket är som mest slitet.Kom ihåg att alltid anpassa hastigheten och körning till väger- och trafikförhållanden.",
    ],
  },
  {
    question: "Hur mäter jag mönsterdjupet på mina däck?",
    answer:
      "Mät mönsterdjupet på det mest slitna stället i däckets huvudmönster. Det finns speciella mätstickor man kan använda, men det går lika bra med en tumstock. Se bara upp så att du inte mäter där det finns en slitagevarnare, som är en liten upphöjning på 1,6 mm i huvudmönstret på personbilsdäck. ",
  },
  {
    question: "Varför ska jag inte köra med dubbfria vinterdäck på sommaren?",
    answer:
      "Vinterdäck har mönster och gummiblandning som är anpassade för att fungera på vinterväglag samt när det är kallt ute. På sommaren ger dubbfria vinterdäck sämre väggrepp, längre bromssträcka och försämrad stabilitet vid en undermanöver. ",
  },
  {
    question: "När behöver jag göra en hjulinställning?",
    answer: [
      "När du köper nya däck är det extra viktigt att göra en hjulvinkelkontroll och eventuell inställning för att du inte ska få snedslitage på dina nya däck.",
      "Vår rekommendation är att göra en hjulinställning en gång per år eller var 1.500 mil. Värt att tänka på att är om du har råkat köra över en trottoarkant eller liknande kan det vara bra att komma in och göra en hjulvinkelkontroll.",
    ],
  },
  {
    question: "Hur påverkar däcken bilens egenskaper?",
    answer: [
      "För att bibehålla bilens egenskaper är det bra att välja det däckmärke och modell som bilen utrustades med från fabrik. Men du kan också byta till ett annat varumärke och dimension som biltillverkaren rekommenderar.",
      "Med hjälp av ditt registreringsnummer kan du se vilken dimension som suttit på din bil från fabriken. Du kan även välja att se vilka andra dimensioner som passar till din bil. Om du skall vara helt säker på att du beställer rätt så kontrollera dimensionen på dina befintliga däck."
    ]
  },
  {
    question: "Hur påverkar däckens kvalitet körupplevelsen?",
    answer: [
      "Däck av hög kvalitet minskar både bromssträckan och bränsleförbrukningen men alla däck har olika egenskaper. Mjukare gummi ger bättre väggrepp men slits snabbare. Styvare stomme ger bra stabilitet men sämre komfort eftersom man känner av vägens ojämnheter mer. Tänk därför igenom vilka egenskaper du värdesätter allra mest.",
      "Vårt nordiska, och mycket varierande, klimat ställer höga krav på däcken. På våta vägar är bromssträckan upp till tre gånger så lång som på torrt väglag. Särskilt på vintern sätter vädret däcken på prov. Välj därför däck utefter det väglag du mestadels kör på – vått, torrt, slask, is eller snö.",
      "Tänk också på att ta väl hand om dina däck. Då håller de mycket längre. Med vårt däckhotell så får du en enkel och bra hantering samt hjälp med att byta däck (hjulskifte) när det är dags."
    ],
  },
  {
    question: "Hur påverkar priset däckets egenskaper?",
    answer:
      "Störst skillnad på billigere och dyrare däck är de egenskaper som EU-klassificeringen visar. De billigare däcken har oftast sämre våtgrepp, längre bromssträcka och ger högre däckljud.I vår webshop kan du filtrera utifrån EU-klassificeringen och pris vilket ger dig en bra överblick på sambandet mellan däckets egenskaper och pris.",
  },
  {
    question: "Hur påverkar var jag kör mitt däckval?",
    answer: [
      "Kör du ofta på landsväg eller växlar du mellan motorväg och att sitta still i stadstrafiken? Om du kör långa sträckor på landsväg kan det vara skönt med ett däck som ger bästa möjliga komfort. Ett däck som har bra rullmotstånd minskar både bränsleförbrukningen och påverkan på miljön. Kör du mycket i trafikerade miljöer bör du välja ett däck med bästa möjliga bromssträcka.Med EU-klassificeringen får du vägledning om däckets egenskaper, vilket gör ditt val enklare. EU-klassificeringen finns dock endast för vinterdäck utan dubb. ",
    ],
  },
  {
    question: "Jag vill köpa lösa däck, hur gör jag då?",
    answer:
      "Alla däck i vår webbshop behöver montering och balansering på din befintliga eller nya fälg. För tillfället kan du inte köpa lösa däck utan montering hos oss på bilia.se, däremot kan du besöka din anläggning för att hitta lösa däck dom kan ha lokalt på plats. Dem däcken kan du köpa löst.",
  },
  {
    question: "Kan jag blanda olika däck på min bil?",
    answer: [
      "Samtliga däck på en personbil ska vara av samma typ, man får alltså inte blanda dubbdäck, dubbfriavinterdäck och sommardäck på bilen.",
      "När det kommer till att ha däck av olika fabrikat eller modell rekommenderar vi att ha likvärdigt grepp på alla fyra hjulen. Men om inte alla däck behöver bytas ut så bör man åtminstone byta parvis. Detta för att de däck som sitter på samma axel ska vara i likvärdigt skick.",
    ],
  },
  {
    question: "Om jag endast väljer att byta två däck på bilen, var ska dessa sitta?",
    answer:
      "Däck som bedöms ha bästa väggreppet ska alltid monteras baktill på bilen. Detta gäller fram-, bak- och fyrhjulsdrivna bilar.",
  },
  {
    question: "Vad ingår i monterat och klart?",
    answer: [
      "Vi monterar av hjulen och demonterar däcken. Sedan monteras och balanseras de nya däcken på fälgen och vi fyller dina däck till rätt lufttryck. Därefter återmonteras hjulen på bilen. Arbetet tar ca 1,5 timme. I många fall kombinerar man även detta med att byta säsong på hjulen som sitter på bilen.",
      "Allt ingår i kostnaden, men vi rekommenderar att du väljer till en hjulvinkelkontroll, och hjulinställning om det skulle behövas, för att du inte ska få felaktigt slitage på dina nya däck.",
    ],
  },
  {
    question: "Vad betyder originaldäck?",
    answer: [
      "OE-däck (Original Equipment-däck) är däck som valts och godkänts av biltillverkaren för att monteras på nya bilar. Dessa däck är utformade för att uppfylla specifika krav på prestanda, komfort, bränsleeffektivitet och säkerhet. Genom att välja OE-däck behåller du bilens ursprungliga prestanda och säkerhet.",
      "För dig som har en Volvo, Polestar, BMW, Mercedes-Benz, Land-Rover, Volkswagen, Audi eller Porsche rekommenderar vi att du alltid väljer originaldäck. "
    ]
  },
  {
    question: "Vad betyder EU-märkningen?",
    answer: [
      "EU har infört en obligatorisk däckmärkning som visar däckets bränsleeffektivitet, våtgrepp (bromsförmåga) och bullernivå. Det gör det enkelt att jämföra olika däck och välja utifrån deras egenskaper.",
      "Vid varje däck får du en överblick över däckets specifika egenskaper på olika väglag. Viktigt att tänka på är dock att klassificeringen inte visar hur bra ett vinterdäck är i nordiska vinterförhållanden. Nordiska, dubbfria vinterdäck är utvecklade för hala vinterväglag på snö och is. Dubbfria vinterdäck för centraleuropeiska förhållanden är mer lämpade för körning i mildare vinterklimat. ",
      "På svenska sommarvägar är våtgreppet en viktig faktor, klass A innebär att däcket har bästa möjliga våtgrepp. "
    ]
  },
];

const SummerTyresPage = () => {
  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);
  const [filterOpen, setFilterOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState(null);
  const [priceRange, setPriceRange] = useState([1000, 10000]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [sortBy, setSortBy] = useState("most-visited");
  const [trademarkModalOpen, setTrademarkModalOpen] = useState(false);
  const [priceModalOpen, setPriceModalOpen] = useState(false);
  const [viewMode, setViewMode] = useState("grid"); // "grid" or "list"
  const [modalPriceRange, setModalPriceRange] = useState([1000, 10000]);

  const min = 1000;
  const max = 10000;

  // Initialize modal price range when modal opens
  useEffect(() => {
    if (priceModalOpen) {
      setModalPriceRange(priceRange);
    }
  }, [priceModalOpen, priceRange]);

  const leftPercent = ((modalPriceRange[0] - min) / (max - min)) * 100;
  const rightPercent = ((modalPriceRange[1] - min) / (max - min)) * 100;

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const allFilters = [
    "Varumärke",
    "Pris",
    "Originaldäck",
    "Passar typ av bil",
    "Bränsleekonomi",
    "Våtgrepp",
    "Ljudnivå",
    "Unikt skydd från tillverkaren",
    "Belastningsindex",
    "Hastighetsindex",
    "Ljuddämpat däck",
  ];

  const PassartypavbilOption = [
    { label: "Personbil", count: 353 }
  ]

  const VarumärkeOptions = [
    { label: "Michelin", count: 110 },
    { label: "Pirelli", count: 93 },
    { label: "Continental", count: 79 },
    { label: "GoodYear", count: 36 },
    { label: "Bridgestone", count: 33 },
    { label: "Nokian", count: 5 },
    { label: "Barum", count: 2 },
    { label: "Nordman", count: 1 },
  ];

  const soundDeckOptions = [
    { label: "Puncture-free tire", count: 42 },
    { label: "Reinforced deck", count: 319 },
  ];

  const OriginaldäckOption = [
    { label: "Mercedes-Benz", count: 72 },
    { label: "BMW", count: 66 },
    { label: "Audi", count: 46 },
    { label: "Porsche", count: 23 },
    { label: "Volvo", count: 19 },
    { label: "Jaguar", count: 16 },
    { label: "Polestar", count: 15 },
    { label: "Land Rover", count: 14 },
    { label: "Volkswagen", count: 11 },
    { label: "Ferrari", count: 8 },
    { label: "Bentley", count: 1 },
  ];

  const handleBrandToggle = (brand) => {
    setSelectedBrands(prev =>
      prev.includes(brand)
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  const handleFeatureToggle = (feature) => {
    setSelectedFeatures(prev =>
      prev.includes(feature)
        ? prev.filter(f => f !== feature)
        : [...prev, feature]
    );
  };

  const clearAllFilters = () => {
    setSelectedBrands([]);
    setSelectedFeatures([]);
    setPriceRange([1000, 10000]);
  };

  // Handle price change in modal
  const handleModalPriceChange = (index, value) => {
    const newValue = Math.max(min, Math.min(max, Number(value)));
    const newRange = [...modalPriceRange];
    newRange[index] = newValue;

    // Ensure min <= max
    if (index === 0 && newValue > modalPriceRange[1]) {
      newRange[1] = newValue;
    } else if (index === 1 && newValue < modalPriceRange[0]) {
      newRange[0] = newValue;
    }

    setModalPriceRange(newRange);
  };

  // Apply modal price range to main filter
  const applyModalPriceRange = () => {
    setPriceRange(modalPriceRange);
    setPriceModalOpen(false);
  };

  // Reset modal price range
  const resetModalPriceRange = () => {
    setModalPriceRange([min, max]);
  };

  // Filter products based on selected filters
  const filteredProducts = products.filter(product => {
    // Brand filter
    if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) {
      return false;
    }

    // Price filter
    if (product.priceValue < priceRange[0] || product.priceValue > priceRange[1]) {
      return false;
    }

    // Features filter
    if (selectedFeatures.length > 0) {
      const hasPunctureFree = selectedFeatures.includes("Puncture-free tire") && product.isPunctureFree;
      const hasReinforced = selectedFeatures.includes("Reinforced deck") && product.isReinforced;

      if (selectedFeatures.includes("Puncture-free tire") && !hasPunctureFree) return false;
      if (selectedFeatures.includes("Reinforced deck") && !hasReinforced) return false;
    }

    return true;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "lowest-price":
        return a.priceValue - b.priceValue;
      case "highest-price":
        return b.priceValue - a.priceValue;
      case "most-visited":
      default:
        return 0;
    }
  });

  const shortText = `Hos oss hittar du ett brett sortiment av sommardäck från ledande varumärken som Goodyear, Continental, Barum, Michelin, Pirelli, Bridgestone, Nordman och Nokian. Allt för att du ska köra säkert på vägarna.`;

  const fullText = `
Hos oss hittar du ett brett sortiment av sommardäck från ledande varumärken som Goodyear, Continental, Barum, Michelin, Pirelli, Bridgestone, Nordman och Nokian. Allt för att du ska köra säkert på vägarna.

Sommardäck har olika kvaliteter och egenskaper. Mjukare gummi i slitbanan ger bättre grepp men slits fortare. Styvare stomme ger bättre stabilitet men gör att du känner av vägens ojämnheter något mer. Vi ger dig gärna råd och tips för att du ska hitta det perfekta sommardäcket för dig och din bil.

 

Hur väljer jag rätt sommardäck?
Det finns inget däck som är bäst på allt. Med stöd av EU-klassificeringen så får du hjälp att kunna välja rätt däck utifrån däckets egenskaper - bränsleeffektivitet, väggrepp på våt väg och utvändigt däckljud. Läs mer om märkningen här. 

 

För att säkerhetssystem som ABS och Pedestrian Detection ska fungera på bästa sätt och ge dig högsta säkerhet så måste däcken ha optimalt grepp med vägbanan. Vi rekommenderar därför att följa biltillverkarens rekommendationer för att uppnå bästa säkerhet och köregenskaper för din bil.

 

Många av våra bilmärken har originaldäck (OE-däck) som är framtagna efter biltillverkarnas specifika krav och specifikationer. Dessa däck har en extra märkning på däcksidan, exempelvis VOL för Volvo och * för BMW. Vi rekommenderar att man alltid väljer ett OE däck till de bilmodeller där det alternativet finns. Då får du det däck som är bäst anpassat till din bil.

 

Ange ditt registreringsnummer så får du enbart träff på däck som passar just din bil. Om du är osäker så är det alltid bäst att kontrollera vad dina nuvarande däck har för dimension.

 

Om du behöver hjälp så kan du alltid kontakta oss via chatt, mail eller på 0771 - 400 000 så hjälper vi dig till rätt val.
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
        Summer tires
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

  // Product Card Component for List View - Responsive
  const ProductListCard = ({ product }) => (
    <div className="group bg-[#1a1a1a] border border-gray-700 shadow-sm hover:shadow-orange-500/20 
                   rounded-xl p-4 lg:p-6 flex flex-col lg:flex-row gap-4 lg:gap-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500">
      {/* Image */}
      <div className="relative flex items-center justify-center p-3 lg:p-4 bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] rounded-xl shadow-inner overflow-hidden lg:min-w-[180px]">
        <img
          src={product.image}
          alt={product.name}
          className="w-24 h-24 lg:w-32 lg:h-32 object-contain transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1"
        />
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        {/* Category Badge */}
        <span className="inline-flex items-center gap-1 bg-orange-500/20 text-orange-500 text-[11px] px-2.5 py-1 rounded-full font-medium w-max mb-3">
          <Droplets size={11} className="text-orange-500" />
          Summer tires
        </span>

        {/* Title and Size */}
        <div className="mb-3 lg:mb-4">
          <h2 className="font-semibold text-lg lg:text-xl mb-1 text-white leading-snug group-hover:text-orange-500 transition-colors">
            {product.name}
          </h2>
          <p className="text-xs lg:text-sm text-gray-400">{product.size}</p>
        </div>

        {/* Specs row */}
        <div className="flex flex-wrap gap-2 mb-3 lg:mb-4">
          <div className="flex items-center gap-1 text-xs lg:text-sm bg-[#2a2a2a] border border-gray-600 px-2 lg:px-3 py-1 rounded-full shadow-sm">
            <Fuel size={12} className="text-orange-500" />
            <span className="text-white">Fuel: {product.specs[0]}</span>
          </div>
          <div className="flex items-center gap-1 text-xs lg:text-sm bg-[#2a2a2a] border border-gray-600 px-2 lg:px-3 py-1 rounded-full shadow-sm">
            <Volume2 size={12} className="text-orange-500" />
            <span className="text-white">Noise: {product.specs[1]}</span>
          </div>
          <div className="flex items-center gap-1 text-xs lg:text-sm bg-[#2a2a2a] border border-gray-600 px-2 lg:px-3 py-1 rounded-full shadow-sm">
            <Droplets size={12} className="text-orange-500" />
            <span className="text-white">Wet: {product.specs[2]}</span>
          </div>
        </div>

        {/* Features */}
        <div className="flex gap-2 lg:gap-4 mb-3 lg:mb-4">
          {product.isPunctureFree && (
            <span className="px-2 lg:px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs">Puncture-free</span>
          )}
          {product.isReinforced && (
            <span className="px-2 lg:px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs">Reinforced</span>
          )}
        </div>

        {/* Delivery and Price */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mt-auto gap-3 lg:gap-4">
          <div className="flex items-center text-gray-400 text-xs lg:text-sm">
            <Truck size={14} className="mr-2 text-orange-500" />
            <span>Varying delivery times</span>
          </div>

          <div className="flex items-center justify-between lg:justify-end gap-3 lg:gap-4">
            <p className="font-bold text-lg lg:text-2xl text-orange-500">
              {product.price}
              <span className="text-gray-400 text-xs lg:text-sm font-normal ml-1">/pc</span>
            </p>

            {/* CTA Button */}
            <button
              className="p-2 lg:p-3 bg-orange-500 text-white rounded-full 
                         shadow-sm hover:shadow-md transition-all duration-300 hover:scale-110 hover:bg-orange-600"
            >
              <ArrowRight size={16} className="lg:w-5 lg:h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="px-0 bg-[#0d0d0d] min-h-screen poppins-regular text-white relative">
      {/* Filter Overlay */}
      {filterOpen && (
        <>
          {/* Dark Overlay */}
          <div
            className="fixed inset-0 bg-black/70 bg-opacity-70 z-40"
            onClick={() => setFilterOpen(false)}
          />

          {/* Main Filter Panel */}
          <div className="fixed left-0 top-0 h-full w-80 bg-[#1a1a1a] border-r border-gray-700 z-50 overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <div className="flex items-center gap-2">
                <SlidersHorizontal size={20} className="text-orange-500" />
                <h2 className="text-lg font-semibold text-white">All filters</h2>
              </div>
              <button
                onClick={() => setFilterOpen(false)}
                className="p-1 hover:bg-gray-700 rounded transition"
              >
                <X size={20} className="text-gray-400" />
              </button>
            </div>

            {/* Filters List */}
            <div className="flex-1 overflow-y-auto">
              {!activeFilter ? (
                // Main filters list
                <div className="space-y-1 p-2">
                  {allFilters.map((filter) => (
                    <button
                      key={filter}
                      onClick={() => setActiveFilter(filter)}
                      className="w-full flex items-center justify-between p-3 text-left hover:bg-gray-800 rounded-lg transition group"
                    >
                      <span className="text-gray-300 group-hover:text-white">{filter}</span>
                      <ChevronRight size={16} className="text-gray-500" />
                    </button>
                  ))}
                </div>
              ) : (
                // Sub-filter panel
                <div className="p-4">
                  {/* Back button */}
                  <button
                    onClick={() => setActiveFilter(null)}
                    className="flex items-center gap-2 text-orange-500 mb-4 hover:text-orange-400 transition"
                  >
                    <ChevronLeft size={16} />
                    <span>Back</span>
                  </button>

                  <h3 className="text-lg font-semibold text-white mb-4">{activeFilter}</h3>

                  {/* Filter Content */}
                  <div className="space-y-6">
                    {activeFilter === "Varumärke" && (
                      <div className="space-y-3">
                        {VarumärkeOptions.map((item, i) => (
                          <label
                            key={i}
                            className="flex items-center justify-between py-2 cursor-pointer group"
                          >
                            <div className="flex items-center gap-3">
                              <div className="relative">
                                <input
                                  type="checkbox"
                                  checked={selectedBrands.includes(item.label)}
                                  onChange={() => handleBrandToggle(item.label)}
                                  className="w-4 h-4 text-orange-500 bg-gray-800 border-gray-600 rounded focus:ring-orange-500 focus:ring-2"
                                />
                              </div>
                              <span className="text-gray-300 group-hover:text-white">{item.label}</span>
                            </div>
                            <span className="text-sm text-gray-500">{item.count}</span>
                          </label>
                        ))}
                      </div>
                    )}



                    {activeFilter === "Originaldäck" && (
                      <div className="space-y-3">
                        {OriginaldäckOption.map((item, i) => (
                          <label
                            key={i}
                            className="flex items-center justify-between py-2 cursor-pointer group"
                          >
                            <div className="flex items-center gap-3">
                              <div className="relative">
                                <input
                                  type="checkbox"
                                  checked={selectedBrands.includes(item.label)}
                                  onChange={() => handleBrandToggle(item.label)}
                                  className="w-4 h-4 text-orange-500 bg-gray-800 border-gray-600 rounded focus:ring-orange-500 focus:ring-2"
                                />
                              </div>
                              <span className="text-gray-300 group-hover:text-white">{item.label}</span>
                            </div>
                            <span className="text-sm text-gray-500">{item.count}</span>
                          </label>
                        ))}
                      </div>
                    )}


                    {activeFilter === "Passar typ av bil" && (
                      <div className="space-y-3">
                        {PassartypavbilOption.map((item, i) => (
                          <label
                            key={i}
                            className="flex items-center justify-between py-2 cursor-pointer group"
                          >
                            <div className="flex items-center gap-3">
                              <div className="relative">
                                <input
                                  type="checkbox"
                                  checked={selectedBrands.includes(item.label)}
                                  onChange={() => handleBrandToggle(item.label)}
                                  className="w-4 h-4 text-orange-500 bg-gray-800 border-gray-600 rounded focus:ring-orange-500 focus:ring-2"
                                />
                              </div>
                              <span className="text-gray-300 group-hover:text-white">{item.label}</span>
                            </div>
                            <span className="text-sm text-gray-500">{item.count}</span>
                          </label>
                        ))}
                      </div>
                    )}


                    {activeFilter === "Sound-absorbing deck" && (
                      <div className="space-y-3">
                        {soundDeckOptions.map((item, i) => (
                          <label
                            key={i}
                            className="flex items-center justify-between py-2 cursor-pointer group"
                          >
                            <div className="flex items-center gap-3">
                              <input
                                type="checkbox"
                                checked={selectedFeatures.includes(item.label)}
                                onChange={() => handleFeatureToggle(item.label)}
                                className="w-4 h-4 text-orange-500 bg-gray-800 border-gray-600 rounded focus:ring-orange-500 focus:ring-2"
                              />
                              <span className="text-gray-300 group-hover:text-white">{item.label}</span>
                            </div>
                            <span className="text-sm text-gray-500">{item.count}</span>
                          </label>
                        ))}
                      </div>
                    )}



                    {/* Placeholder for other filters */}

                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-gray-700 space-y-3">
              <button
                onClick={clearAllFilters}
                className="w-full py-3 border border-gray-600 text-gray-300 rounded-lg hover:border-orange-500 hover:text-orange-500 transition"
              >
                Rensa filter
              </button>
              <button
                onClick={() => setFilterOpen(false)}
                className="w-full py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition font-semibold"
              >
                Visa {filteredProducts.length} säkträffar
              </button>
            </div>
          </div>
        </>
      )}

      {/* Trademark Modal */}
      {trademarkModalOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={() => setTrademarkModalOpen(false)}
          ></div>

          {/* Modal */}
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                    bg-gradient-to-br from-gray-900 to-black border border-gray-700 
                    rounded-xl shadow-2xl w-full max-w-md z-50">

            {/* Header */}
            <div className="flex justify-between items-center px-5 py-4 border-b border-gray-700">
              <div>
                <h3 className="text-lg font-bold text-white">Trademark</h3>
                <p className="text-gray-400 text-xs mt-0.5">
                  Select the brands to filter products
                </p>
              </div>
              <button
                onClick={() => setTrademarkModalOpen(false)}
                className="p-1.5 rounded-md hover:bg-gray-800 transition"
              >
                <X size={20} className="text-gray-400" />
              </button>
            </div>

            {/* Options List */}
            <div className="overflow-y-auto max-h-[55vh] divide-y divide-gray-700 px-5 py-3">
              {VarumärkeOptions.map((item, index) => (
                <label
                  key={index}
                  className="flex justify-between items-center py-3 hover:bg-gray-800 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={selectedBrands.includes(item.label)}
                      onChange={() => handleBrandToggle(item.label)}
                      className="w-5 h-5 text-orange-500 border-gray-600 rounded focus:ring-orange-500"
                    />
                    <span className="font-medium text-white">{item.label}</span>
                  </div>
                  <span className="bg-gray-800 text-gray-400 text-sm px-2 py-0.5 rounded-full">
                    {item.count}
                  </span>
                </label>
              ))}
            </div>

            {/* Footer */}
            <div className="px-5 py-4 border-t border-gray-700 bg-gray-800/50 rounded-b-xl flex justify-between items-center">
              <button
                onClick={clearAllFilters}
                className="text-sm font-medium text-orange-500 hover:underline"
              >
                Clear filters
              </button>
              <button
                onClick={() => setTrademarkModalOpen(false)}
                className="bg-orange-500 text-white font-semibold px-5 py-2 rounded-lg hover:bg-orange-600 transition"
              >
                Show {filteredProducts.length} search results
              </button>
            </div>
          </div>
        </>
      )}


      {/* Enhanced Price Modal with proper dragging and input handling */}
      {priceModalOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={() => setPriceModalOpen(false)}
          ></div>

          {/* Modal */}
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-xl shadow-2xl w-full max-w-md z-50">

            {/* Header */}
            <div className="flex justify-between items-center px-5 py-4 border-b border-gray-700">
              <div>
                <h3 className="text-lg font-bold text-white">Prisspann</h3>
                <p className="text-gray-400 text-xs mt-0.5">
                  Justera prisspannet för att filtrera produkter
                </p>
              </div>
              <button
                onClick={() => setPriceModalOpen(false)}
                className="p-1.5 rounded-md hover:bg-gray-800 transition"
              >
                <X size={20} className="text-gray-400" />
              </button>
            </div>

            {/* Body */}
            <div className="p-5">
              {/* Price Display */}
              <div className="flex justify-between items-center mb-5">
                <div className="text-center">
                  <p className="text-gray-400 text-xs">Lägsta pris</p>
                  <p className="text-lg font-bold text-orange-500">
                    {modalPriceRange[0].toLocaleString()} SEK
                  </p>
                </div>
                <div className="w-6 h-px bg-gray-600 mx-2"></div>
                <div className="text-center">
                  <p className="text-gray-400 text-xs">Högsta pris</p>
                  <p className="text-lg font-bold text-orange-500">
                    {modalPriceRange[1].toLocaleString()} SEK
                  </p>
                </div>
              </div>

              {/* Histogram */}
              <div className="relative w-full h-20 mb-5 bg-gray-800 rounded-lg p-2">
                <div className="absolute inset-2 flex items-end gap-0.5">
                  {Array.from({ length: 40 }, (_, i) => {
                    const height = 10 + Math.sin(i * 0.3) * 20 + Math.random() * 10;
                    const isInRange = i >= (leftPercent / 100) * 40 && i <= (rightPercent / 100) * 40;
                    return (
                      <div
                        key={i}
                        className={`flex-1 rounded-t transition-all duration-300 ${isInRange
                            ? "bg-gradient-to-t from-orange-500 to-orange-600"
                            : "bg-gradient-to-t from-gray-600 to-gray-700"
                          }`}
                        style={{ height: `${height}%` }}
                      ></div>
                    );
                  })}
                </div>
                <div
                  className="absolute top-0 bottom-0 bg-orange-500/10 border-l-2 border-r-2 border-orange-500 pointer-events-none transition-all"
                  style={{
                    left: `${leftPercent}%`,
                    width: `${rightPercent - leftPercent}%`,
                  }}
                ></div>
              </div>

              {/* Enhanced Range Slider */}
              <div className="relative mb-5">
                {/* Track */}
                <div className="absolute w-full h-1.5 bg-gray-700 rounded-full"></div>

                {/* Active Range */}
                <div
                  className="absolute h-1.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"
                  style={{
                    left: `${leftPercent}%`,
                    width: `${rightPercent - leftPercent}%`,
                  }}
                ></div>

                {/* Dual Range Inputs */}
                <div className="relative">
                  <input
                    type="range"
                    min={min}
                    max={max}
                    value={modalPriceRange[0]}
                    onChange={(e) => handleModalPriceChange(0, e.target.value)}
                    className="absolute w-full h-2 opacity-0 cursor-pointer z-20"
                  />
                  <input
                    type="range"
                    min={min}
                    max={max}
                    value={modalPriceRange[1]}
                    onChange={(e) => handleModalPriceChange(1, e.target.value)}
                    className="absolute w-full h-2 opacity-0 cursor-pointer z-10"
                  />

                  {/* Custom Thumb for Min */}
                  <div
                    className="absolute top-1/2 w-4 h-4 bg-white border-3 border-orange-500 rounded-full shadow-md transform -translate-y-1/2 -translate-x-1/2 cursor-grab active:cursor-grabbing z-30 transition-transform hover:scale-110"
                    style={{ left: `${leftPercent}%` }}
                  >
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white text-[10px] px-1.5 py-0.5 rounded whitespace-nowrap">
                      {modalPriceRange[0].toLocaleString()} SEK
                    </div>
                  </div>

                  {/* Custom Thumb for Max */}
                  <div
                    className="absolute top-1/2 w-4 h-4 bg-white border-3 border-orange-500 rounded-full shadow-md transform -translate-y-1/2 -translate-x-1/2 cursor-grab active:cursor-grabbing z-30 transition-transform hover:scale-110"
                    style={{ left: `${rightPercent}%` }}
                  >
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white text-[10px] px-1.5 py-0.5 rounded whitespace-nowrap">
                      {modalPriceRange[1].toLocaleString()} SEK
                    </div>
                  </div>
                </div>
              </div>

              {/* Price Input Fields */}
              <div className="grid grid-cols-2 gap-4 mt-10">
                <div>
                  <label className="block text-xs text-gray-400 mb-1 font-medium">
                    Lägsta pris (SEK)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={modalPriceRange[0]}
                      min={min}
                      max={modalPriceRange[1]}
                      onChange={(e) => handleModalPriceChange(0, e.target.value)}
                      className="w-full pl-3 pr-2 py-2 bg-gray-800 border border-gray-600 rounded text-sm text-white focus:outline-none focus:border-orange-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1 font-medium">
                    Högsta pris (SEK)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={modalPriceRange[1]}
                      min={modalPriceRange[0]}
                      max={max}
                      onChange={(e) => handleModalPriceChange(1, e.target.value)}
                      className="w-full pl-3 pr-2 py-2 bg-gray-800 border border-gray-600 rounded text-sm text-white focus:outline-none focus:border-orange-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-5 py-4 border-t border-gray-700 bg-gray-800/50 rounded-b-xl">
              <div className="flex justify-between items-center">
                <button
                  onClick={resetModalPriceRange}
                  className="px-4 py-2 text-orange-500 border border-orange-500 rounded-lg hover:bg-orange-500/10 transition text-sm"
                >
                  Återställ filter
                </button>
                <div className="flex gap-2">
                  <button
                    onClick={() => setPriceModalOpen(false)}
                    className="px-4 py-2 text-gray-300 border border-gray-600 rounded-lg hover:border-gray-400 transition text-sm"
                  >
                    Avbryt
                  </button>
                  <button
                    onClick={applyModalPriceRange}
                    className="px-5 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition text-sm font-semibold shadow-md shadow-orange-500/25"
                  >
                    Använd filter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Main Content Container */}
      <div className="px-2 md:px-3 lg:px-4 py-6">
        {/* Breadcrumb */}
        <p className="text-sm text-gray-400 mb-4">
          <Link to="/" className="hover:underline text-gray-400">
            Deck
          </Link>{" "}
          &gt; <span className="text-white">Sommardäck</span>
        </p>

        {/* Title & Description */}
        <h1 className="text-3xl font-semibold mb-2 text-white">Sommardäck</h1>
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

        {/* Filters */}
        <div className="flex items-center gap-3 mt-8 mb-4">
          <button
            onClick={() => {
              setFilterOpen(true);
              setActiveFilter(null);
            }}
            className="px-4 py-2 border border-gray-600 rounded-lg bg-[#1a1a1a] text-gray-300 shadow-sm hover:border-orange-500 transition flex items-center gap-2"
          >
            <SlidersHorizontal size={16} />
            Alla filter
          </button>
          <button
            onClick={() => setTrademarkModalOpen(true)}
            className="px-4 py-2 border border-gray-600 rounded-lg bg-[#1a1a1a] text-gray-300 shadow-sm hover:border-orange-500 transition"
          >
            Varumärke
          </button>

          <button
            onClick={() => setPriceModalOpen(true)}
            className="px-4 py-2 border border-gray-600 rounded-lg bg-[#1a1a1a] text-gray-300 shadow-sm hover:border-orange-500 transition"
          >
            Pris
          </button>

        </div>
        <hr className="border-t border-gray-700 mb-4" />

        {/* Active Filters Display */}
        {(selectedBrands.length > 0 || selectedFeatures.length > 0 || priceRange[0] > 1000 || priceRange[1] < 10000) && (
          <div className="flex flex-wrap gap-2 mb-4">
            {selectedBrands.map(brand => (
              <span key={brand} className="px-3 py-1 bg-orange-500/20 text-orange-500 rounded-full text-sm flex items-center gap-2">
                {brand}
                <button onClick={() => handleBrandToggle(brand)}>×</button>
              </span>
            ))}
            {selectedFeatures.map(feature => (
              <span key={feature} className="px-3 py-1 bg-orange-500/20 text-orange-500 rounded-full text-sm flex items-center gap-2">
                {feature}
                <button onClick={() => handleFeatureToggle(feature)}>×</button>
              </span>
            ))}
            {(priceRange[0] > 1000 || priceRange[1] < 10000) && (
              <span className="px-3 py-1 bg-orange-500/20 text-orange-500 rounded-full text-sm flex items-center gap-2">
                {priceRange[0].toLocaleString()} - {priceRange[1].toLocaleString()} SEK
                <button onClick={() => setPriceRange([1000, 10000])}>×</button>
              </span>
            )}
            <button
              onClick={clearAllFilters}
              className="text-orange-500 text-sm hover:underline"
            >
              Clear all
            </button>
          </div>
        )}

        {/* Sorting and View Toggle */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-400">{sortedProducts.length} Products</p>
          <div className="flex items-center gap-3">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 border border-gray-600 rounded-md bg-[#1a1a1a] text-white text-sm"
            >
              <option value="most-visited">Most visited</option>
              <option value="lowest-price">Lowest price</option>
              <option value="highest-price">Highest price</option>
            </select>
            <div className="flex gap-1">
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 border rounded-md transition ${viewMode === "list"
                  ? "border-orange-500 bg-orange-500/20 text-orange-500"
                  : "border-gray-600 bg-[#1a1a1a] text-gray-400 hover:border-gray-400"
                  }`}
              >
                <List size={16} />
              </button>
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 border rounded-md transition ${viewMode === "grid"
                  ? "border-orange-500 bg-orange-500/20 text-orange-500"
                  : "border-gray-600 bg-[#1a1a1a] text-gray-400 hover:border-gray-400"
                  }`}
              >
                <Grid size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Products - Grid View */}
        {viewMode === "grid" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sortedProducts.map((product) => (
              <ProductGridCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {/* Products - List View - Responsive */}
        {viewMode === "list" && (
          <div className="space-y-4">
            {sortedProducts.map((product) => (
              <ProductListCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {/* No results message */}
        {sortedProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg mb-4">No products match your filters</p>
            <button
              onClick={clearAllFilters}
              className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>

      {/* Rest of the components remain the same */}
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
          Vanliga frågor om däck
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

// Add missing icons
const ChevronRight = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const ChevronLeft = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

export default SummerTyresPage;
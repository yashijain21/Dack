import { useState } from "react";
import { ChevronDown, ChevronUp, Info, X } from "lucide-react";
import productImage from "../assets/Product/product-image.avif";
import euClassificationImage from "../assets/Product/product-faq.svg";

export default function TireProductPage() {
    const [openSection, setOpenSection] = useState(null);
    const [selectedTerm, setSelectedTerm] = useState(null);
    const [selectedQuestion, setSelectedQuestion] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("Alla frågor");
    const [showFitModal, setShowFitModal] = useState(false);

    // JSON DATA
    const productData = {
        id: 1,
        name: "GoodYear Eagle F1 Asymmetric 6",
        category: "Sommardäck",
        price: 2007,
        currency: "kr",
        unit: "/st",
        image: productImage,
        details:
            "Designat för att leverera utmärkt prestanda på både torra och våta vägar. Med responsiv manövrering och adaptivt grepp är detta däck perfekt för dig som vill ha full kontroll oavsett väder.",
        extraFees: [
            {
                icon: "🛠️",
                text: "Montering och balansering tillkommer med 395 kr/däck",
            },
            {
                icon: "♻️",
                text: "Miljöavgift på 25 kr/däck tillkommer (Återvinningsavg. PV-däck)",
            },
        ],
        sections: [
            "Specifikationer",
            "Köpvillkor",
            "Vanliga frågor",
            "EU-klassificering",
        ],

        specifications: {
            "Däckmärke": "GoodYear",
            "Modell": "Eagle F1 Asymmetric 6",
            "Däckstorlek": "225/45R17",
            "Kategori": "Sommardäck",
            "Garanti": "1 års garanti",
            "Säsong": "Sommar",
            "Punkteringsfritt däck": "Nej",
            "Förstärkt däck": "Nej",
            "Passar typ av bil": "Personbil",
            "Däckstorlek - Bredd": "225 mm",
            "Däckstorlek - Profil": "45 % av bredd",
            "Däckstorlek - Diameter": "R17 tum",
            "Belastningsindex": "91",
            "Hastighetsindex": "Y",
            "Rullmotstånd": "C",
            "Våtgrepp": "A",
            "Ljudnivå": "69 dB",
            "Vikt": "9.12 kg",
            "Bilias artikelnummer": "VX GYS721235",
            "Tillverkarens artikelnummer": "721235",
            "EAN-kod / GTIN13": "4038526475282",
        },

        faqs: {
            "Alla frågor": [
                {
                    q: "Passar produkten min bil?",
                    a: "Vi erbjuder filtrering med hjälp av registreringsnummer. På registreringsnummer hittar vi oftast alla giltiga dimensioner, hastighetsindex och lastindex till din bilmodell men vi kan inte garantera att den förvalda dimensionen i webshopen sitter på just din bil. Vi rekommenderar därför att alltid dubbelkolla märkningen på dina däck och ändra vald dimension i webbshopen så att du köper däck som passar bilen.För dig som har däckhotell scannas däcken vid ankomst. Den förvalda dimensionen i webbshopen använder detta värde.",
                },
                {
                    q: "Vad är passningsgaranti?",
                    a: "När du köper nya däck hos Speedy Tyres med Monterat och klart garanterar vi att däcken du har beställt passar din bil och följer alla lagkrav. När du anger registreringsnummer till din bil får vi uppgifter om dimensioner, hastighetsindex och lastindex. Men det är inte helt säkert att det är den förvalda dimensionen som sitter på din bil just nu.Med vår passningsgaranti kan du känna dig trygg med att vi kostnadsfritt byter däcken till rätt dimension, om det mot förmodan är fel dimension på däcken du beställt.",
                },
            ],
            Produkt: [
                { q: "Passar produkten min bil?", a: "Vi erbjuder filtrering med hjälp av registreringsnummer. När du anger ditt registreringsnummer hittar vi vanligtvis alla giltiga dimensioner, hastighetsindex och lastindex för din bilmodell. Däremot kan vi inte garantera att den dimension som är förvald i webshopen alltid stämmer överens med de däck som faktiskt sitter på din bil idag. Därför rekommenderar vi att du alltid dubbelkollar märkningen på dina nuvarande däck och vid behov justerar vald dimension i webshopen, så att du får däck som verkligen passar din bil.Om du har däckhotell hos Speedy Tyres scannar vi dina däck vid ankomst. Den dimension som sedan visas som förvald i webshopen baseras på denna information." },
                { q: "Vad är passningsgaranti?", a: "När du köper nya däck hos Speedy Tyres med ”Monterat och klart” garanterar vi att däcken du beställt passar din bil och uppfyller alla lagkrav. När du anger registreringsnumret till din bil får vi fram uppgifter om dimensioner, hastighetsindex och lastindex. Det är dock inte alltid säkert att den förvalda dimensionen motsvarar de däck som sitter på din bil just nu. Med vår passningsgaranti kan du känna dig trygg – vi byter kostnadsfritt till rätt dimension om det mot förmodan skulle visa sig att de beställda däcken inte passar." },
            ],
            "Monterat och klart": [
                { q: "Vad ingår i monterat och klart?", a: "Vi monterar av hjulen och demonterar de gamla däcken. Därefter monteras och balanseras dina nya däck på fälgarna, och vi fyller dem med rätt lufttryck. När allt är klart återmonteras hjulen på bilen. Arbetet tar ungefär 1,5 timme. Ofta kombineras detta även med ett säsongsskifte av hjulen som sitter på bilen.Allt detta ingår i priset. Vi rekommenderar dock att du även väljer till en hjulvinkelkontroll och vid behov en hjulinställning. På så sätt undviker du felaktigt slitage och får ut maximal livslängd av dina nya däck.Vill du att jag bygger in denna text som en informationspunkt under 'Monterat och klart' i FAQ, eller ska den ligga som en egen sektion på produktsidan?" },
                { q: "Vad ingår i monteringsavgiften?", a: "För montering och balansering tillkommer en kostnad på 560 kr per däck. I priset ingår demontering av hjul och befintliga däck, montering och balansering av de nya däcken samt påfyllning av korrekt däcktryck. Om det är dags för säsongsskifte byter vi även däcken i samband med monteringen." },

            ],
            Däckhotell: [
                { q: "Hur mycket rabatt får jag som däckhotellskund när jag köper nya däck? ", a: "Som däckhotellskund får du alltid 15% rabatt på nya sommar- och vinterdäck." },
                { q: "Hur gör jag för att köpa nya däck till mina hjul på däckhotellet?", a: "Om du har däckhotell och beställer däck till hjulen som ligger på hotellet skickas din beställning automatiskt vidare till montering. När däckbytet är utfört får du en betalningslänk utskickad av däckhotellet." },

            ],
            Betalning: [
                { q: "Kan jag betala mitt verkstadsbesök med CarPay?", a: "Ja, har du bokat monterat & klart och haft din bil inne hos oss eller fått en betalningslänk från däckhotellet kan du betala din verkstadsnota med CarPay-appen. Självklart går det bra att även betala med ditt Biliakort också." },
            ],
            Ångerrätt: [
                { q: "Hur ombokar eller avbokar jag en beställning?", a: "För att om- eller avboka kontaktar du oss på kundservice. Då kan vi hjälpa dig att hitta en ny tid som förhoppningsvis passar bättre. Du kan nå oss på 0313951200 eller Info@speedy-tyres.se." },
            ],
        },

        terms: {
            "Allmänt": "På webbplatsen erbjuder Speedy Tyres konsumenter och företag möjlighet ...",
            "Avtal": "För att kunna göra en beställning eller tidsbokning på Webbplatsen behöver du acceptera villkoren ...",
            "Priser, avgifter och betalning": "Vid beställning eller tidsbokning gäller de priser som anges ...",
            "Kampanjer och erbjudanden": "Vi kan från tid till annan erbjuda kampanjer som kan ha förmånligare villkor ...",
            "Tjänster": "Speedy Tyres erbjuder ett flertal olika tjänster såsom däckbyte ...",
            "Ångerrätt för konsumenter vid distansavtal": "Vid distansavtal har du 14 dagars ångerrätt ...",
            "Garanti": "Vi lämnar ett (1) års garanti på varor ...",
            "Reklamation": "Du som är konsument har alltid rätt att reklamera fel i varor ...",
            "Ansvarsbegränsning - näringsidkare": "En kund som är ett företag har utöver prisavdrag inte rätt till ersättning ...",
            "Produktinformation m.m": "Vi på Speedy Tyres reserverar oss för slutförsäljning ...",
            "Personuppgifter": "Speedy Tyres är personuppgiftsansvarig för behandlingen av dina personuppgifter ...",
            "Övrigt": "Speedy Tyres har antagit en uppförandekod som alla medarbetare ska följa ...",
        },
    };

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    return (
        <div className="bg-black min-h-screen p-4 sm:p-6 poppins-regular text-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
                {/* Left: Tire Image + Sections */}
                <div className="lg:col-span-7 space-y-4 sm:space-y-6">
                    {/* Tire Image */}
                    <div className="bg-[#0d0d0d] rounded-md shadow flex items-center justify-center border border-orange-600">
                        <img
                            src={productData.image}
                            alt={productData.name}
                            className="rounded-xl object-contain w-full h-full max-h-[400px] sm:max-h-[500px] lg:max-h-[600px] p-4"
                        />
                    </div>

                    {/* Product Details Section */}
                    <div className="w-full bg-[#0d0d0d] shadow p-4 sm:p-6 border border-orange-600 rounded-md">
                        <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-orange-500">
                            Produktinformation
                        </h2>
                        <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">{productData.details}</p>

                        {/* Expandable Sections */}
                        <div className="space-y-2 sm:space-y-3">
                            {productData.sections.map((section, idx) => (
                                <div key={idx} className="border-b border-gray-700">
                                    <button
                                        onClick={() => toggleSection(section)}
                                        className="w-full flex justify-between items-center px-3 sm:px-4 py-2 sm:py-3 text-left text-base sm:text-lg font-medium hover:bg-gray-800 transition-colors"
                                    >
                                        <span className="text-sm sm:text-base">{section}</span>
                                        {openSection === section ? (
                                            <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 flex-shrink-0" />
                                        ) : (
                                            <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 flex-shrink-0" />
                                        )}
                                    </button>

                                    {openSection === section && (
                                        <div className="px-3 sm:px-4 pb-3 sm:pb-4 text-gray-300 text-sm">
                                            {/* Specifikationer */}
                                            {section === "Specifikationer" ? (
                                                <div>
                                                    <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">
                                                        {productData.name}
                                                    </h3>
                                                    <div className="divide-y divide-gray-700 border border-gray-700 rounded-md overflow-hidden">
                                                        {Object.entries(productData.specifications).map(
                                                            ([key, value], i) => (
                                                                <div
                                                                    key={i}
                                                                    className="grid grid-cols-2 bg-[#111] even:bg-[#1a1a1a] text-xs sm:text-sm"
                                                                >
                                                                    <div className="p-2 sm:p-3 font-medium flex items-center gap-1 break-words">
                                                                        {key}
                                                                        {(key === "Däckstorlek" ||
                                                                            key === "Punkteringsfritt däck" ||
                                                                            key === "Förstärkt däck") && (
                                                                                <Info className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0" />
                                                                            )}
                                                                    </div>
                                                                    <div className="p-2 sm:p-3 text-right break-words">{value}</div>
                                                                </div>
                                                            )
                                                        )}
                                                    </div>
                                                </div>
                                            ) : section === "Köpvillkor" ? (
                                                <ul className="space-y-2 sm:space-y-3">
                                                    {Object.keys(productData.terms).map((term, i) => (
                                                        <li
                                                            key={i}
                                                            onClick={() => setSelectedTerm(term)}
                                                            className="cursor-pointer text-orange-400 hover:text-orange-500 underline text-sm sm:text-base"
                                                        >
                                                            {term}
                                                        </li>
                                                    ))}
                                                </ul>
                                            ) : section === "Vanliga frågor" ? (
                                                <div>
                                                    {/* FAQ Tabs */}
                                                    <div className="flex overflow-x-auto gap-1 sm:gap-2 mb-3 sm:mb-4 pb-2 scrollbar-hide">
                                                        {Object.keys(productData.faqs).map((cat) => (
                                                            <button
                                                                key={cat}
                                                                onClick={() => setSelectedCategory(cat)}
                                                                className={`px-2 sm:px-3 py-1 sm:py-1 rounded text-xs sm:text-sm whitespace-nowrap flex-shrink-0 ${selectedCategory === cat
                                                                    ? "bg-orange-600 text-white"
                                                                    : "bg-gray-700 text-gray-300"
                                                                    }`}
                                                            >
                                                                {cat}
                                                            </button>
                                                        ))}
                                                    </div>
                                                    {/* FAQ List */}
                                                    <ul className="space-y-2 sm:space-y-3">
                                                        {productData.faqs[selectedCategory].map(
                                                            (faq, i) => (
                                                                <li
                                                                    key={i}
                                                                    onClick={() => setSelectedQuestion(faq)}
                                                                    className="cursor-pointer text-orange-400 hover:text-orange-500 underline text-sm sm:text-base"
                                                                >
                                                                    {faq.q}
                                                                </li>
                                                            )
                                                        )}
                                                    </ul>
                                                </div>
                                            ) : section === "EU-klassificering" ? (
                                                <div className="flex items-center justify-center">
                                                    <img
                                                        src={euClassificationImage}
                                                        alt="EU-klassificering"
                                                        className="max-w-full h-auto rounded-lg"
                                                    />
                                                </div>
                                            ) : (
                                                <p>Här kommer information om {section.toLowerCase()}.</p>
                                            )}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right: Sticky Product Info */}
                <div className="lg:col-span-5">
                    <div className="bg-[#0d0d0d] rounded-md shadow p-4 sm:p-6 flex flex-col sticky top-4 sm:top-6 border border-orange-600">
                        {/* Product name */}
                        <h1 className="text-xl sm:text-2xl font-semibold mb-2">{productData.name}</h1>

                        {/* Category badge */}
                        <div className="mb-3 sm:mb-4">
                            <span className="inline-block border-white border text-white text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full">
                                {productData.category}
                            </span>
                        </div>

                        {/* Button */}
                        <div className="mb-3 sm:mb-4">
                            <button
                                onClick={() => setShowFitModal(true)}
                                className="w-full bg-orange-600 text-white px-4 py-3 rounded-lg hover:bg-orange-700 transition text-sm sm:text-base"
                            >
                                Kontrollera om däcken passar
                            </button>
                        </div>

                        {/* Price */}
                        <p className="text-xl sm:text-2xl font-bold mb-2">
                            {productData.price.toLocaleString()} {productData.currency}
                            <span className="text-sm sm:text-base font-medium">{productData.unit}</span>
                        </p>

                        {/* Extra fees */}
                        {productData.extraFees.map((fee, idx) => (
                            <p
                                key={idx}
                                className="text-gray-400 text-xs sm:text-sm flex items-start gap-2 mb-1"
                            >
                                <span className="flex-shrink-0">{fee.icon}</span>
                                <span>{fee.text}</span>
                            </p>
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal for Köpvillkor */}
            {selectedTerm && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
                    <div className="bg-[#111] rounded-lg shadow-lg w-full max-w-2xl max-h-[80vh] p-4 sm:p-6 relative flex flex-col">
                        <button
                            onClick={() => setSelectedTerm(null)}
                            className="absolute top-2 right-2 sm:top-3 sm:right-3 text-gray-400 hover:text-white"
                        >
                            <X className="w-5 h-5 sm:w-6 sm:h-6" />
                        </button>
                        <h2 className="text-lg sm:text-xl font-semibold text-orange-500 mb-3 sm:mb-4">
                            {selectedTerm}
                        </h2>
                        <div className="text-gray-300 overflow-y-auto pr-2 custom-scrollbar text-sm sm:text-base">
                            <p>{productData.terms[selectedTerm]}</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal for FAQ */}
            {selectedQuestion && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
                    <div className="bg-[#111] rounded-lg shadow-lg w-full max-w-2xl max-h-[80vh] p-4 sm:p-6 relative flex flex-col">
                        <button
                            onClick={() => setSelectedQuestion(null)}
                            className="absolute top-2 right-2 sm:top-3 sm:right-3 text-gray-400 hover:text-white"
                        >
                            <X className="w-5 h-5 sm:w-6 sm:h-6" />
                        </button>
                        <h2 className="text-lg sm:text-xl font-semibold text-orange-500 mb-3 sm:mb-4">
                            {selectedQuestion.q}
                        </h2>
                        <div className="text-gray-300 overflow-y-auto pr-2 custom-scrollbar text-sm sm:text-base">
                            <p>{selectedQuestion.a}</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal for Kontrollera om däcken passar */}
            {showFitModal && (
                <div className="fixed inset-0 poppins-regular bg-black/70 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-xl shadow-lg w-full max-w-2xl p-4 sm:p-6 md:p-8 relative">
                        {/* Close button */}
                        <button
                            onClick={() => setShowFitModal(false)}
                            className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-400 hover:text-black"
                        >
                            <X className="w-5 h-5 sm:w-6 sm:h-6" />
                        </button>

                        {/* Title */}
                        <h2 className="text-lg sm:text-xl font-semibold text-center text-black mb-4 sm:mb-6">
                            Hitta rätt däck till din bil
                        </h2>

                        {/* Label */}
                        <label className="block text-sm font-medium text-gray-800 mb-2">
                            Fyll i ditt registreringsnummer
                        </label>

                        {/* License plate input */}
                        <div className="flex items-center border border-gray-300 rounded-md overflow-hidden mb-4 sm:mb-6">
                            {/* EU + S plate section */}
                            <div className="bg-blue-700 flex flex-col items-center justify-center px-2 sm:px-3 py-1 sm:py-2 text-white font-semibold">
                                <span className="text-xs">EU</span>
                                <span className="text-base sm:text-lg font-bold">S</span>
                            </div>
                            {/* Input */}
                            <input
                                type="text"
                                placeholder="ABC 123"
                                className="flex-1 px-3 sm:px-4 py-2 sm:py-3 text-base sm:text-lg text-gray-800 placeholder-gray-400 focus:outline-none"
                            />
                        </div>

                        {/* Manual size entry */}
                        <div className="text-center">
                            <button className="text-orange-600 hover:text-orange-700 text-sm sm:text-base">
                                Eller välj däckstorlek manuellt →
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
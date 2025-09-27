// src/components/FAQ.jsx
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Hur vet jag att jag behöver köpa nya däck?",
    answer: {
      heading: "Du bör byta ut dina däck om de:",
      points: [
        "Har för lågt mönsterdjup.",
        "Är mer än tio år gamla.",
        "Har synliga eller osynliga skador.",
        "Är snedslitna.",
      ],
    },
  },
  {
    question: "Behöver elbilar särskilda däck?",
    answer: [
      "Laddbara bilar är ofta tyngre än bränsledrivna bilar, eftersom de är utrustade med tunga batterier. Fel sorts däck kan leda till en farligt lång bromssträcka. Därför är det viktigt att du väljer däck som är optimerade för att ha bästa möjliga väggrepp. Förutom att de väger mer har elbilar ofta högre vridmoment och accelerationsförmåga än bränsledrivna bilar. Allt detta ställer högre krav på robusta och extra slitstarka däck.",
      "Samtidigt som däcken måste ha bra bromsförmåga behöver de även ha ett lågt rullmotstånd. Ju lägre rullmotstånd däcken har, desto längre räckvidd får bilen – en viktig fråga för många elbilsförare. En annan efterfrågad egenskap för däck till elbilar är låg ljudnivå. Eftersom elbilar är tystare än bränsledrivna bilar kan ljudet från däcken lätt bli störande i kupén.",
      "Många däcktillverkare skriver ”EV” i produktnamnet på däck som är anpassade för elbilar.",
    ],
  },
  {
    question: "När ska man ha vinterdäck?",
    answer:
      "Från 1 december till 31 mars måste vinterdäck användas vid vinterväglag. Vinterväglag innebär underlag som snö, is, snömodd eller frost på hela eller delar av vägbanan. Dubbdäck får användas mellan 1 oktober och 15 april. Befaras det bli vinterväglag är det lagligt att köra med dubbdäck efter 15 april och innan 1 oktober.",
  },
  {
    question: "Jag vill köpa lösa däck, hur gör jag då?",
    answer:
      "Alla däck i vår webbshop behöver montering och balansering på din befintliga eller nya fälg. För tillfället kan du inte köpa lösa däck utan montering hos oss på bilia.se, däremot kan du besöka din anläggning för att hitta lösa däck dom kan ha lokalt på plats. Dem däcken kan du köpa löst.",
  },
  {
    question: "Hur påverkar däcken bilens egenskaper?",
    answer: [
      "För att bibehålla bilens egenskaper är det bra att välja det däckmärke och modell som bilen utrustades med från fabrik. Men du kan också byta till ett annat varumärke och dimension som biltillverkaren rekommenderar.",
      "Med hjälp av ditt registreringsnummer kan du se vilken dimension som suttit på din bil från fabriken. Du kan även välja att se vilka andra dimensioner som passar till din bil. Om du skall vara helt säker på att du beställer rätt så kontrollera dimensionen på dina befintliga däck.",
    ],
  },
  {
    question: "Hur påverkar vädret väglaget?",
    answer:
      "Vårt nordiska, och mycket varierande, klimat ställer höga krav på däcken. Regn ökar risken för vattenplaning, samtidigt som sikten minskar dramatiskt. Och på våta vägar är bromssträckan upp emot tre gånger så lång som på torrt väglag. Särskilt på vintern sätter vädret däcken på prov. Välj därför däck utefter det väglag du mestadels kör på – vått, torrt, slask, is eller snö.",
  },
  {
    question: "Hur påverkar mitt körsätt däckens hållbarhet?",
    answer: [
      "Ligger du länge på landsväg eller växlar du mellan motorväg och att sitta still i stadstrafiken? Ditt körsätt avgör val av däck. Kör du långa sträckor kan det vara skönt med ett däck som ger bästa möjliga komfort.",
      "Ett däck med bra rullmotstånd sänker bränsleförbrukningen vilket minskar påverkan på miljön. Kör du mycket i trafikerade miljöer bör du välja ett däck med den bästa bromssträckan. Och givetvis är däck med lång livslängd alltid värdefullt.",
      "Tänk också på att ta väl hand om dina däck. Då håller de mycket längre. Då och då är det bra att kolla däcktryck och mönsterdjup, så däcken är i bra skick.",
    ],
  },
  {
    question: "Varför ska jag inte köra med dubbfria vinterdäck på sommaren?",
    answer:
      "Vinterdäck har mönster och gummiblandning som är anpassade för att fungera på vinterväglag samt när det är kallt ute. På sommaren ger dubbfria vinterdäck sämre väggrepp, längre bromssträcka och försämrad stabilitet vid en undermanöver.",
  },
  {
    question: "Kan jag blanda olika däck på min bil?",
    answer: [
      "Samtliga däck på en personbil ska vara av samma typ, man får alltså inte blanda dubbdäck, dubbfriavinterdäck och sommardäck på bilen.",
      "När det kommer till att ha däck av olika fabrikat eller modell rekommenderar vi att ha likvärdigt grepp på alla fyra hjulen. Men om inte alla däck behöver bytas ut så bör man åtminstone byta parvis. Detta för att de däck som sitter på samma axel ska vara i likvärdigt skick.",
    ],
  },
  {
    question: "Hur länge kan jag lagra mina däck?",
    answer:
      "Nya däck som lagras rätt åldras först när du använder dem. Du kan tryggt köpa däck som är några år gamla. Mellan säsongerna ska däcken förvaras i svalt, mörkt och torrt utrymme utan kontakt med lösningsmedel så som olja, bensin eller smörjmedel.",
  },
  {
    question: "När behöver jag göra en hjulinställning?",
    answer: [
      "När du köper nya däck är det extra viktigt att göra en hjulvinkelkontroll och eventuell inställning för att du inte ska få snedslitage på dina nya däck.",
      "Vår rekommendation är att göra en hjulinställning en gång per år eller var 1.500 mil. Värt att tänka på att är om du har råkat köra över en trottoarkant eller liknande kan det vara bra att komma in och göra en hjulvinkelkontroll.",
    ],
  },
  {
    question: "Hur mäter jag mönsterdjupet på mina däck?",
    answer:
      "Mät mönsterdjupet på det mest slitna stället i däckets huvudmönster. Det finns speciella mätstickor man kan använda, men det går lika bra med en tumstock. Se bara upp så att du inte mäter där det finns en slitagevarnare, som är en liten upphöjning på 1,6 mm i huvudmönstret på personbilsdäck.",
  },
  {
    question: "Vad betyder EU-märkningen?",
    answer: [
      "EU har infört en obligatorisk däckmärkning som visar däckets bränsleeffektivitet, våtgrepp (bromsförmåga) och bullernivå. Det gör det enkelt att jämföra olika däck och välja utifrån deras egenskaper.",
      "Vid varje däck får du en överblick över däckets specifika egenskaper på olika väglag. Viktigt att tänka på är dock att klassificeringen inte visar hur bra ett vinterdäck är i nordiska vinterförhållanden. Nordiska, dubbfria vinterdäck är utvecklade för hala vinterväglag på snö och is. Dubbfria vinterdäck för centraleuropeiska förhållanden är mer lämpade för körning i mildare vinterklimat.",
      "På svenska sommarvägar är våtgreppet en viktig faktor, klass A innebär att däcket har bästa möjliga våtgrepp.",
    ],
  },
  {
    question: "Vilka bilmärken byter ni däck på?",
    answer:
      "Just nu kan du köpa däck monterat och klart online för Volvo, Renault, Dacia, Nissan och XPENG. Övriga varumärken hänvisas tillsvidare till kundtjänst.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-black py-8 px-6 poppins-regular relative">
      {/* Section Heading */}
      <h2 className="text-center font-semibold mb-12 text-3xl md:text-4xl text-white uppercase tracking-wide">
        Vanliga frågor om däck
      </h2>

      {/* FAQ List */}
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
  );
};

export default FAQ;

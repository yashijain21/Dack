import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import mechanicImg from "../assets/HeroSection/mechanic.jpg";
import tireImg from "../assets/Services/tyre-closeup.avif"; // 🖼 replace with your actual image path
import Footer from "../Dack/Footer";
import Header from "../Dack/Header";
import tyre from "../assets/Services/tyres.avif";
import wintertyres from "../assets/Services/winter-tyres.avif";
import wintertyresinsummer from "../assets/Services/winter-tyres-in-summer.avif";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import tireHotelImg from "../assets/Services/tire-hotel.webp"; // adjust path if needed





import { Check, CircleGauge, PenTool, Cog } from "lucide-react"; // Icons


const TireIcon = () => (
    <svg
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="icon__svg text-white"
        aria-hidden="true"
    >
        <path
            d="M15 0c4.41 0 8 5.37 8 12s-3.59 12-8 12H8.51C4.65 24 1 18.63 1 12S4.65 0 8.51 0zm-3.87 1.5H8.51c-.8 0-1.62.35-2.4 1h1.14c.41 0 .75.34.75.75S7.66 4 7.25 4H4.77c-.9 1.28-1.62 3-1.99 5h2.47c.41 0 .75.34.75.75s-.34.75-.75.75h-2.5c-.06 0-.12-.01-.17-.03-.06.49-.08 1.01-.08 1.53 0 1.43.18 2.78.5 4h2.25c.41 0 .75.34.75.75s-.34.75-.75.75H3.47c1.15 3.05 3.17 5 5.04 5h2.62c-.66-.54-1.26-1.22-1.79-2.01-.03.01-.06.01-.09.01h-2.5a.75.75 0 110-1.5H8.5c-.7-1.45-1.18-3.15-1.39-5H4.75a.75.75 0 110-1.5h2.26C7 12.33 7 12.17 7 12c0-1.59.21-3.11.58-4.5H5.75a.75.75 0 110-1.5h2.32c.72-1.88 1.78-3.45 3.06-4.5zm3.87 0c-.51 0-1.02.1-1.5.3-2.83 1.12-5 5.34-5 10.2 0 4.86 2.17 9.08 5 10.2.48.2.99.3 1.5.3 3.52 0 6.5-4.81 6.5-10.5S18.52 1.5 15 1.5zm.25 2.5C17.87 4 20 7.58 20 12s-2.13 8-4.75 8c-.09 0-.17 0-.25-.01a3.178 3.178 0 01-1.5-.56c-1.76-1.16-3-4.05-3-7.43s1.24-6.27 3-7.43c.47-.32.97-.51 1.5-.56.08-.01.16-.01.25-.01zm0 1.5c-.08 0-.17.01-.25.03-.52.09-1.04.49-1.5 1.12C12.64 7.79 12 9.72 12 12s.64 4.21 1.5 5.35c.46.63.98 1.03 1.5 1.12.08.02.17.03.25.03 1.53 0 3.25-2.78 3.25-6.5s-1.72-6.5-3.25-6.5z"
            fill="white"
            fillRule="evenodd"
        ></path>
    </svg>
);


const DackHotelIcon = () => (
    <svg
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="icon__svg text-white"
        aria-hidden="true"
    >
        <path
            d="M4 1L2.5 2.5 4 4l1.5-1.5L4 1zm2.5 1.5L8 4l1.5-1.5L8 1 6.5 2.5zm4 0L12 4l1.5-1.5L12 1l-1.5 1.5zm4 0L16 4l1.5-1.5L16 1l-1.5 1.5zm4 0L20 4l1.5-1.5L20 1l-1.5 1.5zM20 4H1v20h22V4h-3zM2.5 5.5h19v17H15V17H9v5.5H2.5v-17zM5 8v2h2V8H5zm4 0v2h2V8H9zm4 0v2h2V8h-2zm4 0v2h2V8h-2zM5 11v2h2v-2H5zm4 0v2h2v-2H9zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2zM5 14v2h2v-2H5zm4 0v2h2v-2H9zm4 0v2h2v-2h-2zM5 17v2h2v-2H5zm12 0v2h2v-2h-2zm-6.5 1.5h3v4h-3v-4z"
            fill="white"
            fillRule="nonzero"
        ></path>
    </svg>
);

const RimRenovationIcon = () => (
    <svg
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="icon__svg text-white"
        aria-hidden="true"
    >
        <path
            d="M15.479 13.069l-.14-.02c.01-.04.031-.089.031-.139.089-.29.13-.591.13-.91 0-.311-.041-.62-.121-.901a.687.687 0 00-.04-.149l.161-.021 6.86-.62c.09.55.14 1.111.14 1.691 0 .58-.05 1.139-.14 1.689l-6.881-.62zm4.271 6.03l-3.14-4.439 5.409.5a10.504 10.504 0 01-2.269 3.939zm-4.031 2.731l-2.899-6.281-.061-.129c.05-.01.09-.021.13-.04a3.522 3.522 0 001.59-.911c.03-.03.07-.07.101-.11l.089.131 3.981 5.649c-.87.701-1.86 1.281-2.931 1.691zM12 22.5a10.7 10.7 0 01-2.281-.25L12 17.33l2.269 4.929c-.729.161-1.489.241-2.269.241zm-6.661-2.361l3.97-5.639.101-.141c.04.04.069.08.109.12a3.6 3.6 0 001.57.901c.05.009.09.03.14.03l-.06.139-2.9 6.281c-1.069-.41-2.06-.99-2.93-1.691zm-3.36-4.979l5.391-.481-3.12 4.42a10.495 10.495 0 01-2.271-3.939zM1.5 12c0-.58.049-1.141.139-1.691l6.851.62.17.021a.639.639 0 00-.04.159c-.08.28-.12.58-.12.891 0 .309.04.62.12.899a.666.666 0 00.04.15l-.151.02-6.87.62C1.549 13.139 1.5 12.58 1.5 12zm2.75-7.101l3.11 4.42-5.381-.479A10.488 10.488 0 014.25 4.899zM8.269 2.17l2.9 6.25.071.16a.87.87 0 00-.16.05 3.425 3.425 0 00-1.561.889c-.04.04-.069.08-.1.12L9.32 9.5 5.339 3.859a10.966 10.966 0 012.93-1.689zM12 1.5c.78 0 1.54.08 2.269.24L12 6.639 9.729 1.75A10 10 0 0112 1.5zM12 14c-.041 0-.071 0-.111-.01a1.973 1.973 0 01-1.569-.91A1.988 1.988 0 0110 12c0-.33.08-.641.219-.91.031-.061.061-.121.101-.17.33-.531.909-.891 1.58-.92h.189c.661.029 1.241.38 1.59.91.03.059.071.119.101.18a1.982 1.982 0 010 1.82c-.03.059-.071.119-.101.18-.34.519-.92.87-1.58.9-.029.01-.069.01-.099.01zm6.65-10.141l-3.99 5.66-.09.111a3.29 3.29 0 00-1.66-1 .713.713 0 00-.16-.05l.07-.16 2.899-6.25c1.071.41 2.061.99 2.931 1.689zm3.369 4.981l-5.399.49 3.13-4.431a10.497 10.497 0 012.269 3.941zM12 0C5.379 0 0 5.38 0 12s5.379 12 12 12c6.61 0 12-5.38 12-12S18.61 0 12 0z"
            fill="white"
            fillRule="evenodd"
        ></path>
    </svg>
);

const WheelAlighmentIcon = () => (
    <svg
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="icon__svg text-white"
        aria-hidden="true"
    >
        <path
            d="M15.035 5a2.5 2.5 0 012.5 2.5v14a2.5 2.5 0 01-2.5 2.5h-6a2.5 2.5 0 01-2.5-2.5v-14a2.5 2.5 0 012.5-2.5h6zM8.034 20.63v.87a1 1 0 001 1l1.5-.001V21.3l-2.5-.67zm4.5-14.131h-1v16h1v-16zm3.5 14.209l-2.49.672-.01-.04v1.159l1.5.001a1 1 0 00.994-.883l.007-.117-.001-.792zm0-3l-2.49.672-.01-.04v2l2.5-.672v-1.96zm-8-.078v1.96l2.5.67V18.3l-2.5-.67zm8-2.922l-2.49.672-.01-.04v2l2.5-.672v-1.96zm-8-.078v1.96l2.5.67V15.3l-2.5-.67zm8-2.922l-2.49.672-.01-.04v2l2.5-.671v-1.961zm-8-.078v1.961l2.5.669V12.3l-2.5-.67zm8-2.922l-2.49.672-.01-.04v2l2.5-.672v-1.96zm-8-.078v1.96l2.5.67V9.3l-2.5-.67zm7-2.13l-1.5-.001V8.34l2.5-.672V7.5a1 1 0 00-.883-.993l-.116-.007zm-4.5-.001l-1.5.001a1 1 0 00-1 1v.09l2.5.67V6.499zM12.034 0c1.531 0 2.962.43 4.178 1.176l.925-.926.413 2.887-2.887-.412.818-.82A6.968 6.968 0 0012.035 1a6.968 6.968 0 00-3.523.95l.775.775-2.887.412L6.812.25l.973.971A7.963 7.963 0 0112.035 0z"
            fill="white"
            fillRule="evenodd"
        ></path>
    </svg>
);


const faqs = [

    {
        question: "Hur fungerar prisgrupperna?",
        answer: [
            "Priset för däckhotell gäller per säsong och är uppdelat i två olika prisgrupper. Dessa baseras på hjulens storlek och till viss del även bilmärket.",

            "Större hjul kräver mer utrymme i däckhotellet och är även tyngre att hantera. På SUV-modeller tillkommer XL-tillägg på 300 kr för BMW och Mercedes-Benz. För BMW gäller det X3, X5, X6, X7 och iX och iX3. För Mercedes-Benz gäller det GLC/GLK-modeller och uppåt.",
        ],
    },
    {
        question: "Vad är skillnaden på grovrengöring och handtvätt?",
        answer:
            "I grundpaketet ingår grovrengöring med maskin. En grovrengöring av hjulen innebär att den värsta smutsen går bort. Skulle dock smutsen vara ingrodd och sitta fast är det möjligt att all smuts inte försvinner. Om du väljer handtvätt görs detta manuellt för hand och med stor noggrannhet för att få bort all smuts.",
    },
    {
        question: "Vad händer med mina däck efter att de ha checkats in? ",
        answer:
            "När hjulen checkats in på däckhotellet tvättas de i varmt vatten under högt tryck (inga kemikalier används). Därefter skannas däcken och mönsterdjupet mäts på 25 punkter på varje däck. Även fälgarna skannas och AI-fotograferas för att upptäcka eventuella skador. När detta är gjort skickas en sms-länk till dig där du kan se bilder på alla fyra hjulen som visar mönsterdjup och skador på fälgarna. Du får även förslag på eventuella åtgärder, exempelvis byte av slitna däck eller renovering av skadade fälgar.",
    },
    {
        question: "Hur betalar jag som däckhotellskund för mina nya däck?",
        answer: [
            "När du som däckhotellskund köper nya däck inför kommande skifte och vill ha dessa bytta medan hjulen ligger på hotellet, kommer vi att skicka ut en betalningslänk för detta. Via den får du välja betalsätt och på så vis är de nya däcken redan betalda och monterade på fälg när det är dags för däckbyte.",
        ],
    },
    {
        question: "Hur förvaras mina däck på däckhotellet? ",
        answer:
            "Vi förvarar hjulen i ställage med gynnsamma förhållanden där det är rätt temperatur, låg luftfuktighet och utan insläpp av solljus. Det förlänger däckens livslängd och håller gummit färskt.",
    },
    {
        question: "Var kan jag få mina hjul skiftade som däckhotellskund?",
        answer: [
            "Som däckhotellskund kan du välja var du vill få dina hjul skiftade, så länge anläggningen tillhör samma däckhotell. Detta gör att du har fler ställen och tider att välja på när det är dags. Vilka anläggningar du kan välja mellan ser du tydligt när du påbörjat din bokning på speedy tyres",
        ],
    },
    {
        question: "Hur lång tid i förväg kan jag boka om min tid för däckbyte?",
        answer:
            "Du kan boka om din valda tid fram till 23:59 dagen innan, så länge du vill komma till samma anläggning. Om du däremot vill byta till en annan anläggning behöver du avboka senast tre arbetsdagar innan vald tid och därefter boka en ny tid på önskad anläggning. Detta eftersom hjulen skickas ut från däckhotellet i god tid innan skiftet, och avbokar du för tätt inpå så kommer hjulen att skickas till den tidigare valda anläggningen. Brytpunkten går tre dagar före skiftet.",
    },
    {
        question: "Är mina däck försäkrade?",
        answer: [
            "Dina hjul är försäkrade mot stöld och brand via bilens försäkring och vid eventuell skada ersätter Speedy Tyres kostnaden för självrisken.",
        ],
    },

    {
        question: "Hur vet jag om mina hjul behöver balanseras? ",
        answer: [
            "Om du känner små vibrationer i ratten eller i bilen när du kör behöver hjulen balanseras. Det kan du välja till när du bokar tid för däckbyte. Väljer du att uppgradera till ett silver- eller guldpaket ingår balansering vid varje däckbyte. Obalans i däcken kan påverka styrningen och sliter ut fjädringen samt gummit i däcken. Livslängden på dina däck blir därför kortare.",
        ],
    },


];

const data = {
    Stockholm: {
        groups: [
            {
                name: "Prisgrupp 1",
                price: "1.695 kr/säsong",
                includes: "Inklusive däckbyte",
                models: [
                    "Toyota (exklusive Rav4, CH-R, Corolla Cross, BZ4X, Proace, Hilux och Landcruiser)",
                    "Renault (exklusive Traffic, Master, Espace och Koleos)",
                    "Volvo Classic (årsmodell 2019 och äldre)",
                    "Nissan (exklusive Ariya, Qashqai, X-trail, Townstar, Primastar och Interstar)",
                ],
            },
            {
                name: "Prisgrupp 2",
                price: "1.995 kr/säsong",
                includes: "Inklusive däckbyte",
                models: [
                    "Volvo årsmodell 2020 och nyare",
                    "BMW",
                    "MINI",
                    "Mercedes-Benz",
                    "Toyota Rav4, CH-R, Corolla Cross, BZ4X, Proace, Hilux och Landcruiser",
                    "Renault Traffic, Master, Espace och Koleos",
                    "Nissan Ariya, Qashqai, X-trail, Townstar, Primastar och Interstar",
                ],
            },
        ],
    },
    Göteborg: {
        groups: [
            {
                name: "Prisgrupp 1",
                price: "1.495 kr/säsong",
                includes: "Inklusive däckbyte",
                models: [
                    "Toyota (exklusive Rav4, CH-R, Corolla Cross, BZ4X, Proace, Hilux och Landcruiser)",
                    "Renault (exklusive Traffic, Master, Espace och Koleos)",
                    "Volvo Classic (årsmodell 2019 och äldre)",
                    "Nissan (exklusive Ariya, Qashqai, X-trail, Townstar, Primastar och Interstar)",
                ],
            },
            {
                name: "Prisgrupp 2",
                price: "1.795 kr/säsong",
                includes: "Inklusive däckbyte",
                models: [
                    "Volvo årsmodell 2020 och nyare",
                    "BMW",
                    "MINI",
                    "Mercedes-Benz",
                    "Toyota Rav4, CH-R, Corolla Cross, BZ4X, Proace, Hilux och Landcruiser",
                    "Renault Traffic, Master, Espace och Koleos",
                    "Nissan Ariya, Qashqai, X-trail, Townstar, Primastar och Interstar",
                ],
            },
        ],
    },
    "Övriga landet": {
        groups: [
            {
                name: "Prisgrupp 1",
                price: "1.195 kr/säsong",
                includes: "Inklusive däckbyte",
                models: [
                    "Toyota (exklusive Rav4, CH-R, Corolla Cross, BZ4X, Proace, Hilux och Landcruiser)",
                    "Renault (exklusive Traffic, Master, Espace och Koleos)",
                    "Volvo Classic (årsmodell 2019 och äldre)",
                    "Nissan (exklusive Ariya, Qashqai, X-trail, Townstar, Primastar och Interstar)",
                ],
            },
            {
                name: "Prisgrupp 2",
                price: "1.495 kr/säsong",
                includes: "Inklusive däckbyte",
                models: [
                    "Volvo årsmodell 2020 och nyare",
                    "BMW",
                    "MINI",
                    "Mercedes-Benz",
                    "Toyota Rav4, CH-R, Corolla Cross, BZ4X, Proace, Hilux och Landcruiser",
                    "Renault Traffic, Master, Espace och Koleos",
                    "Nissan Ariya, Qashqai, X-trail, Townstar, Primastar och Interstar",
                ],
            },
        ],
    },
};



const DackHotel = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const [showFitModal, setShowFitModal] = useState(false);
    const [showAppointmentForm, setShowAppointmentForm] = useState(false);
    const [regNumber, setRegNumber] = useState("");
    const [error, setError] = useState("");
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const navigate = useNavigate();
    const [activeCity, setActiveCity] = useState("Stockholm");

    const cityData = data[activeCity];
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        regNumber: ""
    });

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    const generateTimeSlots = () => {
        if (!selectedDate) return [];

        const day = selectedDate.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
        let startHour = 8;
        let endHour = 18;

        if (day === 6) {
            // Saturday
            startHour = 9;
            endHour = 16;
        } else if (day === 0) {
            // Sunday
            startHour = 10;
            endHour = 15;
        }

        const slots = [];
        let hour = startHour;
        let minute = 0;

        while (hour < endHour || (hour === endHour && minute === 0)) {
            // format as HH:MM
            const formattedHour = String(hour).padStart(2, "0");
            const formattedMinute = String(minute).padStart(2, "0");
            slots.push(`${formattedHour}:${formattedMinute}`);

            minute += 45;
            if (minute >= 60) {
                minute -= 60;
                hour += 1;
            }
        }

        return slots;
    };




    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    const handleInputChange = (e) => {
        let value = e.target.value.toUpperCase();
        if (value.length <= 3) value = value.replace(/[^A-Z]/g, "");
        if (value.length > 3) {
            const letters = value.slice(0, 3);
            let numbers = value.slice(3, 6).replace(/[^0-9]/g, "");
            value = letters + numbers;
        }
        setRegNumber(value);

        if (value.length === 6 && !/^[A-Z]{3}[0-9]{3}$/.test(value)) {
            setError("Registreringsnummer måste vara 3 bokstäver följt av 3 siffror");
        } else {
            setError("");
        }
    };

    const handleSubmit = () => {
        if (!/^[A-Z]{3}[0-9]{3}$/.test(regNumber)) {
            setError("Registreringsnummer måste vara 3 bokstäver följt av 3 siffror");
            return;
        }
        // Hide registration modal and show appointment form
        setShowFitModal(false);
        setShowAppointmentForm(true);
    };


    const services = [

        {
            id: 2,
            title: "Fälgrenovering",
            description: "Laga trasiga, skadade eller missfärgade fälgar.",
            price: "Från 1.795 kr",
            buttonText: "Boka förvaring",
            readMore: "Läs mer",
            link: "/verkstad/dacktjanster/falgrenovering/",
            icon: <DackHotelIcon />,
        },
        {
            id: 3,
            title: "Däckbyte",
            description: "Boka ett däckbyte utfört av våra däckexperter.",
            price: "Pris 495 kr",
            buttonText: "Boka tid",
            readMore: "Läs mer",
            link: "/verkstad/dacktjanster/dackbyte/",

            icon: <TireIcon />,
        },
        {
            id: 4,
            title: "Hjulvinkelkontroll",
            description: "Kontrollera vinklarna för att se om hjulinställning är nödvändig.",
            price: "From 95 sek",
            buttonText: "Boka tid",
            readMore: "Läs mer",
            link: "/verkstad/dacktjanster/hjulvinkelkontroll/",

            icon: <TireIcon />,
        },
    ];



    return (
        <div className="poppins-regular">
            <Header />

            {/* Hero Section */}
            <section className="w-full bg-[#2c3e50] flex flex-col md:flex-row items-center justify-between relative">
                <div className="flex-1 flex items-center justify-center text-left p-8 md:p-10 min-h-[200px]
                        md:static absolute inset-0 z-10 bg-black/40 md:bg-transparent">
                    <div className="text-center md:text-left">
                        <h1 className="text-3xl md:text-4xl font-bold text-white leading-snug drop-shadow-md">
                            Boka däckhotell
                        </h1>
                    </div>
                </div>
                <div className="flex-1 h-[250px] md:h-[350px] w-full">
                    <img
                        src={mechanicImg}
                        alt="Tires"
                        className="w-full h-full object-cover"
                    />
                </div>
            </section>



       

            <section className="w-full bg-black text-white py-16 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-orange-500 mb-6">
                        Däckförvaring på Bilia Däckhotell
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        Däckförvaring på Bilia däckhotell är enkelt och bekvämt.
                        Du sparar tid, arbete och utrymme. Vi tar hand om dina sommar-
                        och vinterdäck och förvarar dem i rätt temperatur, luftfuktighet
                        och i skydd från solen.
                    </p>
                </div>
            </section>


            {/* Info Section */}
            <section className="py-12 bg-black px-6 text-center text-white">
                <h1 className="text-2xl md:text-3xl font-semibold mb-4">
                    Prova på däckhotell för 495 kr
                </h1>

                <p className="text-base md:text-lg mb-4">
                    Boka däckbyte och prova på vår däckförvaring på vårt däckhotell. Vi bjuder på första säsongen däckförvaring och du betalar bara 495 kr för däckbytet.
                </p>
                <p className="text-base md:text-lg">
                    Erbjudandet om att prova på däckhotell för endast 495 kr för första säsongen, gäller nya kunder samt dig som inte har haft dina däck på däckhotellet de senaste två säsongerna. Vi tar in dina däck för förvaring i samband med däckbytet. Till dig som befintlig kund kan vi erbjuda andra förmåner så som 15% rabatt på nya sommar- och vinterdäck.
                </p>
            </section>


            <section className="bg-black py-10 px-4 md:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Tabs */}
                    <div className="flex justify-center  gap-10 border-b border-orange-500 mb-10">
                        {Object.keys(data).map((city) => (
                            <button
                                key={city}
                                onClick={() => setActiveCity(city)}
                                className={`text-lg font-semibold pb-2 transition relative ${activeCity === city
                                    ? "text-white after:content-[''] after:absolute after:bottom-[-1px] after:left-0 after:w-full after:h-[3px] after:bg-orange-500"
                                    : "text-gray-400 hover:text-white"
                                    }`}
                            >
                                {city}
                            </button>
                        ))}
                    </div>

                    {/* Pricing groups */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {cityData.groups.map((group, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-8 border-2 border-orange-500"
                            >
                                <div className="flex flex-col items-center text-center mb-6">
                                    <img
                                        src={tireHotelImg}
                                        alt="Tire hotel"
                                        className="w-16 h-16 mb-4 object-contain"
                                    />
                                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{group.name}</h3>
                                    <p className="text-xl font-medium text-gray-900">{group.price}</p>
                                    <p className="text-sm text-gray-500 mt-1">{group.includes}</p>
                                </div>

                                <h4 className="font-semibold text-orange-500 mb-2">
                                    Bilmodeller i prisgruppen:
                                </h4>

                                <hr className="my-4 border-orange-500" />

                                <div>
                                    <ul className="list-disc list-inside text-gray-800 space-y-1">
                                        {group.models.map((model, i) => (
                                            <li key={i}>{model}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* Price Section */}


            {/* Included Services Section */}
            {/* Däckbyte Information Section */}
            <section className="bg-black py-8 px-4 md:px-8">
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-6 text-center">
                    Välj till något extra
                </h2>
                <p className="text-white text-center mb-6">
                    Här ser du de särskilda tillvalstjänsterna du kan välja till ditt däckhotell. Kryssa i ditt önskemål vid bokningen.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                    {/* Card 1 */}
                    <div className="bg-[#1a1a1a] p-4 rounded-lg shadow-md border border-orange-500 flex flex-col">
                        <h3 className="font-semibold mb-5 text-base text-white">Guld</h3>
                        <p className="text-sm mb-5 text-gray-300">
                            Vi balanserar, handtvättar och vaxar hjulen för att hålla dem i toppskick. Hjulen får den ultimata behandlingen och blir både stadiga, rena och får en längre hållbarhet.
                        </p>
                        <p className="text-sm text-gray-300">1.590 kr</p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#1a1a1a] p-4 rounded-lg shadow-md border border-orange-500 flex flex-col">
                        <h3 className="font-semibold mb-5 text-base text-white">Silver</h3>
                        <p className="text-sm mb-5 text-gray-300">
                            Balansering av dina hjul. Vi säkerställer att den obalans som hjulen har försvinner och de blir redo för en ny säsong.
                        </p>
                        <p className="text-sm text-gray-300">795 kr</p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#1a1a1a] p-4 rounded-lg shadow-md border border-orange-500 flex flex-col">
                        <h3 className="font-semibold mb-5 text-base text-white">Handtvätt</h3>
                        <p className="text-sm mb-5 text-gray-300">
                            Vi handtvättar dina hjul så de blir skinande rena och får en längre livslängd.
                        </p>
                        <p className="text-sm text-gray-300">795 kr</p>
                    </div>
                </div>
            </section>


            {/* New Tyres Offer Section */}
            <section className="flex flex-col md:flex-row items-center bg-black py-6 px-4 md:px-8 gap-6">
                {/* Image */}
                <div className="md:w-2/5 w-full">
                    <img
                        src={tireImg}
                        alt="Nya däck"
                        className="w-full h-[220px] md:h-[260px] object-cover rounded-lg border border-orange-500 shadow-sm"
                    />
                </div>

                {/* Text Content */}
                <div className="md:w-3/5 w-full text-center md:text-left">
                    <h2 className="text-lg md:text-2xl font-bold text-white mb-4">
                        Varför ska du förvara däcken på däckhotell?
                    </h2>
                    <p className="text-white text-sm md:text-base mb-2 leading-relaxed">
                        Vi förvarar däck i gynnsamma förhållanden med rätt temperatur, låg luftfuktighet och utan insläpp av solljus. Det förlänger däckens livslängd och håller gummit färskt.
                    </p>
                    <ul className="text-white text-sm md:text-base list-disc list-inside mb-4 leading-relaxed">
                        <li>Vi påminner dig när det är dags att byta till sommar- eller vinterdäck.</li>
                        <li>Spara plats i hemmet, förrådet eller garaget.</li>
                        <li>Som däckhotellskund får du alltid 15% rabatt på nya däck.</li>
                        <li>Vi mäter mönsterdjup och ger dig personliga rekommendationer på nya däck om det behövs, så att du är redo för nästa säsong.</li>
                    </ul>

                </div>
            </section>


            {/* Bilia Däckhotell Section */}
            <section className="flex flex-col md:flex-row-reverse items-center bg-black py-6 px-4 md:px-8 gap-6">
                {/* Image */}
                <div className="md:w-2/5 w-full">
                    <img
                        src={tireImg}
                        alt="Bilia Däckhotell"
                        className="w-full h-[220px] md:h-[260px] object-cover rounded-lg border border-orange-500 shadow-sm"
                    />
                </div>

                {/* Text Content */}
                <div className="md:w-3/5 w-full text-center md:text-left">
                    <h2 className="text-lg md:text-2xl font-bold text-white mb-4">
                        Vad ingår hos Bilia däckhotell?
                    </h2>
                    <ul className="text-white text-sm md:text-base list-disc list-inside mb-4 leading-relaxed">
                        <li>Däckbyte.</li>
                        <li>Grovrengöring av däck.</li>
                        <li>Kontroll av lufttryck, mönsterdjup och fälgar.</li>
                        <li>SMS med bilder på dina däckmönster och fälgar.</li>
                    </ul>
                </div>
            </section>


            {/* När ska du byta däck Section */}
            <section className="bg-black text-white py-12 px-4 md:px-8 border-orange-500">
                <h2 className="text-2xl md:text-3xl font-semibold text-center text-white mb-10">
                    Hur fungerar däckhotellet?
                </h2>

                <p className="text-gray-200 text-center text-sm md:text-base mb-8 leading-relaxed">
                    När du lämnar däcken på Speedy Tyres däckhotell sköter vi allt, men det kan vara spännande att veta vad<br /> som händer med däcken efter att de checkats in.
                </p>

                {/* Combined Image + Text Columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {/* Column 1 */}
                    <div className="border-2 border-orange-500 rounded-lg overflow-hidden hover:shadow-[0_0_10px_#ff6600] transition">

                        <div className="p-4 bg-black">
                            <h3 className="font-semibold text-lg text-orange-400 mb-2">
                                Rengöring
                            </h3>
                            <p className="text-gray-200 text-sm md:text-base leading-relaxed mb-2">
                                Vi rengör däcken och fälgarna från enklare smuts. Om dina fälgar har ingrodd smuts så rekommenderar vi en handtvätt för att få bort allt innan vi förvarar dem. Däck som förvaras med ingrodd smuts har en kortare livslängd än rena. En handtvätt kostar 795 kr extra.        </p>

                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="border-2 border-orange-500 rounded-lg overflow-hidden hover:shadow-[0_0_10px_#ff6600] transition">

                        <div className="p-4 bg-black">
                            <h3 className="font-semibold text-lg text-orange-400 mb-2">
                                Kontroll av skick, mönsterdjup och lufttryck        </h3>
                            <p className="text-gray-200 text-sm md:text-base leading-relaxed mb-2">
                                Vi kontrollerar däckens mönsterdjup, lufttryck och fälgar. I ett SMS får du en länk till bilder på hjulen, där mönsterdjup och eventuella fälgskador framgår. Om däcken är slitna och behöver bytas ut kontaktar vi dig. Då tar vi fram förslag på nya däck som passar just din bil. Du får alltid 15% rabatt på däck när du är däckhotellskund.        </p>

                        </div>
                    </div>

                    {/* Column 3 */}
                    <div className="border-2 border-orange-500 rounded-lg overflow-hidden hover:shadow-[0_0_10px_#ff6600] transition">

                        <div className="p-4 bg-black">
                            <h3 className="font-semibold text-lg text-orange-400 mb-2">
                                Däckbyte
                            </h3>
                            <p className="text-gray-200 text-sm md:text-base leading-relaxed mb-2">
                                Däckbyte ingår om du startar din förvaring i samband med ditt skifte. När det närmar sig däckbyte påminner vi dig om att boka en tid. Däckbytet ingår i ditt däckhotell och kostar inte extra.         </p>

                        </div>
                    </div>
                </div>
            </section>




            {/* Fälgrenovering & Däckhotell Section */}
            <section className="bg-black py-12 px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                    {/* Fälgrenovering Card */}
                    <div className="bg-[#111] border border-orange-500 rounded-lg shadow-md overflow-hidden flex flex-col hover:shadow-[0_0_15px_#ff6600] transition">
                        {/* Bigger Image */}
                        <div className="h-60 md:h-72 w-full overflow-hidden">
                            <img
                                src={tyre} // your image import
                                alt="Fälgrenovering"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Text Section */}
                        <div className="flex-1 p-5 flex flex-col justify-between">
                            <div>
                                <h3 className="text-lg md:text-xl font-bold text-orange-400 mb-2">
                                    Däckhotell på köpet
                                </h3>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Nu får du som väljer att göra en fälgrenovering en hel säsong kostnadsfritt på Bilia däckhotell. Erbjudandet gäller nya däckhotellskunder.
                                </p>
                            </div>

                            {/* Full-width Button */}
                            <button
                                className="w-full mt-5 border border-orange-500 text-white font-semibold py-3 rounded-md hover:bg-orange-500 hover:text-black transition text-sm"
                                onClick={() => navigate("/verkstad/dacktjanster/falgrenovering/")}
                            >
                                Läs mer om fälgrenovering
                            </button>
                        </div>
                    </div>

                    {/* Däckhotell Card */}
                    <div className="bg-[#111] border border-orange-500 rounded-lg shadow-md overflow-hidden flex flex-col hover:shadow-[0_0_15px_#ff6600] transition">
                        {/* Bigger Image */}
                        <div className="h-60 md:h-72 w-full overflow-hidden">
                            <img
                                src={wintertyres}
                                alt="Däckhotell"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Text Section */}
                        <div className="flex-1 p-5 flex flex-col justify-between">
                            <div>
                                <h3 className="text-lg md:text-xl font-bold text-orange-400 mb-2">
                                    För dig som däckhotellskund
                                </h3>
                                <p className="text-gray-300 text-sm leading-relaxed mb-3">
                                    Låt oss laga dina fälgar medan de är incheckade på däckhotellet. Då möter du en ny säsong på vägarna med nyrenoverade fälgar, utan att ha behövt besöka oss.

                                    Om du redan är däckhotellskund och bokar en fälgrenovering, bjuder vi på demontering, montering och balansering värd 560 kr per hjul.
                                </p>

                            </div>

                            {/* Full-width Button */}
                            <button className="w-full mt-5 border border-orange-500 text-white font-semibold py-3 rounded-md hover:bg-orange-500 hover:text-black transition text-sm"
                                onClick={() => navigate("/verkstad/dacktjanster/falgrenovering/")}
                            >
                                Ta del av erbjudandet
                            </button>
                        </div>
                    </div>



                </div>
            </section>
            <section className="py-16 px-6 bg-[#111] text-white poppins-regular">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
                        Vilka däck kan checkas in?
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed mb-6">
Vi tar emot däck från alla bil- och däckmärken. De bilmärken vi samarbetar närmast med är Volvo, BMW, Toyota, Mercedes-Benz, MINI, Renault, Dacia, Lexus, Nissan och Alpine.                    </p>
                  
                </div>
            </section>

            <section className="w-full bg-black py-8 px-6 poppins-regular relative">
                {/* Section Heading */}
                <h2 className="text-center font-semibold mb-12 text-3xl md:text-4xl text-white uppercase tracking-wide">
                    Vanliga frågor om däckhotell
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

            <section className="w-full py-16 px-6 bg-black text-white poppins-regular">
                {/* Intro Text */}
                <div className="max-w-4xl mx-auto mb-10 text-center">
                    <p className="text-lg text-gray-300 leading-relaxed">
                        Inte riktigt rätt? <br />
                        Ibland är det en utmaning att veta exakt vilken verkstadstjänst som behövs
                        för att åtgärda ett problem. Kanske är det någon av de här relaterade
                        tjänsterna du är ute efter istället.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="bg-[#111] border border-gray-800 hover:border-orange-500 rounded-lg p-6 flex flex-col items-center text-center transition"
                        >
                            {/* Icon */}
                            <div className="flex justify-center mb-4 w-16 h-16">{service.icon}</div>

                            {/* Title */}
                            <h3 className="mb-2 text-lg font-semibold text-white">{service.title}</h3>

                            {/* Description */}
                            <p className="mb-3 text-sm text-gray-300">{service.description}</p>

                            {/* Price */}
                            <p className="mb-4 text-sm font-semibold text-orange-500">{service.price}</p>

                            {/* Buttons */}
                            <div className="mt-auto w-full space-y-2">
                                {/* <button
                                    className="bg-orange-500 text-black font-medium py-2 px-4 rounded-md hover:bg-orange-600 transition w-full"
                                    onClick={() => setShowFitModal(true)} // open modal
                                >
                                    {service.buttonText}
                                </button> */}

                                <button
                                    className="border border-gray-600 text-gray-300 py-2 px-4 rounded-md hover:border-orange-500 hover:text-orange-500 transition w-full"
                                    onClick={() => navigate(service.link)} // redirect to service page
                                >
                                    {service.readMore}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            {showFitModal && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-xl shadow-lg w-full max-w-2xl p-6 relative">
                        <button
                            onClick={() => setShowFitModal(false)}
                            className="absolute top-3 right-3 text-gray-400 hover:text-black"
                        >
                            <X className="w-6 h-6" />
                        </button>
                        <h2 className="text-xl font-semibold text-center text-black mb-6">
                            Hitta rätt däck till din bil
                        </h2>
                        <label className="block text-sm font-medium text-gray-800 mb-2">
                            Fyll i ditt registreringsnummer
                        </label>
                        <div className="flex items-center border border-gray-300 rounded-md overflow-hidden mb-2">
                            <div className="bg-blue-700 flex flex-col items-center justify-center px-3 py-2 text-white font-semibold">
                                <span className="text-xs">EU</span>
                                <span className="text-lg font-bold">S</span>
                            </div>
                            <input
                                type="text"
                                value={regNumber}
                                onChange={handleInputChange}
                                placeholder="ABC123"
                                className="flex-1 px-4 py-3 text-lg text-gray-800 placeholder-gray-400 focus:outline-none"
                                maxLength={6}
                            />
                        </div>
                        {error && <p className="text-red-600 text-sm mb-4">{error}</p>}
                        <div className="text-center">
                            <button
                                onClick={handleSubmit}
                                className="text-orange-600 hover:text-orange-700 text-sm sm:text-base"
                            >
                                Fortsätt
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Appointment Form Modal */}
            {showAppointmentForm && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
                    <div className="bg-black rounded-xl shadow-lg w-full max-w-md p-6 relative border border-orange-600">
                        {/* Close Button */}
                        <button
                            onClick={() => setShowAppointmentForm(false)}
                            className="absolute top-3 right-3 text-gray-400 hover:text-white"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Title */}
                        <h2 className="text-xl font-semibold mb-4 text-white text-center">
                            Boka din tid
                        </h2>

                        {/* Form */}
                        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="Namn"
                                className="bg-black text-white placeholder-gray-400 border-b border-gray-600 p-2 focus:border-orange-500 focus:outline-none"
                                required
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="bg-black text-white placeholder-gray-400 border-b border-gray-600 p-2 focus:border-orange-500 focus:outline-none"
                                required
                            />
                            <input
                                type="tel"
                                placeholder="Telefonnummer"
                                value={phoneNumber}
                                onChange={(e) =>
                                    setPhoneNumber(e.target.value.replace(/[^0-9]/g, ""))
                                }
                                className="bg-black text-white placeholder-gray-400 border-b border-gray-600 p-2 focus:border-orange-500 focus:outline-none"
                                required
                            />

                            {/* Date & Time Row */}
                            <div className="flex gap-2">
                                {/* Date Picker */}
                                <DatePicker
                                    selected={selectedDate}
                                    onChange={(date) => {
                                        setSelectedDate(date);
                                        setSelectedTime(""); // reset selected time
                                    }}
                                    className="bg-black text-white placeholder-gray-400 border-b border-gray-600 p-2 focus:border-orange-500 focus:outline-none flex-1"
                                    placeholderText="Välj datum"
                                    minDate={new Date()}
                                    required
                                    dateFormat="yyyy-MM-dd"
                                />

                                {/* Time Slot Selector */}
                                <select
                                    value={selectedTime}
                                    onChange={(e) => setSelectedTime(e.target.value)}
                                    className="bg-black text-white border-b border-gray-600 p-2 focus:border-orange-500 focus:outline-none flex-1"
                                    required
                                >
                                    <option value="">Välj tid</option>
                                    {generateTimeSlots().map((slot) => (
                                        <option key={slot} value={slot}>
                                            {slot}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <button
                                type="submit"
                                className="bg-orange-600 text-black font-semibold p-2 rounded-md hover:bg-orange-700 mt-2"
                            >
                                Boka tid
                            </button>
                        </form>
                    </div>
                </div>
            )}




            <Footer />
        </div>
    );
};

export default DackHotel;
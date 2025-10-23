import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import mechanicImg from "../assets/HeroSection/mechanic.jpg";
import tireImg from "../assets/Services/tyre-closeup.avif"; // 🖼 replace with your actual image path
import Footer from "../Dack/Footer";
import Header from "../Dack/Header";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import RimBefore from "../assets/Services/rim-before.avif";
import RimAfter from "../assets/Services/rim-after.avif";







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
        question: "Var kan jag få hjälp med fälgrenovering?",
        answer: [
            "Du kan lämna in dina fälgar på alla våra Speedy Tyres anläggningar. Har du dessutom dina hjul förvarade på något utav våra däckhotell så passar vi på att laga fälgen medan hjulen ligger på hotellet.",
        ],
    },
    {
        question: "Vad är en fälgrenovering?",
        answer:
            "Har du en fälg som är kantstött, repig eller skev så kan vi ersätta eller renovera den till nyskick istället för att köpa ny fälg. Genom att renovera en fälg kan du spara pengar jämfört med att köpa en ny – och samtidigt behålla både design och prestanda.",
    },
    {
        question: "Kan ni laga kantstötta fälgar?",
        answer:
            "Självklart, det är en vanlig typ av skada efter att ha kört på tillexempel en trottoarkant.",
    },
    {
        question: "Kan jag ändra färg på mina fälgar?",
        answer: [
            "Absolut, vi hjälper dig gärna att ändra färg. Du kan även få fälgen med exempelvis matt klarlack.",
        ],
    },
    {
        question: "Hur påverkar en skev fälg min körupplevelse? ",
        answer:
            "Om fälgen är skev leder det till vibrationer i bilen eller i ratten och mer slitage på däcken.",
    },
    {
        question: "Kan ni renovera mina fälgar medan de ligger inne på däckhotell?",
        answer: [
            "Självklart, vi renoverar gärna dina fälgar medan de ligger på vårt hotell.",
        ],
    },
    {
        question: "Om jag har min bil inlämnad på skadeverkstaden – kan ni laga mina fälgar samtidigt?",
        answer:
            "Absolut, det löser vi.",
    },
    {
        question: "Vad är skillnaden på en Diamond cut/svarvad och lackad fälg?",
        answer: [
            "En lackad fälg har lack och finish i samma färg. En Diamond cut, även kallad svarvad, fälg kännetecknas av att delar av den lackade yta svarvats bort med en CNC-maskin som exponerat metallen. Detta skapar ofta ett tvåfärgat utseende.",
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



const RimRestoration = () => {
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
            icon: <DackHotelIcon />,
        },
        {
            id: 3,
            title: "Däckbyte",
            description: "Boka ett däckbyte utfört av våra däckexperter.",
            price: "Pris 495 kr",
            buttonText: "Boka tid",
            readMore: "Läs mer",
            icon: <TireIcon />,
        },
        {
            id: 4,
            title: "Hjulvinkelkontroll",
            description: "Kontrollera vinklarna för att se om hjulinställning är nödvändig.",
            price: "From 95 sek",
            buttonText: "Boka tid",
            readMore: "Läs mer",
            icon: <TireIcon />,
        },
    ];



    return (
        <div className="poppins-regular">
       

            {/* Hero Section */}
            <section className="w-full bg-[#2c3e50] flex flex-col md:flex-row items-center justify-between relative">
                <div className="flex-1 flex items-center justify-center text-left p-8 md:p-10 min-h-[200px]
                        md:static absolute inset-0 z-10 bg-black/40 md:bg-transparent">
                    <div className="text-center md:text-left">
                        <h1 className="text-3xl md:text-4xl font-bold text-white leading-snug drop-shadow-md">
                            Boka fälgrenovering online
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

        


            {/* Info Section */}
            <section className="py-12 bg-black px-6 text-center text-white">

                <p className="text-base text-center md:text-lg mb-4">
                    Vi åtgärdar alla typer av skador – från enklare repor till skeva och kantstötta <br />  fälgar.Genom att renovera en fälg kan du spara pengar jämfört med att <br />köpa en ny – och samtidigt behålla både design och prestanda.                </p>

            </section>





            {/* Däckbyte Information Section */}
            <section className="bg-black py-8 px-4 md:px-8">


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                    {/* Card 1 */}
                    <div className="bg-[#1a1a1a] p-4 rounded-lg shadow-md border border-orange-500 flex flex-col">
                        <h3 className="font-semibold mb-5 text-base text-white">Tänk cirkulärt i stället för nytt.</h3>
                        <p className="text-sm mb-5 text-gray-300">
                            Att renovera dina fälgar kan ofta vara mer kostnadseffektivt än att köpa nya, och eftersom mindre material behöver tillverkas kan det innebära lägre resursanvändning

                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#1a1a1a] p-4 rounded-lg shadow-md border border-orange-500 flex flex-col">
                        <h3 className="font-semibold mb-5 text-base text-white">Från 995 kr/styck</h3>
                        <p className="text-sm mb-5 text-gray-300">
                            Priset påverkas av fälgarnas storlek och i vilket behov av renovering de är.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#1a1a1a] p-4 rounded-lg shadow-md border border-orange-500 flex flex-col">
                        <h3 className="font-semibold mb-5 text-base text-white">Fälgar går att laga</h3>
                        <p className="text-sm mb-5 text-gray-300">
                            Repiga, kantstötta eller skeva? Nästan alla fälgar går att laga.
                        </p>
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
                        Personlig design kostnadsfritt
                    </h2>
                    <p className="text-white text-sm md:text-base mb-2 leading-relaxed">
                        Vid helrenovering av alla fyra fälgar kan du samtidigt byta färg på dem, utan extra kostnad. För ett unikt och personligt utseende.
                    </p>

                    <p className="text-white text-sm md:text-base mb-2 leading-relaxed">
                        Många enfärgade fälgar går att svarva för att skapa egendesignade Diamond Cut-fälgar. Dina Diamond Cut-fälgar går också att göra enfärgade.                    </p>


                </div>
            </section>
            <section className="bg-black py-10 px-4 w-full">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold mb-10 text-center text-white">
                        Före- och efterbilder
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        {/* Left: Image then Text */}
                        <div className="flex flex-col items-center md:items-start">
                            <img
                                src={RimBefore}
                                alt="Rim close to curb"
                                className="w-full h-80 object-cover mb-4 rounded-md border-1 border-orange-500"
                            />
                            <div className="text-left">
                                <h3 className="text-xl font-semibold text-white mb-2">Före</h3>
                                <p className="text-white">
                                    Om man kommer för nära en trottoarkant är det lätt att fälgen blir skadad.          </p>
                            </div>
                        </div>

                        {/* Right: Text then Image */}
                        <div className="flex flex-col items-center md:items-start">
                            <div className="text-left mb-4 md:mb-0">
                                <h3 className="text-xl font-semibold text-white mb-2">Efter</h3>
                                <p className="text-white">
                                    Fälgarna är en viktig del av bilens uttryck.
                                </p>
                            </div>
                            <img
                                src={RimAfter}
                                alt="Clean undamaged rim"
                                className="w-full h-80 object-cover rounded-md border-1 border-orange-500"
                            />
                        </div>
                    </div>
                </div>
            </section>


            <section className="bg-black py-8 px-4 md:px-8">

                <h1 className="text-left text-white mb-4 text-xl">Så går en fälgrenovering till</h1>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                    {/* Card 1 */}
                    <div className="bg-[#1a1a1a] p-4 rounded-lg shadow-md border border-orange-500 flex flex-col">
                        <h3 className="font-semibold mb-5 text-base text-white">Rengöring</h3>
                        <p className="text-sm mb-5 text-gray-300">
                            Vi rengör fälgen från smuts och damm.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#1a1a1a] p-4 rounded-lg shadow-md border border-orange-500 flex flex-col">
                        <h3 className="font-semibold mb-5 text-base text-white">Blästring</h3>
                        <p className="text-sm mb-5 text-gray-300">
                            Vi avlägsnar mindre repor och spår av korrosion.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#1a1a1a] p-4 rounded-lg shadow-md border border-orange-500 flex flex-col">
                        <h3 className="font-semibold mb-5 text-base text-white">Förbehandling</h3>
                        <p className="text-sm mb-5 text-gray-300">
                            Skador på fälgen åtgärdas noggrant. Vid behov riktas fälgen.
                        </p>
                    </div>

                    <div className="bg-[#1a1a1a] p-4 rounded-lg shadow-md border border-orange-500 flex flex-col">
                        <h3 className="font-semibold mb-5 text-base text-white">Lackering</h3>
                        <p className="text-sm mb-5 text-gray-300">
                            Vi utför pulver- eller våtlackering (grund- och klarlack) i alla biltillverkares originalkulörer och utföranden                        </p>
                    </div>

                    <div className="bg-[#1a1a1a] p-4 rounded-lg shadow-md border border-orange-500 flex flex-col">
                        <h3 className="font-semibold mb-5 text-base text-white">Vid svarvning av fälgkanter, så kallad Diamond cut-design:</h3>
                        <p className="text-sm mb-5 text-gray-300">
Vi läser in fälgens profil och bearbetar den i vår helautomatiska CNC-maskin, som ger bästa tänkbara precision och resultat.             </p>
                    </div>

                     <div className="bg-[#1a1a1a] p-4 rounded-lg shadow-md border border-orange-500 flex flex-col">
                        <h3 className="font-semibold mb-5 text-base text-white">Klarlackering</h3>
                        <p className="text-sm mb-5 text-gray-300">
Slutligen klarlackas hela fälgen för bästa finish och hållbarhet.
    </p>
                    </div>
                </div>
            </section>





            <section className="w-full bg-black py-8 px-6 poppins-regular relative">
                {/* Section Heading */}
                <h2 className="text-center font-semibold mb-12 text-3xl md:text-4xl text-white uppercase tracking-wide">
Vanliga frågor och svar
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

         

        </div>
    );
};

export default RimRestoration;

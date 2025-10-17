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
import tyre from "../assets/Services/tyres.avif";
import wintertyres from "../assets/Services/winter-tyres.avif";
import wintertyresinsummer from "../assets/Services/winter-tyres-in-summer.avif";








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
        question: "Hur bokar jag en hjulinställning?",
        answer: [
            "Boka hjulinställning här eller ring oss på 0313951200.",
        ],
    },
    {
        question: "Kan jag lägga till hjulvinkelkontroll när jag byter däck?",
        answer:
            "Det går bra att lägga till en hjulvinkelkontroll när du byter däck. Säg till att du önskar det som tillägg vid din bokning, eller välj det som tillval om du bokar online.",
    },
    {
        question: "Hur lång tid tar det att göra en hjulinställning?",
        answer:
            "Vi gör en hjulvinkelkontroll och justerar hjulvinklarna på din bil på oftast mindre än 30 minuter. Det kan variera beroende på bilmodell.",
    },
    {
        question: "Vilka bilmärken gör ni hjulinställning på?",
        answer: [
            "Vi på Bilia är certifierade och kan hjälpa dig med hjulinställning på din bil på våra auktoriserade verkstäder för bland annat Volvo, Renault, BMW, Toyota och Mercedes-Benz.",
        ],
    },




];




const WheelAlingment = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const [showFitModal, setShowFitModal] = useState(false);
    const [showAppointmentForm, setShowAppointmentForm] = useState(false);
    const [regNumber, setRegNumber] = useState("");
    const [error, setError] = useState("");
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const navigate = useNavigate();
    const [showMore, setShowMore] = useState(false);
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
            title: "Hjulvinkelkontroll",
            description: "Kontrollera vinklarna för att se om hjulinställning är nödvändig.",
            price: "Pris 95 kr",
            buttonText: "Boka förvaring",
            readMore: "Läs mer",
                        link: "/verkstad/dacktjanster/hjulvinkelkontroll/",
            icon: <TireIcon />,
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

                            Boka hjulinställning<br /> på din bil
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
                    En hjulinställning innebär att vinklarna<br /> på bilens hjul justeras. Hjulens vinklar påverkas av normal körning, och särskilt om du kör över en trottoarkant<br /> eller väghinder.

                    Vi rekommenderar att du kontrollerar hjulvinklarna en gång per år.
                </p>

            </section>


            <section className="py-12 bg-black px-6 text-center text-white">
                <h1 className="text-2xl mb-4">Vad kostar en hjulinställning?</h1>

                <p className="text-base text-center md:text-lg mb-4">
                    Från
                    1.295 kr
                </p>

            </section>

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
                        Varför ska du göra en hjulinställning?
                    </h2>
                    <p className="text-white text-sm md:text-base mb-2 leading-relaxed">
                        Hjulens vinklar påverkas av normal körning, och särskilt om du kör över en trottoarkant eller ett väghinder. Rätt inställda hjulvinklar gör att:                    </p>

                    <ul className="text-white text-sm md:text-base list-disc list-inside mb-4 leading-relaxed">
                        <li>Slitaget på däcken blir jämnare och mindre, däcken håller längre.</li>
                        <li>Styrningen blir mer responsiv och underlättas, körningen blir mer komfortabel.</li>
                        <li>Bränslekostnaden sänks eftersom hjulen rullar lättare.</li>
                    </ul>

                </div>
            </section>



            {/* Däckbyte Information Section */}
            <section className="bg-black py-8 px-4 md:px-8">


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                    {/* Card 1 */}
                    <div className="bg-[#1a1a1a] p-4 rounded-lg shadow-md border border-orange-500 flex flex-col">
                        <h3 className="font-semibold mb-5 text-base text-white">Mer responsiv körning</h3>

                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#1a1a1a] p-4 rounded-lg shadow-md border border-orange-500 flex flex-col">
                        <h3 className="font-semibold mb-5 text-base text-white">Förbättrat väggrepp ökar säkerheten</h3>

                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#1a1a1a] p-4 rounded-lg shadow-md border border-orange-500 flex flex-col">
                        <h3 className="font-semibold mb-5 text-base text-white">Bränsleförbrukningen minskar
                        </h3>

                    </div>
                </div>
            </section>

            <section className="py-16 px-6 bg-black text-white poppins-regular">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
                    {/* Left Column */}
                    <div>
                        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-orange-500">
                            När ska du göra en hjulinställning?
                        </h2>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            Även om du inte kört på någonting så påverkas bilens hjulinställning med tiden
                            av din körning. Tecken på att det är dags att kontrollera hjulinställningen är:
                        </p>

                        <ul className="space-y-3 text-gray-200">
                            <li className="flex items-start">
                                <span className="w-3 h-3 bg-orange-500 rounded-full mt-2 mr-3"></span>
                                <span>Ratten står snett på raksträckor.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-3 h-3 bg-orange-500 rounded-full mt-2 mr-3"></span>
                                <span>Bilen drar åt höger eller vänster när du kör.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-3 h-3 bg-orange-500 rounded-full mt-2 mr-3"></span>
                                <span>Däcken slits ojämnt eller på annat sätt onormalt.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Right Column */}
                    <div>
                        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-orange-500">
                            Behöver din bil en hjulinställning?
                        </h2>
                        <p className="text-gray-300 leading-relaxed mb-6">
                            Om du är osäker på om hjulvinklarna på din bil behöver justeras eller inte kan
                            du boka en hjulvinkelkontroll. Då får du direkt svar på hur bilens hjulinställning
                            är och om den behöver ändras.
                        </p>

                        <button
                            onClick={() =>
                                (window.location.href = "/verkstad/dacktjanster/hjulvinkelkontroll")
                            }
                            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-md transition duration-300 shadow-md"
                        >
                            Boka hjulvinkelkontroll
                        </button>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 bg-black text-white poppins-regular">
                <div className="max-w-6xl mx-auto">
                    {/* Heading and description */}
                    <div className="text-center mb-12">
                        <h2 className="text-xl md:text-2xl font-semibold mb-2">
                            Hjulinställning är ett mer hållbart val
                        </h2>
                        <p className="text-gray-300 text-sm leading-relaxed max-w-3xl mx-auto">
                            Vad vi menar med ett mer hållbart val, är ett val som du kan göra som minskar
                            drivmedelsförbrukningen eller behovet av nya delar. Du sparar med ditt val både
                            pengar och får lägre miljöpåverkan.
                        </p>
                    </div>

                    {/* Two columns */}
                    <div className="grid md:grid-cols-2 gap-8 items-start">
                        {/* Left side */}
                        <div>
                            <h3 className="text-base font-semibold mb-2">
                                En hjulinställning är mer hållbar utifrån att
                            </h3>
                            <ul className="space-y-1 text-gray-300 text-sm">
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-red-400 rounded-full mt-1 mr-2"></span>
                                    <span>Bränsleförbrukningen minskar.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-red-400 rounded-full mt-1 mr-2"></span>
                                    <span>Däckens livslängd förlängs.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-red-400 rounded-full mt-1 mr-2"></span>
                                    <span>Elbilens räckvidd ökar.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Right side */}
                        <div className="text-center">
                            <h3 className="text-base font-semibold mb-4">
                                Rätt inställning gör att du sparar:
                            </h3>
                            <div className="flex justify-center items-center gap-1 mb-3">
                                {["-", "8", "6", "5"].map((char, i) => (
                                    <div
                                        key={i}
                                        className="bg-white text-black text-xl font-bold px-3 py-2 rounded-md"
                                    >
                                        {char}
                                    </div>
                                ))}
                                <span className="text-base font-semibold ml-1">km</span>
                            </div>
                            <p className="text-gray-300 text-sm leading-relaxed max-w-md mx-auto mb-2">
                                Kör du en Volvo XC40 (T2) som har två hjul med 1,9 respektive 2,8 mm från korrekt hjulvinklar och får det åtgärdat sparar du 865,1 km i körsträcka per år. Eller 149 kg i CO2-utsläpp.
                            </p>

                            {/* More button */}
                            <button
                                onClick={() => setShowMore(!showMore)}
                                className="text-orange-400 text-sm font-semibold hover:underline"
                            >
                                {showMore ? "Visa mindre" : "Visa mer"}
                            </button>

                            {/* Hidden details */}
                            {showMore && (
                                <div className="mt-2 text-left text-gray-300 text-sm max-w-md mx-auto space-y-1">
                                    <p>
                                        <strong>Antaganden som använts vid exempelberäkningar:</strong>
                                    </p>
                                    <ul className="list-disc list-inside">
                                        <li>Volvo XC40 (T2) med manuell växellåda, tung utrustat med blandad körning ger 173 g CO2/km och 7,6 liter/100 km</li>
                                        <li>Årlig genomsnittlig sträcka i Sverige på 11.120 km/år för 2022</li>
                                    </ul>
                                    <p>7,6 liter/100 km = 17,3 kg CO2 = 17 300 g CO2</p>
                                    <p>1 liter = 13,16 km = 2276,32 g = 2,28 kg</p>
                                    <p>
                                        <strong>Referenser:</strong> Das, Riya Rani & Hossain, Md. Abu Mowazzem & Islam, Md. (2021). 155_RP-2: Variation of fuel efficiency of a light vehicle based on wheel alignment, vehicle speed and braking.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>




            {/* New Tyres Offer Section */}

          <section className="bg-black py-12 px-4 md:px-8">
  <div className="max-w-6xl mx-auto text-center mb-8">
    <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">
      Skillnaden mellan hjulinställning och hjulbalansering
    </h2>
    <p className="text-gray-300 text-sm md:text-base">
      Det kan vara svårt att hålla isär tjänsterna, låt oss hjälpa dig att reda ut begreppen.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
    {/* Hjulinställning Card */}
    <div className="bg-[#111] border border-orange-500 rounded-lg shadow-md overflow-hidden flex flex-col hover:shadow-[0_0_15px_#ff6600] transition">
      <div className="h-60 md:h-72 w-full overflow-hidden">
        <img
          src={tyre} // your image import
          alt="Fälgrenovering"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 p-5 flex flex-col justify-between">
        <div>
          <h3 className="text-lg md:text-xl font-bold text-orange-400 mb-2">
            Hjulinställning
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Syftet med en hjulinställning är att räta upp hjulen för optimalt väggrepp. Det får vi genom att justera vinklarna på dina hjul. Arbetet utförs med hjulen fortfarande kvar på din bil och inställningarna görs efter specifikationer från din biltillverkare.
          </p>
        </div>
      </div>
    </div>

    {/* Hjulbalansering Card */}
    <div className="bg-[#111] border border-orange-500 rounded-lg shadow-md overflow-hidden flex flex-col hover:shadow-[0_0_15px_#ff6600] transition">
      <div className="h-60 md:h-72 w-full overflow-hidden">
        <img
          src={wintertyres}
          alt="Däckhotell"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 p-5 flex flex-col justify-between">
        <div>
          <h3 className="text-lg md:text-xl font-bold text-orange-400 mb-2">
            Hjulbalansering
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            Vid en balansering monteras hjulen av och viktskillnader mäts upp med en mycket exakt balanseringsmaskin. Genom att placera ut balanseringsvikter runt hjulet försvinner den obalans som annars får det att hoppa eller vibrera i sidled.
          </p>
        </div>
      </div>
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

export default WheelAlingment;


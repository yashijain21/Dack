import React, { useState } from "react";
import LOGO from "../assets/Footer/SPEEDY-TYRES-LOGO-1.png"; // update path

const Header = () => {
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isAboutOpen, setIsAboutOpen] = useState(false);


    return (
        <header className="w-full poppins-regular">
            {/* 🔸 Top Announcement Bar */}
            <div className="bg-orange-600 text-white text-sm font-semibold py-2 overflow-hidden">
                <div className="flex gap-16 animate-marquee whitespace-nowrap">
                    <span>Hjulinställning för 500 SEK (OBS detta pris gäller ej elbil)</span>
                    <span>Gratis däckförvaring vid köp av nya däck</span>
                    <span>Öppet alla dagar 08:00 - 20:00</span>
                    <span>Ring oss för snabb service!</span>
                </div>
            </div>

            {/* 🔸 Main Header */}
            <div className="bg-black text-white">
                <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-6 relative">
                    {/* Logo */}
                    <div className="flex items-center">
                        <img src={LOGO} alt="Speedy Tyres" className="h-14" />
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 flex justify-center gap-10 text-sm font-semibold uppercase relative">
                        <a
                            href="#"
                            className="text-orange-500 border-b-2 border-orange-500 pb-1"
                        >
                            Hem
                        </a>

                        {/* Våra Tjänster dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => setIsServicesOpen(true)}
                            onMouseLeave={() => setIsServicesOpen(false)}
                        >
                            <button className="hover:text-orange-500 transition flex items-center gap-1">
                                Våra Tjänster <span className="text-orange-500">+</span>
                            </button>

                            {isServicesOpen && (
                                <div className="absolute top-full left-0 mt-2 w-64 bg-black poppins-thin text-white border border-white shadow-lg z-50 text-sm font-semibold">
                                    <a
                                        href="https://speedy-tyres.se/service/bilservice-underhall/"
                                        className="block px-4 py-2 hover:bg-orange-600 transition"
                                    >
                                        Bilservice & underhåll
                                    </a>
                                    <a
                                        href="https://speedy-tyres.se/service/grundlaggande-bilverkstadsreparationer/"
                                        className="block px-4 py-2 border-t border-white/30 hover:bg-orange-600 transition"
                                    >
                                        Grundläggande bilreparation
                                    </a>
                                    <a
                                        href="https://speedy-tyres.se/service/dack-och-falgtjanster/"
                                        className="block px-4 py-2 border-t border-white/30 hover:bg-orange-600 transition"
                                    >
                                        Däck- och fälgtjänster
                                    </a>
                                    <a
                                        href="https://speedy-tyres.se/service/fforsaljning-av-nya-dack/"
                                        className="block px-4 py-2 border-t border-white/30 hover:bg-orange-600 transition"
                                    >
                                        Försäljning av nya däck
                                    </a>
                                    <a
                                        href="https://speedy-tyres.se/service/fordonets-karosseri-och-lackering/"
                                        className="block px-4 py-2 border-t border-white/30 hover:bg-orange-600 transition"
                                    >
                                        Fordonets karosseri och lackering
                                    </a>
                                    <a
                                        href="https://speedy-tyres.se/service/dacktjanster/"
                                        className="block px-4 py-2 border-t border-white/30 hover:bg-orange-600 transition"
                                    >
                                        Däcktjänster
                                    </a>
                                </div>
                            )}

                        </div>

                        {/* Om Oss */}
                        <div
                            className="relative"
                            onMouseEnter={() => setIsAboutOpen(true)}
                            onMouseLeave={() => setIsAboutOpen(false)}
                        >
                            <a
                                href="https://speedy-tyres.se/team/"
                                className="hover:text-orange-500 transition  flex items-center gap-1"
                            >
                                Om Oss <span className="text-orange-500">+</span>
                            </a>

                            {isAboutOpen && (
                                <div className="absolute poppins-thin top-full left-0 mt-2 w-64 bg-black text-white border border-white shadow-lg z-50 text-sm font-semibold">
                                    <a
                                        href="https://speedy-tyres.se/team/"
                                        className="block px-4 py-2 hover:bg-orange-600 transition"
                                    >
                                        Team
                                    </a>
                                    {/* You can add more submenu items here */}
                                </div>
                            )}

                        </div>

                        <a href="https://speedy-tyres.se/boka/" className="hover:text-orange-500 transition">
                            Kontakta Oss
                        </a>
                        <a href="https://speedy-tyres.se/faq/" className="hover:text-orange-500 transition">
                            Vanliga Frågor
                        </a>
                    </nav>

                    {/* 🔸 Boka Tid button */}
                    <div>
                        <a href="https://book.speedy-tyres.se/">
                            <button className="border-2 border-orange-600 text-white px-5 py-2 uppercase font-bold hover:bg-orange-600 transition relative">
                                Boka tid
                            </button>
                        </a>
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Header;

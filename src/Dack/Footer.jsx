import { MapPin, Mail, Phone, Car, Wrench, CircleDot, CreditCard } from "lucide-react";
import Logo from "../assets/Footer/SPEEDY-TYRES-LOGO-1.png";
import TRUSTPILOT from "../assets/Footer/trust-pilot.png";
import CARDS from "../assets/Footer/master-cards.png";




export default function Footer() {
    return (
        <footer className="bg-black text-white pt-10 pb-6 px-6 md:px-16 poppins-regular">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
                {/* Column 1 - Logo & Address */}
                <div>
                    <img src={Logo} alt="Speedy Tyres" className="h-14 mb-4" />
                    <div className="bg-[#111] p-4 mb-4">
                        <p className="flex items-center gap-2 text-white font-medium">
                            <MapPin className="w-5 h-5" />
                            Manufakturgatan 13, 417 07 Göteborg, Sverige
                        </p>
                    </div>
                    <p className="font-semibold">
                        Vi är din personliga däckreparationsverkstad i Göteborg
                    </p>
                    <p className="text-gray-400 mt-1">Däckbyte – Däckförsäljning – Fälgreparation</p>
                    <div className="mt-6">
                        <img src={TRUSTPILOT} alt="Trustpilot" className="w-30 h-16" />
                    </div>
                    <div className="flex items-center gap-3 mt-4">
                        <img
              src={CARDS}
              alt="Payment methods"
              className="h-12 w-auto object-contain"
            />
                    </div>
                </div>

                {/* Column 2 - Links */}
                <div>
                    <h3 className="text-orange-500 font-semibold mb-4">Snabba Länkar</h3>
                    <ul className="space-y-3 text-gray-200">
                        <li className="flex items-center gap-2"><Car className="w-4 h-4" /> Bilservice & underhåll</li>
                        <li className="flex items-center gap-2"><Wrench className="w-4 h-4" /> Grundläggande bilverkstadsreparationer</li>
                        <li className="flex items-center gap-2"><Car className="w-4 h-4" /> Däck- och fälgtjänster</li>
                        <li className="flex items-center gap-2"><CircleDot className="w-4 h-4" /> Försäljning av begagnade däck</li>
                        <li className="flex items-center gap-2"><CircleDot className="w-4 h-4" /> Däcktjänster</li>
                        <li className="flex items-center gap-2"><CircleDot className="w-4 h-4" /> Fordonets karosseri och lackering</li>
                    </ul>
                </div>

                {/* Column 3 - Contact Form */}
                <div>
                    <h3 className="border border-orange-500 px-4 py-2 inline-block mb-6">Skriv din fråga</h3>
                    <form className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <input type="text" placeholder="Enter Your Name" className="bg-black border-b border-gray-600 focus:outline-none py-2 placeholder-gray-400" />
                            <input type="email" placeholder="Enter Your Email" className="bg-black border-b border-gray-600 focus:outline-none py-2 placeholder-gray-400" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <input type="text" placeholder="Select Date" className="bg-black border-b border-gray-600 focus:outline-none py-2 placeholder-gray-400" />
                            <input type="text" placeholder="Select Time" className="bg-black border-b border-gray-600 focus:outline-none py-2 placeholder-gray-400" />
                        </div>
                        <textarea placeholder="Describe Your Problem" className="bg-black border-b border-gray-600 focus:outline-none py-2 w-full placeholder-gray-400"></textarea>
                        <button className="bg-orange-600 hover:bg-orange-700 px-6 py-3 text-white font-semibold shadow-md">
                            SEND MESSAGE
                        </button>
                    </form>
                </div>

                {/* Column 4 - Contact Info */}
                <div>
                    <h3 className="text-orange-500 font-semibold mb-4">Nå oss</h3>
                  <div className="mb-4">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d272729.19669301674!2d11.972896!3d57.721607000000006!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff49bdf58d5cd%3A0x6a396e05cfed7b1c!2sManufakturgatan%2013%2C%20417%2007%20G%C3%B6teborg%2C%20Sweden!5e0!3m2!1sen!2sus!4v1759146440781!5m2!1sen!2sus"
    className="w-full h-40 rounded-lg border-0"
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

                    <h4 className="font-semibold mb-2">Öppettider</h4>
                    <p>Måndag till fredag: 8:00 - 18:00</p>
                    <p>Lördag: 9:00 - 16:00</p>
                    <p>Söndag: 10:00 - 15:00</p>

                    <div className="mt-4">
                        <p className="text-sm text-gray-400">För frågor om verkstad och reparation</p>
                        <p className="font-bold">0313951200</p>
                        <p className="font-bold">0704442001</p>
                    </div>

                    <div className="mt-4">
                        <p className="text-sm text-gray-400">Maila oss</p>
                        <p className="font-bold">Info@speedy-tyres.se</p>
                    </div>

                    <div className="mt-4">
                        <p className="text-sm text-gray-400">Följ oss på</p>
                        <div className="flex gap-4 mt-2">
                            <a href="#" className="bg-gray-800 p-2 rounded-full"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="bg-gray-800 p-2 rounded-full"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="bg-gray-800 p-2 rounded-full"><i className="fab fa-youtube"></i></a>
                            <a href="#" className="bg-gray-800 p-2 rounded-full"><i className="fab fa-tiktok"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function TireProductPage() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6 poppins-regular">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left: Tire Image */}
        <div className="bg-white rounded-2xl shadow p-4 flex items-center justify-center">
          <img
            src="/tire.png"
            alt="Goodyear Eagle F1 Asymmetric 6"
            className="rounded-xl object-contain"
          />
        </div>

        {/* Right: Product Info */}
        <div className="bg-white rounded-2xl shadow p-6 flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-semibold mb-2">GoodYear Eagle F1 Asymmetric 6</h1>
            <span className="inline-block bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full mb-4">
              Sommardäck
            </span>

            <button className="bg-red-600 text-white px-4 py-2 rounded-lg mb-4 hover:bg-red-700 transition">
              Kontrollera om däcken passar
            </button>

            <p className="text-3xl font-bold mb-2">2.007 kr<span className="text-base font-medium">/st</span></p>

            <p className="text-gray-600 text-sm flex items-center gap-2 mb-1">
              🛠️ Montering och balansering tillkommer med 395 kr/däck
            </p>
            <p className="text-gray-600 text-sm flex items-center gap-2">
              ♻️ Miljöavgift på 25 kr/däck tillkommer (Återvinningsavg. PV-däck)
            </p>
          </div>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="max-w-6xl mx-auto mt-6 bg-white rounded-2xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Produktinformation</h2>
        <p className="text-gray-700 mb-6">
          Designat för att leverera utmärkt prestanda på både torra och våta vägar.
          Med responsiv manövrering och adaptivt grepp är detta däck perfekt för dig
          som vill ha full kontroll oavsett väder.
        </p>

        {/* Expandable Sections */}
        <div className="space-y-3">
          {[
            "Specifikationer",
            "Köpvillkor",
            "Vanliga frågor",
            "EU-klassificering",
          ].map((section, idx) => (
            <div key={idx} className="border rounded-lg">
              <button
                onClick={() => toggleSection(section)}
                className="w-full flex justify-between items-center px-4 py-3 text-left text-lg font-medium hover:bg-gray-50"
              >
                {section}
                {openSection === section ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>
              {openSection === section && (
                <div className="px-4 pb-4 text-gray-600 text-sm">
                  Här kommer information om {section.toLowerCase()}.
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Help Button */}
      <div className="fixed bottom-6 right-6">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition">
          Kan vi hjälpa dig?
        </button>
      </div>
    </div>
  );
}
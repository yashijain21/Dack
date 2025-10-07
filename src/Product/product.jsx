import React, { useEffect, useState } from "react";
import axios from "axios";
import { ChevronDown, ChevronUp, X } from "lucide-react";

export default function TireProductPage({ productId = "68e38c1907ca86685afcb6c0" }) {
  const [productData, setProductData] = useState(null);
  const [openSection, setOpenSection] = useState(null);
  const [faqCategory, setFaqCategory] = useState("Alla frågor");
  const [showFitModal, setShowFitModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [regNumber, setRegNumber] = useState("");
  const [error, setError] = useState("");
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");



  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`https://dack-backend-1.onrender.com/api/products/${productId}`);
        setProductData(res.data);
      } catch (err) {
        console.error("Error fetching product:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [productId]);

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



  if (loading) return <div className="text-center text-gray-400 p-10">Loading product...</div>;
  if (!productData) return <div className="text-center text-red-500 p-10">Product not found.</div>;

  return (
    <div className="bg-black min-h-screen p-4 sm:p-6 poppins-regular text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
        {/* Left: Image + Sections */}
        <div className="lg:col-span-7 space-y-4 sm:space-y-6">
          {/* Product Image */}
          <div className="bg-[#0d0d0d] rounded-md shadow flex items-center justify-center border border-orange-600">
            <img
              src={productData.productImage || "https://via.placeholder.com/600x400"}
              alt={productData.name}
              className="rounded-xl object-contain w-full h-full max-h-[500px] p-4"
            />
          </div>

          {/* Extra Fees */}
          {productData.extraFees?.length > 0 && (
            <div className="w-full bg-[#0d0d0d] shadow p-4 sm:p-6 border border-orange-600 rounded-md">
              <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-orange-500">
                Extra Avgifter
              </h2>
              <ul className="space-y-2 text-gray-300">
                {productData.extraFees.map((fee) => (
                  <li key={fee._id.$oid} className="flex items-center gap-2">
                    <span>{fee.icon}</span>
                    <span>{fee.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Sections */}
          {productData.sections?.length > 0 && (
            <div className="w-full bg-[#0d0d0d] shadow p-4 sm:p-6 border border-orange-600 rounded-md space-y-2">
              {productData.sections.map((section, idx) => (
                <div key={idx} className="border-b border-gray-700">
                  <button
                    onClick={() => toggleSection(section)}
                    className="w-full flex justify-between items-center px-3 sm:px-4 py-2 sm:py-3 text-left text-base sm:text-lg font-medium hover:bg-gray-800 transition-colors"
                  >
                    <span>{section}</span>
                    {openSection === section ? (
                      <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 flex-shrink-0" />
                    )}
                  </button>

                  {openSection === section && (
                    <div className="px-3 sm:px-4 pb-3 sm:pb-4 text-gray-300 text-sm space-y-2">
                      {/* Specifications */}
                      {section === "Specifikationer" && productData.specifications && (
                        <div className="divide-y divide-gray-700 border border-gray-700 rounded-md overflow-hidden">
                          {Object.entries(productData.specifications).map(([key, value]) => {
                            if (key === "_id") return null;
                            return (
                              <div
                                key={key}
                                className="grid grid-cols-2 bg-[#111] even:bg-[#1a1a1a] text-xs sm:text-sm"
                              >
                                <div className="p-3 font-medium">{key}</div>
                                <div className="p-3 text-right">{value}</div>
                              </div>
                            );
                          })}
                        </div>
                      )}

                      {/* EU Classification */}
                      {section === "EU-klassificering" && (
                        <div className="flex justify-center">
                          <img
                            src={productData.euClassificationImage}
                            alt="EU-klassificering"
                            className="max-w-full h-auto rounded-lg"
                          />
                        </div>
                      )}

                      {/* FAQs */}
                      {section === "Vanliga frågor" && productData.faqs && (
                        <div>
                          {/* Categories Tabs */}
                          <div className="flex gap-2 mb-4 flex-wrap">
                            {productData.faqs.map((faq) => (
                              <button
                                key={faq._id.$oid}
                                onClick={() => setFaqCategory(faq.category)}
                                className={`px-3 py-1 rounded-full text-sm ${faqCategory === faq.category
                                  ? "bg-orange-600 text-white"
                                  : "bg-gray-700 text-gray-200"
                                  }`}
                              >
                                {faq.category}
                              </button>
                            ))}
                          </div>
                          {/* FAQ Items */}
                          <div className="space-y-2">
                            {productData.faqs
                              .find((f) => f.category === faqCategory)
                              ?.items.map((item) => (
                                <div key={item._id.$oid} className="border border-gray-700 rounded-md p-3">
                                  <p className="font-medium">{item.q}</p>
                                  <p className="text-gray-300 text-sm">{item.a}</p>
                                </div>
                              ))}
                          </div>
                        </div>
                      )}

                      {/* Terms */}
                      {section === "Köpvillkor" && productData.terms && (
                        <div className="space-y-2 text-gray-300 text-sm">
                          {Object.entries(productData.terms).map(([key, value]) => {
                            if (key === "_id") return null;
                            let text = typeof value === "object" ? JSON.stringify(value) : value;
                            return (
                              <div key={key} className="p-2 border-b border-gray-700">
                                <p className="font-medium">{key}</p>
                                <p className="text-gray-300 text-sm">{text}</p>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right: Sticky Product Info */}
        <div className="lg:col-span-5">
          <div className="bg-[#0d0d0d] rounded-md shadow p-4 sm:p-6 flex flex-col sticky top-4 border border-orange-600">
            <h1 className="text-xl sm:text-2xl font-semibold mb-2">{productData.name}</h1>
            <div className="mb-3">
              <span className="inline-block border text-white text-xs sm:text-sm px-2 py-1 rounded-full">
                {productData.category || "Okänd kategori"}
              </span>
            </div>

            <div className="mb-3">
              <button
                onClick={() => setShowFitModal(true)}
                className="w-full bg-orange-600 text-white px-4 py-3 rounded-lg hover:bg-orange-700 transition text-sm sm:text-base"
              >
                Kontrollera om däcken passar
              </button>
            </div>

            <p className="text-xl sm:text-2xl font-bold mb-2">
              {productData.price?.toLocaleString()} {productData.currency || "kr"}
              <span className="text-sm font-medium">{productData.unit || "/st"}</span>
            </p>
            <p className="text-gray-400 text-sm">
              Lagerstatus: {productData.stock > 0 ? "I lager" : "Slut i lager"}
            </p>
          </div>
        </div>
      </div>

      {/* Fit Modal */}
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
      <form className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Namn"
          className="bg-black text-white placeholder-gray-400 border-b border-gray-600 p-2 focus:border-orange-500 focus:outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          className="bg-black text-white placeholder-gray-400 border-b border-gray-600 p-2 focus:border-orange-500 focus:outline-none"
        />
        <input
  type="tel"
  placeholder="Telefonnummer"
  value={phoneNumber}
  onChange={(e) => {
    const onlyNums = e.target.value.replace(/[^0-9]/g, "");
    setPhoneNumber(onlyNums);
  }}
  className="bg-black text-white placeholder-gray-400 border-b border-gray-600 p-2 focus:border-orange-500 focus:outline-none"
/>

        <input
          type="text"
          placeholder="Föredragen tid"
          className="bg-black text-white placeholder-gray-400 border-b border-gray-600 p-2 focus:border-orange-500 focus:outline-none"
        />
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




    </div>
  );
}

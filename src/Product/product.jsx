import React, { useEffect, useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ChevronDown, ChevronUp, X } from "lucide-react";

export default function TireProductPage({ productId = "68e38c1907ca86685afcb6c0" }) {
  const BASE_URL = "https://dack-backend-1.onrender.com";

  const [productData, setProductData] = useState(null);
  const [openSection, setOpenSection] = useState(null);
  const [faqCategory, setFaqCategory] = useState("Alla frågor");
  const [showFitModal, setShowFitModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [regNumber, setRegNumber] = useState("");
  const [error, setError] = useState("");
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Generate 45-minute time slots
  const generateTimeSlots = () => {
    if (!selectedDate) return [];
    const day = selectedDate.getDay(); // 0 = Sunday
    let startHour = 8, endHour = 18;
    if (day === 6) { startHour = 9; endHour = 16; }
    else if (day === 0) { startHour = 10; endHour = 15; }

    const slots = [];
    let hour = startHour, minute = 0;
    while (hour < endHour || (hour === endHour && minute === 0)) {
      slots.push(`${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`);
      minute += 45;
      if (minute >= 60) { minute -= 60; hour += 1; }
    }
    return slots;
  };

  // Fetch product data
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/products/${productId}`);
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
    setShowFitModal(false);
    setShowAppointmentForm(true);
  };

  // ✅ Book Appointment
  const handleAppointmentSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        name,
        email,
        phoneNumber,
        productId,
        regNumber,
        date: selectedDate ? selectedDate.toISOString().split("T")[0] : "",
        time: selectedTime,
      };

      const res = await axios.post(`${BASE_URL}/api/appointments`, payload);

      setSuccessMessage("Din tid har bokats framgångsrikt!");
      console.log("Appointment success:", res.data);

      // Reset form
      setName("");
      setEmail("");
      setPhoneNumber("");
      setSelectedDate("");
      setSelectedTime("");
      setRegNumber("");
      setShowAppointmentForm(false);
    } catch (err) {
      console.error("Error booking appointment:", err);
      alert("Något gick fel. Försök igen senare.");
    }
  };

  if (loading) return <div className="text-center text-gray-400 p-10">Loading product...</div>;
  if (!productData) return <div className="text-center text-red-500 p-10">Product not found.</div>;

  return (
    <div className="bg-black min-h-screen p-4 sm:p-6 poppins-regular text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
        {/* Left Side */}
        <div className="lg:col-span-7 space-y-4 sm:space-y-6">
          <div className="bg-[#0d0d0d] rounded-md shadow flex items-center justify-center border border-orange-600">
            <img
              src={productData.productImage || "https://via.placeholder.com/600x400"}
              alt={productData.name}
              className="rounded-xl object-contain w-full h-full max-h-[500px] p-4"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="lg:col-span-5">
          <div className="bg-[#0d0d0d] rounded-md shadow p-4 sm:p-6 flex flex-col sticky top-4 border border-orange-600">
            <h1 className="text-xl sm:text-2xl font-semibold mb-2">{productData.name}</h1>
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

      {/* ✅ Registration Modal */}
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

      {/* ✅ Appointment Form */}
      {showAppointmentForm && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-black rounded-xl shadow-lg w-full max-w-md p-6 relative border border-orange-600">
            <button
              onClick={() => setShowAppointmentForm(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>

            <h2 className="text-xl font-semibold mb-4 text-white text-center">Boka din tid</h2>

            <form className="flex flex-col gap-3" onSubmit={handleAppointmentSubmit}>
              <input
                type="text"
                placeholder="Namn"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-black text-white placeholder-gray-400 border-b border-gray-600 p-2 focus:border-orange-500 focus:outline-none"
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-black text-white placeholder-gray-400 border-b border-gray-600 p-2 focus:border-orange-500 focus:outline-none"
                required
              />
              <input
                type="tel"
                placeholder="Telefonnummer"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value.replace(/[^0-9]/g, ""))}
                className="bg-black text-white placeholder-gray-400 border-b border-gray-600 p-2 focus:border-orange-500 focus:outline-none"
                required
              />

              <div className="flex gap-2">
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => {
                    setSelectedDate(date);
                    setSelectedTime("");
                  }}
                  className="bg-black text-white placeholder-gray-400 border-b border-gray-600 p-2 focus:border-orange-500 focus:outline-none flex-1"
                  placeholderText="Välj datum"
                  minDate={new Date()}
                  required
                  dateFormat="yyyy-MM-dd"
                />

                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="bg-black text-white border-b border-gray-600 p-2 focus:border-orange-500 focus:outline-none flex-1"
                  required
                >
                  <option value="">Välj tid</option>
                  {generateTimeSlots().map((slot) => (
                    <option key={slot} value={slot}>{slot}</option>
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

      {successMessage && (
        <div className="fixed bottom-5 right-5 bg-green-600 text-white px-4 py-3 rounded-md shadow-lg">
          {successMessage}
        </div>
      )}
    </div>
  );
}

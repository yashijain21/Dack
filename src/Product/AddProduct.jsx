import React, { useState, useEffect } from "react";
import axios from "axios";

// Cloudinary configs
const CLOUD_NAME = "dfg7wekwd";
const UPLOAD_PRESET = "speedy_tyres";

const ProductForm = ({ product = null }) => {
  const BASE_URL = "https://dack-backend-1.onrender.com/api/products";
  const CATEGORY_URL = "https://dack-backend-1.onrender.com/api/categories";

  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    category: "",
    category_id: "",
    description: "",
    price: 0,
    discount_price: 0,
    stock: 0,
    status: "active",
    currency: "kr",
    unit: "/st",
    productImage: "",
    euClassificationImage: "",
    details: "",
    extraFees: [{ icon: "", text: "" }],
    sections: ["Specifikationer", "Köpvillkor", "Vanliga frågor", "EU-klassificering"],
    specifications: {},
    faqs: [],
    terms: {},
  });

  // Load product data if editing
  useEffect(() => {
    if (product) {
      setFormData(product);
    }
  }, [product]);

  // Fetch categories from backend
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(CATEGORY_URL);
        setCategories(res.data);
      } catch (err) {
        console.error("Fel vid hämtning av kategorier:", err);
      }
    };
    fetchCategories();
  }, []);

  // Handle simple field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle nested objects
  const handleSpecChange = (key, value) => {
    setFormData({
      ...formData,
      specifications: { ...formData.specifications, [key]: value },
    });
  };

  // Handle extra fees
  const handleExtraFeeChange = (index, field, value) => {
    const updatedFees = [...formData.extraFees];
    updatedFees[index][field] = value;
    setFormData({ ...formData, extraFees: updatedFees });
  };

  const addExtraFee = () => {
    setFormData({ ...formData, extraFees: [...formData.extraFees, { icon: "", text: "" }] });
  };

  // Upload image to Cloudinary
  const handleImageUpload = async (e, field) => {
    const file = e.target.files[0];
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", UPLOAD_PRESET);

    try {
      const res = await axios.post(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, data);
      setFormData({ ...formData, [field]: res.data.secure_url });
    } catch (err) {
      console.error("Cloudinary uppladdningsfel:", err);
    }
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (product && product._id) {
        await axios.put(`${BASE_URL}/${product._id}`, formData);
        alert("Produkten uppdaterades framgångsrikt!");
      } else {
        await axios.post(BASE_URL, formData);
        alert("Produkten lades till framgångsrikt!");
        setFormData({
          name: "",
          slug: "",
          category: "",
          category_id: "",
          description: "",
          price: 0,
          discount_price: 0,
          stock: 0,
          status: "active",
          currency: "kr",
          unit: "/st",
          productImage: "",
          euClassificationImage: "",
          details: "",
          extraFees: [{ icon: "", text: "" }],
          sections: ["Specifikationer", "Köpvillkor", "Vanliga frågor", "EU-klassificering"],
          specifications: {},
          faqs: [],
          terms: {},
        });
      }
    } catch (err) {
      console.error(err);
      alert("Fel vid sparande av produkt");
    }
  };

  return (
    <div className="min-h-screen bg-black text-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-900 rounded-xl shadow-2xl p-6 border border-gray-800">
          <h2 className="text-3xl font-bold mb-6 text-white">
            {product ? "Redigera Produkt" : "Lägg till Ny Produkt"}
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Basic Information Section */}
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-orange-500 border-b border-gray-700 pb-2">
                Grundinformation
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Produktnamn</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Ange produktnamn"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Slug</label>
                  <input
                    type="text"
                    name="slug"
                    placeholder="produkt-slug"
                    value={formData.slug}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Kategori</label>
                  <select
                    name="category_id"
                    value={formData.category_id}
                    onChange={(e) => {
                      const selected = categories.find(c => c._id === e.target.value);
                      setFormData({
                        ...formData,
                        category_id: e.target.value,
                        category: selected ? selected.name : ""
                      });
                    }}
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  >
                    <option value="">Välj kategori</option>
                    {categories.map((cat) => (
                      <option key={cat._id} value={cat._id}>{cat.name}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-300 mb-2">Beskrivning</label>
              <input
                type="text"
                name="description"
                placeholder="Produktbeskrivning"
                value={formData.description}
                onChange={handleChange}
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Pricing & Stock Section */}
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-orange-500 border-b border-gray-700 pb-2">
                Pris & Lager
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Pris</label>
                  <input
                    type="number"
                    name="price"
                    placeholder="0"
                    value={formData.price}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Rabattpris</label>
                  <input
                    type="number"
                    name="discount_price"
                    placeholder="0"
                    value={formData.discount_price}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Lager</label>
                  <input
                    type="number"
                    name="stock"
                    placeholder="0"
                    value={formData.stock}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Status</label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  >
                    <option value="active">Aktiv</option>
                    <option value="inactive">Inaktiv</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Valuta</label>
                  <input
                    type="text"
                    name="currency"
                    placeholder="kr"
                    value={formData.currency}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Enhet</label>
                  <input
                    type="text"
                    name="unit"
                    placeholder="/st"
                    value={formData.unit}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Images Section */}
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-orange-500 border-b border-gray-700 pb-2">
                Produktbilder
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">Produktbild</label>
                  <div className="flex flex-col gap-3">
                    <input
                      type="file"
                      onChange={(e) => handleImageUpload(e, "productImage")}
                      className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-500 file:text-white hover:file:bg-orange-600 transition-all"
                    />
                    {formData.productImage && (
                      <div className="mt-2">
                        <img src={formData.productImage} alt="Produkt" className="w-32 h-32 object-contain rounded-lg border border-gray-600"/>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">EU Klassificeringsbild</label>
                  <div className="flex flex-col gap-3">
                    <input
                      type="file"
                      onChange={(e) => handleImageUpload(e, "euClassificationImage")}
                      className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-500 file:text-white hover:file:bg-orange-600 transition-all"
                    />
                    {formData.euClassificationImage && (
                      <div className="mt-2">
                        <img src={formData.euClassificationImage} alt="EU" className="w-32 h-32 object-contain rounded-lg border border-gray-600"/>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Details Section */}
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-orange-500 border-b border-gray-700 pb-2">
                Produktdetaljer
              </h3>
              <textarea
                name="details"
                placeholder="Ange produktdetaljer..."
                value={formData.details}
                onChange={handleChange}
                rows="4"
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Extra Fees Section */}
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-orange-500">Extra avgifter</h3>
                <button
                  type="button"
                  onClick={addExtraFee}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-all flex items-center gap-2"
                >
                  <span>+ Lägg till avgift</span>
                </button>
              </div>

              <div className="space-y-3">
                {formData.extraFees.map((fee, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-300 mb-2">Ikon</label>
                      <input
                        type="text"
                        placeholder="Ikon URL eller kod"
                        value={fee.icon}
                        onChange={(e) => handleExtraFeeChange(idx, "icon", e.target.value)}
                        className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-300 mb-2">Beskrivning</label>
                      <input
                        type="text"
                        placeholder="Avgiftsbeskrivning"
                        value={fee.text}
                        onChange={(e) => handleExtraFeeChange(idx, "text", e.target.value)}
                        className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Specifications Section */}
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-orange-500">Specifikationer</h3>
                <button
                  type="button"
                  onClick={() => handleSpecChange(prompt("Specifikationsnyckel?"), prompt("Specifikationsvärde?"))}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-all"
                >
                  + Lägg till specifikation
                </button>
              </div>

              <div className="space-y-3">
                {Object.keys(formData.specifications).map((key) => (
                  <div key={key} className="flex gap-3 items-center p-3 bg-gray-700 rounded-lg">
                    <span className="w-32 text-orange-400 font-medium">{key}</span>
                    <input
                      type="text"
                      value={formData.specifications[key]}
                      onChange={(e) => handleSpecChange(key, e.target.value)}
                      className="flex-1 p-2 bg-gray-600 border border-gray-500 rounded text-white focus:outline-none focus:ring-1 focus:ring-orange-500 transition-all"
                    />
                  </div>
                ))}
                {Object.keys(formData.specifications).length === 0 && (
                  <p className="text-gray-400 text-center py-4">Inga specifikationer tillagda ännu</p>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-4">
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg"
              >
                {product ? "Uppdatera Produkt" : "Skapa Produkt"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;

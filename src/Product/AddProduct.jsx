import React, { useState, useEffect } from "react";
import axios from "axios";

// Cloudinary configs
const CLOUD_NAME = "dfg7wekwd";
const UPLOAD_PRESET = "speedy_tyres";

const ProductForm = ({ product = null }) => {
  const BASE_URL = "https://dack-backend-1.onrender.com/api/products";

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
      console.error("Cloudinary upload error:", err);
    }
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (product && product._id) {
        // Update existing product
        await axios.put(`${BASE_URL}/${product._id}`, formData);
        alert("Product updated successfully!");
      } else {
        // Create new product
        await axios.post(BASE_URL, formData);
        alert("Product added successfully!");
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
      alert("Error saving product");
    }
  };

  return (
    <div className="min-h-screen bg-black text-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-900 rounded-xl shadow-2xl p-6 border border-gray-800">
          <h2 className="text-3xl font-bold mb-6 text-white">
            {product ? "Edit Product" : "Add New Product"}
          </h2>
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Basic Information Section */}
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-orange-500 border-b border-gray-700 pb-2">
                Basic Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Product Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Enter product name" 
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
                    placeholder="product-slug" 
                    value={formData.slug} 
                    onChange={handleChange} 
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                  <input 
                    type="text" 
                    name="category" 
                    placeholder="Product category" 
                    value={formData.category} 
                    onChange={handleChange} 
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Category ID</label>
                  <input 
                    type="text" 
                    name="category_id" 
                    placeholder="Category ID" 
                    value={formData.category_id} 
                    onChange={handleChange} 
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-300 mb-2">Description</label>
                <input 
                  type="text" 
                  name="description" 
                  placeholder="Product description" 
                  value={formData.description} 
                  onChange={handleChange} 
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Pricing & Stock Section */}
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-orange-500 border-b border-gray-700 pb-2">
                Pricing & Stock
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Price</label>
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
                  <label className="block text-sm font-medium text-gray-300 mb-2">Discount Price</label>
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
                  <label className="block text-sm font-medium text-gray-300 mb-2">Stock</label>
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
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Currency</label>
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
                  <label className="block text-sm font-medium text-gray-300 mb-2">Unit</label>
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
                Product Images
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">Product Image</label>
                  <div className="flex flex-col gap-3">
                    <input 
                      type="file" 
                      onChange={(e) => handleImageUpload(e, "productImage")} 
                      className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-500 file:text-white hover:file:bg-orange-600 transition-all"
                    />
                    {formData.productImage && (
                      <div className="mt-2">
                        <img src={formData.productImage} alt="Product" className="w-32 h-32 object-contain rounded-lg border border-gray-600"/>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">EU Classification Image</label>
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
                Product Details
              </h3>
              <textarea 
                name="details" 
                placeholder="Enter product details..." 
                value={formData.details} 
                onChange={handleChange} 
                rows="4"
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Extra Fees Section */}
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-orange-500">Extra Fees</h3>
                <button 
                  type="button" 
                  onClick={addExtraFee} 
                  className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-all flex items-center gap-2"
                >
                  <span>+ Add Fee</span>
                </button>
              </div>
              
              <div className="space-y-3">
                {formData.extraFees.map((fee, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-300 mb-2">Icon</label>
                      <input 
                        type="text" 
                        placeholder="Icon URL or code" 
                        value={fee.icon} 
                        onChange={(e) => handleExtraFeeChange(idx, "icon", e.target.value)} 
                        className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-300 mb-2">Description</label>
                      <input 
                        type="text" 
                        placeholder="Fee description" 
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
                <h3 className="text-xl font-semibold text-orange-500">Specifications</h3>
                <button 
                  type="button" 
                  onClick={() => handleSpecChange(prompt("Specification key?"), prompt("Specification value?"))} 
                  className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-all"
                >
                  + Add Specification
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
                  <p className="text-gray-400 text-center py-4">No specifications added yet</p>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-4">
              <button 
                type="submit" 
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg"
              >
                {product ? "Update Product" : "Create Product"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
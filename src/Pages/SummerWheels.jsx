// src/pages/SummerWheels.jsx
import React, { useState, useEffect } from "react";
import { FiCheckCircle, FiX, FiSearch } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";
import heroImage from "../assets/SummerWheels/summer-wheels-heroImage.webp";
import SummerWheelImg from "../assets/SummerWheels/summer-wheels-product1.avif";
import SummerWheelImg2 from "../assets/SummerWheels/summer-wheels-product2.avif";
import SummerWheelImg3 from "../assets/SummerWheels/summer-wheels-product-3.avif";

const filters = [
    "Produkter",
    "Kategori",
    "Varumärke",
    "Pris (kr)",
    "Kampanjpris",
    "SpeedyTyreskortspris",
    "Däckmärke",
    "Bredd",
    "Profil",
    "Diameter",
    "Däcktrycksövervakning",
];


const SummerWheels = () => {
    const [openFilters, setOpenFilters] = useState({});
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const toggleFilter = (filter) => {
        setOpenFilters((prev) => ({
            ...prev,
            [filter]: !prev[filter],
        }));
    };

    const toggleFilterSidebar = () => {
        setIsFilterOpen(!isFilterOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="bg-[#0d0d0d] text-white poppins-regular min-h-screen">
            {/* Hero Section */}
            <div
                className="relative w-full h-[250px] md:h-[350px] bg-cover bg-center flex items-center"
                style={{ backgroundImage: `url(${heroImage})` }}
            >
                <div className="bg-black/60 w-full h-full absolute top-0 left-0"></div>

                {/* Responsive Text Block */}
                <div className="relative z-10 px-4 sm:px-6 md:pl-12 w-full flex flex-col justify-center">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">
                        Kompletta sommarhjul till din bil
                    </h1>

                    <ul className="space-y-2 text-sm sm:text-base">
                        <li className="flex items-center gap-2">
                            <FiCheckCircle className="text-orange-500 flex-shrink-0" />
                            <span>Kompletta hjul utvalda för din Volvo</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <FiCheckCircle className="text-orange-500 flex-shrink-0" />
                            <span>Testade och godkända av biltillverkaren</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <FiCheckCircle className="text-orange-500 flex-shrink-0" />
                            <span>Smidig förvaring på vårt däckhotell</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Top Header Section with Filter, Search and Dropdown */}
            <div className={`max-w-7xl mx-auto border-b border-gray-700 py-4 px-4 bg-[#0d0d0d] transition-all duration-300 ${
                isSticky ? 'lg:sticky lg:top-0 lg:z-50 lg:shadow-lg' : ''
            }`}>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
                    {/* Filter Button for Mobile */}
                    <div className="flex lg:hidden items-center justify-between">
                        <button
                            onClick={toggleFilterSidebar}
                            className="flex items-center gap-2 px-4 py-2 bg-orange-600 rounded-lg text-white font-semibold"
                        >
                            Filter
                            {isFilterOpen && <FiX className="text-white" />}
                        </button>
                        
                        <div className="flex items-center gap-3">
                          
                            <select className="bg-[#1c1c1c] border border-gray-700 px-3 py-1.5 text-sm rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-white">
                                <option>Mest besökta</option>
                                <option>stigande pris</option>
                                <option>fallande pris</option>
                                <option>produktnamn a-ö</option>
                                <option>produktnamn ö-a</option>
                                <option>mest relevanta</option>
                            </select>
                        </div>
                    </div>

                    {/* Desktop Layout */}
                    <div className="hidden lg:flex lg:w-1/4 lg:items-center">
                        <h2 className="text-lg font-semibold text-white">Filter</h2>
                    </div>

                    {/* Search and Dropdown Section */}
                    <div className="hidden lg:flex flex-col md:flex-row gap-3 lg:w-3/4 items-center">
                        {/* Search Box */}
                        <div className="relative flex-1">
                            <input
                                type="text"
                                placeholder="Sök"
                                className="w-full bg-[#1c1c1c] border border-gray-700 pl-10 pr-3 py-2 text-sm text-white rounded focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            />
                            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        </div>

                        {/* Sorting */}
                        <div className="flex items-center gap-3 justify-between md:justify-end">
                            <p className="text-gray-400 text-sm whitespace-nowrap">
                                Hittade 
                            </p>
                            <select className="bg-[#1c1c1c] border border-gray-700 px-3 py-1.5 text-sm rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-white">
                                <option>Mest besökta</option>
                                <option>stigande pris</option>
                                <option>fallande pris</option>
                                <option>produktnamn a-ö</option>
                                <option>produktnamn ö-a</option>
                                <option>mest relevanta</option>
                            </select>
                        </div>
                    </div>

                    {/* Mobile Search */}
                    <div className="lg:hidden relative">
                        <input
                            type="text"
                            placeholder="Sök"
                            className="w-full bg-[#1c1c1c] border border-gray-700 pl-10 pr-3 py-2 text-sm text-white rounded focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        />
                        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex max-w-7xl mx-auto gap-6 px-4 py-6">
                {/* Sidebar - Desktop */}
                <aside className={`hidden lg:block w-64 bg-[#111111] border border-gray-700 rounded-lg text-white h-[calc(100vh-4rem)] sticky top-6 overflow-y-auto p-4 transition-all duration-300 ${
                    isSticky ? 'lg:top-24' : 'lg:top-6'
                }`}>
                    {/* Car Plate Box */}
                    <div className="bg-[#1c1c1c] border border-gray-700 p-4 rounded mb-4">
                        <label className="text-sm font-medium">Sommarhjul som passar din bil</label>
                          <input
  type="text"
  defaultValue="ABC 123"
  placeholder="ABC 123"
  className="w-full bg-white text-black mt-2 px-2 py-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
/>
                        <a href="#" className="text-xs underline text-orange-500 mt-2 inline-block">
                            Ange bilmodell
                        </a>
                    </div>

                    {/* Filter Dropdowns */}
                    {filters.map((filter, idx) => (
                        <div key={filter} className="mb-3">
                            <button
                                className="flex items-center justify-between w-full text-sm font-medium py-2 text-gray-300 hover:text-orange-500 transition-colors"
                                onClick={() => toggleFilter(filter)}
                            >
                                {filter}
                                <FaChevronDown
                                    className={`ml-2 transition-transform ${openFilters[filter] ? "rotate-180 text-orange-500" : ""
                                        }`}
                                />
                            </button>
                            {idx !== filters.length - 1 && (
                                <hr className="border-t border-gray-700 my-2" />
                            )}
                        </div>
                    ))}

                    <button className="mt-4 bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded text-sm font-semibold w-full transition-colors">
                        Rensa Alla
                    </button>
                </aside>

                {/* Mobile Filter Sidebar */}
                <div className={`lg:hidden fixed inset-0 z-50 transform transition-transform duration-300 ${
                    isFilterOpen ? 'translate-x-0' : '-translate-x-full'
                }`}>
                    <div className="absolute inset-0 bg-black bg-opacity-50" onClick={toggleFilterSidebar}></div>
                    <aside className="relative w-80 max-w-full h-full bg-[#111111] border-r border-gray-700 overflow-y-auto p-4">
                        {/* Close Button */}
                        <button
                            onClick={toggleFilterSidebar}
                            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white"
                        >
                            <FiX size={24} />
                        </button>

                        {/* Car Plate Box */}
                        <div className="bg-[#1c1c1c] border border-gray-700 p-4 rounded mb-4 mt-8">
                            <label className="text-sm font-medium">Sommarhjul som passar din bil</label>
                              <input
  type="text"
  defaultValue="ABC 123"
  placeholder="ABC 123"
  className="w-full bg-white text-black mt-2 px-2 py-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
/>
                            <a href="#" className="text-xs underline text-orange-500 mt-2 inline-block">
                                Ange bilmodell
                            </a>
                        </div>

                        {/* Filter Dropdowns */}
                        {filters.map((filter, idx) => (
                            <div key={filter} className="mb-3">
                                <button
                                    className="flex items-center justify-between w-full text-sm font-medium py-2 text-gray-300 hover:text-orange-500 transition-colors"
                                    onClick={() => toggleFilter(filter)}
                                >
                                    {filter}
                                    <FaChevronDown
                                        className={`ml-2 transition-transform ${openFilters[filter] ? "rotate-180 text-orange-500" : ""
                                            }`}
                                    />
                                </button>
                                {idx !== filters.length - 1 && (
                                    <hr className="border-t border-gray-700 my-2" />
                                )}
                            </div>
                        ))}

                        <button className="mt-4 bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded text-sm font-semibold w-full transition-colors">
                            Rensa Alla
                        </button>
                    </aside>
                </div>

                {/* Product Section */}
              <p className="text-gray-500">
                No products found.
              </p>
            </div>
        </div>
    );
};

export default SummerWheels;
import React from "react";
import heroImg from "../assets/HeroSection/hero-image.png"; // update with your actual path

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 "></div>

      {/* Navbar */}
      <nav className="relative z-10 flex justify-between items-center py-6 px-10">
        <ul className="flex space-x-8 text-gray-700 font-medium">
          <li className="hover:text-pink-500 cursor-pointer">Skincare</li>
          <li className="hover:text-pink-500 cursor-pointer">Gifting</li>
        </ul>

        <div className="text-3xl font-bold tracking-wide">DR</div>

        <ul className="flex space-x-8 text-gray-700 font-medium">
          <li className="hover:text-pink-500 cursor-pointer">About Us</li>
          <li className="hover:text-pink-500 cursor-pointer">Contact</li>
        </ul>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-1 items-center justify-start px-10 py-16">
        <div className="max-w-xl space-y-6">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-800">
            Soothe, Hydrate, Illuminate
          </h1>
          <p className="text-lg text-gray-700">
            Deep moisture meets lightweight care, designed to love your skin
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

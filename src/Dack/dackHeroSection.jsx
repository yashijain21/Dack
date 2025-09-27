import React from "react";
import mechanicImg from "../assets/HeroSection/mechanic.jpg";

const HeroSection = () => {
  return (
    <section className="w-full poppins-regular bg-[#2c3e50] flex flex-col md:flex-row items-center justify-between relative">
      {/* Left Side Text */}
      <div className="flex-1 flex items-center justify-center text-left p-8 md:p-10 min-h-[200px] 
                      md:static absolute inset-0 z-10 bg-black/40 md:bg-transparent">
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-snug drop-shadow-md">
            Köp däck och hjul <br /> monterade på din bil
          </h1>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="flex-1 h-[250px] md:h-[350px] w-full">
        <img
          src={mechanicImg}
          alt="Tires"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;

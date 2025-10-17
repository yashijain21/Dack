import React from "react";
import MoreTyres1 from "../assets/Tyres/more-tyres-1.avif"; 
import MoreTyres2 from "../assets/Tyres/more-tyres-2.avif"; 
import MoreTyres3 from "../assets/Tyres/more-tyres-3.avif"; 

const TireSection = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-black via-[#0d0d0d] to-black py-10 px-4 sm:px-6 poppins-regular">
      {/* Subtle background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-20 w-72 h-72 bg-orange-500/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-10 right-20 w-72 h-72 bg-orange-600/10 blur-3xl rounded-full"></div>
      </div>

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold text-white mb-8 border-l-4 border-orange-500 pl-3">
        Läs mer om däck
      </h2>

      {/* Cards */}
      <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
        {/* Card 1 */}
        <div className="bg-[#1f1f1f] rounded-sm shadow-md overflow-hidden flex flex-col group hover:-translate-y-1 hover:shadow-orange-500/30 transition">
          <img
            src={MoreTyres1}
            alt="Snow tire"
            className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-semibold mb-3 text-white">
              Studded tires or friction tires?
            </h3>
            <p className="text-base text-gray-400 mb-6 flex-grow">
              Do you choose between studded or friction tires as winter tires?
              Both your driving habits and driving conditions matter. We&apos;ll
              explain what you should consider.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#1f1f1f] rounded-sm shadow-md overflow-hidden flex flex-col group hover:-translate-y-1 hover:shadow-orange-500/30 transition">
          <img
            src={MoreTyres2}
            alt="Winter road"
            className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-semibold mb-3 text-white">
              Dates and laws for winter tires
            </h3>
            <p className="text-base text-gray-400 mb-6 flex-grow">
              In winter road conditions you must have winter tires on your car.
              Here you will find the dates to keep track of. We also explain
              what the speed index is and why it is important in your choice of
              tires.
            </p>
         
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-[#1f1f1f] rounded-sm shadow-md overflow-hidden flex flex-col group hover:-translate-y-1 hover:shadow-orange-500/30 transition">
          <img
            src={MoreTyres3}
            alt="More tires"
            className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-semibold mb-3 text-white">
              Choosing the right tire size
            </h3>
            <p className="text-base text-gray-400 mb-6 flex-grow">
              The correct tire size improves performance and safety. Learn how
              to read tire markings and what factors are most important when
              selecting the right fit for your car.
            </p>
         
          </div>
        </div>
      </div>

    
    </section>
  );
};

export default TireSection;

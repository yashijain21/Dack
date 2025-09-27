import React from "react";

const SurveySection = () => {
  return (
    <section className="w-full bg-black py-8 flex flex-col items-center poppins-regular text-center">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
        Vi vill bli bättre!
      </h2>

      {/* Subtext */}
      <p className="text-base md:text-md text-gray-300 mb-8 max-w-2xl">
        Hjälp oss förbättra vår hemsida genom att svara på några enkla frågor.
      </p>

      {/* Button */}
      <button className="px-6 py-4 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition">
        Till undersökningen
      </button>
    </section>
  );
};

export default SurveySection;

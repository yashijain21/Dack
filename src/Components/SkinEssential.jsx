import React from "react";
import faceImg from "../assets/SkinEssen/skin-essen-face.png"; // Import the image

const essentials = [
  { name: "MOISTURISER", img: faceImg }, // Use imported image
  { name: "SUNSCREEN", img: "/essentials/sunscreen.png" },
  { name: "FACEWASH", img: "/essentials/facewash.png" },
  { name: "GIFTING", img: "/essentials/gifting.png" },
];

const SkinEssentials = () => {
  return (
    <section className="py-16 text-center">
      <h2 className="text-2xl font-bold mb-10">THE SKIN ESSENTIALS</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-10">
        {essentials.map((item, idx) => (
          <div key={idx} className="space-y-3">
            <img
              src={item.img}
              alt={item.name}
              className="mx-auto w-[200px] h-[200px] object-contain rounded-full shadow-md"
              style={{ opacity: 1, transform: "rotate(0deg)" }}
            />
            <p className="font-semibold">{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkinEssentials;

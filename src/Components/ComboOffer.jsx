import React from "react";

const combos = [
  { name: "Sunscreen And Moisturizer Combo", price: 345, img: "/combos/combo1.png" },
  { name: "Moisturizer And Facewash Combo", price: 345, img: "/combos/combo2.png" },
  { name: "Facewash And Sunscreen Combo", price: 345, img: "/combos/combo3.png" },
];

const ComboOffers = () => {
  return (
    <section className="py-16 text-center">
      <h2 className="text-2xl font-bold mb-10">COMBO OFFERS</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10">
        {combos.map((combo, idx) => (
          <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
            <img src={combo.img} alt={combo.name} className="w-40 mx-auto" />
            <h3 className="mt-4 font-semibold">{combo.name}</h3>
            <p className="text-gray-600">${combo.price}</p>
            <button className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-600">
              ADD TO CART
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ComboOffers;

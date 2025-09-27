import React from "react";

const products = [
  { name: "DermRange Moisturizer", price: 45, img: "/products/moisturiser.png" },
  { name: "DermRange Sunscreen", price: 45, img: "/products/sunscreen.png" },
  { name: "DermRange Facewash", price: 45, img: "/products/facewash.png" },
];

const ProductRange = () => {
  return (
    <section className="py-16 text-center">
      <h2 className="text-2xl font-bold mb-10">PRODUCTS RANGE</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10">
        {products.map((product, idx) => (
          <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
            <img src={product.img} alt={product.name} className="w-40 mx-auto" />
            <h3 className="mt-4 font-semibold">{product.name}</h3>
            <p className="text-gray-600">${product.price}</p>
            <button className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-600">
              ADD TO CART
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductRange;

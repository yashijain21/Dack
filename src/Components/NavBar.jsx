import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-6 px-10 bg-white shadow-sm">
      <div className="text-2xl font-bold">DR</div>
      <ul className="flex space-x-8 text-gray-700 font-medium">
        <li className="hover:text-pink-500 cursor-pointer">Skincare</li>
        <li className="hover:text-pink-500 cursor-pointer">Gifting</li>
        <li className="hover:text-pink-500 cursor-pointer">About Us</li>
        <li className="hover:text-pink-500 cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;

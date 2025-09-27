import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10">
        <div>
          <h2 className="font-bold text-lg">DR</h2>
          <p className="text-sm text-gray-600">Holistic Skincare for Modern Living</p>
        </div>
        <div>
          <h3 className="font-semibold mb-4">SHOP</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Moisturizers</li>
            <li>Sunscreens</li>
            <li>Face Wash</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">POLICIES</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Privacy Policy</li>
            <li>Shipping & Refund</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>
      <p className="text-center mt-10 text-gray-500 text-sm">© 2025 DermRange. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

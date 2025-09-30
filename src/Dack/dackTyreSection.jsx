import React from "react";
import { useNavigate } from "react-router-dom";
import summerTyre from "../assets/Tyres/summer-tyres.avif";
import winterTyre from "../assets/Tyres/winter-tyres.avif";
import summerWheel from "../assets/Tyres/summer-wheels.avif";
import winterWheel from "../assets/Tyres/winter-wheels.avif";

const TireSection = () => {
  const navigate = useNavigate();

  const WrenchIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto mb-3 text-orange-500"
      aria-hidden="true"
    >
      <path
        d="M15.035 5a2.5 2.5 0 012.5 2.5v14a2.5 2.5 0 01-2.5 2.5h-6a2.5 2.5 0 01-2.5-2.5v-14a2.5 2.5 0 012.5-2.5h6zM8.034 20.63v.87a1 1 0 001 1l1.5-.001V21.3l-2.5-.67zm4.5-14.131h-1v16h1v-16zm3.5 14.209l-2.49.672-.01-.04v1.159l1.5.001a1 1 0 00.994-.883l.007-.117-.001-.792zm0-3l-2.49.672-.01-.04v2l2.5-.672v-1.96zm-8-.078v1.96l2.5.67V18.3l-2.5-.67zm8-2.922l-2.49.672-.01-.04v2l2.5-.672v-1.96zm-8-.078v1.96l2.5.67V15.3l-2.5-.67zm8-2.922l-2.49.672-.01-.04v2l2.5-.671v-1.961zm-8-.078v1.961l2.5.669V12.3l-2.5-.67zm8-2.922l-2.49.672-.01-.04v2l2.5-.672v-1.96zm-8-.078v1.96l2.5.67V9.3l-2.5-.67zm7-2.13l-1.5-.001V8.34l2.5-.672V7.5a1 1 0 00-.883-.993l-.116-.007zm-4.5-.001l-1.5.001a1 1 0 00-1 1v.09l2.5.67V6.499zM12.034 0c1.531 0 2.962.43 4.178 1.176l.925-.926.413 2.887-2.887-.412.818-.82A6.968 6.968 0 0012.035 1a6.968 6.968 0 00-3.523.95l.775.775-2.887.412L6.812.25l.973.971A7.963 7.963 0 0112.035 0z"
        fill="currentColor"
      />
    </svg>
  );

  const ShieldIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto mb-3 text-orange-500"
      aria-hidden="true"
    >
      <path
        d="M12.624 1l-.284.257L6.176 7.39H2V22h15.31c1.282 0 2.4-.91 2.67-2.168l1.961-9.13c.357-1.688-.955-3.31-2.67-3.31h-5.227l.17-.685c.185-.143.303-.204.568-.571.427-.584.853-1.491.853-2.711C15.635 2.123 14.462 1 12.993 1h-.369zm.593 1.618c.384.075.879.548.879.829 0 .824-.336 1.593-.57 1.914-.235.32-.399.4-.399.4l-.425.542-.731 1.773-.24.67h7.909c.6 0 1.004.524.88 1.113l-2.132 10.154a.917.917 0 01-.909.713H7.464V8.376l5.753-5.758zM3.31 8.713h2.618v12.009H3.309V8.713z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </svg>
  );

  const CheckIcon = () => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto mb-3 text-orange-500"
      aria-hidden="true"
    >
      <path
        d="M22.743 2.616L7.626 18.073 1.257 11.56 0 13.096l6.998 7.155.629.615.629-.615L24 4.152z"
        fill="currentColor"
      />
    </svg>
  );

  const products = [
    {
      title: "Sommardäck",
      description: "Från ledande varumärken.",
      image: summerTyre,
      link: "/Dack/sommardack",
    },
    {
      title: "Vinterdäck",
      description: "Säkra och noggrant testade.",
      image: winterTyre,
      link: "/Dack/vinterdack",
    },
    {
      title: "Sommarhjul",
      description: "Kompletta med originalfälgar.",
      image: summerWheel,
      link: "/sommarhjul",
    },
    {
      title: "Vinterhjul",
      description: "Kompletta med originalfälgar.",
      image: winterWheel,
      link: "/vinterhjul",
    },
  ];

  const features = [
    {
      icon: <WrenchIcon />,
      title: "Monterat och klart",
      description: "Vi sköter montering och balansering.",
    },
    {
      icon: <ShieldIcon />,
      title: "Passningsgaranti",
      description: "Vi garanterar att däcken du väljer passar din bil.",
    },
    {
      icon: <CheckIcon />,
      title: "Räntefri delbetalning",
      description: "Dela upp betalningen i upp till 12 månader.",
    },
  ];

  return (
    <section className="w-full bg-[#0d0d0d] py-12 poppins-regular text-white">
      {/* Top Intro */}
      <div className="text-center max-w-3xl mx-auto px-4">
        <p className="text-xl text-gray-300">
          Hos oss hittar du ett stort utbud av däck och hjul för vinter och
          sommar.
        </p>
        <p className="mt-6 text-xl text-gray-300">
          Våra däck säljs med montering och vi ser till att du blir helt
          körklar.
        </p>
      </div>

      {/* Products */}
      <div className="mt-10 px-1 lg:px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(item.link)}
              className="bg-[#1a1a1a] rounded-lg shadow-lg overflow-hidden flex w-full h-44 border border-gray-700 hover:border-orange-500 transition cursor-pointer"
            >
              {/* Left side image */}
              <div className="w-1/2 flex-shrink-0 p-3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-full rounded"
                />
              </div>
              {/* Right side text */}
              <div className="p-2 flex-1 flex flex-col justify-end">
                <h3
                  className="mb-1 text-orange-500"
                  style={{
                    fontWeight: 600,
                    fontSize: "18px",
                    lineHeight: "22px",
                  }}
                >
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 px-1 lg:px-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-[#1a1a1a] p-5 rounded-md flex items-start border border-gray-700 hover:border-orange-500 transition"
          >
            <div className="mr-3">{feature.icon}</div>
            <div>
              <h4 className="font-semibold text-white text-base mb-1">
                {feature.title}
              </h4>
              <p className="text-sm text-gray-400">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TireSection;

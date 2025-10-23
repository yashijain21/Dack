// src/components/TireFeatures.jsx
import React from "react";

// === Icons ===
const HomeDeliveryIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className="icon__svg small"
    aria-hidden="true"
  >
    <path
      d="M8.571 0c-3.304 0-6 2.695-6 6a6.02 6.02 0 002.652 4.982C2.166 12.295 0 15.328 0 18.857h1.486c0-3.797 3.054-7.259 7.085-7.259 1.179 0 3.196-.178 3.752.652-1.515 1.712-2.037 3.266-2.037 4.893 0 3.777 3.08 6.857 6.857 6.857S24 20.92 24 17.143s-3.08-6.857-6.857-6.857c-1.497 0-2.89.492-4.018 1.312a8.686 8.686 0 00-1.205-.616A6.02 6.02 0 0014.57 6c0-3.305-2.695-6-6-6zM8.55 1.5c2.524 0 4.55 1.948 4.55 4.375s-2.026 4.375-4.55 4.375S4 8.302 4 5.875 6.026 1.5 8.55 1.5zm8.55 10.1c3.047 0 5.5 2.453 5.5 5.5s-2.453 5.5-5.5 5.5a5.488 5.488 0 01-5.5-5.5c0-3.047 2.453-5.5 5.5-5.5zm2.542 3.3l-3.062 2.932-1.478-1.473-1.002 1.026 1.864 1.895.616.59.616-.59 3.429-3.428-.983-.952z"
      fill="white"
      fillRule="nonzero"
    ></path>
  </svg>
);

const AssembleAndreadyIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="icon__svg small" aria-hidden="true">
    <path       fill="white"
 d="M15.035 5a2.5 2.5 0 012.5 2.5v14a2.5 2.5 0 01-2.5 2.5h-6a2.5 2.5 0 01-2.5-2.5v-14a2.5 2.5 0 012.5-2.5h6zM8.034 20.63v.87a1 1 0 001 1l1.5-.001V21.3l-2.5-.67zm4.5-14.131h-1v16h1v-16zm3.5 14.209l-2.49.672-.01-.04v1.159l1.5.001a1 1 0 00.994-.883l.007-.117-.001-.792zm0-3l-2.49.672-.01-.04v2l2.5-.672v-1.96zm-8-.078v1.96l2.5.67V18.3l-2.5-.67zm8-2.922l-2.49.672-.01-.04v2l2.5-.672v-1.96zm-8-.078v1.96l2.5.67V15.3l-2.5-.67zm8-2.922l-2.49.672-.01-.04v2l2.5-.671v-1.961zm-8-.078v1.961l2.5.669V12.3l-2.5-.67zm8-2.922l-2.49.672-.01-.04v2l2.5-.672v-1.96zm-8-.078v1.96l2.5.67V9.3l-2.5-.67zm7-2.13l-1.5-.001V8.34l2.5-.672V7.5a1 1 0 00-.883-.993l-.116-.007zm-4.5-.001l-1.5.001a1 1 0 00-1 1v.09l2.5.67V6.499zM12.034 0c1.531 0 2.962.43 4.178 1.176l.925-.926.413 2.887-2.887-.412.818-.82A6.968 6.968 0 0012.035 1a6.968 6.968 0 00-3.523.95l.775.775-2.887.412L6.812.25l.973.971A7.963 7.963 0 0112.035 0z" fillRule="evenodd"></path>
  </svg>
);

const FreeInstallmentIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="icon__svg small" aria-hidden="true">
    <path       fill="white"
 d="M22.743 2.616L7.626 18.073 1.257 11.56 0 13.096l6.998 7.155.629.615.629-.615L24 4.152z"></path>
  </svg>
);

const LargeSelectionIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="icon__svg small" aria-hidden="true">
    <path       fill="white"
 d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm0 1.5c5.812 0 10.5 4.688 10.5 10.5S17.812 22.5 12 22.5 1.5 17.812 1.5 12 6.188 1.5 12 1.5zm-.094 2.469c-.043.008-.086.02-.125.031h-.031c-2.715.086-5.086 1.54-6.469 3.688-.18.152-.304.363-.343.593a7.92 7.92 0 00.03 7.531l.032.032c.004.008-.004.023 0 .031.043.113.105.219.188.313A8.022 8.022 0 0011.78 20H12c.074 0 .145.004.219 0h.031c2.754-.086 5.156-1.582 6.531-3.781.117-.121.203-.274.25-.438A7.94 7.94 0 0020 12a7.938 7.938 0 00-.813-3.531.999.999 0 00-.5-.875h-.03a7.972 7.972 0 00-6.25-3.563.466.466 0 00-.063-.031h-.125a.936.936 0 00-.313-.031zm-.99 1.531v.997a1.11 1.11 0 00.538.968c.339.197.753.197 1.092 0a1.11 1.11 0 00.537-.968V5.5a6.417 6.417 0 013.927 2.304l-.846.482c-.525.305-.707.98-.406 1.513.3.533.965.718 1.49.413l.846-.482c.254.71.406 1.47.406 2.27s-.152 1.56-.406 2.27l-.847-.482a1.075 1.075 0 00-.744-.137c-.462.073-.83.438-.906.907-.076.468.152.937.567 1.156l.846.482a6.417 6.417 0 01-3.927 2.304v-.997a1.103 1.103 0 00-.338-.839 1.073 1.073 0 00-.847-.296 1.25 1.25 0 00-.135.034 1.1 1.1 0 00-.846 1.1v.998a6.417 6.417 0 01-3.927-2.304l.846-.482c.508-.219.774-.786.618-1.324a1.083 1.083 0 00-1.227-.774.942.942 0 00-.102.035 1.055 1.055 0 00-.372.137l-.847.482A6.716 6.716 0 015.5 12c0-.8.152-1.56.406-2.27l.847.482a1.08 1.08 0 001.49-.413c.3-.533.118-1.208-.407-1.513l-.846-.482A6.417 6.417 0 0110.917 5.5zM12 9c-1.645 0-3 1.355-3 3s1.355 3 3 3 3-1.355 3-3-1.355-3-3-3zm0 1.5c.844 0 1.5.656 1.5 1.5s-.656 1.5-1.5 1.5a1.48 1.48 0 01-1.5-1.5c0-.844.656-1.5 1.5-1.5z" fillRule="nonzero"></path>
  </svg>
);

const FullServiceIcon = () => (
  <svg  width="24" height="24" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className="icon__svg small" aria-hidden="true">
    <path       fill="white"
 d="M11.1429 0H6C5.77274 0.000226919 5.55486 0.0906056 5.39416 0.251302C5.23346 0.411998 5.14308 0.629884 5.14286 0.857143V5.14286H0.857143C0.629884 5.14308 0.411998 5.23346 0.251302 5.39416C0.0906056 5.55486 0.000226919 5.77274 0 6V12H12V0.857143C11.9997 0.629894 11.9093 0.412028 11.7487 0.251339C11.588 0.0906505 11.3701 0.000260886 11.1429 0ZM3 11.1429V8.14286H4.71429V11.1429H3ZM11.1429 11.1429H5.57143V7.71429C5.57143 7.60062 5.52628 7.49161 5.4459 7.41124C5.36553 7.33087 5.25652 7.28571 5.14286 7.28571H2.57143C2.45776 7.28571 2.34876 7.33087 2.26838 7.41124C2.18801 7.49161 2.14286 7.60062 2.14286 7.71429V11.1429H0.857143V6H6V0.857143H11.1429V11.1429Z"></path>
    <path       fill="white"
 d="M7.71429 2.57143H6.85714V3.42857H7.71429V2.57143Z"></path>
    <path       fill="white"
 d="M10.2857 2.57143H9.42857V3.42857H10.2857V2.57143Z"></path>
    <path       fill="white"
 d="M7.71429 5.14286H6.85714V6H7.71429V5.14286Z"></path>
    <path       fill="white"
 d="M10.2857 5.14286H9.42857V6H10.2857V5.14286Z"></path>
    <path       fill="white"
 d="M7.71429 7.71411H6.85714V8.57126H7.71429V7.71411Z"></path>
    <path       fill="white"
 d="M10.2857 7.71411H9.42857V8.57126H10.2857V7.71411Z"></path>
  </svg>
);

const AvailabilityIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="icon__svg small" aria-hidden="true">
    <path       fill="white"
 d="M3 8.926c0 1.746.41 2.999 1.273 4.338l6.742 10.465c.108.17.29.271.485.271a.578.578 0 00.485-.27l6.742-10.466C19.59 11.924 20 10.672 20 8.927 20 4.005 16.187.001 11.5.001 6.813 0 3 4.004 3 8.926zm15.5.112c0 1.573-.717 3.025-1.51 4.242L11.559 22l-5.704-8.854c-.791-1.217-1.355-2.41-1.355-3.98C4.5 4.881 7.436 1.5 11.559 1.5c3.863 0 6.941 3.521 6.941 7.538zM11.5 5A3.49 3.49 0 0115 8.5a3.49 3.49 0 01-3.5 3.5A3.49 3.49 0 018 8.5 3.49 3.49 0 0111.5 5zm0 1.35a2.243 2.243 0 012.25 2.25 2.243 2.243 0 01-2.25 2.25A2.243 2.243 0 019.25 8.6a2.243 2.243 0 012.25-2.25z" fillRule="evenodd"></path>
  </svg>
);

const UnderRoofIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="icon__svg small" aria-hidden="true">
    <path       fill="white"
 d="M12 1l-.372.171L1.544 5.623 1 5.879V23h5.5v-9.131h11V23H23V5.88l-.544-.257L12.372 1.17 12 1zm0 1.7l9.5 4.265V21.7h-2.3V8.337H4.8V21.7H2.5V6.965L12 2.7zM6.5 9.817h4.583a.917.917 0 001.834 0H17.5v2.523h-11V9.817z" fillRule="nonzero"></path>
  </svg>
);

const FitGuranteeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="icon__svg small" aria-hidden="true">
    <path       fill="white"
 d="M12.624 1l-.284.257L6.176 7.39H2V22h15.31c1.282 0 2.4-.91 2.67-2.168l1.961-9.13c.357-1.688-.955-3.31-2.67-3.31h-5.227l.17-.685c.185-.143.303-.204.568-.571.427-.584.853-1.491.853-2.711C15.635 2.123 14.462 1 12.993 1h-.369zm.593 1.618c.384.075.879.548.879.829 0 .824-.336 1.593-.57 1.914-.235.32-.399.4-.399.4l-.425.542-.731 1.773-.24.67h7.909c.6 0 1.004.524.88 1.113l-2.132 10.154a.917.917 0 01-.909.713H7.464V8.376l5.753-5.758zM3.31 8.713h2.618v12.009H3.309V8.713z" fillRule="nonzero"></path>
  </svg>
);

const features = [
  {
    id: 1,
    icon: <HomeDeliveryIcon />,
    title: "Fri frakt",
    description: "Fri frakt i hela Göteborg.",
  },
  {
    id: 2,
    icon: <AssembleAndreadyIcon />,
    title: "Monterat och klart",
    description: "Vi hjälper dig vara körklar.",
  },
  {
    id: 3,
    icon: <FreeInstallmentIcon />,
    title: "Räntefri delbetalning",
    description: "I upp till 12 månader.",
  },
  {
    id: 4,
    icon: <LargeSelectionIcon />,
    title: "Stort utbud",
    description: "Däck och hjul från ledande märken.",
  },
  {
    id: 5,
    icon: <FullServiceIcon />,
    title: "Helhetsleverantör",
    description: "Få hjälp med allt inom däck.",
  },
  {
    id: 6,
    icon: <AvailabilityIcon />,
    title: "Tillgänglighet",
    description: "Vi finns bara i Göteborg.",
  },
  {
    id: 7,
    icon: <UnderRoofIcon />,
    title: "Allt under samma tak",
    description: "Däck och bil på samma ställe.",
  },
  {
    id: 8,
    icon: <FitGuranteeIcon />,
    title: "Passningsgaranti",
    description: "Vi garanterar att däcken du väljer passar din bil.",
  },
];


const TireFeatures = () => {
  return (
    <section className="bg-black py-2 px-6 poppins-regular relative">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-xl md:text-2xl font-semibold text-left text-white mb-14 uppercase tracking-wide">
         När du köper däck och hjul hos Speedy Tyres

        </h2>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-[#111111] border border-white rounded-xl p-6 flex flex-col items-start text-left transition-all hover:shadow-lg hover:border-orange-500"
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-full  text-orange-500 mb-5 text-2xl">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="font-semibold text-lg text-white mb-2">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TireFeatures;

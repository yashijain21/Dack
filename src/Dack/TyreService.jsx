import React from "react";
import { Link } from "react-router-dom";
// Inline SVG Icons
const TireIcon = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className="icon__svg text-white"
    aria-hidden="true"
  >
    <path
      d="M15 0c4.41 0 8 5.37 8 12s-3.59 12-8 12H8.51C4.65 24 1 18.63 1 12S4.65 0 8.51 0zm-3.87 1.5H8.51c-.8 0-1.62.35-2.4 1h1.14c.41 0 .75.34.75.75S7.66 4 7.25 4H4.77c-.9 1.28-1.62 3-1.99 5h2.47c.41 0 .75.34.75.75s-.34.75-.75.75h-2.5c-.06 0-.12-.01-.17-.03-.06.49-.08 1.01-.08 1.53 0 1.43.18 2.78.5 4h2.25c.41 0 .75.34.75.75s-.34.75-.75.75H3.47c1.15 3.05 3.17 5 5.04 5h2.62c-.66-.54-1.26-1.22-1.79-2.01-.03.01-.06.01-.09.01h-2.5a.75.75 0 110-1.5H8.5c-.7-1.45-1.18-3.15-1.39-5H4.75a.75.75 0 110-1.5h2.26C7 12.33 7 12.17 7 12c0-1.59.21-3.11.58-4.5H5.75a.75.75 0 110-1.5h2.32c.72-1.88 1.78-3.45 3.06-4.5zm3.87 0c-.51 0-1.02.1-1.5.3-2.83 1.12-5 5.34-5 10.2 0 4.86 2.17 9.08 5 10.2.48.2.99.3 1.5.3 3.52 0 6.5-4.81 6.5-10.5S18.52 1.5 15 1.5zm.25 2.5C17.87 4 20 7.58 20 12s-2.13 8-4.75 8c-.09 0-.17 0-.25-.01a3.178 3.178 0 01-1.5-.56c-1.76-1.16-3-4.05-3-7.43s1.24-6.27 3-7.43c.47-.32.97-.51 1.5-.56.08-.01.16-.01.25-.01zm0 1.5c-.08 0-.17.01-.25.03-.52.09-1.04.49-1.5 1.12C12.64 7.79 12 9.72 12 12s.64 4.21 1.5 5.35c.46.63.98 1.03 1.5 1.12.08.02.17.03.25.03 1.53 0 3.25-2.78 3.25-6.5s-1.72-6.5-3.25-6.5z"
      fill="white"
      fillRule="evenodd"
    ></path>
  </svg>
);

const DackHotelIcon = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className="icon__svg text-white"
    aria-hidden="true"
  >
    <path
      d="M4 1L2.5 2.5 4 4l1.5-1.5L4 1zm2.5 1.5L8 4l1.5-1.5L8 1 6.5 2.5zm4 0L12 4l1.5-1.5L12 1l-1.5 1.5zm4 0L16 4l1.5-1.5L16 1l-1.5 1.5zm4 0L20 4l1.5-1.5L20 1l-1.5 1.5zM20 4H1v20h22V4h-3zM2.5 5.5h19v17H15V17H9v5.5H2.5v-17zM5 8v2h2V8H5zm4 0v2h2V8H9zm4 0v2h2V8h-2zm4 0v2h2V8h-2zM5 11v2h2v-2H5zm4 0v2h2v-2H9zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2zM5 14v2h2v-2H5zm4 0v2h2v-2H9zm4 0v2h2v-2h-2zM5 17v2h2v-2H5zm12 0v2h2v-2h-2zm-6.5 1.5h3v4h-3v-4z"
      fill="white"
      fillRule="nonzero"
    ></path>
  </svg>
);

const RimRenovationIcon = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className="icon__svg text-white"
    aria-hidden="true"
  >
    <path
      d="M15.479 13.069l-.14-.02c.01-.04.031-.089.031-.139.089-.29.13-.591.13-.91 0-.311-.041-.62-.121-.901a.687.687 0 00-.04-.149l.161-.021 6.86-.62c.09.55.14 1.111.14 1.691 0 .58-.05 1.139-.14 1.689l-6.881-.62zm4.271 6.03l-3.14-4.439 5.409.5a10.504 10.504 0 01-2.269 3.939zm-4.031 2.731l-2.899-6.281-.061-.129c.05-.01.09-.021.13-.04a3.522 3.522 0 001.59-.911c.03-.03.07-.07.101-.11l.089.131 3.981 5.649c-.87.701-1.86 1.281-2.931 1.691zM12 22.5a10.7 10.7 0 01-2.281-.25L12 17.33l2.269 4.929c-.729.161-1.489.241-2.269.241zm-6.661-2.361l3.97-5.639.101-.141c.04.04.069.08.109.12a3.6 3.6 0 001.57.901c.05.009.09.03.14.03l-.06.139-2.9 6.281c-1.069-.41-2.06-.99-2.93-1.691zm-3.36-4.979l5.391-.481-3.12 4.42a10.495 10.495 0 01-2.271-3.939zM1.5 12c0-.58.049-1.141.139-1.691l6.851.62.17.021a.639.639 0 00-.04.159c-.08.28-.12.58-.12.891 0 .309.04.62.12.899a.666.666 0 00.04.15l-.151.02-6.87.62C1.549 13.139 1.5 12.58 1.5 12zm2.75-7.101l3.11 4.42-5.381-.479A10.488 10.488 0 014.25 4.899zM8.269 2.17l2.9 6.25.071.16a.87.87 0 00-.16.05 3.425 3.425 0 00-1.561.889c-.04.04-.069.08-.1.12L9.32 9.5 5.339 3.859a10.966 10.966 0 012.93-1.689zM12 1.5c.78 0 1.54.08 2.269.24L12 6.639 9.729 1.75A10 10 0 0112 1.5zM12 14c-.041 0-.071 0-.111-.01a1.973 1.973 0 01-1.569-.91A1.988 1.988 0 0110 12c0-.33.08-.641.219-.91.031-.061.061-.121.101-.17.33-.531.909-.891 1.58-.92h.189c.661.029 1.241.38 1.59.91.03.059.071.119.101.18a1.982 1.982 0 010 1.82c-.03.059-.071.119-.101.18-.34.519-.92.87-1.58.9-.029.01-.069.01-.099.01zm6.65-10.141l-3.99 5.66-.09.111a3.29 3.29 0 00-1.66-1 .713.713 0 00-.16-.05l.07-.16 2.899-6.25c1.071.41 2.061.99 2.931 1.689zm3.369 4.981l-5.399.49 3.13-4.431a10.497 10.497 0 012.269 3.941zM12 0C5.379 0 0 5.38 0 12s5.379 12 12 12c6.61 0 12-5.38 12-12S18.61 0 12 0z"
      fill="white"
      fillRule="evenodd"
    ></path>
  </svg>
);

const WheelAlighmentIcon = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className="icon__svg text-white"
    aria-hidden="true"
  >
    <path
      d="M15.035 5a2.5 2.5 0 012.5 2.5v14a2.5 2.5 0 01-2.5 2.5h-6a2.5 2.5 0 01-2.5-2.5v-14a2.5 2.5 0 012.5-2.5h6zM8.034 20.63v.87a1 1 0 001 1l1.5-.001V21.3l-2.5-.67zm4.5-14.131h-1v16h1v-16zm3.5 14.209l-2.49.672-.01-.04v1.159l1.5.001a1 1 0 00.994-.883l.007-.117-.001-.792zm0-3l-2.49.672-.01-.04v2l2.5-.672v-1.96zm-8-.078v1.96l2.5.67V18.3l-2.5-.67zm8-2.922l-2.49.672-.01-.04v2l2.5-.672v-1.96zm-8-.078v1.96l2.5.67V15.3l-2.5-.67zm8-2.922l-2.49.672-.01-.04v2l2.5-.671v-1.961zm-8-.078v1.961l2.5.669V12.3l-2.5-.67zm8-2.922l-2.49.672-.01-.04v2l2.5-.672v-1.96zm-8-.078v1.96l2.5.67V9.3l-2.5-.67zm7-2.13l-1.5-.001V8.34l2.5-.672V7.5a1 1 0 00-.883-.993l-.116-.007zm-4.5-.001l-1.5.001a1 1 0 00-1 1v.09l2.5.67V6.499zM12.034 0c1.531 0 2.962.43 4.178 1.176l.925-.926.413 2.887-2.887-.412.818-.82A6.968 6.968 0 0012.035 1a6.968 6.968 0 00-3.523.95l.775.775-2.887.412L6.812.25l.973.971A7.963 7.963 0 0112.035 0z"
      fill="white"
      fillRule="evenodd"
    ></path>
  </svg>
);

// Local JSON data
const services = [
  {
    id: 1,
    title: "Tire change",
    description: "Book a tire change performed by our tire experts.",
    price: "From 495 sek",
    buttonText: "Boka tid",
    readMore: "Läs mer",
    icon: <TireIcon />,
    link: "/verkstad/dacktjanster/dackbyte/",
  },
  {
    id: 2,
    title: "Däckhotell",
    description: "Tire storage in optimal conditions, including tire replacement.",
    price: "From 1.195 sek",
    buttonText: "Boka förvaring",
    readMore: "Läs mer",
    icon: <DackHotelIcon />,
    link: "/verkstad/dacktjanster/dackhotell/",
  },
  {
    id: 3,
    title: "Rim renovation",
    description: "Repair broken, damaged or discolored rims.",
    price: "From 2,395 sek",
    buttonText: "Boka tid",
    readMore: "Läs mer",
    icon: <RimRenovationIcon />,
    link: "/verkstad/dacktjanster/falgrenovering/",
  },
  {
    id: 4,
    title: "Wheel alignment",
    description: "For increased safety, comfort and reduced fuel consumption.",
    price: "From 1.295 sek",
    buttonText: "Boka tid",
    readMore: "Läs mer",
    icon: <WheelAlighmentIcon />,
    link: "/verkstad/dacktjanster/hjulinstallning/",
  },
];


const TireServices = () => {
  return (
    <section className="py-12 px-6 bg-black text-white poppins-regular">
      {/* Title */}
      <h2 className="mb-10 text-3xl font-semibold text-left text-white">
       Våra däcktjänster
      </h2>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-[#111] border border-gray-800 hover:border-orange-500 rounded-lg shadow-lg p-6 flex flex-col items-center text-center transition"
          >
            {/* Icon */}
            <div className="flex justify-center mb-4 w-16 h-16">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="mb-2 text-lg font-semibold text-white">
              {service.title}
            </h3>

            {/* Description */}
            <p className="mb-3 text-sm text-gray-300">{service.description}</p>

            {/* Price */}
            <p className="mb-4 text-sm font-semibold text-orange-500">
              {service.price}
            </p>

            {/* Buttons */}
            <div className="mt-auto w-full space-y-2">
       <Link to={service.link} className="w-full block">
  <button className="border border-orange-500 text-orange-500 font-medium py-2 px-4 rounded-md hover:bg-orange-500 hover:text-black transition w-full">
    {service.readMore}
  </button>
</Link>
            </div>

            {/* Badge */}
            {service.badge && (
              <span className="mt-3 inline-block bg-orange-500 text-black text-xs px-3 py-1 rounded-full font-semibold">
                {service.badge}
              </span>
            )}
          </div>
        ))}
      </div>

    </section>
  );
};

export default TireServices;

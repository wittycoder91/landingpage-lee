import React from "react";
import brand1 from "../assets/images/brand1.png";
import brand1_coloration from "../assets/images/brand1_coloration.png";
import brand2 from "../assets/images/brand2.png";
import brand2_coloration from "../assets/images/brand2_coloration.png";
import brand3 from "../assets/images/brand3.png";
import brand3_coloration from "../assets/images/brand3_coloration.png";
import brand4 from "../assets/images/brand4.png";
import brand4_coloration from "../assets/images/brand4_coloration.png";
import brand5 from "../assets/images/brand5.png";
import brand5_coloration from "../assets/images/brand5_coloration.png";
import brand6 from "../assets/images/brand6.png";
import brand6_coloration from "../assets/images/brand6_coloration.png";
import brand7 from "../assets/images/brand7.png";
import brand7_coloration from "../assets/images/brand7_coloration.png";
import brand8 from "../assets/images/brand8.png";
import brand8_coloration from "../assets/images/brand8_coloration.png";
import brand9 from "../assets/images/brand9.png";
import brand9_coloration from "../assets/images/brand9_coloration.png";
import image1 from "../assets/images/image1.png";

const Features = () => {
  return (
    <section className="w-full bg-white py-12  mx-auto max-w-[1250px]">
      {/* Technology Partners */}
      <div className="max-w-5xl mx-auto mb-36">
        <h3 className="text-center text-gray-500 text-lg font-medium mb-6 relative">
          <span className="inline-block px-4 bg-white z-10 relative">
            TECHNOLOGY PARTNERS
          </span>
          <span className="block w-full h-px bg-gray-200 absolute left-0 top-1/2 -z-10"></span>
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6 bg-white p-6 rounded-xl">
          {[
            { grayscale: brand1, colored: brand1_coloration },
            { grayscale: brand2, colored: brand2_coloration },
            { grayscale: brand3, colored: brand3_coloration },
            { grayscale: brand4, colored: brand4_coloration },
            { grayscale: brand5, colored: brand5_coloration },
            { grayscale: brand6, colored: brand6_coloration },
            { grayscale: brand7, colored: brand7_coloration },
            { grayscale: brand8, colored: brand8_coloration },
            { grayscale: brand9, colored: brand9_coloration },
          ].map((brand, idx) => (
            <div key={idx} className="relative group cursor-pointer">
              <img
                src={brand.grayscale}
                alt={`brand${idx + 1}`}
                className="object-contain grayscale group-hover:opacity-0 transition-opacity duration-300"
              />
              <img
                src={brand.colored}
                alt={`brand${idx + 1} colored`}
                className="object-contain absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
      {/* 3 Easy Steps Section */}
      <div className="max-w-5xl mx-auto text-center mb-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Secure your business in 3 easy steps
        </h2>
        <p className="font-semibold text-lg mb-14">
          Our process to securing your devices and data begins with the
          following steps:
        </p>
        <div className="flex justify-center">
          <img
            src={image1}
            alt="3 steps"
            className="rounded-2xl shadow-lg w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;

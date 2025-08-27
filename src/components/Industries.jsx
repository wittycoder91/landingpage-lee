import React from "react";

import icon1 from "../assets/images/customize-icon1.png";
import icon2 from "../assets/images/customize-icon2.png";
import icon3 from "../assets/images/customize-icon3.png";
import icon4 from "../assets/images/customize-icon4.png";
import icon5 from "../assets/images/customize-icon5.png";
import icon6 from "../assets/images/customize-icon6.png";

const industries = [
  {
    icon: icon1,
    title: "Medical & Spa",
    desc: "HIPAA-compliant systems, secure patient data, and seamless scheduling—tech that keeps your practice running smoothly and your clients relaxed.",
  },
  {
    icon: icon4,
    title: "Legal",
    desc: "Secure, streamlined systems for case management, document sharing, and client confidentiality because every detail matters.",
  },
  {
    icon: icon2,
    title: "Marine",
    desc: "Reliable onboard tech, secure remote access, and smart monitoring, built to perform wherever the current takes you.",
  },
  {
    icon: icon5,
    title: "Real Estate",
    desc: "CRM integration, virtual tour support, and fast, secure communication—everything you need to close deals, faster.",
  },
  {
    icon: icon3,
    title: "Non-Profit",
    desc: "Purpose driven tech that fits your mission. Affordable solutions, donor data protection, and tools to help you do more with less.",
  },
  {
    icon: icon6,
    title: "Construction",
    desc: "On-site connectivity, project tracking, and cloud tools that keep your team aligned from blueprint to build.",
  },
];

const Industries = () => {
  const handleGetStarted = () => {
    // Scroll to top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Trigger form glow effect after scroll completes
    setTimeout(() => {
      if (window.handleFormGlow) {
        window.handleFormGlow();
      }
    }, 500);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-[1250px] mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">
          Customized IT for Every Industry
        </h2>
        <p className="text-lg text-gray-700">
          We can tailor IT solutions designed to meet the unique needs of your
          business.
        </p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 pl-20 pr-10">
        {industries.map((item, idx) => (
          <div
            key={idx}
            className="relative flex items-start bg-blue-50 rounded-2xl p-6 shadow-sm min-h-[152px]"
          >
            <img
              src={item.icon}
              alt={item.title}
              className="absolute left-[-50px] w-24 h-w-24 mr-6"
            />
            <div className="pl-[60px]">
              <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
              <p className="text-gray-700 text-base">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <button
          onClick={handleGetStarted}
          className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold text-lg shadow hover:bg-blue-700 transition"
        >
          Let's Get Started <span className="ml-2">&gt;</span>
        </button>
      </div>
    </section>
  );
};

export default Industries;

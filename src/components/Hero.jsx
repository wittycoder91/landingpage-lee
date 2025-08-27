import { useState, useEffect } from "react";
import bgHero from "../assets/images/bg-hero.png";
import icon4 from "../assets/images/icon4.png";
import icon2 from "../assets/images/icon2.png";
import icon3 from "../assets/images/icon3.png";

const interestOptions = [
  "IT Services",
  "Web design",
  "App Dev",
  "Computer Repair",
  "AI Agents",
  "Other",
];

const Hero = () => {
  const [selectedInterest, setSelectedInterest] = useState("IT Services");
  const [showGlow, setShowGlow] = useState(false);

  const handleFormGlow = () => {
    setShowGlow(true);
    setTimeout(() => setShowGlow(false), 3000);
  };

  useEffect(() => {
    window.handleFormGlow = handleFormGlow;
    return () => {
      delete window.handleFormGlow;
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full min-h-[600px] flex items-center justify-center bg-no-repeat bg-cover bg-right"
      style={{ backgroundImage: `url(${bgHero})` }}
    >
      <div className="flex flex-col lg:flex-row gap-8 w-full mx-auto px-8 py-12 items-center justify-between max-w-[1250px]">
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-between max-w-xl h-full min-h-[520px]">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 !leading-[70px]">
              AI + IT Solutions,
              <br />
              Made Simple.
            </h1>
            <p className="font-semibold text-lg text-gray-800 mb-4">
              HubReady IT keeps your business running smoothly by:
            </p>
            <ul className="space-y-3 text-lg mb-12">
              <li className="flex items-start gap-2">
                <img src={icon4} alt="check" className="w-6 h-6 mt-1" />
                Securing your data and network
              </li>
              <li className="flex items-start gap-2">
                <img src={icon4} alt="check" className="w-6 h-6 mt-1" />
                Backing up your files
              </li>
              <li className="flex items-start gap-2">
                <img src={icon4} alt="check" className="w-6 h-6 mt-1" />
                Providing reliable Helpdesk support
              </li>
              <li className="flex items-start gap-2">
                <img src={icon4} alt="check" className="w-6 h-6 mt-1" />
                Implement AI Agents to help staff
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-between lg:justify-start sm:flex-row gap-6 mt-8 md:mt-0">
            {/* Avg. response time */}
            <div className="bg-blue-50 rounded-xl px-6 py-4 flex flex-col items-start gap-4 shadow-md max-w-[180px]">
              <div className="text-sm text-gray-600 font-bold">
                Avg. response time
              </div>
              <div className="flex items-center gap-2">
                <img src={icon2} alt="response" className="w-10 h-10" />
                <div>
                  <div className="text-xl font-bold text-gray-900">28 sec.</div>
                </div>
              </div>
            </div>
            {/* Avg. resolve time */}
            <div className="bg-blue-50 rounded-xl px-6 py-4 flex flex-col items-start gap-4 shadow-md max-w-[180px]">
              <div className="text-sm text-gray-600 font-bold">
                Avg. resolve time
              </div>
              <div className="flex items-center gap-2">
                <img src={icon3} alt="response" className="w-9 h-10" />
                <div>
                  <div className="text-xl font-bold text-gray-900">
                    17.5 min.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right Form */}
        <div
          className={`flex-1 max-w-sm w-full bg-white rounded-2xl shadow-lg p-8 mt-12 md:mt-0 transition-all duration-700 ${
            showGlow
              ? "shadow-2xl ring-4 ring-blue-600 ring-opacity-70 animate-pulse shadow-blue-500/50"
              : ""
          }`}
          style={{
            boxShadow: showGlow
              ? "0 0 30px rgba(37, 99, 235, 0.6), 0 0 60px rgba(37, 99, 235, 0.3)"
              : undefined,
          }}
        >
          <h2 className="text-xl font-semibold text-blue-500 text-center mb-6">
            FREE CONSULTATION
          </h2>
          {showGlow && (
            <div className="text-center mb-4">
              <p className="text-blue-600 font-semibold text-sm animate-pulse">
                ✨ To contact us, please fill out this form ✨
              </p>
            </div>
          )}
          <div className="mb-4">
            <div className="text-gray-700 mb-2">I'm interested in:</div>
            <div className="flex flex-wrap gap-2 mb-4">
              {interestOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  className={`px-3 py-1 rounded-full text-sm font-semibold focus:outline-none transition-all ${
                    selectedInterest === option
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 text-gray-700"
                  }`}
                  onClick={() => setSelectedInterest(option)}
                >
                  {option}
                </button>
              ))}
            </div>
            <label htmlFor="name" className="block text-gray-700 mb-2">
              Your Name*
            </label>
            <input
              type="text"
              placeholder="Jhon Smith"
              className="w-full border-b border-gray-200 py-1 mb-4 outline-none text-gray-700 placeholder-gray-300 text-base focus:border-blue-300 transition"
            />
            <label htmlFor="name" className="block text-gray-700 mb-2">
              Your email*
            </label>
            <input
              type="email"
              placeholder="email@gmail.com"
              className="w-full border-b border-gray-200 py-1 mb-4 outline-none text-gray-700 placeholder-gray-300 text-base focus:border-blue-300 transition"
            />
            <label htmlFor="name" className="block text-gray-700 mb-2">
              Your message*
            </label>
            <textarea
              placeholder="Your message:"
              className="w-full border border-gray-200 rounded-lg py-2 px-3 h-20 resize-none outline-none text-gray-700 placeholder-gray-300 mb-6 text-base focus:border-blue-300 transition"
            ></textarea>
            <button className="w-full bg-blue-500 text-white py-3 rounded-full font-bold text-lg mt-2 hover:bg-blue-600 transition">
              Submit Ticket <span className="ml-2">&gt;</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import number1 from "../assets/images/number1.png";
import number2 from "../assets/images/number2.png";
import number3 from "../assets/images/number3.png";
import solutioIcon1 from "../assets/images/solutio-icon1.png";
import solutioIcon2 from "../assets/images/solutio-icon2.png";
import solutioIcon3 from "../assets/images/solutio-icon3.png";
import solutioIcon4 from "../assets/images/solutio-icon4.png";
import solutioIcon5 from "../assets/images/solutio-icon5.png";
import solutioIcon6 from "../assets/images/solutio-icon6.png";
import solutioIcon7 from "../assets/images/solutio-icon7.png";
import solutioIcon8 from "../assets/images/solutio-icon8.png";
import bgSolution from "../assets/images/bg-solution.png";

const steps = [
  {
    img: number1,
    title: "Identify & Assess",
    desc: "We begin by identifying and documenting all the technology in your office. We then assess to see which computers or devices have been compromised or affected by viruses.",
  },
  {
    img: number2,
    title: "Secure & Update",
    desc: "We take action! Using an Antivirus with AI, we remove any viruses we find and close any vulnerabilities in your network. We then update all software on all devices in your office.",
  },
  {
    img: number3,
    title: "Protect & Backup",
    desc: "We finally ensure the highest levels of protection by ensuring your devices are being scanned 24/7 for threats. With our firewall in place, we proceed to keep all your data backed up and secure.",
  },
];

const solutions = [
  {
    icon: solutioIcon1,
    title: "Cybersecurity",
    desc: "Our solutions provide real-time threat detection, fast response, and risk assessment to ensure the highest level of protection for your office.",
  },
  {
    icon: solutioIcon5,
    title: "Managed Antivirus",
    desc: "Stay secure with real-time threat detection, automatic updates, and 24/7 monitoring. Protect your devices from viruses, malware, and threats so you can focus on your business.",
  },
  {
    icon: solutioIcon2,
    title: "Email Security",
    desc: "Protect your business from phishing and malware. Our solution scans in real time, blocks threats instantly, and works smoothly with your existing email platform.",
  },
  {
    icon: solutioIcon6,
    title: "Data Backup",
    desc: "Your data is everything. We keep it safe with secure, redundant cloud backups—hourly, daily, or weekly. Need to recover data? Multiple restore points are ready when you need them.",
  },
  {
    icon: solutioIcon3,
    title: "Help Desk",
    desc: "Professional IT assistance for you and your staff is only a text or call away. Our experts can walk you through bumps on the road in the world of IT!",
  },
  {
    icon: solutioIcon7,
    title: "Office 365",
    desc: "Work smarter with cloud tools like Word, Excel, and Teams. Collaborate easily, share files securely, and access everything from any device—with built-in backups and strong data protection.",
  },
  {
    icon: solutioIcon4,
    title: "Web Design & Development",
    desc: "A smart, eye-catching website turns visitors into customers. With clear calls-to-action, smooth navigation, and a polished, mobile-ready look, a great design will drive results.",
  },
  {
    icon: solutioIcon8,
    title: "AI Agents",
    desc: "Our AI agents automate repetitive tasks, improve decision-making, and elevate customer service. From smart chatbots to powerful data insights, AI helps your business run smooth and cuts cost.",
  },
];

const Solutions = () => {
  return (
    <section
      className="w-full bg-[#f4faff] py-16 px-2 bg-no-repeat bg-bottom bg-cover"
      style={{ backgroundImage: `url(${bgSolution})` }}
    >
      <div className="max-w-[1250px] mx-auto">
        {/* Steps */}
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-6 justify-center mb-20 px-5">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="flex-1 bg-blue-500 rounded-2xl p-7 text-white shadow-lg flex flex-col items-center min-w-[230px] max-w-xs mx-auto"
            >
              <div className="flex flex-row items-center gap-4 mb-4">
                <div className="bg-white rounded-lg p-4">
                  <img
                    src={step.img}
                    alt={step.title}
                    className="w-5 h-5 object-contain"
                  />
                </div>
                <h4 className="text-xl font-bold mb-2">{step.title}</h4>
              </div>
              <p className="text-base font-normal text-blue-50 text-center">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
        {/* Solutions Grid */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
            Solutions to protect your business
          </h2>
          <p className="text-center mb-10">
            We offer a wide range of solutions that can be tailored to your
            unique business needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 p-8 mb-10">
            {solutions.map((sol, idx) => (
              <div
                key={idx}
                className={`flex items-start gap-4 ${
                  idx < solutions.length - 2
                    ? "border-b border-gray-200 pb-4"
                    : ""
                }`}
              >
                <img
                  src={sol.icon}
                  alt={sol.title}
                  className="w-12 h-12 rounded-full bg-white p-2 shadow object-contain"
                />
                <div>
                  <h3 className="font-bold text-[20px] mb-1">{sol.title}</h3>
                  <p className="text-gray-600 text-base leading-snug">
                    {sol.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow transition">
              Secure My Business &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;

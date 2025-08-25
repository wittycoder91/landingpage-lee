import React, { useState, useEffect } from "react";
import clientReview1 from "../assets/images/client-review1.png";
import clientReview2 from "../assets/images/client-review2.png";
import clientReview3 from "../assets/images/client-review3.png";
import clientReview4 from "../assets/images/client-review4.png";
import clientReview5 from "../assets/images/client-review5.png";
import clientReview6 from "../assets/images/client-review6.png";
import clientReview7 from "../assets/images/client-review7.png";
import clientReview8 from "../assets/images/client-review8.png";
import clientReview9 from "../assets/images/client-review9.png";
import clientReview10 from "../assets/images/client-review10.png";
import clientReview11 from "../assets/images/client-review11.png";
import clientReview12 from "../assets/images/client-review12.png";
import iconGoogle from "../assets/images/icon-google.png";

const reviews = [
  {
    name: "David Schneider",
    text: `I’ve used James for many years and so have my wife's company. . He and his team are excellent. They respond quickly, are very reliable and knowledgeable. I highly recommend them for all your IT needs.`,
    img: clientReview1,
  },
  {
    name: "Yesenia Fernandez",
    text: `HubReady.... is the best of the best. James worked on my laptop promptly fixing my concern. I highly recommend his serviced contracts. It’s perfect. If I ever have anything pop up, James and his team of experts are there to solve it immediately.`,
    img: clientReview2,
  },
  {
    name: "Work Related",
    text: `"Installed a new faster hard drive and was able to save my files! These guys rock!". James has worked on many of my desk tops, laptops, Ipads, and tablets for well over 5 + years and is the ONLY "IT TECH" that I TRUST with great confidence with all of my personal data. James professionalism and dedication to his customer's is above and beyond. It is always a pleasure to work with you! Thank you once again! Paula G.`,
    img: clientReview3,
  },
  {
    name: "William Jones",
    text: `James' Team has been working on our systems for several years now. We have always had a great working relationship. He is always available for all of our IT needs and been able to complete projects on time.`,
    img: clientReview4,
  },
  {
    name: "JAMES BABKES",
    text: `We have been working with James for a couple of years now. Met James and all my problems were solved. He has unbelievable knowledge and is so patient will illiterate computer people. He is always there when you need him. However, if he sets the system up, you rarely need him because the job is so well done.`,
    img: clientReview5,
  },
  {
    name: "George Giosmas",
    text: `These guys are the best. I have been using their services for over one year and they have saved our Law Firm a lot of money and time as well! I would highly recommend them to anyone needing IT Services!`,
    img: clientReview6,
  },
  {
    name: "Leslie",
    text: `I’ve known James for years. He and his team are excellent. They respond quickly, are very reliable and knowledgeable. I highly recommend them for all your IT needs.`,
    img: clientReview7,
  },
  {
    name: "Marlon Belinfanti",
    text: `Very professional, prompt and reasonable service. We have been using James for our IT and computer repair services for over 15 years. I totally recommend.`,
    img: clientReview8,
  },
  {
    name: "Lakeshia Barr",
    text: `HubReady IT Solutions never seems to let me down! They provide excellent customer service and I can always depend on them to get the job done. I highly recommend them.`,
    img: clientReview9,
  },
  {
    name: "Katie Jay",
    text: `Have used HubReady many times over the past decade. Comes right to my home or workplace and fixes my problems, or easily fixes via remote. HubReady is predictable, fast, friendly and cost-effective. Highly recommend to all my friends and colleagues.`,
    img: clientReview10,
  },
  {
    name: "Silvia Flores",
    text: `James did a great job with my laptop, also I was explained exactly what was wrong and how it was going to get fixed. The prices are reasonable compared to other places. I would 100% reccomend!!!`,
    img: clientReview11,
  },
  {
    name: "Daniel Jobe",
    text: `The computer tech did an amazing job he handled my problem immediately and made special arrangements even during the COVID-19 pandemic. I would highly recommend this company to anyone I really appreciate the wonderful customer service and professionalism thank you.`,
    img: clientReview12,
  },
];

const ClientReviews = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [reviewsPerPage, setReviewsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1240) {
        setReviewsPerPage(3);
      } else if (width >= 768) {
        setReviewsPerPage(2);
      } else {
        setReviewsPerPage(1);
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  // Reset to first page when reviews per page changes
  useEffect(() => {
    setCurrentPage(0);
  }, [reviewsPerPage]);

  const goToPreviousPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const goToNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  const getCurrentReviews = () => {
    const startIndex = currentPage * reviewsPerPage;
    return reviews.slice(startIndex, startIndex + reviewsPerPage);
  };

  return (
    <section className="w-full bg-gray-50 py-10 sm:py-20 px-4 sm:px-2">
      <div className="max-w-[1250px] mx-auto text-center">
        <h2 className="text-2xl sm:text-4xl font-bold mb-2">Client Reviews</h2>
        <p className="text-lg sm:text-xl mb-8 sm:mb-12">
          What Our Clients Are Saying
        </p>
        <div className="relative flex flex-col items-center justify-center bg-blue-500 rounded-2xl py-10 sm:py-20 px-4 sm:px-28">
          {/* Left Arrow */}
          <button
            onClick={goToPreviousPage}
            className="absolute left-2 sm:left-8 z-10 p-2 text-2xl sm:text-3xl text-white rounded-full transition-colors"
          >
            &#60;
          </button>
          {/* Reviews */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-8 justify-center w-full">
            {getCurrentReviews().map((review, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col items-start w-full sm:min-h-[500px] text-left"
              >
                <div className="flex justify-between items-center w-full mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className="text-yellow-400 text-lg sm:text-xl"
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <img
                    src={iconGoogle}
                    alt="Google"
                    className="w-4 h-4 rounded-full mr-3 object-cover"
                  />
                </div>
                <p className="text-gray-700 text-sm sm:text-base flex-1 leading-relaxed">
                  {review.text}
                </p>
                <div className="flex items-center mt-4 sm:mb-4">
                  <img
                    src={review.img}
                    alt={review.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3 object-cover"
                  />
                  <span className="font-semibold text-gray-800 text-base sm:text-lg">
                    {review.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
          {/* Right Arrow */}
          <button
            onClick={goToNextPage}
            className="absolute right-2 sm:right-8 z-10 p-2 text-2xl sm:text-3xl text-white rounded-full transition-colors"
          >
            &#62;
          </button>
          <div className="flex justify-center mt-6 sm:mt-8 gap-2 items-center text-white text-base sm:text-lg">
            {[...Array(totalPages)].map((_, i) => (
              <span
                key={i}
                className={`mx-1 w-2 h-2 rounded-full inline-block cursor-pointer transition-colors ${
                  i === currentPage ? "bg-white" : "bg-blue-300"
                }`}
                onClick={() => setCurrentPage(i)}
              ></span>
            ))}
            <span className="ml-4 text-white text-sm sm:text-base">
              {currentPage + 1} / {totalPages}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;

import React, { useState, useEffect } from 'react';
import clientReview1 from '../assets/images/client-review1.png';
import clientReview2 from '../assets/images/client-review2.png';
import clientReview3 from '../assets/images/client-review3.png';
import iconGoogle from '../assets/images/icon-google.png';

const reviews = [
  {
    name: 'Terho Kontioinen',
    text: `Great review platform. Integrates easily with our Squarespace website. Also very easy to transfer Squarespace product reviews into the TrustMary review widget so we can have all our reviews in one place.`,
    img: clientReview1,
  },
  {
    name: 'T Tran',
    text: `Trustmary is a great tool to import G2 reviews and display it on your website. There are lots of options to customize the widget. It is super simple to install it. Just copy and paste the short script and it works instantly! Customer service is also excellent!`,
    img: clientReview2,
  },
  {
    name: 'Dustin Heaton',
    text: `Great review platform. Integrates easily with our Squarespace website. Also very easy to transfer Squarespace product reviews into the TrustMary review widget so we can have all our reviews in one place.`,
    img: clientReview3,
  },
  {
    name: 'Sarah Johnson',
    text: `Excellent platform for managing customer testimonials. The integration was seamless and the customer support team was incredibly helpful throughout the setup process. Highly recommend!`,
    img: clientReview1,
  },
  {
    name: 'Michael Chen',
    text: `Trustmary has transformed how we display customer feedback on our website. The widgets are highly customizable and the analytics provide valuable insights into customer satisfaction.`,
    img: clientReview2,
  },
  {
    name: 'Emma Rodriguez',
    text: `We've been using Trustmary for over a year now and it's been fantastic. The review collection process is automated and the display widgets look professional on our site.`,
    img: clientReview3,
  },
  {
    name: 'David Thompson',
    text: `The best review management platform we've tried. Easy to set up, great features, and the customer service is outstanding. Our conversion rates have improved significantly since implementing Trustmary.`,
    img: clientReview1,
  },
  {
    name: 'Lisa Wang',
    text: `Trustmary makes it so easy to showcase customer testimonials. The widgets are beautiful and the platform is intuitive to use. Our customers love seeing real reviews on our website.`,
    img: clientReview2,
  },
  {
    name: 'James Wilson',
    text: `Outstanding platform for review management. The integration with our existing systems was smooth and the results have been impressive. Our trust signals have increased dramatically.`,
    img: clientReview3,
  },
  {
    name: 'Maria Garcia',
    text: `Trustmary has been a game-changer for our business. The review collection is automated, the display is beautiful, and the impact on our conversion rates has been remarkable.`,
    img: clientReview1,
  },
  {
    name: 'Robert Kim',
    text: `Fantastic platform with excellent features. The customer support is top-notch and the platform is very user-friendly. We've seen a significant improvement in customer trust since using Trustmary.`,
    img: clientReview2,
  },
  {
    name: 'Jennifer Lee',
    text: `Highly recommend Trustmary for any business looking to improve their online reputation. The platform is powerful yet easy to use, and the results speak for themselves.`,
    img: clientReview3,
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
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  // Reset to first page when reviews per page changes
  useEffect(() => {
    setCurrentPage(0);
  }, [reviewsPerPage]);

  const goToPreviousPage = () => {
    setCurrentPage(prev => prev > 0 ? prev - 1 : totalPages - 1);
  };

  const goToNextPage = () => {
    setCurrentPage(prev => prev < totalPages - 1 ? prev + 1 : 0);
  };

  const getCurrentReviews = () => {
    const startIndex = currentPage * reviewsPerPage;
    return reviews.slice(startIndex, startIndex + reviewsPerPage);
  };

  return (
    <section className="w-full bg-gray-50 py-10 sm:py-20 px-4 sm:px-2">
      <div className="max-w-[1250px] mx-auto text-center">
        <h2 className="text-2xl sm:text-4xl font-bold mb-2">Client Reviews</h2>
        <p className="text-lg sm:text-xl mb-8 sm:mb-12">What Our Clients Are Saying</p>
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
              <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col items-start w-full min-h-[350px] sm:min-h-[400px] text-left">
                <div className='flex justify-between items-center w-full mb-4'>
                    <div className="flex">
                    {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-lg sm:text-xl">★</span>
                    ))}
                    </div>
                    <img src={iconGoogle} alt="Google" className="w-4 h-4 rounded-full mr-3 object-cover" />
                </div>
                <p className="text-gray-700 text-sm sm:text-base flex-1 leading-relaxed">{review.text}</p>
                <div className="flex items-center mt-4 sm:mb-4">
                  <img src={review.img} alt={review.name} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3 object-cover" />
                  <span className="font-semibold text-gray-800 text-base sm:text-lg">{review.name}</span>
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
                    i === currentPage ? 'bg-white' : 'bg-blue-300'
                }`}
                onClick={() => setCurrentPage(i)}
                ></span>
            ))}
            <span className="ml-4 text-white text-sm sm:text-base">{currentPage + 1} / {totalPages}</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ClientReviews; 
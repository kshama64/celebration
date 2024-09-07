import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Which Movies or Shows can we watch? Can we play our own videos ?",
      answer: "Yes, you can connect your OTT accounts or phone through Chromecast and play content of your choice. Please note that we do NOT provide any movies or shows or OTT account. We just do the setup for you using your own content and accounts. We don't support pendrives and laptops for casting or watching movies."
    },
    {
      question: "Refund Policy",
      answer: "Hours Before the slot time. No refund for bookings which are less than 72 hrs from payment time."
    },
    {
      question: "You are responsible for your belongings ?",
      answer: "We will not be responsible in case of loss of personal belongings of any nature. Customers must take care of their belongings."
    },
    {
      question: "The Booking period includes set up and check out time ?",
      answer: "Customers must vacate the theater along with all their belongings on or before the end time."
    },
    {
      question: "Costumer must not make any changes to the configuration of technical equipment ?",
      answer: "Customers should not make adjustments or modifications to the set up of projector, screen, laptop and sound system. If any changes is required, we will do it from our end."
    },
    
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='mt-48'>
    <div className='mt-10 md:mt-20'>
      <div className="max-w-6xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md">
              <button
                className="w-full text-left px-6 py-4 text-lg font-medium text-gray-900 bg-gray-200 rounded-t-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 text-gray-700 bg-gray-50 rounded-b-lg">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default FAQ;

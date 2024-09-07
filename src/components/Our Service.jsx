import React from 'react';

const About = () => {
  return (
    <div className='mt-36'>
      <section className="bg-gray-50 py-12">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-12 text-center">Our Services</h1>
        <div className="container mx-auto px-4">
          {/* First Section */}
          <div className="flex flex-col md:flex-row items-center mb-12">
            {/* Image Section */}
            <div className="md:w-1/2 flex justify-center">
              <img
                src="https://storage.googleapis.com/tbt-pics/images/Theater%20photos/supreme_jubilee_hills_2.jpg"
                alt="Sample"
                className="w-full h-96 object-cover rounded-2xl shadow-lg" // Set fixed height
              />
            </div>
            {/* Content Section */}
            <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-700 mb-2">Private Movie Screening</h3>
              <p className="text-base md:text-lg text-gray-600 mb-4 font-sans">
                You can book our private theaters for watching your favorite movies and shows on the big HD screen with surround sound and comfortable seating. Our screen sizes vary from 135 inches to 180 inches, and speakers vary from 600 W to 1000 W. Customers must use their own OTT accounts or downloaded files to stream the content. We support all major OTT apps and help in setting things up for you. Please note that we do not support Pen Drives/Hard Disks.
              </p>
            </div>
          </div>

          {/* Second Section with Reversed Layout */}
          <div className="flex flex-col md:flex-row-reverse items-center mb-12">
            {/* Image Section */}
            <div className="md:w-1/2 flex justify-center">
              <img
                src="https://storage.googleapis.com/tbt-pics/images/Theater%20photos/Marvel_2_comp.jpg"
                alt="Additional"
                className="w-full h-96 object-cover rounded-3xl shadow-lg" // Set fixed height
              />
            </div>
            {/* Content Section */}
            <div className="md:w-1/2 md:pr-8 mt-8 md:mt-0">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-700 mb-2">Decoration</h3>
              <p className="text-base md:text-lg text-gray-600 mb-4 font-sans">
                All our Private theaters are decorated to make them a great place for celebrations of special events like Birthdays, anniversaries, bride-to-be, romantic dates, etc. Each and every private theater of The Binge Town has a different and unique theme of decoration. In some theaters, decoration is mandatory and included in pricing, while in others we provide options without decoration pricing as well. Decorations are as per reference images with slight customizations specific to the event.
              </p>
            </div>
          </div>

          {/* Third Section */}
          <div className="flex flex-col md:flex-row items-center mb-12">
            {/* Image Section */}
            <div className="md:w-1/2 flex justify-center">
              <img
                src="https://storage.googleapis.com/tbt-pics/images/Homepage/food_and_beverages_1.jpg"
                alt="Sample"
                className="w-full h-96 object-cover rounded-3xl shadow-lg" // Set fixed height
              />
            </div>
            {/* Content Section */}
            <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-700 mb-2">Snacks and Beverages</h3>
              <p className="text-base md:text-lg text-gray-600 mb-4 font-sans">
                A celebration is incomplete without delectable food, and at The Binge Town, we take pride in offering a diverse and mouthwatering menu at all our branches. Menu varies from branch to branch. Some of the most commonly available items in our menu are: French fries, Pizza, Soft drinks, Nuggets, Milk Shakes, etc. Customers can also order food from outside. Please note that snacks and beverages are not included in the booking and have to be ordered separately at the theater.
              </p>
            </div>
          </div>

          {/* Fourth Section with Reversed Layout */}
          <div className="flex flex-col md:flex-row-reverse items-center mb-12">
            {/* Image Section */}
            <div className="md:w-1/2 flex justify-center">
              <img
                src="https://storage.googleapis.com/tbt-pics/images/Homepage/Cake.jpg"
                alt="Sample"
                className="w-full h-96 object-cover rounded-3xl shadow-lg" // Set fixed height
              />
            </div>
            {/* Content Section */}
            <div className="md:w-1/2 md:pr-8 mt-8 md:mt-0">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-700 mb-2">Cakes</h3>
              <p className="text-base md:text-lg text-gray-600 mb-4 font-sans">
                No need to hassle for arranging that perfect cake for your birthday, anniversary, or any other event. We provide a diverse range of cake options that are tasty as well as economical. After your celebration, we also pack your cake properly for you to carry. Cakes can be added to your event while booking from the website with extra charges depending on the flavor.
              </p>
            </div>
          </div>

          {/* Fifth Section */}
          <div className="flex flex-col md:flex-row items-center mb-12">
            {/* Image Section */}
            <div className="md:w-1/2 flex justify-center">
              <img
                src="https://storage.googleapis.com/tbt-pics/images/Homepage/Bouquet_1.jpg"
                alt="Entertainment"
                className="w-full h-96 object-cover rounded-3xl shadow-lg" // Set fixed height
              />
            </div>
            {/* Content Section */}
            <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-700 mb-2">Bouquet and Other Gifts</h3>
              <p className="text-base md:text-lg text-gray-600 mb-4 font-sans">
                Want to make your special ones feel even more special by gifting them? We provide bouquet, photo frames, soft toys, showpieces, and many more gifting options in our website and at the theater for you to select the perfect gift for your loved ones. Kindly note that some gifts can be added directly from the website while some options are available only at the theater and can be purchased there directly.
              </p>
            </div>
          </div>

          {/* Sixth Section with Reversed Layout */}
          <div className="flex flex-col md:flex-row-reverse items-center mb-12">
            {/* Image Section */}
            <div className="md:w-1/2 flex justify-center">
              <img
                src="https://storage.googleapis.com/tbt-pics/images/Add%20ons/FogEntry.png"
                alt="Seating Arrangement"
                className="w-full h-96 object-cover rounded-3xl shadow-lg" // Set fixed height
              />
            </div>
            {/* Content Section */}
            <div className="md:w-1/2 md:pr-8 mt-8 md:mt-0">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-700 mb-2">Fog Entry</h3>
              <p className="text-base md:text-lg text-gray-600 mb-4 font-sans">
                Begin your event with a dreamy entry which feels like walking over the clouds. We use dry ice to fill the theater with cloud like Fog during the entry which makes it really heavenly and magical. The gas is completely safe and non-suffocating, so even kids can enjoy it freely. Pricing for Fog entry starts at RS.350 and you can add multiple Fog entries in your event as per your requirement.
              </p>
            </div>
          </div>

          {/* Seventh Section */}
          <div className="flex flex-col md:flex-row items-center mb-12">
            {/* Image Section */}
            <div className="md:w-1/2 flex justify-center">
              <img
                src="https://storage.googleapis.com/tbt-pics/images/Add%20ons/Photoshoot.jpg"
                alt="Customer Service"
                className="w-full h-96 object-cover rounded-3xl shadow-lg" // Set fixed height
              />
            </div>
            {/* Content Section */}
            <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-700 mb-2">Photoshoot</h3>
              <p className="text-base md:text-lg text-gray-600 mb-4 font-sans">
                Who does not want to record beautiful memories of special days in form of high quality photos which can also be shared with friends and family on social media? Almost all our branches offer DSLR photography service for as low as RS.300 for 15 minutes. We share the soft copy of the photos within 12 hrs through Google drive link.
              </p>
            </div>
          </div>
        </div>
        <button className="mt-10 bg-indigo-900 text-white px-8 py-2 text-lg md:text-xl rounded-full hover:bg-blue-600 mx-auto block">
          Book Now
        </button>
      </section>
    </div>
  );
};

export default About;

import React from 'react';

const About = () => {
  return (
    <div className='mt-48'>
    <section className="bg-gray-50 py-12 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Image Section */}
          <div className="md:w-1/2">
            <img
              src="https://storage.googleapis.com/tbt-pics/images/RT_2.jpeg"
              alt="Sample"
              className="w-full h-auto rounded-3xl shadow-lg"
            />
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8">
  <h2 className="text-4xl font-semibold text-gray-800 mb-4 font-serif">About Us</h2>
  <p className="text-xl text-gray-600 mb-4 font-sans">
    The Binge Town (BCKS Group) is India's #1 chain of Private Theaters. Customers can book our theaters to watch their favorite movies and shows on Big Screen and to celebrate special occasions like Birthdays, Anniversaries, etc. As of July 2024, the Binge Town has five branches in Bengaluru - Kormangala, Rajaji Nagar, Banashankari, Whitefield, and Nagavara; four branches in Hyderabad - Jubilee Hills, Himayatnagar, Miyapur, and Suchitra Circle; and four branches in Delhi - Janakpuri, Laxmi Nagar, Saket, and Karol Bagh.
    At Binge Town, we focus on delivering happiness to our customers and making their special days extra special through our 5-star rated service. In addition to Theater and Decoration services, we also help in arranging cake, snacks, and beverages for customers to make their experience more complete and perfect.
  </p>
</div>

        </div>
      </div>
    </section>


    </div>
  );
};

export default About;

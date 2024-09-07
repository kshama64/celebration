import React, { useState ,useEffect } from 'react';
import Testimonial from './Testimonial';
import Slider from 'react-slick';
import { Link, NavLink } from 'react-router-dom';

const images = [
    "https://www.themeweddings.in/wp-content/uploads/2023/04/823e3e96da796d03bf631e82cc7c58e6.jpg",
    "https://storage.googleapis.com/tbt-pics/images/Homepage/gallery_5.jpg",
    "https://media.licdn.com/dms/image/D4D12AQGbjWUGRKkoJg/article-cover_image-shrink_600_2000/0/1682402761275?e=2147483647&v=beta&t=sQEyqSJr3U8b9TQQQaKv1hyrsPiLlQotDR9DT6oaDrE",
    "https://storage.googleapis.com/tbt-pics/images/Homepage/gallery_6.jpg",
    "https://storage.googleapis.com/tbt-pics/images/Homepage/gallery_4.jpg",
    "https://i.pinimg.com/736x/3c/51/e3/3c51e38e43f838b0d7fad2b63058c4cb.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7bKKQEGgi-GddxF-2r5n2_7qRSsgLk1fi3NAULfgJ7F4RtSEA1ciX2scWap_JVno5xBk&usqp=CAU",
    "https://storage.googleapis.com/tbt-pics/images/Homepage/gallery_4.jpg",
    
  ];

export default function Home() {

 const [selectedCity, setSelectedCity] = useState('');

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Selected City:', selectedCity);
  };


      const slides = [
        {
          title: "The Bring Town Private Theatres for Celebrations",
          content: "We provide the best services tailored to your needs. Our team of experts ensures that you receive top-notch support at every step. We prioritize customer satisfaction and strive to exceed expectations with every project.",
          list: ["Experienced professionals", "Customer-centric approach", "Quality assurance", "24/7 Support"],
          image: "https://static.vecteezy.com/system/resources/thumbnails/029/317/657/small_2x/celebration-setting-lively-decorations-make-for-a-spirited-birthday-party-background-ai-generated-photo.jpg",
        },
        {
          title: "Affordable Private celebration Packages",
          content: "Our team consists of industry experts with years of experience. We stay updated with the latest trends and technologies to deliver cutting-edge solutions.",
          list: ["Innovative solutions", "Industry expertise", "Continuous learning", "Proven results"],
          image: "https://www.clickhubli.com/blog/wp-content/uploads/2019/06/new-year-theme-party-1024x717-1024x717.jpg",
        },
        {
          title: "Private Theater with the Best serice Gurantee",
          content: "We prioritize our customers and ensure their satisfaction by providing top-quality services and support. Our success is measured by your satisfaction.",
          list: ["High customer ratings", "Long-term relationships", "Personalized services", "Responsive support"],
          image: "https://static.vecteezy.com/system/resources/thumbnails/029/317/657/small_2x/celebration-setting-lively-decorations-make-for-a-spirited-birthday-party-background-ai-generated-photo.jpg",
        },
      ];
    
      const [currentSlide, setCurrentSlide] = useState(0);
    
      // Automatically change slide every 5 seconds
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
      }, [slides.length]);
    
      // Hover to manually switch slides
      const handleMouseEnter = (index) => {
        setCurrentSlide(index);
      };

      const services = [
  {
    title: "Gifts",
    image: "https://i.pcmag.com/imagery/roundups/06aoKshgG4FHIbLrmUJNHNh-5.fit_lim.size_850x490.v1698854350.jpg"
  },
  {
    title: "Cakes",
    image: "https://www.giftoo.com.pk/wp-content/uploads/2021/08/3d72fd6c8c6bf3fb3015c2ebcfa9f8bc-1.jpg"
  },
  {
    title: "PhotoShoot",
    image: "https://images.picxy.com/cache/2020/3/31/df6428efa47836339a0abdc63b271e30.jpg"
  },
  {
    title: "Fog Entry",
    image: "https://www.letscelebrates.com/cdn/shop/files/FogEntry_edb6cbdd-4ae2-42bf-96f4-e164a59fcc58.jpg?v=1718619812"
  }
  // Add more services here
];
const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  
  
<section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Our Services</h2>
        <div className="flex flex-wrap -mx-4">
          {services.map((service, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


      return (
    <div>
     <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://storage.googleapis.com/tbt-pics/images/Theater%20photos/Radiant_1%20.jpg)' }}>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4 sm:px-6 lg:px-8">
        {/* Text and Button */}
        <div className="text-center text-white">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 typing-effect">
            Private Theater Celebration Space 
          </h1>
          <div className='mt-24'>
            <NavLink
              to='/bookingnow'
              className="bg-white text-black px-10 py-3 rounded-lg font-semibold text-sm sm:text-base lg:text-lg transition-transform transform hover:scale-105">
              Book Now
            </NavLink>
          </div>
        </div>
      </div>
    </div>
      <div className="relative  flex flex-col md:flex-row items-center  rounded-3xl justify-center min-h-60 bg-rgb(236,236,235) ">
      {/* Form Section */}
      <div className="w-full md:w-1/3 p-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 my-8">Find us in your town</h1>

        <h2 className="text-2xl font-bold mb-6"> RAJOURI GARDEN </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">City</label>
            <input
              type="text"
              value="Rajouri Garden"
              disabled
              className="w-full px-2 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none" />
          </div>
          <Link></Link>
          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-2 rounded-md hover:bg-blue-600">
            Submit
          </button>
        </form>
      </div>
      
      {/* Image Section with Curved Div */}
      <div className="relative w-full md:w-2/5 p-8">
        <div className="relative overflow-hidden rounded-3xl shadow-md">
          <img
            src="https://images.pexels.com/photos/14520365/pexels-photo-14520365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Rajouri Garden"
            className="object-cover w-full h-full transition-transform duration-700 transform hover:scale-105"/>
        </div>
      </div>
    </div>
    <div className="flex flex-col md:flex-row items-center justify-center p-4">
      {/* Text Content Section */}
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold text-gray-800 my-8">WHY CHOOSE US</h1>
        <h2 className="text-3xl font-bold mb-4">{slides[currentSlide].title}</h2>
        <p className="text-gray-700 mb-4">{slides[currentSlide].content}</p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {slides[currentSlide].list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <button className="mt-6 bg-indigo-900 text-white px-4 py-2 w-48 h-12 rounded-full hover:bg-blue-600 mx-auto flex justify-center items-center">
  Book Now
</button>


      </div>

      {/* Image Section */}
      <div className="flex-1 p-8">
  <img
    src={slides[currentSlide].image}
    alt={slides[currentSlide].title}
    className="rounded-md shadow-md w-full h-auto object-cover transition-transform duration-50 transform hover:scale-105"/>
</div>
</div>

<div className="flex flex-col items-center text-center p-8 bg-gray-100">
  <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
    How does Private Theater Celebration work?
  </h1>
  <p className="text-gray-700 mb-8 mx-auto max-w-xl">
    Private Theatre celebration is a very new concept pioneered by The Binge Town. Guests can book private theaters for celebrating birthdays, anniversaries, date night, bride to be, etc., and enjoy watching their favorite movies, shows, photos, and videos on the big screen. Guests can also enjoy delicious food and beverages, and add other services like Cakes, Gifts, Photoshoot, etc. The Binge Town private theaters make celebrations easy, affordable, fun, and memorable.
  </p>
   <button className="mt-6 bg-indigo-900 text-white px-4 py-2 w-48 h-12 rounded-full hover:bg-blue-600 mx-auto flex justify-center items-center">
  Book Now
</button>
</div>

<Testimonial/>


<section className="bg-gray-50 py-12">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center text-gray-800 mb-8">
      Our Services
    </h2>
    
    <div className="relative">
      <Slider {...sliderSettings} className="w-full">
        {services.map((service, index) => (
          <div
            key={index}
            className="px-2 sm:px-4 flex justify-center"
          >
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl w-full max-w-xs sm:max-w-md lg:max-w-lg">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 sm:h-64 lg:h-72 object-cover transition-transform duration-300 transform hover:scale-110"
              />
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    
    <Link to='/our services'>
      <button className="mt-8 sm:mt-10 bg-indigo-900 text-white px-8 sm:px-12 py-2 sm:py-3 text-base sm:text-lg rounded-full hover:bg-blue-600 mx-auto block">
        All Services
      </button>
    </Link>
  </div>
</section>





    <section className="py-12 bg-violet-950">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-semibold text-left text-white mb-8">
      100k+ followers on Instagram!
    </h2>
    
    {/* First Row: 3 Images */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {images.slice(0, 3).map((src, index) => (
        <div
          key={index}
          className="relative group overflow-hidden rounded-lg shadow-md"
        >
          <img
            src={src}
            alt={`Gallery Image ${index + 1}`}
            className="w-full h-64 sm:h-80 md:h-96 object-cover transition-transform duration-300 transform group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 flex items-center justify-center">
            <p className="text-white text-lg font-semibold">View</p>
          </div>
        </div>
      ))}
    </div>
    
    {/* Second Row: 2 Images */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
      {images.slice(3, 5).map((src, index) => (
        <div
          key={index + 3}
          className="relative group overflow-hidden rounded-lg shadow-md"
        >
          <img
            src={src}
            alt={`Gallery Image ${index + 4}`}
            className="w-full h-64 sm:h-80 md:h-96 object-cover transition-transform duration-300 transform group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 flex items-center justify-center">
            <p className="text-white text-lg font-semibold">View</p>
          </div>
        </div>
      ))}
    </div>
    
    {/* Third Row: 3 Images */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
      {images.slice(5, 8).map((src, index) => (
        <div
          key={index + 5}
          className="relative group overflow-hidden rounded-lg shadow-md"
        >
          <img
            src={src}
            alt={`Gallery Image ${index + 6}`}
            className="w-full h-96 sm:h-80 md:h-96 object-cover transition-transform duration-300 transform group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 flex items-center justify-center">
            <p className="text-white text-lg font-semibold">View</p>
          </div>
        </div>
      ))}
    </div>

    <div className="flex justify-center mt-10">
      <button className="text-white px-4 py-2 w-48 h-12 rounded-full hover:bg-blue-600 underline text-lg">
        Our Instagram Page
      </button>
    </div>
  </div>
</section>




 </div>

    
  );
}

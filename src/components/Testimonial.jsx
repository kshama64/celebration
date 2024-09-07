import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const testimonials = [
  {
    name: 'Emiliano Aquilani',
    image: 'http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg',
    text: 'Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate.',
  },
  {
    name: 'Anna Iturbe',
    image: 'http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg',
    text: 'Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate.',
  },
  {
    name: 'Lara Atkinson',
    image: 'http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg',
    text: 'Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate.',
  },
  {
    name: 'Ian Owen',
    image: 'http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg',
    text: 'Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate.',
  },
  {
    name: 'Michael Teddy',
    image: 'http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg',
    text: 'Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate.',
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">More than 30,000 reviews on Google with 4.9 rating!
      </h2>
      <Slider {...settings} className="text-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="px-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img 
                src={testimonial.image} 
                alt={testimonial.name} 
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <p className="text-gray-600 mb-4">{testimonial.text}</p>
              <div className="testimonial-name bg-blue-500 text-white py-2 px-4 rounded-full inline-block">
                {testimonial.name}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonial;

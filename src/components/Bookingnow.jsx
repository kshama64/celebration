import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { Calendar as CalendarIcon, Search, MapPin } from 'lucide-react'; 
import Calendar from 'react-calendar'; 
import 'react-calendar/dist/Calendar.css'; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import { Link } from 'react-router-dom';

export default function Bookingnow() {
  const slides = [
    {
      title: "Standard Theatre",
      content: "",
      list: ["Experienced professionals", "Customer-centric approach", "Quality assurance", "24/7 Support"],
      image: "https://static.vecteezy.com/system/resources/thumbnails/029/317/657/small_2x/celebration-setting-lively-decorations-make-for-a-spirited-birthday-party-background-ai-generated-photo.jpg",
    },
    {
      title: "Standard Theatre",
      content: "",
      list: ["Innovative solutions", "Industry expertise", "Continuous learning", "Proven results"],
      image: "https://www.clickhubli.com/blog/wp-content/uploads/2019/06/new-year-theme-party-1024x717-1024x717.jpg",
    },
  ];
  

  const [currentSlide, setCurrentSlide] = useState(0);
  const [date, setDate] = useState(new Date());
  const [showMoreSlots, setShowMoreSlots] = useState(false);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [selectedTimeSlot2, setSelectedTimeSlot2] = useState(''); // For second content section

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  const toggleMoreSlots = () => {
    setShowMoreSlots(!showMoreSlots);
  };

  const getAvailableTimeSlots = () => {
    const baseSlots = [
      "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", 
      "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", 
      "5:00 PM", "6:00 PM", "7:00 PM"
    ];

    const day = date.getDay();
    if (day === 0 || day === 6) {
      return baseSlots.slice(0, 6);
    }
    return baseSlots;
  };

  const handleTimeSlotClick = (slot, section) => {
    if (section === 1) {
      setSelectedTimeSlot(slot);
    } else {
      setSelectedTimeSlot2(slot); // For second section
    }
  };

  const handleProceed = (section) => {
    if (section === 1 && selectedTimeSlot) {
      alert(`Proceeding with booking for time slot: ${selectedTimeSlot}`);
    } else if (section === 2 && selectedTimeSlot2) {
      alert(`Proceeding with booking for time slot: ${selectedTimeSlot2}`);
    } else {
      alert('Please select a time slot.');
    }
  };

  return (
    <div className="flex flex-col lg:flex-row mt-10 lg:mt-40">
      {/* Left Column (Sidebar) */}
      <div className="w-full lg:w-1/3 bg-gray-100 p-6 lg:h-3/4 overflow-y-auto">
        <div className="space-y-6 ">
          {/* Search Bar */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Search className="mr-2"/> Search </h2>
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 border rounded"/>
          </div>

          {/* Calendar */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <CalendarIcon className="mr-2" /> Select Date
            </h2>
            <Calendar
              onChange={setDate}
              value={date}
              className="w-full"/>
          </div>

          {/* City Selector */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <MapPin className="mr-2" /> Select City
            </h2>
            <select className="w-full p-2 border rounded">
              <option>Delhi</option>
              <option>Rajouri Garden</option>
            </select>
          </div>
          {/* Image Slider */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Image Slider</h2>
            <Slider {...settings}>
              {slides.map((slide, index) => (
                <div key={index}>
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-64 object-cover rounded"/>
                </div>
              ))}
            </Slider>
          </div>

          {/* Time Slot Selector */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Choose Time Slot</h2>
            <select className="w-full p-2 border rounded mb-2">
              {getAvailableTimeSlots().map((slot, index) => (
                <option 
                  key={index} 
                  value={slot} 
                  onClick={() => handleTimeSlotClick(slot, 1)} // First content section
                  className={selectedTimeSlot === slot ? 'bg-blue-100' : ''} >
                  {slot}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Right Column (Main Content) */}
      <div className="w-full lg:w-2/3 p-4 lg:p-8 space-y-10">
        {/* First Content Section */}
        <div className="flex flex-col lg:flex-row items-center lg:justify-between">
          {/* Image Section */}
          <div className="flex-1 lg:mr-8 mb-8 lg:mb-0">
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-auto rounded-md shadow-md object-cover"/>
          </div>
          {/* Text Content Section */}
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-800 mb-8 lg:text-left text-center">Two Private Theaters in Koramangala</h1>
            <h2 className="text-3xl font-bold mb-4">{slides[currentSlide].title}</h2>
            <p className="text-gray-700 mb-4">{slides[currentSlide].content}</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              {slides[currentSlide].list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            
            {/* Time Slot Buttons */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Choose Your Time Slot</h3>
              <div className="flex flex-wrap gap-4">
                {getAvailableTimeSlots().map((slot, index) => (
                  <button 
                    key={index} 
                    className={`text-black px-6 py-2 rounded-md hover:bg-blue-600 ${selectedTimeSlot === slot ? 'bg-blue-200' : ''}`}
                    onClick={() => handleTimeSlotClick(slot, 1)} >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
            <Link to='/bookingdetails'>

            <button 
              onClick={() => handleProceed(1)} // First section proceed button
              className={`bg-indigo-900 text-white px-8 py-2 w-full lg:w-48 h-12 rounded-full hover:bg-blue-600 mx-auto flex justify-center items-center ${!selectedTimeSlot ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={!selectedTimeSlot}>
              Proceed
            </button>
            </Link>
          </div>
        </div>

        {/* Second Content Section */}
        <div className="flex flex-col lg:flex-row items-center lg:justify-between">
          {/* Image Section */}
          <div className="flex-1 lg:mr-8 mb-8 lg:mb-0">
            <img
              src="https://thebingetown-in.b-cdn.net/Theater_photos/romantic_theater_3.jpg" // Change this to the actual image URL
              alt="Second Theatre"
              className="w-full h-auto rounded-md shadow-md object-cover"/>
          </div>

          {/* Text Content Section */}
          <div className="flex-1">
           <h2 className="text-3xl font-bold mb-4">Romantic Theatre</h2>
            <p className="text-gray-700 mb-4">Details about the second theater can go here.</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Add cakes and gifts in next step </li>
              <li>Food can be ordered in theater</li>
              <li>Free cancelation upto before 72 hrs of slot</li>
            </ul>
            
            {/* Time Slot Buttons */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Choose Your Time Slot</h3>
              <div className="flex flex-wrap gap-4">
                {getAvailableTimeSlots().map((slot, index) => (
                  <button 
                    key={index} 
                    className={`text-black px-6 py-2 rounded-md hover:bg-blue-600 ${selectedTimeSlot2 === slot ? 'bg-blue-200' : ''}`}
                    onClick={() => handleTimeSlotClick(slot, 2)} >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
            <Link to='/bookingdetails'>

            <button 
              onClick={() => handleProceed(2)} // Second section proceed button
              className={`bg-indigo-900 text-white px-8 py-2 w-full lg:w-48 h-12 rounded-full hover:bg-blue-600 mx-auto flex justify-center items-center ${!selectedTimeSlot2 ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={!selectedTimeSlot2}>
              Proceed
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

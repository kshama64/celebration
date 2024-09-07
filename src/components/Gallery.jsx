'use client';

import React, { useState } from 'react';

const cityImages = {
  'Delhi': [
    'https://thebingetown-in.b-cdn.net/Theater_photos/standard_1_comp.jpg',
    'https://thebingetown-in.b-cdn.net/Theater_photos/romantic_theater_1.jpg',
    'https://thebingetown-in.b-cdn.net/Theater_photos/romantic_theater_2.jpg',
    'https://thebingetown-in.b-cdn.net/Theater_photos/standard_2_comp.jpg',
  ],
  'Rajouri Garden': [
    'https://thebingetown-in.b-cdn.net/Theater_photos/Couple_1.jpg',
    'https://thebingetown-in.b-cdn.net/Theater_photos/Couple_2.jpg',
    'https://thebingetown-in.b-cdn.net/Theater_photos/Executive_3.jpg',
    'https://thebingetown-in.b-cdn.net/Theater_photos/Family_2.jpg',
  ],
};

export default function Gallery() {
  const [selectedCity, setSelectedCity] = useState('Delhi');
  const images = cityImages[selectedCity];

  return (
    <div className="mt-48 mb-20 px-4 sm:px-6 lg:px-8">
      {/* Dropdown Section */}
      <div className="flex justify-center mb-8">
        <div className="w-full max-w-xs">
          <label htmlFor="city-select" className="block text-lg font-semibold mb-2 text-center">
            Select City
          </label>
          <select
            id="city-select"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {Object.keys(cityImages).map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Images Section */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {/* First Row - 2 Images */}
        {images.slice(0, 2).map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image}
              alt={`Image ${index + 1} for ${selectedCity}`}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>
        ))}

        {/* Second Row - 2 Images */}
        {images.slice(2, 4).map((image, index) => (
          <div key={index + 2} className="relative">
            <img
              src={image}
              alt={`Image ${index + 3} for ${selectedCity}`}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>
        ))}

        {/* Remaining Images - 4 Images per row */}
        {images.slice(4).map((image, index) => (
          <div key={index + 4} className="relative">
            <img
              src={image}
              alt={`Image ${index + 5} for ${selectedCity}`}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

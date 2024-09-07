'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const menuItems = [
  { name: 'Our Services', to: '/our services' },
  { name: 'About Us', to: '/about us' },
  { name: 'My Booking', to: '/my booking' },
  { name: 'Gallery', to: '/gallery' },
  { name: 'Contact Us', to: '/contact us' },
  { name: 'Join Waitlist', to: '/join waitlist' },
  { name: 'Blogs', to: '/blogs' },
  { name: 'FAQ', to: '/faq' },
  { name: 'Privacy Policy', to: '/privacy policy' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white shadow-md h-40">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img src="/src/assets/img.jpg" alt="DevUI Logo" width="200" height="50" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-8 flex-grow items-center justify-center">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className="text-md font-semibold text-gray-800 hover:text-gray-900">
              {item.name}
            </Link>
          ))}
        </div>
        
        {/* Call to Action Button */}
        <div className="hidden lg:block">
          <Link to="/signup">
            <button
              type="button"
              className="rounded-md bg-blue-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
              Book Now
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 text-gray-900 cursor-pointer" />
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 p-2 transition transform lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                   <div className="flex-shrink-0">
          <Link to="/">
            <img src="/src/assets/img.jpg" alt="DevUI Logo" width="200" height="50" />
          </Link>
        </div>
                  <div className="-mr-2">
                    <button
                      onClick={toggleMenu}
                      type="button"
                      className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black">
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        className="text-base font-semibold text-gray-900 hover:text-gray-700">
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="px-5 py-5">
                {/* Uncomment if you want the Book Now button in the mobile menu */}
                {/* <button
                  type="button"
                  className="block text-center text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2  w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
                  Book Now
                </button> */}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="w-full bg-red-600 text-center py-4 md:py-3 lg:py-2 mb-4">
        <h1 className="text-white text-sm md:text-base lg:text-md font-semibold">
          LIMITED TIME OFFER: Use Coupon "LASTMIN" to get Rs 300 off for tomorrow slots
        </h1>
      </div>
    </header>
  );
}

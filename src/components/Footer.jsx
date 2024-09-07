import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Logo Section */}
          <div className="mb-4 md:mb-0">
            <Link to="/" className="text-2xl font-bold">
              <img
                src="http://localhost:5175/src/assets/img.jpg"
                alt="Your Logo"
                height="50"
                width="100"
                className="h-320 w-80"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="mb-4 md:mb-0">
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about us" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link to='/our services' className="hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact us" className="hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:underline">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 items-center">
            <h1 className="mr-4">Social media</h1>
            <Link to="https://facebook.com" className="hover:text-gray-400">
              <FaFacebookF className="w-6 h-6" />
            </Link>
            <Link to="https://twitter.com" className="hover:text-gray-400">
              <FaTwitter className="w-6 h-6" />
            </Link>
            <Link to="https://instagram.com" className="hover:text-gray-400">
              <FaInstagram className="w-6 h-6" />
            </Link>
            <Link to="https://linkedin.com" className="hover:text-gray-400">
              <FaLinkedinIn className="w-6 h-6" />
            </Link>
            <Link to="https://wa.me/your-whatsapp-number" className="hover:text-gray-400">
              <FaWhatsapp className="w-6 h-6" />
            </Link>
            <Link to="https://youtube.com" className="hover:text-gray-400">
              <FaYoutube className="w-6 h-6" />
            </Link>
          </div>
        </div>

        {/* Legal Links Section */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <Link to="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link to="/refund-policy" className="hover:underline">
              Refund Policy
            </Link>
            <Link to="/terms-and-conditions" className="hover:underline">
              Terms and Conditions
            </Link>
          </div>

          <div className="text-center">
            © 2024 YourCompany. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

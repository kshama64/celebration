import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Message sent successfully!');
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="mt-36 sm:mt-52">
      <div className="min-h-screen w-full flex flex-col items-center justify-center">
        {/* Contact Information Section */}
        <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-lg shadow-lg p-8 w-full max-w-4xl mb-12">
          {/* Image */}
          <div className="w-full md:w-1/2 h-full">
            <img
              src="https://images.pexels.com/photos/3184638/pexels-photo-3184638.jpeg"
              alt="Office"
              className="object-cover rounded-lg w-full h-full"
            />
          </div>

          {/* Contact Info */}
          <div className="w-full md:w-1/2 p-8 space-y-6 flex flex-col justify-center h-full">
            <h2 className="text-3xl font-bold text-gray-800">Contact Information</h2>
            <p className="text-gray-700">
              <strong>Address:</strong> 1234 Rajouri Garden, New Delhi, India
            </p>
            <p className="text-gray-700">
              <strong>WhatsApp:</strong> +91-9876543210
            </p>
            <p className="text-gray-700">
              <strong>Phone:</strong> +91-1234567890
            </p>
            <p className="text-gray-700">
              <strong>Email:</strong> contact@yourcompany.com
            </p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                rows="4"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

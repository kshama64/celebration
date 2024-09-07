import React from 'react';

export default function JoinWaitlist() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="md:w-auto mr-10 flex justify-center h-full mb-8 md:mb-0 mt-52">
        <img
          src="https://thebingetown.com/static/media/waitlist.7dff7d8b317b79802898effd0616c780.svg"
          alt="Event"
          className="w-full h-full object-cover rounded-lg shadow-xl"
        />
      </div>
      <div className="md:w-2/3 lg:w-1/2 flex justify-center h-full items-center mt-52">
        <div className="bg-white p-12 rounded-lg shadow-xl w-full">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Join the Waitlist</h2>
          <form>
            <div className="mb-6">
              <label htmlFor="bookingName" className="block text-lg font-medium text-gray-700">
                Booking Name
              </label>
              <input
                type="text"
                id="bookingName"
                placeholder="Enter your name"
                className="mt-2 block w-full h-12 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-lg"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="whatsappNumber" className="block text-lg font-medium text-gray-700">
                WhatsApp Number
              </label>
              <input
                type="tel"
                id="whatsappNumber"
                placeholder="Enter your WhatsApp number"
                className="mt-2 block w-full h-12 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-lg"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="city" className="block text-lg font-medium text-gray-700">
                City Location
              </label>
              <select
                id="city"
                className="mt-2 block w-full h-12 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-lg">
                <option>Select your city</option>
                <option>Delhi</option>
                <option>Rajouri Garden</option>
              </select>
            </div>
            <div className="mb-6">
              <label htmlFor="date" className="block text-lg font-medium text-gray-700">
                Date
              </label>
              <input
                type="date"
                id="date"
                className="mt-2 block w-full h-12 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-lg"/>
            </div>
            <div className="mb-6">
              <label htmlFor="numberOfPeople" className="block text-lg font-medium text-gray-700">
                Number of People
              </label>
              <input
                type="number"
                id="numberOfPeople"
                placeholder="Enter the number of people"
                className="mt-2 block w-full h-12 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-lg"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-lg"
            >
              Join Waitlist
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

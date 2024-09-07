import React, { useState } from 'react';

export default function BookingDetails() {
  const [theaterPrice] = useState(1299);
  const [decorationPrice, setDecorationPrice] = useState(750);
  const advanceAmount = 750; // fixed advance amount
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0); // Discount applied from coupon
  const [generatedCoupon, setGeneratedCoupon] = useState('');
  const subtotal = theaterPrice + decorationPrice - discount;
  const balanceAmount = subtotal - advanceAmount;

  const [bookingName, setBookingName] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [email, setEmail] = useState('');
  const [decoration, setDecoration] = useState('no');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      bookingName,
      numberOfPeople,
      whatsappNumber,
      email,
      decoration,
      couponCode,
      subtotal,
    };
    alert(JSON.stringify(formData, null, 2));
  };

  const applyCoupon = () => {
    if (couponCode === 'DISCOUNT10') {
      setDiscount(100); // Apply a fixed discount of ₹100
    } else {
      setDiscount(0); // No discount for invalid coupon
    }
  };

  const generateCouponCode = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let couponCode = '';
    for (let i = 0; i < 8; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      couponCode += characters[randomIndex];
    }
    setGeneratedCoupon(couponCode);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 mt-36">
      <div className="container mx-auto px-4">
        {/* Overview Section */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-center mb-4 mt-12">Booking Overview</h1>
          <p className="text-center text-gray-700">
            Plan your special event with ease! Complete the booking form to reserve your theater experience and select any additional decorations. Use a coupon code to get discounts and review your booking summary before proceeding. 
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
          {/* Booking Form */}
          <div className="w-full lg:w-1/2 bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6 text-center">Booking Form</h2>
            <form onSubmit={handleSubmit}>
              {/* Booking Name */}
              <div className="mb-4">
                <label htmlFor="bookingName" className="block text-gray-700 font-medium mb-2">
                  Booking Name
                </label>
                <input
                  id="bookingName"
                  type="text"
                  value={bookingName}
                  onChange={(e) => setBookingName(e.target.value)}
                  required
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                />
              </div>

              {/* Number of People */}
              <div className="mb-4">
                <label htmlFor="numberOfPeople" className="block text-gray-700 font-medium mb-2">
                  Number of People
                </label>
                <input
                  id="numberOfPeople"
                  type="number"
                  value={numberOfPeople}
                  onChange={(e) => setNumberOfPeople(e.target.value)}
                  required
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter number of people"
                />
              </div>

              {/* WhatsApp Number */}
              <div className="mb-4">
                <label htmlFor="whatsappNumber" className="block text-gray-700 font-medium mb-2">
                  WhatsApp Number
                </label>
                <input
                  id="whatsappNumber"
                  type="tel"
                  value={whatsappNumber}
                  onChange={(e) => setWhatsappNumber(e.target.value)}
                  required
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your WhatsApp number"
                />
              </div>

              {/* Email ID */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email ID
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>

              {/* Decoration Option */}
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Do you want decoration?</label>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="yes"
                      checked={decoration === 'yes'}
                      onChange={(e) => setDecoration(e.target.value)}
                      className="form-radio"
                    />
                    <span className="ml-2">Yes</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="no"
                      checked={decoration === 'no'}
                      onChange={(e) => setDecoration(e.target.value)}
                      className="form-radio"
                    />
                    <span className="ml-2">No</span>
                  </label>
                </div>
              </div>

              {/* Coupon Code */}
              <div className="mb-4">
                <label htmlFor="couponCode" className="block text-gray-700 font-medium mb-2">
                  Coupon Code
                </label>
                <div className="flex space-x-4">
                  <input
                    id="couponCode"
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter coupon code"
                  />
                  <button
                    type="button"
                    onClick={applyCoupon}
                    className="bg-indigo-950 text-white py-2 px-4 rounded-md hover:bg-blue-800"
                  >
                    Apply
                  </button>
                </div>
                {discount > 0 && (
                  <p className="text-green-600 mt-2">Coupon applied! Discount: ₹{discount}</p>
                )}
              </div>

              {/* Generate Coupon Button */}
              <div className="mb-4">
                <button
                  type="button"
                  onClick={generateCouponCode}
                  className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-700"
                >
                  Generate Coupon Code
                </button>
                {generatedCoupon && (
                  <p className="text-green-600 mt-2">Generated Coupon Code: {generatedCoupon}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-32 bg-indigo-950 text-white py-3 px-4 rounded-md hover:bg-blue-800"
                >
                  Proceed
                </button>
              </div>
            </form>
          </div>

          {/* Booking Summary */}
          <div className="w-full lg:w-1/2 bg-slate-300 p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6 text-center">Booking Summary</h2>
            <div className="space-y-4">
              {/* Theater price */}
              <div className="flex justify-between">
                <span className="font-medium">Theater (2 people)</span>
                <span className="font-medium">₹ {theaterPrice}</span>
              </div>

              {/* Decoration price */}
              <div className="flex justify-between">
                <span className="font-medium">Decoration</span>
                <span className="font-medium">₹ {decorationPrice}</span>
              </div>

              {/* Discount */}
              {discount > 0 && (
                <div className="flex justify-between">
                  <span className="font-medium text-green-600">Discount</span>
                  <span className="font-medium text-green-600">-₹ {discount}</span>
                </div>
              )}

              {/* Subtotal */}
              <div className="flex justify-between border-t pt-4">
                <span className="font-semibold">Subtotal</span>
                <span className="font-semibold">₹ {subtotal}</span>
              </div>

              {/* Advance amount payable */}
              <div className="flex justify-between">
                <span className="font-medium">Advance amount payable</span>
                <span className="font-medium">₹ {advanceAmount}</span>
              </div>

              {/* Balance amount */}
              <div className="flex justify-between border-t pt-4">
                <span className="font-semibold">Balance amount (Payable at the venue)</span>
                <span className="font-semibold">₹ {balanceAmount}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

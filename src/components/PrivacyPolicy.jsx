import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-6 mt-32 mb-12"  // Added mb-12 for bottom margin
      style={{ backgroundImage: "url('https://images.pexels.com/photos/1230673/pexels-photo-1230673.jpeg?auto=compress&cs=tinysrgb&w=800')" }}
    >
      <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg max-w-6xl w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Refund Policy</h1>
        <p className="text-lg text-gray-700">
          We collect an advance amount of Rs 750 for reservation of a slot. This advance amount is fully refundable (except convenience charges of payment gateway, if any) if booking is cancelled or we are informed about cancellation through WhatsApp chat, at least 72 hours before the slot time. Refund is usually initiated within 24 hours and takes a maximum of 3-5 days to be completed.
        </p>
      </div>
    </div>
  );
}

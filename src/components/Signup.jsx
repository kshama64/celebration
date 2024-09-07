import React from 'react';

export default function Signup() {
  return (
    <div className="mt-40">
      <section className="bg-gray-50">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2">
          <div className="flex items-center justify-center px-6 py-12 sm:px-8 lg:px-12">
            <div className="w-full max-w-md">
              <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">Sign up</h2>
              <form action="#" method="POST" className="mt-8">
                <div className="space-y-5">
                  <div>
                    <label htmlFor="name" className="text-base font-medium text-gray-700">
                      Full Name
                    </label>
                    <div className="mt-2">
                      <input
                        className="w-full h-12 px-4 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="text"
                        placeholder="Full Name"
                        id="name"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="text-base font-medium text-gray-700">
                      Email Address
                    </label>
                    <div className="mt-2">
                      <input
                        className="w-full h-12 px-4 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="email"
                        placeholder="Email"
                        id="email"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="password" className="text-base font-medium text-gray-700">
                      Password
                    </label>
                    <div className="mt-2">
                      <input
                        className="w-full h-12 px-4 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="password"
                        placeholder="Password"
                        id="password"
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full h-12 px-4 py-2 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      SUBMIT
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="hidden lg:flex lg:items-center lg:justify-center">
            <img
              className="w-3/4 h-96 rounded-lg object-cover mr-14 mt-10"
              src="https://images.pexels.com/photos/2740956/pexels-photo-2740956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Sign Up Illustration"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
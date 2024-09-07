import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function MyBookingApp() {
  return (
    <div className=" sm:mt-44">
      <section className="bg-gray-50">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2">
          <div className="flex items-center justify-center px-6 py-12 sm:px-8 lg:px-12">
            <div className="w-full max-w-md">
              <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">Sign in</h2>
              <form action="#" method="POST" className="mt-8">
                <div className="space-y-5">
                  <div>
                    <label htmlFor="email" className="text-base font-medium text-gray-700">
                      Email address
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
                    <div className="flex items-center justify-between">
                      <label htmlFor="password" className="text-base font-medium text-gray-700">
                        Password
                      </label>
                      <a
                        href="#"
                        className="text-sm font-semibold text-blue-600 hover:underline"
                      >
                        Forgot password?
                      </a>
                    </div>
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
                      className="inline-flex w-full items-center justify-center rounded-md bg-blue-600 px-4 py-2.5 font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      SUBMIT
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                  </div>
                </div>
              </form>
              <p className="mt-4 text-sm text-gray-600">
                Don&apos;t have an account?{' '}
                <a
                  href="/signup"
                  className="font-semibold text-blue-600 hover:underline"
                >
                  Create a free account
                </a>
              </p>
            </div>
          </div>
          <div className="hidden lg:flex lg:items-center lg:justify-center">
            <img
              className="w-3/4 h-96 rounded-lg object-cover"
              src="https://static9.depositphotos.com/1594308/1166/i/450/depositphotos_11666010-stock-photo-festive-atmosphere.jpg"
              alt="Sign In Illustration"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

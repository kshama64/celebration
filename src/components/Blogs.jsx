'use client';

import React, { useState } from 'react';

const blogData = {
  'Places and Activities': {
    title: 'Places And Activities',
    images: [
      'https://storage.googleapis.com/tbt-pics/images/Blogs/Unique%20Experiences%20for%20couples%20%20in%20Bangalore%20Paraphrased/The%2013th%20Floor.jpg',
      'https://storage.googleapis.com/tbt-pics/images/Blogs/Birthday%20celebration%20in%20Bangalore/The%20Binge%20Town%20%E2%80%93%20Private%20Theaters%20for%20surprises%20in%20Bangalore.jpg',
      'https://storage.googleapis.com/tbt-pics/images/Blogs/Birthday%20Celebration%20Places%20in%20Hyderabad/THE%20BINGE%20TOWN.jpg',
      'https://storage.googleapis.com/tbt-pics/images/Blogs/Unique%20Experiences%20for%20Couples%20in%20Hyderabad/OHRI%E2%80%99S%20GUFAA.jpg',
      'https://storage.googleapis.com/tbt-pics/images/Blogs/Budget%20Friendly%20Places%20and%20Activities%20in%20Hyderabad/MOAZZAM%20JAHI%20MARKET.png',
      'https://storage.googleapis.com/tbt-pics/images/Blogs/Trending%20birthday%20decoration%20ideas%20for%20girlfriend/image1.jpg',
    ],
  },
  'Movies and Shows': {
    title: 'Movies and Shows',
    images: [
      'https://storage.googleapis.com/tbt-pics/images/Blogs/Movie%20Reviews%20ROMANCE/Titanic%20(1997).jpg',
      'https://storage.googleapis.com/tbt-pics/images/Blogs/Movie%20Reviews%20Fantasy/The%20Lord%20of%20The%20Rings%20The%20Return%20of%20The%20King%20(2003).jpg',
      'https://storage.googleapis.com/tbt-pics/images/Blogs/Movie%20Reviews%20Science%20Fiction/Interstellar%20(2014).jpg',
    ],
  },
  'Celebration Ideas': {
    title: 'Celebration Ideas',
    images: [
      'https://storage.googleapis.com/tbt-pics/images/Blogs/Unique%20Birthday%20Decoration%20Ideas/image15.jpg',
      'https://storage.googleapis.com/tbt-pics/images/Blogs/Simple%20and%20beautiful%20birthday%20decoration%20at%20home/image7.jpg',
      'https://storage.googleapis.com/tbt-pics/images/Blogs/Birthday%20Surprise%20Ideas%20for%20your%20wife%20in%20Hyderabad/image6.jpg',
      'https://storage.googleapis.com/tbt-pics/images/Blogs/BEST%20CELEBRATION%20PLACES%20IN%20HYDERABAD/image2.jpg',
      'https://storage.googleapis.com/tbt-pics/images/Blogs/Birthday%20decoration%20ideas%20for%2030th%20birthday/image7.jpg',
    ],
  },
};

export default function Blog() {
  const [selectedBlog, setSelectedBlog] = useState('Places and Activities');
  const { title, images } = blogData[selectedBlog];

  return (
    <div className="flex flex-col items-center mt-52 px-4 md:px-8 lg:px-16">
      {/* Blog Titles Section */}
      <div className="text-center mb-10">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Blog Posts</h1>

        {/* Flex container for buttons */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {Object.keys(blogData).map((blog) => (
            <button
              key={blog}
              onClick={() => setSelectedBlog(blog)}
              className={`px-4 py-2 sm:px-6 sm:py-3 border rounded-lg font-semibold text-base sm:text-lg ${
                selectedBlog === blog
                  ? 'bg-indigo-900 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {blog}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Content Section */}
      <div className="text-center w-full">
        <h2 className="text-2xl font-bold mb-6">{title}</h2>

        {/* Images Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="relative">
              <img
                src={image}
                alt={`Image ${index + 1} for ${selectedBlog}`}
                className="w-full h-60 sm:h-72 lg:h-80 object-cover rounded-lg shadow-md"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Spacing */}
      <div className="mb-16"></div>
    </div>
  );
}

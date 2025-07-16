import React from 'react';
import { FaIndustry } from 'react-icons/fa';

const industries = [
  'Fintech',
  'HealthTech',
  'eCommerce',
  'EdTech',
  'Media & Entertainment',
  'Logistics',
  'SaaS',
];

const IndustriesWeServe = () => {
  return (
    <div
      className="w-full py-16 px-4 md:px-10 bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: 'url("https://i.ibb.co/Wv3jmBvj/rohan-Zo-XCo-H7tja0-unsplash.jpg")',
      }}
    >
      <div className="bg-white bg-opacity-70 rounded-lg p-6 md:p-10 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Industries We Serve
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gray-50 border-t-4 rounded-xl p-6 shadow-md hover:shadow-lg transition"
              style={{
                borderImage: 'linear-gradient(to right, #c084fc, #f0abfc) 1',
              }}
            >
              <div className="p-4 rounded-full mb-4 bg-gradient-to-tr from-purple-100 via-pink-100 to-purple-100">
                <FaIndustry className="text-purple-300 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{industry}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustriesWeServe;

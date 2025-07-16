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
    <div className="w-full py-16 px-4 md:px-10 bg-white">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
        Industries We Serve
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {industries.map((industry, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-50 border-t-4 border-purple-600 rounded-xl p-6 shadow-md hover:shadow-lg transition"
          >
            <div className="bg-purple-100 p-4 rounded-full mb-4">
              <FaIndustry className="text-purple-700 text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">{industry}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustriesWeServe;

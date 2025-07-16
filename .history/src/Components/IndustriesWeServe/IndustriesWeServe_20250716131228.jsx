import React from 'react';
import { FaCheck } from 'react-icons/fa';

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
    <div className="w-full py-16 px-4 md:px-10 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Industries We Serve
      </h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {industries.map((industry, index) => (
          <div
            key={index}
            className="flex items-start gap-3 text-gray-700 text-lg"
          >
            <FaCheck className="text-purple-600 mt-1" />
            <span>{industry}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustriesWeServe;

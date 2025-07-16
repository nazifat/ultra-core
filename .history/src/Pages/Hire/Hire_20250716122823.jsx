import React from 'react';
import CustomHeader from '../../Components/CustomHeader/CustomHeader';
import HeaderBanner from '../../Components/HeaderBanner/HeaderBanner';

const Hire = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-16 text-center">
          <HeaderBanner img="" title="Career"></HeaderBanner>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Grow With Us</h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
                We’re hiring thinkers, builders, and creators who want to make a global impact.
            </p>

            <a
                href="/careers"
                className="mt-8 inline-block bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition"
            >
                View Open Roles
            </a>
        </div>
    );
};

export default Hire;
import React from 'react';

const AboutBanner = () => {
    return (
        <div
        className="relative w-full h-[600px] flex items-center justify-center text-white"
        style={{
          backgroundImage: `url('https://i.ibb.co/B2v5bRDR/walling-q-Ry-QWEAWa-NY-unsplash.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'fixed',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>
  
        {/* Text */}
        <h1 className="relative text-4xl md:text-5xl font-bold tracking-wide z-10">
          About Us
        </h1>
      </div>
  
    );
};

export default AboutBanner;
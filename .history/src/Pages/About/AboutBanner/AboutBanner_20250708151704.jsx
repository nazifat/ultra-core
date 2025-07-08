import React from 'react';

const AboutBanner = () => {
    return (
        <div className="relative w-full h-[400px] overflow-hidden">
        <img
          src="https://i.ibb.co/jksGSbkj/scott-graham-5f-Nm-Wej4t-AA-unsplash.jpg"
          alt="About Us"
          className="fixed w-full h-full h-[400px] object-cover top-0 left-0 z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold z-10">About Us</h1>
        </div>
      </div>
  
  
    );
};

export default AboutBanner;
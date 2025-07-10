import React from 'react';

const HeaderBanner = ({img, title}) => {
    return (
        <div
      className="relative w-full h-[400px] bg-fixed bg-center bg-cover mt-0 pt-0"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
        <h1 className="text-white text-5xl md:text-5xl font-bold z-10">{title}</h1>
      </div>
    </div>
    );
};

export default HeaderBanner;
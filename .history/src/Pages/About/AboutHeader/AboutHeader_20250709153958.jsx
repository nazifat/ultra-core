import React from 'react';

const AboutHeader = () => {
    return (
        <div className='md:text-left text-center  md:px-10 md:mx-10 px-2 mx-2  md:w-[40%] mx-auto w-full font-inter'>
            <p className='uppercase text-[#8052AD] font-thin md:mb-2'>Who We Are</p>
            <h2
                className="text-xl md:text-4xl font-bold text-gray-800"
                style={{ lineHeight: '1.3' }}
            >
                Highly Tailored IT Design, Management & Support Services.
            </h2>
        </div>
    );
};

export default AboutHeader;
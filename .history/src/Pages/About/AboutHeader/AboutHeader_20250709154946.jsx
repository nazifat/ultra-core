import React from 'react';

const AboutHeader = ({header, subheader}) => {
    return (
        <div className=''>
            <p className='uppercase text-[#8052AD] font-thin md:mb-2'>{header}</p>
            <h2
                className="text-xl md:text-4xl font-bold text-gray-800 "
                style={{ lineHeight: '1.3' }}
            >
                {subheader}
            </h2>
        </div>
    );
};

export default AboutHeader;
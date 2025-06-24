import React from 'react';

const CustomHeader = ({ heading, subHeading }) => {
    return (
        <div>
            <div className="h-[1px] w-full bg-gradient-to-r from-[#F76680] to-[#57007B] my-4"></div>

            <h1 className=' text-[#1A202C] text-3xl font-light mb-5 leading-relaxed'>{heading}
                <br />   <span className='font-bold'> {subHeading}</span> </h1>



        </div>
    );
};

export default CustomHeader;
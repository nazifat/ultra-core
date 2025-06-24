import React from 'react';

const CustomHeader = ({heading, subHeading}) => {
    return (
        <div>
                <h1 className=' text-[#1A202C] text-3xl font-light mb-5 leading-relaxed'>{heading}
                <br />   <span className='font-bold'> {subHeading}</span> </h1>


            
        </div>
    );
};

export default CustomHeader;
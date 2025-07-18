import React from 'react';
import aboutImg from '../../../../assets/images/Abou-us-Video.png'
const BoldIdeas = () => {
    return (
        <div className='flex justify-center items-center text-left text-[#1A202C] gap-10'> 
            <div className='flex-1'>
            <h1 className='text-3xl font-light mb-3 '>Building bold ideas <span className='font-bold'>Together</span> </h1>
            <p className='mb-5'> Life at our startup is all about innovation, collaboration, and growth. We build cool stuff, move fast, support each other, and have fun doing it. Every voice matters, and every day brings a new chance to make an impact.

            </p>
            <button className='btn btn-outline'>See more information --></button>

            </div>
            <div>
                <img src={aboutImg} alt="" />
            </div>
           

        </div>
    );
};

export default BoldIdeas;
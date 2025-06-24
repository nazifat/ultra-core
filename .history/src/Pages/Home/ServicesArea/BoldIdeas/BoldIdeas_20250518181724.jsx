import React from 'react';
import aboutImg from '../../../../assets/images/Abou-us-Video.png'
const BoldIdeas = () => {
    return (
        <div className='flex justify-center items-center text-left text-gray-800'> 
            <div>
            <h1>Building bold ideas Together</h1>
            <p>Life at our startup is all about innovation, collaboration, and growth. We build cool stuff, move fast, support each other, and have fun doing it. Every voice matters, and every day brings a new chance to make an impact.

            </p>
            <button>See more information --></button>

            </div>
            <div>
                <img src={aboutImg} alt="" />
            </div>
           

        </div>
    );
};

export default BoldIdeas;
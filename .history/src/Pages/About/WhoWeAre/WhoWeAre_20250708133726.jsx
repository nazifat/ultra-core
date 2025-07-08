import React from 'react';
import CustomHeader from '../../../Components/CustomHeader/CustomHeader';

const WhoWeAre = () => {
    return (
        <div className='flex-col md:flex-row justify-center  flex my-10 items-center overflow-hidden w-full '>
            <div className='md:flex-row flex-col flex gap-10 p-10  md:w-1/2 w-full'>
                <img
                    className='shadow-lg rounded  w-[300px] h-[500px] object-cover'
                    src="https://i.ibb.co/XZfnhc5r/annie-spratt-MCh-SQHx-GZr-Q-unsplash.jpg" alt="" />
                <img
                    className='shadow-lg rounded w-[300px] h-[500px] object-cover md:mt-10 mt-2'
                    src="https://i.ibb.co/7dvD2PWM/pexels-fauxels-3183153.jpg" alt="" />
            </div>
            <div className='md:text-left text-center  md:px-10 md:mx-10 px-2 mx-2  md:w-1/2 w-full font-inter'>
                <p className='uppercase text-[#8052AD] font-bold'>Who We Are</p>
                <h2 className='text-3xl font-bold leading-[1.5] text-gray-700 '>Highly Tailored IT Design, Management & Support Services.</h2>
                <p className='text-sm text-gray-600 font-thin leading-[2] my-3'>Accelerate innovation with world-class tech teams We’ll match you to an entire remote team of incredible freelance talent for all your software development needs.
                </p>
                <div className='flex md:flex-row flex-col gap-5 text-gray-600'>
                <div>
                    <h3 className='font-bold leading-[2]'>Our Mission</h3>
                    <p className='thin text-xs'>Accelerate innovation with world-class tech teams. We help businesses elevate their value.
                    </p>

                </div>
                <div>
                <h3>Our Mission</h3>
                    <p>Accelerate innovation with world-class tech teams. We help businesses elevate their value.
                    </p>


                </div>
            </div>
            </div>
           
        </div>
    );
};

export default WhoWeAre;
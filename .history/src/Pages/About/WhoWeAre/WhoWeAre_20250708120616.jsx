import React from 'react';
import CustomHeader from '../../../Components/CustomHeader/CustomHeader';

const WhoWeAre = () => {
    return (
        <div className='flex-col md:flex-row  flex my-10 items-center '>
            <div className='md:flex-row flex-col flex gap-10 p-10 '> 
                <img 
                className='shadow-lg rounded  w-[300px] h-[500px] object-cover'
                src="https://i.ibb.co/XZfnhc5r/annie-spratt-MCh-SQHx-GZr-Q-unsplash.jpg" alt="" />
                <img 
                className='shadow-lg rounded w-[300px] h-[500px] object-cover md:mt-10 mt-2'
                src="https://i.ibb.co/7dvD2PWM/pexels-fauxels-3183153.jpg" alt="" />
            </div>
            <div>
                <p className='uppercase text-[#8052AD] font-bold'>Who We Are</p>
                <h2>Highly Tailored IT Design, Management & Support Services.</h2>
            </div>
        </div>
    );
};

export default WhoWeAre;
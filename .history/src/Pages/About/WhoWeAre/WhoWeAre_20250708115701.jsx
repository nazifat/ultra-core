import React from 'react';
import CustomHeader from '../../../Components/CustomHeader/CustomHeader';

const WhoWeAre = () => {
    return (
        <div className='flex'>
            <div className='md:flex-col flex-row '> 
                <img 
                className='shadow-lg rounded '
                src="https://i.ibb.co/XZfnhc5r/annie-spratt-MCh-SQHx-GZr-Q-unsplash.jpg" alt="" />
                <img 
                className='shadow-lg rounded w-[100px]'
                src="https://i.ibb.co/7dvD2PWM/pexels-fauxels-3183153.jpg" alt="" />
            </div>
            <div>
                <p>Who We Are</p>
                <h2>Highly Tailored IT Design, Management & Support Services.</h2>
            </div>
        </div>
    );
};

export default WhoWeAre;
import React from 'react';
import CustomHeader from '../../../Components/CustomHeader/CustomHeader';
import AboutHeader from '../AboutHeader/AboutHeader';

const WhoWeAre = () => {
    return (
        <div className='flex-col md:flex-row justify-center  flex my-10 items-center overflow-hidden w-full '>
            <div className='md:flex-row flex-col flex gap-10 p-10  md:w-[50%] w-full'>
                <img
                    className='shadow-lg rounded  w-[300px] h-[500px] object-cover'
                    src="https://i.ibb.co/XZfnhc5r/annie-spratt-MCh-SQHx-GZr-Q-unsplash.jpg" alt="" />
                <img
                    className='shadow-lg rounded w-[300px] h-[500px] object-cover md:mt-10 mt-2'
                    src="https://i.ibb.co/7dvD2PWM/pexels-fauxels-3183153.jpg" alt="" />
            </div>
            <div className='md:text-left text-center  md:px-10 md:mx-10 px-2 mx-2  md:w-[40%] mx-auto w-full font-inter'>
                <AboutHeader header="Who We Are" subheader="Highly Tailored IT Design, Management & Support Services."></AboutHeader>

                <p className='text-base text-gray-600 font-thin leading-[2] my-3 md:text-justify'>Ultracore
                    Creatives is a
                    technology consulting and software development company committed to delivering
                    impactful, scalable,
                    and sustainable
                    digital solutions. We partner with organizations worldwide to help
                    them navigate digital transformation and achieve long-term success.
                </p>
                <div className='flex md:flex-row flex-col gap-10 text-gray-600 my-5 t'>
                    <div className='md:mr-10'>
                        <h3 className='font-bold text-lg leading-[2] md:mb-2'>Our Mission</h3>
                        <p className='thin text-sm md:text-justify  leading-[2]'>To solve complex global challenges through innovative, human-centered technology that makes a real difference in people’s lives and businesses’ futures.
                        </p>

                    </div>
                    <div>
                        <h3 className='font-bold text-lg leading-[2] md:mb-2'>Our Vision</h3>
                        <p className='thin text-sm md:text-justify leading-[2]'>To become a global technology powerhouse recognized for creating world-class solutions, nurturing talent, and shaping the digital future of industries.
                        </p>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default WhoWeAre;
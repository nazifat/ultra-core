import React from 'react';
import bannerImage from '../../../assets/images/Hero-Wrapper__image.png'
import CustomButton from '../../../Components/CustomButton/CustomButton';

const Banner = () => {
    return (
        <div>
            <div className="hero text-gray-700 min-h-screen text-left">
                <div className="hero-content flex lg:flex-row-reverse justify-evenly">
                    <img
                        src={bannerImage}
                        className=" rounded-lg shadow-2xl "
                    />
                    <div className='space-y-3'>
                        <h1 className="text-5xl font-extralight">Great 
                            <span className='bg-gradient-to-r from-[#DE4396] to-[#0D1C9F80]  bg-clip-text text-transparent font-semibold '> Product</span>
                            <span className='font-thin'> is</span>
                            <span className='text-base-800 font-bold'>  built by great </span>
                            <span className='bg-gradient-to-r from-[#DE4396] to-[#0D1C9F80]  bg-clip-text text-transparent font-semibold '>teams</span>
                        </h1>
                        <p className="py-6">
                            We help build and manage a team of world-class developers to bring your vision to life


                        </p>
                        <CustomButton btnText="Let's work Together"></CustomButton>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;
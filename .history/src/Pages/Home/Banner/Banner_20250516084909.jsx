import React from 'react';
import bannerImage from '../../../assets/images/Hero-Wrapper__image.png'
import CustomButton from '../../../Components/CustomButton/CustomButton';

const Banner = () => {
    return (
        <div>
            <div className="hero text-gray-700 min-h-screen text-left">
                <div className="hero-content flex lg:flex-row-reverse">
                    <img
                        src={bannerImage}
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div className='md:flex-2'>
                        <h1 className="text-5xl font-bold">Great Product is built by great teams</h1>
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
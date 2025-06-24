import React from 'react';
import bannerImage from '../../../assets/images/Hero-Wrapper__image.png'
import CustomButton from '../../../Components/CustomButton/CustomButton';

const Banner = () => {
    return (
        <div>
            <div className="lg:p-20 text-gray-700 text-left">
                <div className="flex flex-col items-center lg:flex-row-reverse justify-between lg:px-0 px-10 pb-10 lg:gap-10">
                    <img
                        src={bannerImage}
                        className="rounded-lg"
                    />
                    <div className='lg:space-y-1 leading-relaxed lg:px-4'>
                        <h1 className="lg:text-5xl text-xl font-extralight lg:leading-normal lg:text-left text-center">Great
                            <span className='bg-gradient-to-r from-[#DE4396] to-[#0D1C9F80]  bg-clip-text text-transparent font-semibold '> Product</span>
                            <span className='font-extralight'> is</span>
                            <span className='text-base-800 font-bold'>  built by great </span>
                            <span className='bg-gradient-to-r from-[#DE4396] to-[#0D1C9F80]  bg-clip-text text-transparent font-semibold '>teams</span>
                        </h1>
                        <p className="lg:py-6 py-2 lg:text-[18px] text-sm lg:text-left text-center leading-relaxed">
                            We help build and manage a team of world-class developers to bring your vision to life


                        </p>
                        <CustomButton
                            className="justify-center lg:justify-start"
                            btnText="Let's work Together"
                        />

                        {/* <CustomButton justifyPosition="start" btnText="Let's work Together"></CustomButton> */}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;
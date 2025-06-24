import React from 'react';
import CustomButton from '../../../Components/CustomButton/CustomButton';

const FooterBanner = () => {
    return (
        <div className='lg:flex  items-center  lg:justify-evenly gap-20 bg-gradient-to-r from-[#F1F1F5] to-[#E4ECF7] p-20 border rounded-lg' >
            <div className='mb-5'>
                <h1 className='text-[#29272E] lg:text-left lg:text-3xl sm:text-2xl font-bold'>Hire the best developers and designers around!</h1>
            </div>
            <div>
                <button className="bg-gradient-to-r from-[#FFC656] to-[#F16063] text-white font-semibold py-2 px-6 rounded-2xl shadow-md hover:opacity-90 transition duration-300">
                    Let's work Together
                </button>

            </div>

        </div>
    );
};

export default FooterBanner;
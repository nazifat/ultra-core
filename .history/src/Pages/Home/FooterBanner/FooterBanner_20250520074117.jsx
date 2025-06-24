import React from 'react';
import CustomButton from '../../../Components/CustomButton/CustomButton';

const FooterBanner = () => {
    return (
        <div className='flex justify-evenly gap-10 bg-gradient-to-r from-[#F1F1F5] to-[#E4ECF7] p-20 border rounded' >
            <div>
                <h1 className='text-[#29272E] text-3xl font-bold'>Hire the best developers and designers around!</h1>
            </div>
            <div>
                <button className="bg-gradient-to-r from-[#6675F7] to-[#57007B] text-white font-semibold py-2 px-6 rounded-2xl shadow-md hover:opacity-90 transition duration-300">
                    {btnText}
                </button>

            </div>

        </div>
    );
};

export default FooterBanner;
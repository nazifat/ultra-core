import React from 'react';
import CustomButton from '../../../Components/CustomButton/CustomButton';
import light1 from '../../../assets/images/light1.png'
import light2 from '../../../assets/images/light2.png'

const FooterBanner = () => {
    return (
        <div className='space-y-4 lg:flex  items-center  lg:justify-evenly gap-10 lg:gap-20 bg-gradient-to-r from-[#F1F1F5] to-[#E4ECF7] p-20 border rounded-lg' >
            <div className=''>
                <h1 className='text-xl text-[#29272E] lg:text-left lg:text-3xl sm:text-2xl font-bold'>Hire the best developers and designers around!</h1>
            </div>
            <div >
                <img src={light1} alt="" className='justify-center' />
                <button className=" btn-lg btn lg:btn-xl md:btn-lg border-0  bg-gradient-to-r py-2 px-6 rounded-2xl from-[#FFC656] to-[#F16063] text-white font-semibold  shadow-md hover:opacity-90 transition duration-300">
                    Let's work Together
                </button>
                <img src={light2} alt="" />


            </div>

        </div>
    );
};

export default FooterBanner;
import React from 'react';
import CustomButton from '../../../Components/CustomButton/CustomButton';
import light1 from '../../../assets/images/light1.png'
import light2 from '../../../assets/images/light2.png'

const FooterBanner = () => {
    return (
        <div className='space-y-4 lg:flex my-40 items-center  lg:justify-evenly gap-10 lg:gap-20 bg-gradient-to-r from-[#F1F1F5] to-[#E4ECF7] p-10 border rounded-2xl' >
            <div className=''>
                <h1 className='text-xl text-[#29272E] lg:text-left lg:text-3xl sm:text-2xl font-bold'>Hire the best developers and designers around!</h1>
            </div>
            <div  className='text-center space-y-4'>
                <img src={light1} alt="" className='mx-auto' />
                <button className=" btn-lg btn lg:btn-xl md:btn-lg border-0  bg-gradient-to-r py-2 px-10 text-lg rounded from-[#F16063] to-[#FFC656] text-white font-semibold  shadow-md hover:opacity-90 transition duration-300">
                    Let's work Together
                </button>
                <img src={light2} alt="" className='mx-auto' />


            </div>

        </div>
    );
};

export default FooterBanner;
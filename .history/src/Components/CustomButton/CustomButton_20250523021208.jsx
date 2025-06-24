import React from 'react';
import { NavLink } from 'react-router-dom';

const CustomButton = ({ btnText }) => {
    return (
        <div className='w-full flex justify-center sm:justify-end'>
            <NavLink className="btn lg:btn-lg btn-sm bg-gradient-to-r from-[#57007B] to-[#6675F7] text-white font-semibold py-2 px-6 rounded shadow-md hover:opacity-90 transition duration-300">
                {btnText}
            </NavLink>
        </div>
    );
};

export default CustomButton;
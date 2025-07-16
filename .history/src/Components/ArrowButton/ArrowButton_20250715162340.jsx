import React from 'react';
import { NavLink } from 'react-router-dom';

const ArrowButton = ({btnText}) => {
    return (
        
            <NavLink className='text-[#57007B]  mt-10'>{btnText} --{'>'} </NavLink>

    );
};

export default ArrowButton;
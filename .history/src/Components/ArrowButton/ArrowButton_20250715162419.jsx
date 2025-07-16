import React from 'react';
import { NavLink } from 'react-router-dom';

const ArrowButton = ({btnText, url}) => {
    return (
        <div>
            <NavLink className='text-[#57007B]  mt-10' to={url}>{btnText} --{'>'} </NavLink>

        </div>
    );
};

export default ArrowButton;
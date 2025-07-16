import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const ArrowButton = ({btnText, url}) => {
    return (
        <div>
            <Link className='text-[#57007B]  mt-10' to={url}>{btnText} --{'>'} </Link>

        </div>
    );
};

export default ArrowButton;
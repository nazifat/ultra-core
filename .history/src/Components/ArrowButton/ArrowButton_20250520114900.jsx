import React from 'react';

const ArrowButton = ({btnText}) => {
    return (
        <div>
            <NavLink className='text-[#57007B]  mt-10'>{btnText} --{'>'} </NavLink>

        </div>
    );
};

export default ArrowButton;
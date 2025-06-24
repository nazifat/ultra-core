import React from 'react';

const Divider = () => {
    return (

        <div className="flex items-center w-full">
            {/* Left line */}
            <div className="flex-grow h-[1px] bg-gray-300"></div>

            {/* Circle */}
            <div className="w-[72px] h-[72px] rounded-full bg-[linear-gradient(90deg,_#F76680,_#57007B)] mx-4"></div>

            {/* Right line */}
            <div className="flex-grow h-[1px] bg-gray-300"></div>
        </div>


    );
};

export default Divider;
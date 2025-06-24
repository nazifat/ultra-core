import React from 'react';

const Divider = ({ positionPercent = 30 }) => {
    return (


        <div className="relative w-full h-8 flex items-center">
            {/* The full horizontal line */}
            <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gray-300 -translate-y-1/2"></div>

            {/* Circle positioned 30% from the left */}
            <div
                className="w-[72px] h-[72px] rounded-full bg-[linear-gradient(90deg,_#F76680,_#57007B)] absolute top-1/2 -translate-y-1/2"
                style={{ left: `${positionPercent}%` }}
            ></div>
        </div>



    );
};

export default Divider;
import React from 'react';

const LineDivider = () => {
    return (
        <div>
            <div className="divider border-[#E7DAED] text-base-100" ></div><div className="divider before:bg-[#E7DAED] after:bg-[#E7DAED] text-base-100"></div>
            <div className="h-[1px] w-full bg-[#E7DAED] my-4"></div>

        </div>
    );
};

export default LineDivider;
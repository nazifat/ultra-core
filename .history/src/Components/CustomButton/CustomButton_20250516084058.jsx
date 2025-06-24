import React from 'react';

const CustomButton = () => {
    return (
        <div btnText={btnText}>
             <button className="bg-gradient-to-r from-[#6675F7] to-[#57007B] text-white font-semibold py-2 px-6 rounded-2xl shadow-md hover:opacity-90 transition duration-300">
                    {btnText}
                </button>
        </div>
    );
};

export default CustomButton;
import React from 'react';

const CustomButton = ({ btnText }) => {
    return (
        <div >
            <button className="btn btn-lg bg-gradient-to-r from-[#57007B] to-[#6675F7] text-white font-semibold py-2 px-6 rounded shadow-md hover:opacity-90 transition duration-300">
                {btnText}
            </button>
        </div>
    );
};

export default CustomButton;
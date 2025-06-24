import React from 'react';

const CustomButton = ({ btnText }) => {
    return (
        <div >
            <button className="btn btn-xl bg-gradient-to-r from-[#6675F7] to-[#57007B] text-white font-semibold py-2 px-6 rounded shadow-md hover:opacity-90 transition duration-300">
                {btnText}
            </button>
        </div>
    );
};

export default CustomButton;
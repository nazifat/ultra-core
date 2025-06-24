import React from 'react';
import CustomButton from '../../../Components/CustomButton/CustomButton';

const FooterBanner = () => {
    return (
        <div className='flex justify-evenly gap-10 bg-gradient-to-r from-[#F1F1F5] to-[#E4ECF7]"' >
            <div>
                <h1 className='text-[#29272E] text-3xl font-bold'>Hire the best developers and designers around!</h1>
            </div>
            <div>
            <CustomButton btnText="Let's work Together"></CustomButton>
            </div>

        </div>
    );
};

export default FooterBanner;
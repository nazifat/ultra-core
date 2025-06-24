import React from 'react';
import CustomButton from '../../../Components/CustomButton/CustomButton';

const FooterBanner = () => {
    return (
        <div className='flex jutify-between gap-10'>
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
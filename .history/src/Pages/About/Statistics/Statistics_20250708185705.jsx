import React from 'react';
import Progress from '../Progress/Progress';

const Statistics = () => {
    return (
        <div className='flex md:flex-row flex-col md:w-[80%] mx-auto justify-center items-center gap-20 bg-gradient-to-r from-[#57007B] to-[#6675F7] text-white
         p-20 m-10 rounded-lg shadow-lg'>
            <div>
                66%
                <p className='font-thin text-sm'>Completed Projects</p>
            </div>
            <div>
                66%
                <p className='font-thin text-sm'>Satisfied clients</p>
            </div>
            <div>
                66%
                <p className='font-thin text-sm'>Website Analysis</p>
            </div>
            <div>
                <Progress target={85} duration={1500} />
                <p className='font-thin text-sm'>Client Support Done</p>
            </div>
        </div>
    );
};

export default Statistics;
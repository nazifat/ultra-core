import React from 'react';
import Progress from '../Progress/Progress';

const Statistics = () => {
    return (
        <div
            className='flex md:flex-row flex-col md:w-[85%] mx-auto justify-between items-center gap-20 text-white
                   p-20 m-10 rounded-lg shadow-lg leading-[2]'
            style={{
                backgroundImage: `
                linear-gradient(to right, rgba(87, 0, 123, 0.85), rgba(102, 117, 247, 0.85)),

            url('https://i.ibb.co/5XmkJLwF/thin-circuit-trace-lines-blue-600nw-2466942381.webp')
          `,
                backgroundSize: 'fixed',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                opacity:"60%"
            }}
        >
            <div>
                <Progress target={351} duration={1500} suffix='+' />

                <p className='font-thin text-sm'>Completed Projects</p>
            </div>
            <div>
                <Progress target={120} duration={1500} suffix='+' />

                <p className='font-thin text-sm'>Satisfied clients</p>
            </div>
            <div>
                <Progress target={99} duration={1500} suffix='%' />

                <p className='font-thin text-sm'>Website Analysis</p>
            </div>
            <div>
                <Progress target={321} duration={1500} suffix='+' />
                <p className='font-thin text-sm'>Client Support Done</p>
            </div>
        </div>
    );
};

export default Statistics;
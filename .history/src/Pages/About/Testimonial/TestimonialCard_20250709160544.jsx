import React from 'react';

const TestimonialCard = ({img, text, name}) => {
    return (
        <div className="flex shadow-lg border rounded p-10 justify-between items-center" >
            <figure>
                <img
                    src={img}
                    alt="propic" 
                    className='h-[150px] w-auto'
                    />
            </figure>
            <div className="card-body">
                {/* <h2 className="card-title">New movie is released!</h2> */}
                <p className='text-gray-500 text-left'>{text}</p>
                <div className="card-actions justify-start">
                    <span className="text-purple-500 font-bold">{name}</span>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
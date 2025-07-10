import React from 'react';

const TestimonialCard = ({img, text, name}) => {
    return (
        <div className="flex shadow-lg border rounded">
            <figure>
                <img
                    src={img}
                    alt="propic" />
            </figure>
            <div className="card-body">
                {/* <h2 className="card-title">New movie is released!</h2> */}
                <p className='text-gray-500 text-left'>{text}</p>
                <div className="card-actions justify-start">
                    <span className="btn btn-primary">{name}</span>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
import React from 'react';

const TestimonialCard = ({img, text, name}) => {
    return (
        <div className="card card-side bg-base-100 shadow-sm">
            <figure>
                <img
                    src={img}
                    alt="propic" />
            </figure>
            <div className="card-body">
                {/* <h2 className="card-title">New movie is released!</h2> */}
                <p>{text}</p>
                <div className="card-actions justify-start">
                    <button className="btn btn-primary">{name}</button>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
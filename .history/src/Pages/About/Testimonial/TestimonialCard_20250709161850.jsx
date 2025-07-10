import React from 'react';
import { IoChatbubblesOutline } from "react-icons/io5";

const TestimonialCard = ({ img, text, name }) => {
    return (
        <div className="overflow-hidden flex flex-col md:flex-row shadow-lg border rounded p-6 gap-6 justify-between items-center">
            <figure className="w-full md:w-[300px]">
                <img
                    src={img}
                    alt="propic"
                    className="w-full h-auto rounded-lg object-cover"
                />
            </figure>

            <div className="card-body text-center md:text-left">
                <IoChatbubblesOutline  className='text-purple-400 text-3xl text-center md:text-left '/>
                <p className="text-gray-500">{text}</p>
                <div className="card-actions justify-center md:justify-start mt-2">
                    <span className="text-purple-500 font-bold">{name}</span>
                </div>
            </div>
        </div>

    );
};

export default TestimonialCard;
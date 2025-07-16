import React from 'react';
import { Link } from 'react-router-dom';
import ArrowButton from '../../Components/ArrowButton/ArrowButton'

const BlogCard = ({data}) => {
    const {blogTitle, imgUrl}= data;
    return (
        <div className='grid md:grid-cols-3 grid-cols-1 gap-1'>
            <div className="md:w-full max-w-sm mx-auto shadow-sm border rounded-lg overflow-hidden p-0">

                <img
                    src={imgUrl}
                    className="w-full block"
                    alt="Scalable App on AWS"
                />
                <div className="px-3 py-4">
                    <Link>
                        <h2 className="text-left mb-4 text-[#2D3748]">
                            {blogTitle}
                        </h2>
                    </Link>

                    <div className="flex justify-end m-0 p-0">
                        <ArrowButton btnText='Read More' className="m-0 p-0" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BlogCard;
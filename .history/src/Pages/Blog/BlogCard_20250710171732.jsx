import React from 'react';

const BlogCard = () => {
    return (
        <div>
            <div className="md:w-full max-w-sm mx-auto shadow-sm border rounded-lg overflow-hidden p-0">

                <img
                    src="https://i.ibb.co.com/gFT0C9m1/featured2.png"
                    className="w-full block"
                    alt="Scalable App on AWS"
                />
                <div className="px-3 py-4">
                    <Link>
                        <h2 className="text-left mb-4 text-[#2D3748]">
                            How to Build a Scalable Application up to 1 Million Users on AWS
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
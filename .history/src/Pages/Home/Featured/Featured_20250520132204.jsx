import React from 'react';
import CustomHeader from '../../../Components/CustomHeader/CustomHeader';
import featured1Img from '../../../assets/images/featured1.png'
import featured2Img from '../../../assets/images/featured2.png'
import featured3Img from '../../../assets/images/featured3.png'
import featured4Img from '../../../assets/images/featured4.png'
import ArrowButton from '../../../Components/ArrowButton/ArrowButton';
import { Link } from 'react-router-dom';
const Featured = () => {
    return (
        <div className='my-20'>
            <div>
                <CustomHeader heading='Featured' subHeading='Resources'></CustomHeader>
            </div>
            <div className='flex flex-col lg:flex-row gap-10'>
                {/* card1--------------- */}
                <div className="w-full shadow-sm border rounded-lg overflow-hidden p-0">

                    <figure>
                        <img
                            src={featured1Img}
                            alt="Shoes" />
                    </figure>
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

                {/* card2--------------- */}
                <div className="w-full shadow-sm border rounded-lg overflow-hidden p-0">

                    <figure>
                        <img
                            src={featured2Img}
                            alt="Shoes" />
                    </figure>
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

                {/* card3--------------- */}


                    
                <div className="w-full shadow-sm border rounded-lg overflow-hidden p-0">
                    <img
                        src={featured3Img}
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



                {/* card4--------------- */}

                <div className=" w-full shadow-sm">
                <img
                        src={featured4Img}
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


        </div>
    );
};

export default Featured;
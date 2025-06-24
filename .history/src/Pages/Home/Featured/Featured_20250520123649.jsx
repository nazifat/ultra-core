import React from 'react';
import CustomHeader from '../../../Components/CustomHeader/CustomHeader';
import featured1Img from '../../../assets/images/featured1.png'
import featured2Img from '../../../assets/images/featured2.png'
import featured3Img from '../../../assets/images/featured3.png'
import featured4Img from '../../../assets/images/featured4.png'
import ArrowButton from '../../../Components/ArrowButton/ArrowButton';
const Featured = () => {
    return (
        <div className='my-20'>
            <div>
                <CustomHeader heading='Featured' subHeading='Resources'></CustomHeader>
            </div>
            <div className='flex flex-col lg:flex-row gap-10'>
                {/* card1--------------- */}
            <div className="card  w-96 shadow-sm">
                <figure>
                    <img
                        src={featured1Img}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-[#2D3748]">How to Build a Scalable Application up to 1 Million Users on AWS</h2>
                    <div className="card-actions justify-end">
                        <ArrowButton btnText='Read More'></ArrowButton>

                    </div>
                </div>
            </div>

                {/* card2--------------- */}

            <div className="card  w-96 shadow-sm">
                <figure>
                    <img
                        src={featured1Img}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-[#2D3748]">How to Build a Scalable Application up to 1 Million Users on AWS</h2>
                    <div className="card-actions justify-end">
                        <ArrowButton btnText='Read More'></ArrowButton>

                    </div>
                </div>
            </div>

                {/* card3--------------- */}

            <div className="card  w-96 shadow-sm">
                <figure>
                    <img
                        src={featured1Img}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-[#2D3748]">How to Build a Scalable Application up to 1 Million Users on AWS</h2>
                    <div className="card-actions justify-end">
                        <ArrowButton btnText='Read More'></ArrowButton>

                    </div>
                </div>
            </div>

                {/* card4--------------- */}

            <div className="card  w-96 shadow-sm">
                <figure>
                    <img
                        src={featured1Img}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-[#2D3748]">How to Build a Scalable Application up to 1 Million Users on AWS</h2>
                    <div className="card-actions justify-end">
                        <ArrowButton btnText='Read More'></ArrowButton>

                    </div>
                </div>
            </div>
                
            </div>
           

        </div>
    );
};

export default Featured;
import React from 'react';
import CustomHeader from '../../../Components/CustomHeader/CustomHeader';
import featured1Img from '../../../assets/images/featured1.png'
import featured2Img from '../../../assets/images/featured2.png'
import featured3Img from '../../../assets/images/featured3.png'
import featured4Img from '../../../assets/images/featured4.png'
const Featured = () => {
    return (
        <div className='my-20'>
            <div>
                <CustomHeader heading='Featured' subHeading='Resources'></CustomHeader>
            </div>
            <div className="card  w-96 shadow-sm">
                <figure>
                    <img
                        src={featured1Img}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Card Title</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Featured;
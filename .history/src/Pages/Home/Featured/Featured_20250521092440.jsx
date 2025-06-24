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
        <div className='my-10'>
            <div>
                <CustomHeader heading='Featured' subHeading='Resources'></CustomHeader>
            </div>
            <div className='flex flex-col md:flex-row grid-cols-2 lg:flex-row gap-10'>
                {/* card1--------------- */}
                <div className="md:w-full max-w-sm mx-auto shadow-sm border rounded-lg overflow-hidden p-0">

                <img
                        src={featured1Img}
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

                {/* card2--------------- */}
                <div className="md:w-full max-w-sm mx-auto  shadow-sm border rounded-lg overflow-hidden p-0">


                <img
                        src={featured2Img}
                        className="w-full block "
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

                {/* card3--------------- */}


                    
                <div className="md:w-full max-w-sm mx-auto shadow-sm border rounded-lg overflow-hidden p-0">
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

             

                <div className="md:w-full max-w-sm mx-auto shadow-sm border rounded-lg overflow-hidden p-0">

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




// <div className="flex flex-col items-center">
// {/* Tab Headers */}
// <div className="flex gap-6">
//     {/* Tab 1 */}
//     <div className="relative">
//         <input 
//             type="radio" 
//             name="tabs-unique" 
//             id="tab1" 
//             className="peer hidden" 
//         />
//         <label
//             htmlFor="tab1"
//             className="relative pb-3 cursor-pointer text-gray-500 peer-checked:text-transparent peer-checked:bg-clip-text peer-checked:bg-gradient-to-r from-[#F76680] to-[#57007B]"
//         >
//             Tab 1
//             <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-[4px] rounded-full hidden peer-checked:block bg-gradient-to-r from-[#F76680] to-[#57007B]"></span>
//         </label>
//     </div>

//     {/* Tab 2 */}
//     <div className="relative">
//         <input 
//             type="radio" 
//             name="tabs-unique" 
//             id="tab2" 
//             className="peer hidden" 
//             defaultChecked 
//         />
//         <label
//             htmlFor="tab2"
//             className="relative pb-3 cursor-pointer text-gray-500 peer-checked:text-transparent peer-checked:bg-clip-text peer-checked:bg-gradient-to-r from-[#F76680] to-[#57007B]"
//         >
//             Tab 2
//             <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-[4px] rounded-full hidden peer-checked:block bg-gradient-to-r from-[#F76680] to-[#57007B]"></span>
//         </label>
//     </div>

//     {/* Tab 3 */}
//     <div className="relative">
//         <input 
//             type="radio" 
//             name="tabs-unique" 
//             id="tab3" 
//             className="peer hidden" 
//         />
//         <label
//             htmlFor="tab3"
//             className="relative pb-3 cursor-pointer text-gray-500 peer-checked:text-transparent peer-checked:bg-clip-text peer-checked:bg-gradient-to-r from-[#F76680] to-[#57007B]"
//         >
//             Tab 3
//             <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-[4px] rounded-full hidden peer-checked:block bg-gradient-to-r from-[#F76680] to-[#57007B]"></span>
//         </label>
//     </div>
// </div>

// {/* Tab Content */}
// <div className="w-full mt-6 mb-20">
//     {/* Content for Tab 1 */}
//     <div className="hidden peer-checked/tab1:block">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
//             <img src={pythonImg} alt="Python" className="w-20" />
//             <img src={Go} alt="Go" className="w-20" />
//             <img src={Java} alt="Java" className="w-20" />
//             <img src={node} alt="Node.js" className="w-20" />
//             <img src={mysql} alt="MySQL" className="w-20" />
//             <img src={railsImg} alt="Rails" className="w-20" />
//             <img src={mongo} alt="MongoDB" className="w-20" />
//             <img src={dotNet} alt=".NET" className="w-20" />
//         </div>
//     </div>

//     {/* Content for Tab 2 */}
//     <div className="hidden peer-checked/tab2:block">
//         Tab content 2
//     </div>

//     {/* Content for Tab 3 */}
//     <div className="hidden peer-checked/tab3:block">
//         Tab content 3
//     </div>
// </div>
// </div>

// const TechStack = () => {
//     return (
//         <div className='py-10'>
//             <CustomHeader heading="Our" subHeading="Tech Stack"></CustomHeader>

//             {/* name of each tab group should be unique */}
//             <div className="flex flex-col items-center">
//                 {/* Tab Headers */}
//                 <div className="flex gap-6">
//                     {/* Tab 1 */}
//                     <input type="radio" name="tabs-unique" id="tab1" className="peer/tab1 hidden" />
//                     <label
//                         htmlFor="tab1"
//                         className="relative pb-3 cursor-pointer text-gray-500 peer-checked/tab1:text-transparent peer-checked/tab1:bg-clip-text peer-checked/tab1:bg-gradient-to-r from-[#F76680] to-[#57007B]"
//                    
//                         Tab 1
//                         <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-[4px] rounded-full hidden peer-checked/tab1:block bg-gradient-to-r from-[#F76680] to-[#57007B]"></span>
//                     </label>

//                     {/* Tab 2 */}
//                     <input type="radio" name="tabs-unique" id="tab2" className="peer/tab2 hidden" defaultChecked />
//                     <label
//                         htmlFor="tab2"
//                         className="relative pb-3 cursor-pointer text-gray-500 peer-checked/tab2:text-transparent peer-checked/tab2:bg-clip-text peer-checked/tab2:bg-gradient-to-r from-[#F76680] to-[#57007B]"
//                     >
//                         Tab 2
//                         <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-[4px] rounded-full hidden peer-checked/tab2:block bg-gradient-to-r from-[#F76680] to-[#57007B]"></span>
//                     </label>

//                     {/* Tab 3 */}
//                     <input type="radio" name="tabs-unique" id="tab3" className="peer/tab3 hidden" />
//                     <label
//                         htmlFor="tab3"
//                         className="relative pb-3 cursor-pointer text-gray-500 peer-checked/tab3:text-transparent peer-checked/tab3:bg-clip-text peer-checked/tab3:bg-gradient-to-r from-[#F76680] to-[#57007B]"
//                     >
//                         Tab 3
//                         <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-[4px] rounded-full hidden peer-checked/tab3:block bg-gradient-to-r from-[#F76680] to-[#57007B]"></span>
//                     </label>
//                 </div>

//                 {/* Tab Content */}
//                 <div className="w-full mt-6 mb-20">
//                     <div className="hidden peer-checked/tab1:block">
//                         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
//                             <img src={pythonImg} alt="Python" className="w-20" />
//                             <img src={Go} alt="Go" className="w-20" />
//                             <img src={Java} alt="Java" className="w-20" />
//                             <img src={node} alt="Node.js" className="w-20" />
//                             <img src={mysql} alt="MySQL" className="w-20" />
//                             <img src={railsImg} alt="Rails" className="w-20" />
//                             <img src={mongo} alt="MongoDB" className="w-20" />
//                             <img src={dotNet} alt=".NET" className="w-20" />
//                         </div>
//                     </div>

//                     <div className="hidden peer-checked/tab2:block">Tab content 2</div>
//                     <div className="hidden peer-checked/tab3:block">Tab content 3</div>
//                 </div>
//             </div>





//         </div>
//     );
// };

// export default TechStack;

import CustomHeader from '../../../Components/CustomHeader/CustomHeader';
import pythonImg from '../../../assets/images/tech/python.png';
import railsImg from '../../../assets/images/tech/rails.png';
import Java from '../../../assets/images/tech/Java.png';
import mysql from '../../../assets/images/tech/mysql.png';
import node from '../../../assets/images/tech/node.png';
import dotNet from '../../../assets/images/tech/dotNet.png';
import Go from '../../../assets/images/tech/Go.png';
import mongo from '../../../assets/images/tech/mongo.png';

const TechStack = () => {
    return (
        <div className='py-10'>
            <CustomHeader heading="Our" subHeading="Tech Stack"></CustomHeader>

            {/* name of each tab group should be unique */}
            <div className="tabs tabs-border">
                <input type="radio" name="my_tabs_2" className="tab text-purple-500" aria-label="Tab 1" />
                <div className="tab-content p-10">


                    <div className="w-full mt-6 mb-20">
                        <div className="peer-checked/tab1:block">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
                                <img src={pythonImg} alt="Python" className="w-20" />
                                <img src={Go} alt="Go" className="w-20" />
                                <img src={Java} alt="Java" className="w-20" />
                                <img src={node} alt="Node.js" className="w-20" />                             
                                <img src={mysql} alt="MySQL" className="w-20" />
                                <img src={railsImg} alt="Rails" className="w-20" />
                                <img src={mongo} alt="MongoDB" className="w-20" />
                                <img src={dotNet} alt=".NET" className="w-20" />
                            </div>
                        </div>

                    </div>
                    </div>

                    <input type="radio" name="my_tabs_2" className="tab" aria-label="Tab 2" defaultChecked />
                    <div className="tab-content border-base-300 bg-base-100 p-10">Tab content 2</div>

                    <input type="radio" name="my_tabs_2" className="tab" aria-label="Tab 3" />
                    <div className="tab-content border-base-300 bg-base-100 p-10">Tab content 3</div>
                </div>
            </div>
            );
};

            export default TechStack;
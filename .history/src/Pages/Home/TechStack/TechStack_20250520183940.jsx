import React from 'react';
import CustomHeader from '../../../Components/CustomHeader/CustomHeader';

const TechStack = () => {
    return (
        <div>
            <CustomHeader heading="Our" subHeading="Tech Stack"></CustomHeader>

            {/* name of each tab group should be unique */}
            <div className="flex flex-col items-center">
                {/* Tab Headers */}
                <div className="flex gap-6">
                    <input type="radio" name="tabs-unique" id="tab1" className="peer/tab1 hidden" />
                    <label
                        htmlFor="tab1"
                        className="cursor-pointer pb-2 text-gray-500 peer-checked/tab1:border-b-2 peer-checked/tab1:border-[#57007B] peer-checked/tab1:text-[#57007B]"
                    >
                        Tab 1
                    </label>

                    <input type="radio" name="tabs-unique" id="tab2" className="peer/tab2 hidden" defaultChecked />
                    <label
                        htmlFor="tab2"
                        className="cursor-pointer pb-2 text-gray-500 peer-checked/tab2:border-b-2 peer-checked/tab2:border-[#57007B] peer-checked/tab2:text-[#57007B]"
                    >
                        Tab 2
                    </label>

                    <input type="radio" name="tabs-unique" id="tab3" className="peer/tab3 hidden" />
                    <label
                        htmlFor="tab3"
                        className="cursor-pointer pb-2 text-gray-500 peer-checked/tab3:border-b-2 peer-checked/tab3:border-[#57007B] peer-checked/tab3:text-[#57007B]"
                    >
                        Tab 3
                    </label>
                </div>

                {/* Tab Contents */}
                <div className="w-full mt-6">
                    <div className="hidden peer-checked/tab1:block">Tab content 1</div>
                    <div className="hidden peer-checked/tab2:block">Tab content 2</div>
                    <div className="hidden peer-checked/tab3:block">Tab content 3</div>
                </div>
            </div>




        </div>
    );
};

export default TechStack;
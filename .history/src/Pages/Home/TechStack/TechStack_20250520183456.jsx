import React from 'react';
import CustomHeader from '../../../Components/CustomHeader/CustomHeader';

const TechStack = () => {
    return (
        <div>
            <CustomHeader heading="Our" subHeading="Tech Stack"></CustomHeader>

            {/* name of each tab group should be unique */}
            <div className="flex flex-col items-center">
                <div className="flex gap-6 border-b border-gray-300">
                    <input type="radio" name="tabs-unique" id="tab1" className="peer hidden" />
                    <label
                        htmlFor="tab1"
                        className="cursor-pointer pb-2 text-gray-600 border-b-2 border-transparent peer-checked:border-[#57007B] peer-checked:text-[#57007B]"
                    >
                        Tab 1
                    </label>

                    <input type="radio" name="tabs-unique" id="tab2" className="peer hidden" defaultChecked />
                    <label
                        htmlFor="tab2"
                        className="cursor-pointer pb-2 text-gray-600 border-b-2 border-transparent peer-checked:border-[#57007B] peer-checked:text-[#57007B]"
                    >
                        Tab 2
                    </label>

                    <input type="radio" name="tabs-unique" id="tab3" className="peer hidden" />
                    <label
                        htmlFor="tab3"
                        className="cursor-pointer pb-2 text-gray-600 border-b-2 border-transparent peer-checked:border-[#57007B] peer-checked:text-[#57007B]"
                    >
                        Tab 3
                    </label>
                </div>

                <div className="w-full mt-6">
                    <div className="hidden peer-checked:block" id="tab1-content">Tab content 1</div>
                    <div className="hidden peer-checked:block" id="tab2-content">Tab content 2</div>
                    <div className="hidden peer-checked:block" id="tab3-content">Tab content 3</div>
                </div>
            </div>



        </div>
    );
};

export default TechStack;
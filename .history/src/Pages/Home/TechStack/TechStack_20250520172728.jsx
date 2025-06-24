import React from 'react';
import CustomHeader from '../../../Components/CustomHeader/CustomHeader';

const TechStack = () => {
    return (
        <div>
            <CustomHeader heading="Our" subHeading="Tech Stack"></CustomHeader>

            {/* name of each tab group should be unique */}
            <div className="flex flex-col items-center">
                <div className="flex gap-4 mb-6">
                    <input type="radio" name="tabs" id="tab1" className="peer hidden" defaultChecked />
                    <label
                        htmlFor="tab1"
                        className="cursor-pointer border-b-2 pb-2 text-gray-600 peer-checked:text-[#57007B] peer-checked:border-[#57007B] border-gray-300"
                    >
                        All
                    </label>

                    <input type="radio" name="tabs" id="tab2" className="peer hidden" />
                    <label
                        htmlFor="tab2"
                        className="cursor-pointer border-b-2 pb-2 text-gray-600 peer-checked:text-[#57007B] peer-checked:border-[#57007B] border-gray-300"
                    >
                        Tab 2
                    </label>

                    <input type="radio" name="tabs" id="tab3" className="peer hidden" />
                    <label
                        htmlFor="tab3"
                        className="cursor-pointer border-b-2 pb-2 text-gray-600 peer-checked:text-[#57007B] peer-checked:border-[#57007B] border-gray-300"
                    >
                        Tab 3
                    </label>
                </div>

                <div className="w-full">
                    <div className="hidden peer-checked:block" id="tab1-content">Tab content 1</div>
                    <div className="hidden peer-checked:block" id="tab2-content">Tab content 2


                    </div>
                    );
};

                    export default TechStack;
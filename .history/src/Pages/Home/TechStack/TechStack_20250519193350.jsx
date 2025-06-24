import React from 'react';
import CustomHeader from '../../../Components/CustomHeader/CustomHeader';

const TechStack = () => {
    return (
        <div>
            <CustomHeader heading="Our" subHeading="Tech Stack"></CustomHeader>

            {/* name of each tab group should be unique */}
            <div className="tabs flex justify-center gap-4">
                <input type="radio" name="my_tabs_2" className="tab border text-gray-600 rounded-full  border-gray-400" aria-label="All" />
                <div className="tab-content   p-10">Tab content 1</div>

                <input type="radio" name="my_tabs_2" className="tab border text-gray-600 rounded-full border-purple-400" aria-label="Tab 2" defaultChecked />
                <div className="tab-content   p-10 text-red-400">Tab content 2</div>

                <input type="radio" name="my_tabs_2" className="tab border text-gray-600 rounded-full border-purple-400" aria-label="Tab 3" />
                <div className="tab-content  p-10">Tab content 3</div>
            </div>

        </div>
    );
};

export default TechStack;
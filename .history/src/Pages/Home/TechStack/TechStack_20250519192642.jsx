import React from 'react';
import CustomHeader from '../../../Components/CustomHeader/CustomHeader';

const TechStack = () => {
    return (
        <div>
            <CustomHeader heading="Our" subHeading="Tech Stack"></CustomHeader>

            {/* name of each tab group should be unique */}
            <div className="tabs tabs-border">
                <input type="radio" name="my_tabs_2" className="tab" aria-label="Tab 1" />
                <div className="tab-content border-base-300  p-10">Tab content 1</div>

                <input type="radio" name="my_tabs_2" className="tab" aria-label="Tab 2" defaultChecked />
                <div className="tab-content border-base-300  p-10">Tab content 2</div>

                <input type="radio" name="my_tabs_2" className="tab" aria-label="Tab 3" />
                <div className="tab-content border-base-300  p-10">Tab content 3</div>
            </div>

        </div>
    );
};

export default TechStack;
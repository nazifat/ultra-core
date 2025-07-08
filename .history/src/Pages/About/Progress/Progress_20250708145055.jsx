import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import VisibilitySensor from "react-visibility-sensor";
import { useState } from "react";

const Progress = () => {
    const [visible, setVisible] = useState(false);

    return (
        <div style={{ width: 120 }}>
            <VisibilitySensor
                onChange={(isVisible) => {
                    if (isVisible) setVisible(true);
                }}
                partialVisibility
                offset={{ top: 10 }}
            >
                <div>
                    <CircularProgressbar
                        value={visible ? 90 : 0}
                        text={`${visible ? 90 : 0}%`}
                        styles={buildStyles({
                            pathTransitionDuration: 1.5,
                            pathColor: "#4caf50",
                            textColor: "#000",
                        })}
                    />
                </div>
            </VisibilitySensor>
        </div>
    );
};

export default Progress;

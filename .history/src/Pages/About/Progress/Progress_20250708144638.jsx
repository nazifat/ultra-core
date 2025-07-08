import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { easeQuadInOut } from 'd3-ease';
import VisibilitySensor from "react-visibility-sensor";

const Progress = () => {
    const percentage = 66;

    return (
        <div>
            <VisibilitySensor>
                {({ isVisible }) => {
                    const percentage = isVisible ? 90 : 0;
                    return (
                        <CircularProgressbar
                            value={percentage}
                            text={`${percentage}%`}
                        />
                    );
                }}
            </VisibilitySensor>
        </div>
    );
};

export default Progress;
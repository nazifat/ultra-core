import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Progress = () => {
    return (
        <div>
            <div style={{ width: 200, height: 200 }}>
                <CircularProgressbar value={66} />
            </div>
            ˝
        </div>
    );
};

export default Progress;
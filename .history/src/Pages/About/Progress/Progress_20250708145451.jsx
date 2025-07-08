import { useSpring, animated } from '@react-spring/web';



const Progress = () => {
    const AnimatedPercentage = ({ target = 66, duration = 1000 }) => {
        const props = useSpring({
          from: { number: 0 },
          to: { number: target },
          config: { duration },
        });

    return (
        <div style={{ width: 120 }}>
            
        </div>
    );
};

export default Progress;

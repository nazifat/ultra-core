import { useSpring, animated } from '@react-spring/web';
const AnimatedPercentage = ({ target = 66, duration = 1000 }) => {
    const props = useSpring({
        from: { number: 0 },
        to: { number: target },
        config: { duration },
    });
}


const Progress = () => {
    
    return (
        <div className="text-4xl font-bold text-blue-600">
            <animated.span>
                {props.number.to(n => `${Math.floor(n)}%`)}
            </animated.span>
        </div>

    );
};

export default Progress;

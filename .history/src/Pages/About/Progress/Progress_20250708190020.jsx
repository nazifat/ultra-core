import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const Progress = ({ target = 66, duration = 1000, suffix = '%' }) => {
  const props = useSpring({
    from: { number: 0 },
    to: { number: target },
    config: { duration },
  });

  return (
    <div className="text-4xl font-bold text-white-600">
      <animated.span>
        {props.number.to(n => `${Math.floor(n)}${suffix}`)}
      </animated.span>
    </div>
  );
};

export default Progress;

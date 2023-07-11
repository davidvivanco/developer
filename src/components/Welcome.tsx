import React, { useCallback, useEffect, useRef, useState } from 'react';

import styles from '../styles.module.css';
import { useTransition, animated } from '@react-spring/web';

export default function Welcome({ setAnimationRunning }) {
  const [items, set] = useState<string[]>([]);
  const ref = useRef<ReturnType<typeof setTimeout>[]>([]);

  const transitions = useTransition(items, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: 'perspective(600px) rotateX(0deg)',
      color: '#FFEACE',
    },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80 },
      { transform: 'perspective(600px) rotateX(180deg)', color: '#005247' },
      { transform: 'perspective(600px) rotateX(0deg)' },
    ],
    leave: [
      { color: '#9B6F4A' },
      { innerHeight: 0 },
      { opacity: 0, height: 0 },
    ],
    update: { color: '#bbeec8' },
  });

  useEffect(() => {
    reset();
    return () => ref.current.forEach(clearTimeout);
  }, []);

  const reset = useCallback(() => {
    ref.current.forEach(clearTimeout);
    ref.current = [];
    set([]);
    ref.current.push(
      setTimeout(() => set(['David', 'Vivanco', 'Developer']), 2000)
    );
    ref.current.push(setTimeout(() => set(['David', 'Developer']), 5000));
    ref.current.push(
      setTimeout(() => set(['Vivanco', 'Software', 'Developer']), 8000)
    );

    setTimeout(() => {
      setAnimationRunning(false);
    }, 11000);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        {transitions(({ innerHeight, ...rest }, item) => (
          <animated.div
            className={styles.transitionsItem}
            style={rest}
          >
            <animated.div style={{ overflow: 'hidden', height: innerHeight }}>
              {item}
            </animated.div>
          </animated.div>
        ))}
      </div>
    </div>
  );
}

import { useEffect, useRef, useState } from 'react';
import styles from '@/styles/skills/ProgressBar.module.css';

interface ProgressBarProps {
    skill: string;
    progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ skill, progress }) => {
    const progressRef = useRef<HTMLDivElement>(null);
    const [count, setCount] = useState(0);
    useEffect(() => {
        const progressElement = progressRef.current;
        if (progressElement) {
            progressElement.style.width = `${progress}%`;
        }
    }, [progress]);
    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevCount) => {
                if (prevCount === progress) {
                    clearInterval(interval); // Stop the interval when the limit is reached
                    return prevCount;
                } else {
                    return prevCount + 1;
                }
            });
        }, 100);
        return () => {
            clearInterval(interval);
        };
    }, []);
    return (
        <div className={styles.container}>
            <span className={styles.skillName}>{skill}:</span>
            <div className={styles.progressBar}>
                <div ref={progressRef} className={`${styles.progressIndicator} ${styles.progressAnimation}`}></div>
            </div>
            <div className="counter" style={{ width: `${(count / progress) * 100}%` }}>
                {count}
            </div>
        </div>
    );
};

export default ProgressBar;

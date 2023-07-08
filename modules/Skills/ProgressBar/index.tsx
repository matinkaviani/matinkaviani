import { useEffect, useRef, useState } from 'react';
import styles from '@/styles/skills/ProgressBar.module.css';

interface ProgressBarProps {
    skill: string;
    progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ skill, progress }) => {
    const progressRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const progressElement = progressRef.current;
        if (progressElement) {
            progressElement.style.width = `${progress}%`;
        }
    }, [progress]);

    return (
        <div className={styles.container}>
            <span className={styles.skillName}>{skill}:</span>
            <div className={styles.progressBar}>
                <div ref={progressRef} className={styles.progressIndicator}></div>
            </div>
        </div>
    );
};

export default ProgressBar;

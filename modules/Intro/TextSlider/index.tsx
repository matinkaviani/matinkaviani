import { useState, useEffect } from 'react';
import styles from '@/styles/intro/TextSlider.module.css';

interface TextSliderProps {
    texts: string[];
    interval: number;
}

const TextSlider = ({ texts, interval }: TextSliderProps) => {
    const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, interval);

        return () => {
            clearInterval(intervalId);
        };
    }, [interval, texts.length]);

    return (
        <div className={styles.container}>
            <div className={styles.slider}>
                {texts.map((text, index) => (
                    <div
                        key={index}
                        className={`${styles.slide} ${index === currentTextIndex ? styles.active : ''
                            }`}
                    >
                        {text}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TextSlider;

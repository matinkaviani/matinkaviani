import styles from '@/styles/intro/TextSlider.module.css';
import { useEffect, useState } from 'react';

interface TextSliderProps {
    texts: string[];
    interval: number;
    staticText?: string;
}

const TextSlider = ({ texts, interval, staticText }: TextSliderProps) => {
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
            <span className={styles.staticText}>{staticText}</span>
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

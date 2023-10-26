import config from '@/config/confg';
import Matin from '@/public/images/m-kaviani.png';
import styles from '@/styles/intro/Intro.module.css';
import gsap, { Power1 } from 'gsap';
import Image from 'next/image';
import { ForwardedRef, forwardRef, useEffect, useRef } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import Button from '../Shared/Button';
import TextSlider from './TextSlider';

const Intro = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => {
    const { t } = useTranslation();
    const logoRef = useRef<HTMLDivElement | null>(null);
    const dotsRef = useRef<HTMLDivElement | null>(null);
    const coordinatesRef = useRef<HTMLDivElement | null>(null);
    const texts = ['Commitment', 'Reliability', 'Diligence', 'Discipline'];
    const interval = 3500;
    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const xPos = (event.clientX / window.innerWidth) - 0.5;
            const yPos = (event.clientY / window.innerHeight) - 0.5;

            if (logoRef.current && dotsRef.current) {
                gsap.to(logoRef.current, {
                    x: 25 * xPos,
                    y: 25 * yPos,
                    duration: .6,
                    ease: Power1.easeOut,
                    // perspective: 900,
                    transformOrigin: 'center',
                });
                gsap.to(dotsRef.current, {
                    x: 25 * xPos,
                    y: 25 * yPos,
                    duration: .6,
                    ease: Power1.easeOut,
                    // perspective: 900,
                    transformOrigin: 'center',
                });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);
    return (
        <div ref={ref}>
            <div id={styles.intro} ref={coordinatesRef}>
                <div className={styles.introTextContainer}>
                    <div className={styles.introText}>
                        <div>
                            <Trans
                                i18nKey="introTitle"
                                values={{ lastName: "Kaviani", skill: "Developer" }}
                                components={[<span className={styles.blue} />, <span className={styles.blue} />]}
                            />
                        </div>
                        <div className={styles.description}>
                            {config.aboutMe}
                        </div>
                        <div className={styles.contactMe}>
                            <Button variant='transparent' onClick={() => window.scrollTo({ top: 2500, behavior: 'smooth' })}>
                                Contact me!!
                            </Button>
                        </div>
                    </div>
                </div>
                <div className={styles.introImageContainer}>
                    <div className={styles.introImage}>
                        <div ref={logoRef}>
                            <svg className={styles.behindImageLogo} width="207" height="202" viewBox="0 0 207 202" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M103.5 151.427L56.1599 7.86012L8.81978 151.427L103.5 151.427Z" stroke="#2C64EF" strokeWidth="1.5" />
                                <path d="M55.0493 50.1899L102.389 193.757L149.73 50.1899L55.0493 50.1899Z" stroke="#2C64EF" strokeWidth="1.5" />
                                <path d="M198.313 151.427L150.973 7.86012L103.633 151.427L198.313 151.427Z" stroke="#2C64EF" strokeWidth="1.5" />
                            </svg>
                        </div>
                        <Image src={Matin} width={304} height={454} alt='Matin Kaviani' unoptimized />
                        <div ref={dotsRef}>
                            <svg className={styles.behindImageDot} width="75" height="74" viewBox="0 0 75 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="2.34449" cy="1.89906" r="1.7566" fill="#2C64EF" />
                                <circle cx="2.34449" cy="19.4651" r="1.7566" fill="#2C64EF" />
                                <circle cx="2.34449" cy="37.0311" r="1.7566" fill="#2C64EF" />
                                <circle cx="2.34449" cy="54.5972" r="1.7566" fill="#2C64EF" />
                                <circle cx="2.34449" cy="72.1632" r="1.7566" fill="#2C64EF" />
                                <circle cx="19.9104" cy="1.89906" r="1.7566" fill="#2C64EF" />
                                <circle cx="19.9104" cy="19.4651" r="1.7566" fill="#2C64EF" />
                                <circle cx="19.9104" cy="37.0311" r="1.7566" fill="#2C64EF" />
                                <circle cx="19.9104" cy="54.5972" r="1.7566" fill="#2C64EF" />
                                <circle cx="19.9104" cy="72.1632" r="1.7566" fill="#2C64EF" />
                                <circle cx="37.4763" cy="1.89906" r="1.7566" fill="#2C64EF" />
                                <circle cx="37.4763" cy="19.4651" r="1.7566" fill="#2C64EF" />
                                <circle cx="37.4763" cy="37.0311" r="1.7566" fill="#2C64EF" />
                                <circle cx="37.4763" cy="54.5972" r="1.7566" fill="#2C64EF" />
                                <circle cx="37.4763" cy="72.1632" r="1.7566" fill="#2C64EF" />
                                <circle cx="55.0427" cy="1.89906" r="1.7566" fill="#2C64EF" />
                                <circle cx="55.0427" cy="19.4651" r="1.7566" fill="#2C64EF" />
                                <circle cx="55.0427" cy="37.0311" r="1.7566" fill="#2C64EF" />
                                <circle cx="55.0427" cy="54.5972" r="1.7566" fill="#2C64EF" />
                                <circle cx="55.0427" cy="72.1632" r="1.7566" fill="#2C64EF" />
                                <circle cx="72.6087" cy="1.89906" r="1.7566" fill="#2C64EF" />
                                <circle cx="72.6087" cy="19.4651" r="1.7566" fill="#2C64EF" />
                                <circle cx="72.6087" cy="37.0311" r="1.7566" fill="#2C64EF" />
                                <circle cx="72.6087" cy="54.5972" r="1.7566" fill="#2C64EF" />
                                <circle cx="72.6087" cy="72.1632" r="1.7566" fill="#2C64EF" />
                            </svg>
                        </div>
                        <div className={styles.imageSlider}>
                            <span className={styles.rect}></span>
                            <TextSlider staticText={t("skillsSlide") ?? ""} texts={texts} interval={interval} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default Intro;
import config from '@/config/confg';
import Matin from '@/public/images/m-kaviani.png';
import styles from '@/styles/intro/Intro.module.css';
import Image from 'next/image';
import { Trans, useTranslation } from 'react-i18next';
import Button from '../Shared/Button';
import TextSlider from './TextSlider';

const Intro = () => {
    const { t } = useTranslation();
    const texts = ['Text 1', 'Text 2', 'Text 3', 'Text 4'];
    const interval = 3500;
    return (
        <div id={styles.intro}>
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
                    <svg className={styles.behindImageLogo} width="207" height="202" viewBox="0 0 207 202" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M103.5 151.427L56.1599 7.86012L8.81978 151.427L103.5 151.427Z" stroke="#2C64EF" strokeWidth="1.5" />
                        <path d="M55.0493 50.1899L102.389 193.757L149.73 50.1899L55.0493 50.1899Z" stroke="#2C64EF" strokeWidth="1.5" />
                        <path d="M198.313 151.427L150.973 7.86012L103.633 151.427L198.313 151.427Z" stroke="#2C64EF" strokeWidth="1.5" />
                    </svg>
                    <Image src={Matin} width={304} height={454} alt='Matin Kaviani' unoptimized />
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
                    <div className={styles.imageSlider}>
                        <span className={styles.rect}></span>
                        <TextSlider staticText={t("skillsSlide") ?? ""} texts={texts} interval={interval} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro;
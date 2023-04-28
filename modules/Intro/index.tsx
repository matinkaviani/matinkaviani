import styles from '@/styles/intro/Intro.module.css'
import { Trans, useTranslation } from 'react-i18next';
import Button from '../Shared/Button';

const Intro = () => {
    const { t } = useTranslation();
    return (
        <div id={styles.intro}>
            <div className={styles.introTextContainer}>
                <div className={styles.introText}>
                    <Trans
                        i18nKey="introTitle"
                        values={{ lastName: "Kaviani", skill: "Developer" }}
                        components={[<span className={styles.blue} />, <span className={styles.blue} />]}
                    />
                    <div className={styles.description}>
                        {t("introDescription")}
                    </div>
                    <div className={styles.contactMe}>
                        <Button variant='transparent'>
                            Contact Me
                        </Button>
                    </div>
                </div>
            </div>
            <div className={styles.introImageContainer}>
                
            </div>
        </div>
    )
}

export default Intro;
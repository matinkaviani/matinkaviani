import styles from '@/styles/intro/Intro.module.css'
import { Trans, useTranslation } from 'react-i18next';

const Intro = () => {
    const { t } = useTranslation();
    return (
        <div id={styles.intro}>
            <div className={styles.introText}>
                <Trans
                    i18nKey="introTitle"
                    values={{ lastName: "Kaviani", skill: "Developer" }}
                    components={[<span className={styles.blue} />, <span className={styles.blue} />]}
                />
            </div>
        </div>
    )
}

export default Intro;
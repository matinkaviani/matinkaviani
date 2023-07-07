import styles from '@/styles/intro/Intro.module.css'
import { useTranslation } from 'react-i18next';
import Title from '../Shared/Title';
const Skills = () => {
    const { t } = useTranslation();
    return (
        <div id={styles.skills}>
            <Title title='skills' />
        </div>
    )
}

export default Skills;
import styles from '@/styles/skills/Skills.module.css';
import { ForwardedRef, forwardRef } from 'react';
import Title from '../Shared/Title';
import ProgressBar from './ProgressBar';
const Skills = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => {
    return (
        <div id={styles.skills} ref={ref}>
            <Title title='skills' separator={
                <svg xmlns="http://www.w3.org/2000/svg" width="855" height="158" viewBox="0 0 855 158" fill="none">
                    <path d="M854.588 0.264648V157.108H0.961914" stroke="#ABB2BF" strokeWidth="0.5" />
                </svg>
            } />
            <div className={styles.skillsGrid}>
                <ProgressBar skill='HTML' progress={100} />
                <ProgressBar skill='CSS' progress={100} />
                <ProgressBar skill='SASS' progress={90} />
                <ProgressBar skill='JavaScript' progress={80} />
                <ProgressBar skill='TypeScript' progress={80} />
                <ProgressBar skill='Next.js' progress={80} />
            </div>
        </div>
    )
})

export default Skills;
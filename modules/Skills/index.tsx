import styles from '@/styles/skills/Skills.module.css'
import Title from '../Shared/Title';
import ProgressBar from './ProgressBar';
import { useEffect, useState } from 'react';
const Skills = () => {
    const [skills, setSkills] = useState([
        { skill: 'HTML', progress: 80 },
        { skill: 'CSS', progress: 70 },
        { skill: 'JavaScript', progress: 60 },
    ]);

    useEffect(() => {
        // Simulate progress updates
        const interval = setInterval(() => {
            setSkills((prevSkills) =>
                prevSkills.map((skill) => ({
                    ...skill,
                    progress: skill.progress < 100 ? skill.progress + 10 : skill.progress,
                }))
            );
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    return (
        <div id={styles.skills}>
            <Title title='skills' />
            <div className={styles.skillsGrid}>
                <ProgressBar skill='HTML' progress={100} />
                <ProgressBar skill='CSS' progress={100} />
                <ProgressBar skill='SASS' progress={90} />
                <ProgressBar skill='JavaScript' progress={80} />
                <ProgressBar skill='TypeScript' progress={70} />
                <ProgressBar skill='Next.js' progress={70} />
            </div>
        </div>
    )
}

export default Skills;
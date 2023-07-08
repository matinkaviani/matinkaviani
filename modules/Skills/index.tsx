import styles from '@/styles/intro/Intro.module.css'
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
            <ProgressBar skill='HTML' progress={10} />
        </div>
    )
}

export default Skills;
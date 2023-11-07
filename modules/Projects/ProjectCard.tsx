import styles from '@/styles/projects/Projects.module.css';
import { Tooltip } from 'react-tooltip';
import Button from '../Shared/Button';
import { IProjectsData, TechStack } from './models';

const ProjectCard = ({ item }: { item: IProjectsData }) => {
    const techStackData: TechStack[] = JSON.parse(item.techStack.toString());
    return <div key={item.id} className={styles.card}>
        <div className={styles.imageContainer}>
            <img className={styles.projectImage} alt={item.title} src={item.image} />
        </div>
        <div className={styles.info}>
            <span className={styles.title}>
                {`{${item.title}}`}
            </span>
            <span className={styles.divider}></span>
            <span className={styles.techStack}>
                {techStackData.map(x => (
                    <span key={x.key} data-tooltip-id={x.key}>
                        <Tooltip id={x.key} place='top' content={x.key} />
                        <img data-tooltip-content={x.key} key={x.key} src={x.icon as string} alt='tech-logo' width={25} height={25} />
                    </span>
                ))}
            </span>
        </div>
        <Button onClick={() => window.open(item.link)} className={styles.projectButton} variant='transparent'>
            View Project
        </Button>
    </div>
};
export default ProjectCard;
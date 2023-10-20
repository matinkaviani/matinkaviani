import styles from '@/styles/projects/Projects.module.css';
import { ReactNode } from 'react';
import Button from '../Shared/Button';
type TechStack = {
    key: string;
    icon: ReactNode;
}
interface ItemProp {
    id: string;
    image: string;
    title: string;
    link: string;
    techStack: TechStack[];
}
const ProjectCard = ({ item }: { item: ItemProp }) => {
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
                {item.techStack.map(x => (
                    <span key={x.key}>
                        <img src={x.icon as string} alt='tech-logo' width={25} height={25} />
                    </span>
                ))}
            </span>
        </div>
        <Button onClick={() => window.open(item.link)} className={styles.projectButton} variant='transparent'>
            View Project (Soon)
        </Button>
    </div>
};
export default ProjectCard;
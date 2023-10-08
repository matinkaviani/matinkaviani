import SampleImage from "@/public/images/sample.png";
import styles from '@/styles/projects/Projects.module.css';
import Image from 'next/image';
import Button from '../Shared/Button';
interface ItemProp {
    id: string;
    image: string;
    title: string;
    techStack: string;
}
const ProjectCard = ({ item }: { item: ItemProp }) => {
    return <div key={item.id} className={styles.card}>
        <Image className={styles.projectImage} width={290} height={258} alt={item.title} src={SampleImage} />
        <div className={styles.info}>
            <span className={styles.title}>
                {`{${item.title}}`}
            </span>
            <span className={styles.divider}></span>
            <span className={styles.techStack}>
                {item.techStack}
            </span>
        </div>
        <Button disabled className={styles.projectButton} variant='transparent'>
            View Project (Soon)
        </Button>
    </div>
};
export default ProjectCard;
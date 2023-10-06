import config from '@/config/confg';
import styles from '@/styles/projects/Projects.module.css';
import titleStyles from "@/styles/shared/Title.module.css";
import Title from '../Shared/Title';
import ProjectCard from './ProjectCard';

const Projects = () => {
    return <div id={styles.projects}>
        <Title className={titleStyles.projectsSeparator} title='projects' separator={
            <svg xmlns="http://www.w3.org/2000/svg" width="736" height="98" viewBox="0 0 736 98" fill="none">
                <path d="M735.588 98V1H0" stroke="#ABB2BF" strokeWidth="0.5" />
            </svg>
        }
        // extra="View all"
        />
        <div className={styles.projectsContainer}>
            {config.projects.map(item => (
                <ProjectCard key={item.id} item={item} />
            ))}
            <div className={styles.dots}>
                <svg xmlns="http://www.w3.org/2000/svg" width="76" height="76" viewBox="0 0 76 76" fill="none">
                    <g opacity="0.3">
                        <circle cx="2.86719" cy="2.85449" r="2.5" fill="#2C64EF" />
                        <circle cx="2.86719" cy="20.4209" r="2.5" fill="#2C64EF" />
                        <circle cx="2.86719" cy="37.9863" r="2.5" fill="#2C64EF" />
                        <circle cx="2.86719" cy="55.5527" r="2.5" fill="#2C64EF" />
                        <circle cx="2.86719" cy="73.1182" r="2.5" fill="#2C64EF" />
                        <circle cx="20.4336" cy="2.85449" r="2.5" fill="#2C64EF" />
                        <circle cx="20.4336" cy="20.4209" r="2.5" fill="#2C64EF" />
                        <circle cx="20.4336" cy="37.9863" r="2.5" fill="#2C64EF" />
                        <circle cx="20.4336" cy="55.5527" r="2.5" fill="#2C64EF" />
                        <circle cx="20.4336" cy="73.1182" r="2.5" fill="#2C64EF" />
                        <circle cx="38" cy="2.85449" r="2.5" fill="#2C64EF" />
                        <circle cx="38" cy="20.4209" r="2.5" fill="#2C64EF" />
                        <circle cx="38" cy="37.9863" r="2.5" fill="#2C64EF" />
                        <circle cx="38" cy="55.5527" r="2.5" fill="#2C64EF" />
                        <circle cx="38" cy="73.1182" r="2.5" fill="#2C64EF" />
                        <circle cx="55.5645" cy="2.85449" r="2.5" fill="#2C64EF" />
                        <circle cx="55.5645" cy="20.4209" r="2.5" fill="#2C64EF" />
                        <circle cx="55.5645" cy="37.9863" r="2.5" fill="#2C64EF" />
                        <circle cx="55.5645" cy="55.5527" r="2.5" fill="#2C64EF" />
                        <circle cx="55.5645" cy="73.1182" r="2.5" fill="#2C64EF" />
                        <circle cx="73.1309" cy="2.85449" r="2.5" fill="#2C64EF" />
                        <circle cx="73.1309" cy="20.4209" r="2.5" fill="#2C64EF" />
                        <circle cx="73.1309" cy="37.9863" r="2.5" fill="#2C64EF" />
                        <circle cx="73.1309" cy="55.5527" r="2.5" fill="#2C64EF" />
                        <circle cx="73.1309" cy="73.1182" r="2.5" fill="#2C64EF" />
                    </g>
                </svg>
            </div>
        </div>
    </div>
};
export default Projects;
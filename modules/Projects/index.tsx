import useFetch from '@/config/hooks/useFetch';
import styles from '@/styles/projects/Projects.module.css';
import titleStyles from "@/styles/shared/Title.module.css";
import gsap, { Power1 } from 'gsap';
import { ForwardedRef, forwardRef, useEffect, useRef } from 'react';
import Skeleton from '../Shared/Skeleton';
import Title from '../Shared/Title';
import ProjectCard from './ProjectCard';
import { IProjectsData } from './models';
const Projects = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => {
    const dotsRef = useRef<HTMLDivElement | null>(null);
    const { data, isLoading } = useFetch<IProjectsData[]>(`${process.env.NEXT_PUBLIC_LOCAL_API}/projects`);
    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const xPos = (event.clientX / window.innerWidth) - 0.5;
            const yPos = (event.clientY / window.innerHeight) - 0.5;

            if (dotsRef.current) {
                gsap.to(dotsRef.current, {
                    x: 20 * xPos,
                    y: 20 * yPos,
                    duration: .6,
                    ease: Power1.easeOut,
                    // perspective: 900,
                    transformOrigin: 'center',
                });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);
    return <div id={styles.projects} ref={ref}>
        <Title className={titleStyles.projectsSeparator} title='projects' separator={
            <svg xmlns="http://www.w3.org/2000/svg" width="736" height="98" viewBox="0 0 736 98" fill="none">
                <path d="M735.588 98V1H0" stroke="#ABB2BF" strokeWidth="0.5" />
            </svg>
        }
        // extra="View all"
        />
        <div className={styles.projectsContainer}>
            <Skeleton isLoading={isLoading} count={data?.length}>
                {data?.filter(c => c.isActive).slice(0, 3).map(item => (
                    <ProjectCard key={item.id} item={item} />
                ))}
            </Skeleton>
            <div className={styles.dots} ref={dotsRef}>
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
});
export default Projects;
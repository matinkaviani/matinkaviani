import styles from '@/styles/projects/Projects.module.css';
import { ForwardedRef, forwardRef } from 'react';
import Title from '../Shared/Title';
import Timeline from './Timeline';

const WorkTimeline = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => {
    return <div id={styles.WorkTimeline} ref={ref}>
        <Title title='work-timeline' separator={
            <svg xmlns="http://www.w3.org/2000/svg" width="855" height="158" viewBox="0 0 855 158" fill="none">
                <path d="M854.588 0.264648V157.108H0.961914" stroke="#ABB2BF" strokeWidth="0.5" />
            </svg>}
        />
        <Timeline />
    </div>
});
export default WorkTimeline;
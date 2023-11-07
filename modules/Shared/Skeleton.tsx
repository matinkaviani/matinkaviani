import styles from '@/styles/shared/Skeleton.module.css';
import { ReactNode } from 'react';

interface SkeletonProps {
    children: ReactNode;
    isLoading: boolean;
    count?: number;
}
const Skeleton: React.FC<SkeletonProps> = ({ children, isLoading, count = 3 }) => {
    const renderSkeletonElements = () => {
        const skeletonElements = [];
        for (let i = 0; i < count; i++) {
            skeletonElements.push(<div key={i} className={styles.skeletonElement}></div>);
        }
        return skeletonElements;
    };

    if (isLoading) {
        return (
            <>
                {renderSkeletonElements()}
            </>
        );
    }
    return (
        <>
            {children}
        </>
    );
};

export default Skeleton;

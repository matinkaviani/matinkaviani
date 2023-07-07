import styles from "@/styles/shared/Title.module.css";

const Title = ({ title }: { title: string }) => {
    return (
        <div className={styles.seperator}>
            <svg xmlns="http://www.w3.org/2000/svg" width="855" height="158" viewBox="0 0 855 158" fill="none">
                <path d="M854.588 0.264648V157.108H0.961914" stroke="#ABB2BF" stroke-width="0.5" />
            </svg>
            <div id={styles.title}><span className={styles.sharp}>#</span>{title}</div>
        </div>
    )
}
export default Title;
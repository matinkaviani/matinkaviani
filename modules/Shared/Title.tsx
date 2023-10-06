import styles from "@/styles/shared/Title.module.css";
import Link from "next/link";
import { ReactNode } from "react";

const Title = ({ title, separator, extra, className }: { title: string, separator: ReactNode, extra?: string, className?: string }) => {
    return (
        <div className={`${styles.separator} ${className ?? ""}`}>
            {separator}
            <div id={styles.title}>
                <span className={styles.sharp}>
                    #
                </span>
                <div className={styles.titleContainer}>
                    {title}
                    <span className={styles.extra}>{extra ? <Link href="#">{extra}</Link> : null}</span>
                </div>
            </div>
        </div>
    )
}
export default Title;
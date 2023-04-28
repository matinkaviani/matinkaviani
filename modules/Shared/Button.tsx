import styles from "@/styles/shared/Button.module.css";
import { ReactNode } from "react";

type ButtonProps = {
    children: ReactNode;
    variant?: "transparent" | "solid";
}
const Button = ({ children, variant }: ButtonProps) => {
    return (
        <button className={`${styles.btn} ${styles[variant!]}`}>
            {children}
        </button>
    )
}

export default Button;
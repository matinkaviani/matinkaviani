import styles from "@/styles/shared/Button.module.css";
import { ReactNode } from "react";
import Spinner from "./Spinner";

interface ButtonProps extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement> {
    children: ReactNode;
    variant?: "transparent" | "solid";
    className?: string;
    loading?: boolean;
}
const Button = ({ children, variant, className, loading, ...rest }: ButtonProps) => {
    return (
        <button className={`${styles.btn} ${styles[variant!]} ${className ?? ''}`} {...rest}>
            {loading ? <Spinner /> : null}
            {children}
        </button>
    )
}

export default Button;
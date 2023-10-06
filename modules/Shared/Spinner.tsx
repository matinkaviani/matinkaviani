import style from "@/styles/shared/Spinner.module.css";
interface Props {
    className?: string;
    type?: "co" | "circle" | "dot";
    size?: number | "small" | "medium" | "large";
    [key: string]: any;
}
const Spinner = ({
    type = "circle",
    className,
    size = "medium",
    ...rest
}: Props) => {
    return (
        <span className={`${style.spinner} ${style[type]} ${style.sizes} ${style[size]}`} {...rest}></span>
    );
};
export default Spinner;

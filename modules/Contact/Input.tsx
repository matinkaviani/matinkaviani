import styles from '@/styles/contact/Input.module.css'; // You'll need to create this CSS file for animations
import { ElementType, useState } from 'react';
interface Props
    extends React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    label: string;
    className?: string;
    variant?: ElementType;
    value?: string;
    // setValue?: unknown;
}
const Input = ({ label, className, variant, value, ...rest }: Props) => {
    const [isFocused, setIsFocused] = useState(false);
    // const [text, setText] = useState("");
    // const handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
    //     setText(e.target.value);
    // };
    const handleFocus: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement> = () => {
        setIsFocused(true);
    };

    const handleBlur: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement> = () => {
        setIsFocused(false);
    };
    let Variant: ElementType | null = variant === "textarea" ? 'textarea' : 'input';
    return (
        <div className={`${styles.inputContainer} ${isFocused || value?.length ? `${styles.focused}` : ''}`}>
            <Variant
                onFocus={handleFocus}
                onBlur={handleBlur}
                className={` ${className} ${styles.customInput}`}
                value={value}
                // onChange={handleChange}
                {...rest as any}
            />
            <label className={styles.placeholder}>{label}</label>
        </div>
    );
};

export default Input;

import config from "@/config/confg"
import styles from "@/styles/contact/Contact.module.css"
import paragraphStyles from "@/styles/shared/Paragraph.module.css"
import { MouseEvent, useState } from "react"
import { toast } from "react-toastify"
import Button from "../Shared/Button"
import Title from "../Shared/Title"
import Input from "./Input"
type EmailData = {
    name: string;
    from: string;
    message: string;
}
const Contact = () => {
    const [emailData, setEmailData] = useState<EmailData | null>({
        name: '',
        from: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);
    const handleSubmit = async (e: MouseEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(emailData),
            });
            if (response.ok) {
                toast.success("Your Message Sent Successfully", config.toastOptions)
                setLoading(false);
                setEmailData({
                    name: '',
                    from: '',
                    message: ''
                })
            } else {
                toast.error("Failed To Send Message", config.toastOptions)
                setLoading(false);
            }
        } catch (error) {
            toast.error(`An Error Has Occurred: ${error}`, config.toastOptions)
            console.error('Error:', error);
            setLoading(false);
        }
    };
    return (
        <div id={styles.contact}>
            <Title title='contact-me' className={styles.contactTitle} separator={
                <svg xmlns="http://www.w3.org/2000/svg" width="849" height="381" viewBox="0 0 849 381" fill="none">
                    <path d="M0.574219 0.586731H774.589V379.842H848.033" stroke="#ABB2BF" strokeWidth="0.5" />
                </svg>}
            />
            <div className={styles.contactWrapper}>
                <div className={styles.text}>
                    <div className={styles.letsTalk}>
                        Let’s <span className={styles.blue}>Talk</span>
                    </div>
                    <div className={styles.contactInfo}>
                        Email:<span className={styles.gray}><a href="mailto:matinkaviiani@gmail.com">matinkaviiani@gmail.com</a></span>
                    </div>
                    <div className={styles.contactInfo}>
                        Phone:<span className={styles.gray}><a href="tel:+989107638129">+989107638129</a></span>
                    </div>
                    <div className={`${paragraphStyles.paragraph} ${styles.contactParagraph}`}>
                        <span className={paragraphStyles.brace}>{"{"}</span>{config.contactText}<span className={paragraphStyles.brace}>{"}"}</span>
                    </div>
                </div>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <Input
                        label="Name"
                        required
                        maxLength={35}
                        value={emailData?.name}
                        onChange={(e) =>
                            setEmailData({ ...emailData!, name: e.target.value })
                        }
                    />
                    <Input
                        label="Email"
                        type="email"
                        required
                        maxLength={45}
                        value={emailData?.from}
                        onChange={(e) =>
                            setEmailData({ ...emailData!, from: e.target.value })
                        }
                    />
                    <Input
                        label="Message"
                        required
                        maxLength={300}
                        className={styles.messageInput}
                        variant="textarea"
                        value={emailData?.message}
                        onChange={(e) =>
                            setEmailData({ ...emailData!, message: e.target.value })
                        }
                    />
                    <Button loading={loading} type="submit" className={styles.submitBtn}>Submit</Button>
                </form>
            </div>
        </div>
    )
}

export default Contact
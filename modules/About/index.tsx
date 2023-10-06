import config from "@/config/confg"
import styles from "@/styles/about/About.module.css"
import paragraphStyles from "@/styles/shared/Paragraph.module.css"
import Title from "../Shared/Title"

const About = () => {
    return (
        <div id={paragraphStyles.about}>
            <Title title='about-me' className={styles.aboutTitle} separator={
                <svg xmlns="http://www.w3.org/2000/svg" width="803" height="1" viewBox="0 0 803 1" fill="none">
                    <path d="M803 0.588623L0.267578 0.585938" stroke="#ABB2BF" strokeWidth="0.5" />
                </svg>}
            />
            <div className={paragraphStyles.paragraph}>
                <span className={paragraphStyles.brace}>{"{"}</span>{config.aboutMe}<span className={paragraphStyles.brace}>{"}"}</span>
            </div>
        </div>
    )
}

export default About
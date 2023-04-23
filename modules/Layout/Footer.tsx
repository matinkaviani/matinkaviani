import styles from '@/styles/Layout.module.css'

const Footer = () => {
    return (
        <div id={styles.footer}>
            <div className={styles.logoContainer}>
                <div className={styles.logo}>
                    <svg width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.1387 26.8521L10.169 2.68258L2.19923 26.8521L18.1387 26.8521Z" stroke="#2C64EF" />
                        <path d="M10.4746 9.45942L18.4443 33.6289L26.414 9.45942L10.4746 9.45942Z" stroke="#2C64EF" />
                        <path d="M35.1133 26.8521L27.1436 2.68258L19.1738 26.8521L35.1133 26.8521Z" stroke="#2C64EF" />
                    </svg>
                    Matt
                </div>
                <span>
                    front-end developer
                </span>
            </div>
            <div className={styles.footerSocialContainer}>
                <span className={styles.footerSocialTitle}>
                    Follow-me
                </span>
            </div>
        </div>
    )
}

export default Footer;
import config from '@/config/confg';
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
                <div className={styles.socialFooterIcons}>
                    <a href={config.socialLinks.linkedIn} target='_blank' className={styles.icon}>
                        <svg width="30" height="32" viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 2.24217C0 1.0037 0.98625 0 2.20312 0H27.7969C29.0138 0 30 1.0037 30 2.24217V29.0622C30 30.3007 29.0138 31.3043 27.7969 31.3043H2.20312C0.98625 31.3043 0 30.3007 0 29.0622V2.24217ZM9.26813 26.2057V12.0698H4.76625V26.2057H9.26813ZM7.01813 10.1387C8.5875 10.1387 9.56437 9.05478 9.56437 7.69696C9.53625 6.30978 8.58938 5.25522 7.04813 5.25522C5.50688 5.25522 4.5 6.31174 4.5 7.69696C4.5 9.05478 5.47688 10.1387 6.98813 10.1387H7.01813ZM16.2206 26.2057V18.3111C16.2206 17.8885 16.2506 17.4659 16.3706 17.1646C16.695 16.3213 17.4356 15.4467 18.6806 15.4467C20.31 15.4467 20.9606 16.742 20.9606 18.6437V26.2057H25.4625V18.0978C25.4625 13.7543 23.2425 11.7352 20.28 11.7352C17.8913 11.7352 16.8206 13.1048 16.2206 14.0693V14.1183H16.1906C16.2006 14.1019 16.2106 14.0856 16.2206 14.0693V12.0698H11.7206C11.7769 13.3963 11.7206 26.2057 11.7206 26.2057H16.2206Z" fill="#2C64EF" />
                        </svg>
                    </a>
                    <a href={config.socialLinks.telegram} target='_blank' className={styles.icon}>
                        <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M30 15.6523C30 19.6306 28.4196 23.4459 25.6066 26.2589C22.7936 29.072 18.9782 30.6523 15 30.6523C11.0218 30.6523 7.20644 29.072 4.3934 26.2589C1.58035 23.4459 0 19.6306 0 15.6523C0 11.6741 1.58035 7.85879 4.3934 5.04574C7.20644 2.2327 11.0218 0.652344 15 0.652344C18.9782 0.652344 22.7936 2.2327 25.6066 5.04574C28.4196 7.85879 30 11.6741 30 15.6523ZM15.5381 11.7261C14.0794 12.3336 11.1619 13.5898 6.78938 15.4948C6.08063 15.7761 5.7075 16.0536 5.67375 16.3236C5.6175 16.7792 6.18938 16.9592 6.9675 17.2048L7.29563 17.308C8.06063 17.5573 9.09188 17.848 9.62625 17.8592C10.1137 17.8705 10.6556 17.6717 11.2537 17.2592C15.3394 14.5011 17.4488 13.108 17.58 13.078C17.6737 13.0555 17.805 13.0292 17.8913 13.108C17.9794 13.1848 17.97 13.333 17.9606 13.3723C17.9044 13.6142 15.66 15.6992 14.4994 16.7792C14.1375 17.1167 13.8806 17.3548 13.8281 17.4092C13.7125 17.5274 13.595 17.6436 13.4756 17.758C12.7631 18.4442 12.2306 18.958 13.5037 19.798C14.1169 20.203 14.6081 20.5348 15.0975 20.8686C15.63 21.2323 16.1625 21.5942 16.8525 22.048C17.0269 22.1605 17.1956 22.2823 17.3588 22.3986C17.9794 22.8411 18.54 23.2386 19.2281 23.1748C19.6294 23.1373 20.0438 22.7623 20.2537 21.6373C20.7506 18.9805 21.7275 13.2261 21.9525 10.8542C21.9662 10.657 21.9581 10.459 21.9281 10.2636C21.9105 10.1059 21.8342 9.9607 21.7144 9.85672C21.5438 9.73895 21.3404 9.67794 21.1331 9.68234C20.5706 9.69172 19.7025 9.99359 15.5381 11.7261Z" fill="#2C64EF" />
                        </svg>
                    </a>
                    <a href={config.socialLinks.instagram} target='_blank' className={styles.icon}>
                        <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 3.35484C19.005 3.35484 19.48 3.36984 21.0613 3.44234C22.6963 3.51734 24.38 3.88984 25.5713 5.08109C26.7738 6.28359 27.135 7.95109 27.21 9.59109C27.2825 11.1723 27.2975 11.6473 27.2975 15.6523C27.2975 19.6573 27.2825 20.1323 27.21 21.7136C27.1362 23.3398 26.755 25.0398 25.5713 26.2236C24.3688 27.4261 22.7025 27.7873 21.0613 27.8623C19.48 27.9348 19.005 27.9498 15 27.9498C10.995 27.9498 10.52 27.9348 8.93875 27.8623C7.325 27.7886 5.6025 27.3986 4.42875 26.2236C3.2325 25.0273 2.865 23.3436 2.79 21.7136C2.7175 20.1323 2.7025 19.6573 2.7025 15.6523C2.7025 11.6473 2.7175 11.1723 2.79 9.59109C2.86375 7.97109 3.24875 6.26109 4.42875 5.08109C5.62875 3.88109 7.3025 3.51734 8.93875 3.44234C10.52 3.36984 10.995 3.35484 15 3.35484ZM15 0.652344C10.9262 0.652344 10.415 0.669844 8.815 0.742344C6.49625 0.848594 4.19375 1.49359 2.5175 3.16984C0.835 4.85234 0.19625 7.14984 0.09 9.46734C0.0175 11.0673 0 11.5786 0 15.6523C0 19.7261 0.0175 20.2373 0.09 21.8373C0.19625 24.1536 0.84375 26.4623 2.5175 28.1348C4.19875 29.8161 6.5 30.4561 8.815 30.5623C10.415 30.6348 10.9262 30.6523 15 30.6523C19.0737 30.6523 19.585 30.6348 21.185 30.5623C23.5025 30.4561 25.8075 29.8098 27.4825 28.1348C29.1663 26.4511 29.8037 24.1548 29.91 21.8373C29.9825 20.2373 30 19.7261 30 15.6523C30 11.5786 29.9825 11.0673 29.91 9.46734C29.8037 7.14859 29.1575 4.84484 27.4825 3.16984C25.8037 1.49109 23.4963 0.847344 21.185 0.742344C19.585 0.669844 19.0737 0.652344 15 0.652344Z" fill="#2C64EF" />
                            <path d="M15.0013 7.95117C10.7476 7.95117 7.29883 11.3999 7.29883 15.6537C7.29883 19.9074 10.7476 23.3562 15.0013 23.3562C19.2551 23.3562 22.7038 19.9074 22.7038 15.6537C22.7038 11.3999 19.2551 7.95117 15.0013 7.95117ZM15.0013 20.6537C12.2401 20.6537 10.0013 18.4149 10.0013 15.6537C10.0013 12.8924 12.2401 10.6537 15.0013 10.6537C17.7626 10.6537 20.0013 12.8924 20.0013 15.6537C20.0013 18.4149 17.7626 20.6537 15.0013 20.6537Z" fill="#2C64EF" />
                            <path d="M23.007 9.44473C24.0011 9.44473 24.807 8.63884 24.807 7.64473C24.807 6.65061 24.0011 5.84473 23.007 5.84473C22.0129 5.84473 21.207 6.65061 21.207 7.64473C21.207 8.63884 22.0129 9.44473 23.007 9.44473Z" fill="#2C64EF" />
                        </svg>
                    </a>
                    <a href={config.socialLinks.github} target='_blank' className={styles.icon}>
                        <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 0.304688C6.7125 0.304688 0 6.85924 0 14.9517C0 21.4331 4.29375 26.9074 10.2562 28.8481C11.0062 28.9763 11.2875 28.5369 11.2875 28.1524C11.2875 27.8045 11.2688 26.6511 11.2688 25.4244C7.5 26.1018 6.525 24.5273 6.225 23.7034C6.05625 23.2823 5.325 21.9823 4.6875 21.6345C4.1625 21.3598 3.4125 20.6824 4.66875 20.6641C5.85 20.6458 6.69375 21.726 6.975 22.1654C8.325 24.3808 10.4813 23.7583 11.3438 23.3738C11.475 22.4217 11.8687 21.7809 12.3 21.4148C8.9625 21.0486 5.475 19.7853 5.475 14.1828C5.475 12.5899 6.05625 11.2717 7.0125 10.2464C6.8625 9.8802 6.3375 8.37888 7.1625 6.36491C7.1625 6.36491 8.41875 5.98042 11.2875 7.86623C12.4875 7.53667 13.7625 7.37189 15.0375 7.37189C16.3125 7.37189 17.5875 7.53667 18.7875 7.86623C21.6562 5.96211 22.9125 6.36491 22.9125 6.36491C23.7375 8.37888 23.2125 9.8802 23.0625 10.2464C24.0188 11.2717 24.6 12.5716 24.6 14.1828C24.6 19.8036 21.0938 21.0486 17.7563 21.4148C18.3 21.8725 18.7688 22.7513 18.7688 24.1245C18.7688 26.0835 18.75 27.6581 18.75 28.1524C18.75 28.5369 19.0312 28.9946 19.7812 28.8481C22.7592 27.8668 25.3469 25.9981 27.18 23.5052C29.0132 21.0123 29.9995 18.0207 30 14.9517C30 6.85924 23.2875 0.304688 15 0.304688Z" fill="#2C64EF" />
                        </svg>
                    </a>
                    <a href={`mailto:${config.socialLinks.email}`} target='_blank' className={styles.icon}>
                        <svg width="30" height="23" viewBox="0 0 30 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.09375 3.37728C0.282784 2.56099 0.747479 1.83215 1.41173 1.31013C2.07598 0.788109 2.90041 0.50385 3.75 0.503906H26.25C27.0996 0.50385 27.924 0.788109 28.5883 1.31013C29.2525 1.83215 29.7172 2.56099 29.9062 3.37728L15 12.3559L0.09375 3.37728ZM0 5.48749V18.6144L10.8806 12.0399L0 5.48749ZM12.6769 13.1246L0.358125 20.5658C0.662487 21.1982 1.14286 21.7325 1.74334 22.1064C2.34382 22.4803 3.0397 22.6785 3.75 22.6778H26.25C26.9602 22.678 27.6558 22.4794 28.2559 22.1052C28.8561 21.7309 29.336 21.1964 29.64 20.5639L17.3212 13.1227L15 14.5215L12.6769 13.1227V13.1246ZM19.1194 12.0417L30 18.6144V5.48749L19.1194 12.0399V12.0417Z" fill="#2C64EF" />
                        </svg>
                    </a>
                    <a href={config.socialLinks.discord} target='_blank' className={styles.icon}>
                        <svg width="30" height="25" viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.3969 2.58071C23.4516 1.64375 21.399 0.975028 19.2901 0.591211C19.271 0.587834 19.2514 0.59075 19.2339 0.59956C19.2165 0.608369 19.202 0.622639 19.1926 0.640407C18.9282 1.13237 18.6357 1.77586 18.4314 2.27963C16.1582 1.91756 13.8459 1.91756 11.5727 2.27963C11.3447 1.71844 11.0868 1.17116 10.8002 0.640407C10.7906 0.622834 10.7761 0.608728 10.7587 0.599947C10.7413 0.591166 10.7218 0.58812 10.7027 0.591211C8.59335 0.972975 6.54025 1.64205 4.59589 2.58071C4.57926 2.58738 4.56534 2.5999 4.55652 2.61613C0.66781 8.71452 -0.399054 14.6634 0.124065 20.5374C0.12594 20.565 0.142815 20.5925 0.16344 20.6102C2.4279 22.3707 4.96075 23.7148 7.65399 24.5853C7.673 24.5916 7.69343 24.5914 7.71232 24.5846C7.7312 24.5779 7.74755 24.565 7.75899 24.5479C8.33648 23.7214 8.85022 22.8496 9.29272 21.9326C9.30194 21.9137 9.3051 21.8922 9.30172 21.8713C9.29834 21.8504 9.28861 21.8312 9.27397 21.8165C9.26428 21.8069 9.25278 21.7995 9.24022 21.7949C8.4324 21.469 7.65004 21.0775 6.90024 20.624C6.8793 20.6115 6.86373 20.5911 6.85675 20.5669C6.84976 20.5427 6.85191 20.5167 6.86274 20.4941C6.86912 20.4795 6.87877 20.4666 6.89087 20.4567C7.04837 20.3327 7.20587 20.2029 7.35586 20.073C7.36912 20.0618 7.38501 20.0546 7.40186 20.0522C7.4187 20.0498 7.43586 20.0522 7.45149 20.0592C12.3621 22.4128 17.6776 22.4128 22.5282 20.0592C22.5444 20.0519 22.5622 20.0492 22.5797 20.0517C22.5972 20.0541 22.6138 20.0615 22.6276 20.073C22.7776 20.2029 22.9351 20.3327 23.0926 20.4567C23.1053 20.4665 23.1156 20.4795 23.1224 20.4944C23.1292 20.5094 23.1324 20.5259 23.1317 20.5425C23.1309 20.559 23.1263 20.5752 23.1182 20.5894C23.11 20.6036 23.0987 20.6155 23.0851 20.624C22.337 21.0817 21.5536 21.4727 20.7432 21.7929C20.7303 21.7978 20.7186 21.8056 20.7088 21.8158C20.6991 21.826 20.6917 21.8384 20.687 21.8519C20.6826 21.8651 20.6809 21.879 20.6819 21.8929C20.6828 21.9068 20.6865 21.9203 20.6926 21.9326C21.1426 22.8477 21.6582 23.7214 22.2245 24.5479C22.2359 24.565 22.2522 24.5779 22.2711 24.5846C22.29 24.5914 22.3104 24.5916 22.3295 24.5853C25.0272 23.7175 27.5642 22.3732 29.8313 20.6102C29.8426 20.602 29.852 20.5911 29.8589 20.5785C29.8657 20.5659 29.8697 20.5519 29.8706 20.5374C30.4969 13.7463 28.8225 7.8467 25.4344 2.6181C25.431 2.60947 25.4259 2.60168 25.4195 2.59524C25.413 2.5888 25.4053 2.58385 25.3969 2.58071ZM10.0258 16.9598C8.54648 16.9598 7.32961 15.5351 7.32961 13.7877C7.32961 12.0382 8.52398 10.6135 10.0258 10.6135C11.5389 10.6135 12.7446 12.05 12.7221 13.7877C12.7221 15.5351 11.5277 16.9598 10.0258 16.9598ZM19.9932 16.9598C18.5157 16.9598 17.297 15.5351 17.297 13.7877C17.297 12.0382 18.4914 10.6135 19.9932 10.6135C21.5063 10.6135 22.7138 12.05 22.6895 13.7877C22.6895 15.5351 21.5063 16.9598 19.9932 16.9598Z" fill="#2C64EF" />
                        </svg>
                    </a>
                </div>
            </div>
            <div className={styles.footerDots}>
                <svg width="94" height="94" viewBox="0 0 94 94" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.3">
                        <circle cx="3.18485" cy="3.93778" r="3.10672" fill="#2C64EF" />
                        <circle cx="3.18485" cy="25.7674" r="3.10672" fill="#2C64EF" />
                        <circle cx="3.18485" cy="47.5957" r="3.10672" fill="#2C64EF" />
                        <circle cx="3.18485" cy="69.4253" r="3.10672" fill="#2C64EF" />
                        <circle cx="3.18485" cy="91.2549" r="3.10672" fill="#2C64EF" />
                        <circle cx="25.0144" cy="3.93778" r="3.10672" fill="#2C64EF" />
                        <circle cx="25.0144" cy="25.7674" r="3.10672" fill="#2C64EF" />
                        <circle cx="25.0144" cy="47.5957" r="3.10672" fill="#2C64EF" />
                        <circle cx="25.0144" cy="69.4253" r="3.10672" fill="#2C64EF" />
                        <circle cx="25.0144" cy="91.2549" r="3.10672" fill="#2C64EF" />
                        <circle cx="46.844" cy="3.93778" r="3.10672" fill="#2C64EF" />
                        <circle cx="46.844" cy="25.7674" r="3.10672" fill="#2C64EF" />
                        <circle cx="46.844" cy="47.5957" r="3.10672" fill="#2C64EF" />
                        <circle cx="46.844" cy="69.4253" r="3.10672" fill="#2C64EF" />
                        <circle cx="46.844" cy="91.2549" r="3.10672" fill="#2C64EF" />
                        <circle cx="68.6712" cy="3.93778" r="3.10672" fill="#2C64EF" />
                        <circle cx="68.6712" cy="25.7674" r="3.10672" fill="#2C64EF" />
                        <circle cx="68.6712" cy="47.5957" r="3.10672" fill="#2C64EF" />
                        <circle cx="68.6712" cy="69.4253" r="3.10672" fill="#2C64EF" />
                        <circle cx="68.6712" cy="91.2549" r="3.10672" fill="#2C64EF" />
                        <circle cx="90.5008" cy="3.93778" r="3.10672" fill="#2C64EF" />
                        <circle cx="90.5008" cy="25.7674" r="3.10672" fill="#2C64EF" />
                        <circle cx="90.5008" cy="47.5957" r="3.10672" fill="#2C64EF" />
                        <circle cx="90.5008" cy="69.4253" r="3.10672" fill="#2C64EF" />
                        <circle cx="90.5008" cy="91.2549" r="3.10672" fill="#2C64EF" />
                    </g>
                </svg>

            </div>
        </div>
    )
}

export default Footer;
import config from "@/config/confg";
import styles from '@/styles/layout/Layout.module.css';
import Head from "next/head";
import Footer from "./Footer";


interface Props {
    children?: React.ReactNode;
}
const Layout = (props: Props) => {

    return (
        <div id={styles.publicLayout}>
            <Head>
                <title>Matin Kaviani | Personal Website</title>
                <meta name="description" content="Welcome to Matin Kaviani's online home, where you can discover his projects and skills" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <div className={styles.sideSocial}>
                    <div className={styles.line}></div>
                    <div className={styles.socialIcons}>
                        <a className={styles.icon} href={config.socialLinks.linkedIn} target="_blank">
                            <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 1.719C0 0.7695 0.756125 0 1.68906 0H21.3109C22.2439 0 23 0.7695 23 1.719V22.281C23 23.2305 22.2439 24 21.3109 24H1.68906C0.756125 24 0 23.2305 0 22.281V1.719ZM7.10556 20.091V9.2535H3.65413V20.091H7.10556ZM5.38056 7.773C6.58375 7.773 7.33269 6.942 7.33269 5.901C7.31112 4.8375 6.58519 4.029 5.40356 4.029C4.22194 4.029 3.45 4.839 3.45 5.901C3.45 6.942 4.19894 7.773 5.35756 7.773H5.38056ZM12.4358 20.091V14.0385C12.4358 13.7145 12.4588 13.3905 12.5508 13.1595C12.7995 12.513 13.3673 11.8425 14.3218 11.8425C15.571 11.8425 16.0698 12.8355 16.0698 14.2935V20.091H19.5213V13.875C19.5213 10.545 17.8192 8.997 15.548 8.997C13.7166 8.997 12.8958 10.047 12.4358 10.7865V10.824H12.4128C12.4204 10.8115 12.4281 10.799 12.4358 10.7865V9.2535H8.98581C9.02894 10.2705 8.98581 20.091 8.98581 20.091H12.4358Z" fill="#2C64EF" />
                            </svg>
                        </a>
                        <a className={styles.icon} href={config.socialLinks.github} target="_blank">
                            <svg className={styles.rounded} width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.5 0C5.14625 0 0 5.02516 0 11.2294C0 16.1984 3.29187 20.3954 7.86312 21.8833C8.43812 21.9816 8.65375 21.6447 8.65375 21.3499C8.65375 21.0832 8.63938 20.1989 8.63938 19.2584C5.75 19.7778 5.0025 18.5706 4.7725 17.939C4.64313 17.6161 4.0825 16.6195 3.59375 16.3528C3.19125 16.1423 2.61625 15.6229 3.57938 15.6089C4.485 15.5948 5.13188 16.423 5.3475 16.7599C6.3825 18.4583 8.03563 17.9811 8.69688 17.6863C8.7975 16.9564 9.09937 16.4651 9.43 16.1844C6.87125 15.9036 4.1975 14.9351 4.1975 10.6399C4.1975 9.41867 4.64313 8.40802 5.37625 7.62196C5.26125 7.34123 4.85875 6.19021 5.49125 4.64617C5.49125 4.64617 6.45437 4.3514 8.65375 5.79718C9.57375 5.54452 10.5513 5.41819 11.5288 5.41819C12.5063 5.41819 13.4838 5.54452 14.4038 5.79718C16.6031 4.33736 17.5662 4.64617 17.5662 4.64617C18.1987 6.19021 17.7962 7.34123 17.6812 7.62196C18.4144 8.40802 18.86 9.40463 18.86 10.6399C18.86 14.9491 16.1719 15.9036 13.6131 16.1844C14.03 16.5353 14.3894 17.2091 14.3894 18.2618C14.3894 19.7638 14.375 20.9709 14.375 21.3499C14.375 21.6447 14.5906 21.9956 15.1656 21.8833C17.4487 21.1309 19.4326 19.6983 20.838 17.787C22.2435 15.8758 22.9996 13.5823 23 11.2294C23 5.02516 17.8538 0 11.5 0Z" fill="#2C64EF" />
                            </svg>
                        </a>
                        <a className={styles.icon} href={config.socialLinks.telegram} target="_blank">
                            <svg className={styles.rounded} width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23 12.4043C23 15.4543 21.7884 18.3794 19.6317 20.536C17.4751 22.6927 14.55 23.9043 11.5 23.9043C8.45001 23.9043 5.52494 22.6927 3.36827 20.536C1.2116 18.3794 0 15.4543 0 12.4043C0 9.35431 1.2116 6.42924 3.36827 4.27257C5.52494 2.1159 8.45001 0.904297 11.5 0.904297C14.55 0.904297 17.4751 2.1159 19.6317 4.27257C21.7884 6.42924 23 9.35431 23 12.4043ZM11.9126 9.39417C10.7942 9.85992 8.55744 10.823 5.20519 12.2835C4.66181 12.4992 4.37575 12.7119 4.34987 12.9189C4.30675 13.2682 4.74519 13.4062 5.34175 13.5945L5.59331 13.6736C6.17981 13.8648 6.97044 14.0876 7.38012 14.0962C7.75387 14.1049 8.16931 13.9525 8.62787 13.6362C11.7602 11.5217 13.3774 10.4536 13.478 10.4306C13.5499 10.4134 13.6505 10.3932 13.7166 10.4536C13.7842 10.5125 13.777 10.6261 13.7698 10.6563C13.7267 10.8417 12.006 12.4402 11.1162 13.2682C10.8387 13.527 10.6418 13.7095 10.6016 13.7512C10.5129 13.8418 10.4228 13.931 10.3313 14.0186C9.78506 14.5447 9.37681 14.9386 10.3529 15.5826C10.8229 15.8931 11.1996 16.1475 11.5747 16.4034C11.983 16.6823 12.3912 16.9597 12.9202 17.3076C13.0539 17.3939 13.1833 17.4873 13.3084 17.5764C13.7842 17.9157 14.214 18.2204 14.7416 18.1715C15.0492 18.1428 15.3669 17.8553 15.5279 16.9928C15.9088 14.9559 16.6578 10.5442 16.8302 8.72573C16.8408 8.57457 16.8345 8.4227 16.8116 8.27292C16.798 8.15206 16.7395 8.04071 16.6477 7.96098C16.5169 7.87069 16.361 7.82392 16.2021 7.8273C15.7708 7.83448 15.1052 8.06592 11.9126 9.39417Z" fill="#2C64EF" />
                            </svg>
                        </a>
                        <a className={styles.icon} href={`mailto:${config.socialLinks.email}`} target="_blank">
                            <svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.071875 3.10721C0.216801 2.48139 0.573067 1.92262 1.08232 1.5224C1.59158 1.12219 2.22365 0.904254 2.875 0.904297H20.125C20.7764 0.904254 21.4084 1.12219 21.9177 1.5224C22.4269 1.92262 22.7832 2.48139 22.9281 3.10721L11.5 9.9908L0.071875 3.10721ZM0 4.72505V14.789L8.34181 9.74855L0 4.72505ZM9.71894 10.5801L0.274563 16.285C0.507907 16.7699 0.876195 17.1796 1.33656 17.4662C1.79693 17.7529 2.33044 17.9048 2.875 17.9043H20.125C20.6695 17.9044 21.2028 17.7522 21.6629 17.4653C22.123 17.1783 22.491 16.7686 22.724 16.2836L13.2796 10.5787L11.5 11.6511L9.71894 10.5787V10.5801ZM14.6582 9.74996L23 14.789V4.72505L14.6582 9.74855V9.74996Z" fill="#2C64EF" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className={`${styles.logo} ${styles.logoHeader}`}>
                    <svg width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.1387 26.8521L10.169 2.68258L2.19923 26.8521L18.1387 26.8521Z" stroke="#2C64EF" />
                        <path d="M10.4746 9.45942L18.4443 33.6289L26.414 9.45942L10.4746 9.45942Z" stroke="#2C64EF" />
                        <path d="M35.1133 26.8521L27.1436 2.68258L19.1738 26.8521L35.1133 26.8521Z" stroke="#2C64EF" />
                    </svg>
                    <span className={styles.logoText}>Matt</span>
                </div>
                <div className={styles.layout}>
                    {props.children}
                </div>
            </main>
            <Footer />
        </div>
    );
};
export default Layout;

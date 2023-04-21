import Head from "next/head";
import Footer from "./Footer";
import styles from '@/styles/Layout.module.css'


interface Props {
    children?: React.ReactNode;
}
const Layout = (props: Props) => {

    return (
        <div id="public-layout">
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
                        <div className={styles.icon}>
                            <a href="https://www.linkedin.com/in/matin-kaviani-3a7755202/" target="_blank">
                                <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 1.719C0 0.7695 0.756125 0 1.68906 0H21.3109C22.2439 0 23 0.7695 23 1.719V22.281C23 23.2305 22.2439 24 21.3109 24H1.68906C0.756125 24 0 23.2305 0 22.281V1.719ZM7.10556 20.091V9.2535H3.65413V20.091H7.10556ZM5.38056 7.773C6.58375 7.773 7.33269 6.942 7.33269 5.901C7.31112 4.8375 6.58519 4.029 5.40356 4.029C4.22194 4.029 3.45 4.839 3.45 5.901C3.45 6.942 4.19894 7.773 5.35756 7.773H5.38056ZM12.4358 20.091V14.0385C12.4358 13.7145 12.4588 13.3905 12.5508 13.1595C12.7995 12.513 13.3673 11.8425 14.3218 11.8425C15.571 11.8425 16.0698 12.8355 16.0698 14.2935V20.091H19.5213V13.875C19.5213 10.545 17.8192 8.997 15.548 8.997C13.7166 8.997 12.8958 10.047 12.4358 10.7865V10.824H12.4128C12.4204 10.8115 12.4281 10.799 12.4358 10.7865V9.2535H8.98581C9.02894 10.2705 8.98581 20.091 8.98581 20.091H12.4358Z" fill="#2C64EF" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles.logo}>
                    <svg width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.1387 26.8521L10.169 2.68258L2.19923 26.8521L18.1387 26.8521Z" stroke="#2C64EF" />
                        <path d="M10.4746 9.45942L18.4443 33.6289L26.414 9.45942L10.4746 9.45942Z" stroke="#2C64EF" />
                        <path d="M35.1133 26.8521L27.1436 2.68258L19.1738 26.8521L35.1133 26.8521Z" stroke="#2C64EF" />
                    </svg>
                    Matt
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

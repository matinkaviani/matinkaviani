import config from "@/config/confg";
import useMediaQuery from "@/config/hooks/useMediaQuery";
import styles from "@/styles/workTimeline/Timeline.module.css";
const Timeline = () => {
    const mobileView = useMediaQuery("smDown")
    return (
        <div id={styles.timeLine}>
            {mobileView ? (
                <div className={styles.mobileView}>
                    {config.experiences.map((item, idx) => (
                        <div key={item.id} className={`${styles.experience} ${idx % 2 === 0 ? styles.left : styles.right}`}>
                            <span className={styles.date}>{item.date}</span>
                            <svg className={styles.ellipse} xmlns="http://www.w3.org/2000/svg" width="20" height="33" viewBox="0 0 20 33" fill="none">
                                <path d="M19.5371 10.4268C19.5371 15.6535 15.3 32.8629 10.0732 32.8629C4.84649 32.8629 0.609375 15.6535 0.609375 10.4268C0.609375 5.20001 4.84649 0.962891 10.0732 0.962891C15.3 0.962891 19.5371 5.20001 19.5371 10.4268Z" fill="#9EA4B1" />
                            </svg>
                            <span className={styles.title}>
                                {item.title}
                            </span>
                            <span className={styles.loc}>
                                {item.loc}
                            </span>
                        </div>
                    ))}
                </div>
            ) : (
                <div className={styles.lineWrapper}>
                    <span className={styles.bullet}></span>
                    <span className={styles.line}>
                        <div className={styles.experiences}>
                            {config.experiences.map((item, idx) => (
                                idx % 2 === 0 ? (
                                    <div key={item.id} className={styles.experience}>
                                        <span className={styles.date}>{item.date}</span>
                                        <svg className={styles.ellipse} xmlns="http://www.w3.org/2000/svg" width="20" height="33" viewBox="0 0 20 33" fill="none">
                                            <path d="M19.5371 10.4268C19.5371 15.6535 15.3 32.8629 10.0732 32.8629C4.84649 32.8629 0.609375 15.6535 0.609375 10.4268C0.609375 5.20001 4.84649 0.962891 10.0732 0.962891C15.3 0.962891 19.5371 5.20001 19.5371 10.4268Z" fill="#9EA4B1" />
                                        </svg>
                                        <span className={styles.title}>
                                            {item.title}
                                        </span>
                                        <span className={styles.loc}>
                                            {item.loc}
                                        </span>
                                    </div>
                                ) : (
                                    <div key={item.id} className={styles.experience}>
                                        <span className={styles.title}>
                                            {item.title}
                                        </span>
                                        <span className={styles.loc}>
                                            {item.loc}
                                        </span>
                                        <svg className={styles.ellipse} xmlns="http://www.w3.org/2000/svg" width="20" height="33" viewBox="0 0 20 33" fill="none">
                                            <path d="M19.5371 10.4268C19.5371 15.6535 15.3 32.8629 10.0732 32.8629C4.84649 32.8629 0.609375 15.6535 0.609375 10.4268C0.609375 5.20001 4.84649 0.962891 10.0732 0.962891C15.3 0.962891 19.5371 5.20001 19.5371 10.4268Z" fill="#9EA4B1" />
                                        </svg>
                                        <span className={styles.date}>{item.date}</span>
                                    </div>

                                )
                            ))}
                        </div>
                    </span>
                    <span className={styles.rects}>
                        <span className={styles.rect}></span>
                        <span className={styles.rect}></span>
                        <span className={styles.rect}></span>
                    </span>

                </div>
            )}
        </div>
    )
}

export default Timeline;
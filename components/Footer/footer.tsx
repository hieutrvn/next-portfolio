/* eslint-disable react/no-unescaped-entities */
import styles from "./style.module.scss";
import Magnetic from "../../common/Magnetic/magnetic";

interface FooterProps {
    style?: "black" | "none"
}

const Footer: React.FC<FooterProps> = ({
    style,
}) => {

    function formatAMPMWithGMT(time: Date): string {
        let hours = time.getHours();
        let minutes = time.getMinutes().toString();
        const ampm = hours >= 12 ? 'PM' : 'AM';

        hours = hours % 12;
        hours = hours || 12;

        if (Number(minutes) < 10) {
            minutes = `0${minutes}`;
        }

        const gmtOffset = -time.getTimezoneOffset() / 60;
        const gmtSign = gmtOffset >= 0 ? '+' : '-';

        const timeString = `${hours}:${minutes} ${ampm} GMT${gmtSign}${Math.abs(gmtOffset)}`;
        return timeString;
    }

    const currentTime = new Date();
    const formattedTime = formatAMPMWithGMT(currentTime);

    return (
        <div className={style === "black" ? `${styles.contact} ${styles.contact__black}` : styles.contact}>
            <div className={styles.body}>
                <div className={styles.info}>
                    <div className={styles.left}>
                        <span>
                            <h3>Version</h3>
                            <p>2023 © Edition</p>
                        </span>
                        <span>
                            <h3>Location Time</h3>
                            <p>{formattedTime}</p>
                        </span>
                    </div>
                    <div>
                        <span>
                            <h3>socials</h3>
                            <Magnetic>
                                <p>
                                    <a
                                        target="blank"
                                        href="https://www.facebook.com/tranhieuhalai/"
                                    >
                                        Facebook
                                    </a>
                                </p>
                            </Magnetic>
                        </span>
                        <Magnetic>
                            <p>
                                <a target="blank" href="https://www.instagram.com/hieutrvn/">
                                    Instagram
                                </a>
                            </p>
                        </Magnetic>
                        <Magnetic>
                            <p>
                                <a target="blank" href="https://twitter.com/tranhieuhalai">
                                    Twitter
                                </a>
                            </p>
                        </Magnetic>
                        <Magnetic>
                            <p>
                                <a
                                    target="blank"
                                    href="https://www.linkedin.com/in/tranhieuhalai/"
                                >
                                    LinkedIn
                                </a>
                            </p>
                        </Magnetic>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;

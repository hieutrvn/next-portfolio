/* eslint-disable react/no-unescaped-entities */
import styles from "./style.module.scss";
import Image from "next/image";
import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import RoundedButton from "../../common/RoundedButton/rounded-button";
import Magnetic from "../../common/Magnetic/magnetic";
import { useRouter } from "next/navigation";

export default function Contact() {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"],
    });
    const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
    const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);
    const router = useRouter()

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
        <motion.div style={{ y }} ref={container} className={styles.contact}>
            <div className={styles.body}>
                <div className={styles.title}>
                    <span>
                        <div className={styles.imageContainer}>
                            <Image fill={true} alt={"image"} src={`/images/favicon.png`} />
                        </div>
                        <h2>Let's work</h2>
                    </span>
                    <h2>together</h2>
                    <motion.div style={{ x }} className={styles.buttonContainer}>
                        <RoundedButton
                            className={styles.button}
                            backgroundColor={"#334BD3"}
                            onClick={() => { router.push("/contact") }}
                        >
                            <p>Get in touch</p>
                        </RoundedButton>
                    </motion.div>
                    <motion.svg
                        style={{ rotate, scale: 2 }}
                        width="9"
                        height="9"
                        viewBox="0 0 9 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
                            fill="white"
                        />
                    </motion.svg>
                </div>
                <div className={styles.nav}>
                    <RoundedButton
                        className=""
                        onClick={() => { }}
                    >
                        <p>tranhieuhalai@gmail.com</p>
                    </RoundedButton>
                    <RoundedButton
                        className=""
                        onClick={() => { }}
                    >
                        <p>+84 814 519 333</p>
                    </RoundedButton>
                </div>
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
        </motion.div>
    );
}

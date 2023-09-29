
import styles from "./style.module.scss"
import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import RoundedButton from "../../common/RoundedButton/rounded-button";
import { useRouter } from "next/navigation";

interface FilmProps {
    title: string
    desc: string
    btn: string
}

const Film: React.FC<FilmProps> = ({
    title,
    desc,
    btn
}) => {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"],
    });
    const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
    const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);
    const router = useRouter()

    return (
        <>
            <div className={styles.overlay}></div>
            <video
                autoPlay
                loop
                muted
                className={styles.background}
                src="/videos/background.mp4"
            />
            <div className={styles.container}>
                <div className={styles.title}>
                    <h2>{title}</h2>
                    <h2>{desc}</h2>
                    <motion.div style={{ x }} className={styles.buttonContainer}>
                        <RoundedButton
                            className={styles.button}
                            backgroundColor={"#334BD3"}
                            onClick={() => { btn === "home" ? router.push('/') : router.push(`/${btn}`) }}
                        >
                            <p>Back to {btn}</p>
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
            </div>

        </>

    );
}

export default Film;
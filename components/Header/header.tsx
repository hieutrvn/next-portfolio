"use client";

import gsap from "gsap";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./style.module.scss";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Magnetic from "../../common/Magnetic/magnetic";
import RoundedButton from "../../common/RoundedButton/rounded-button";
import NavMenu from "./components/nav-menu";

interface HeaderProps {
    style?: 'home' | string
}

const Header: React.FC<HeaderProps> = ({
    style = 'home'
}) => {

    const header = useRef<HTMLDivElement | null>(null);
    const [isActive, setIsActive] = useState<boolean>(false);
    const pathname = usePathname();
    const button = useRef<HTMLDivElement | null>(null);
    const router = useRouter()

    useEffect(() => {
        if (isActive) setIsActive(false);
    }, [pathname]);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(button.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                start: 0,
                end: window.innerHeight,
                onLeave: () => {
                    gsap.to(button.current, {
                        scale: 1,
                        duration: 0.25,
                        ease: "power1.out",
                    });
                },
                onEnterBack: () => {
                    gsap.to(
                        button.current,
                        {
                            scale: 0,
                            duration: 0.25,
                            ease: "power1.out",
                            onComplete: () => {
                                setIsActive(false);
                            },
                        }
                    );
                },
            },
        });
    }, []);

    return (
        <>
            <div ref={header} className={style === 'home' ? styles.header : `${styles.header} ${styles.header__page}`}>
                <div
                    className={styles.logo}
                    onClick={() => router.push("/")}
                >
                    <p className={styles.copyright}>©</p>
                    <div className={styles.name}>
                        <p className={styles.codeBy}>Code by</p>
                        <p className={styles.fristname}>Hieu</p>
                        <p className={styles.lastname}>Tran</p>
                    </div>
                </div>
                <div className={styles.nav}>
                    <Magnetic>
                        <div
                            className={styles.el}
                            onClick={() => router.push("/work")}
                        >
                            <a>Work</a>
                            <div className={styles.indicator}></div>
                        </div>
                    </Magnetic>
                    <Magnetic>
                        <div
                            className={styles.el}
                            onClick={() => router.push("/about")}
                        >
                            <a>About</a>
                            <div className={styles.indicator}></div>
                        </div>
                    </Magnetic>
                    <Magnetic>
                        <div
                            className={styles.el}
                            onClick={() => router.push("/contact")}
                        >
                            <a>Contact</a>
                            <div className={styles.indicator}></div>
                        </div>
                    </Magnetic>
                </div>
            </div>
            <div ref={button} className={styles.headerButtonContainer}>
                <RoundedButton
                    onClick={() => {
                        setIsActive(!isActive);
                    }}
                    className={styles.button}
                >
                    <div
                        className={`${styles.burger} ${isActive ? styles.burgerActive : ""
                            }`}
                    ></div>
                </RoundedButton>
            </div>
            <AnimatePresence mode="wait">{isActive && <NavMenu />}</AnimatePresence>
        </>
    );
}

export default Header;
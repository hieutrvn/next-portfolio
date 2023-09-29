'use client';
import styles from './style.module.scss'
import { useState, useEffect, useRef } from 'react';
import Project from './components/project';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import Image from 'next/image';
import RoundedButton from '../../common/RoundedButton/rounded-button';
import { useRouter } from 'next/navigation';

const projects = [
    {
        title: "DashBoard",
        src: "c2montreal.png",
        color: "#000000"
    },
    {
        title: "E-Commerce",
        src: "officestudio.png",
        color: "#8C8C8C"
    },
    {
        title: "Spotify",
        src: "spotify.png",
        color: "#EFE8D3"
    },
    {
        title: "Timesheet",
        src: "silencio.png",
        color: "#706D63"
    }
]

const scaleAnimation = {
    initial: { scale: 0, x: "-50%", y: "-50%" },
    enter: { scale: 1, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
    closed: { scale: 0, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] } }
}

export default function Projects() {

    const [modal, setModal] = useState({ active: false, index: 0 })
    const { active, index } = modal;
    const modalContainer = useRef(null);
    const cursor = useRef(null);
    const cursorLabel = useRef(null);
    const router = useRouter();

    let xMoveContainer = useRef<gsap.TweenTarget | null>(null);
    let yMoveContainer = useRef<gsap.TweenTarget | null>(null)
    let xMoveCursor = useRef<gsap.TweenTarget | null>(null)
    let yMoveCursor = useRef<gsap.TweenTarget | null>(null)
    let xMoveCursorLabel = useRef<gsap.TweenTarget | null>(null)
    let yMoveCursorLabel = useRef<gsap.TweenTarget | null>(null)

    useEffect(() => {
        //Move Container
        xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", { duration: 0.8, ease: "power3" })
        yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", { duration: 0.8, ease: "power3" })
        //Move cursor
        xMoveCursor.current = gsap.quickTo(cursor.current, "left", { duration: 0.5, ease: "power3" })
        yMoveCursor.current = gsap.quickTo(cursor.current, "top", { duration: 0.5, ease: "power3" })
        //Move cursor label
        xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", { duration: 0.45, ease: "power3" })
        yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", { duration: 0.45, ease: "power3" })
    }, [])

    const moveItems = (x: number, y: number) => {
        gsap.to(modalContainer.current, { left: x, duration: 0.8, ease: "power3" });
        gsap.to(modalContainer.current, { top: y, duration: 0.8, ease: "power3" });
        gsap.to(cursor.current, { left: x, duration: 0.5, ease: "power3" });
        gsap.to(cursor.current, { top: y, duration: 0.5, ease: "power3" });
        gsap.to(cursorLabel.current, { left: x, duration: 0.45, ease: "power3" });
        gsap.to(cursorLabel.current, { top: y, duration: 0.45, ease: "power3" });
    };

    const manageModal = (active: boolean, index: number, x: number, y: number) => {
        moveItems(x, y)
        setModal({ active, index })
    }

    return (
        <main onMouseMove={(e) => { moveItems(e.clientX, e.clientY) }} className={styles.projects}>
            <div className={styles.body}>
                {
                    projects.map((project, index) => {
                        return <Project index={index} title={project.title} manageModal={manageModal} key={index} />
                    })
                }
            </div>
            <RoundedButton
                className=''
                onClick={() => { router.push("/work"); }}
            >
                <p>More work</p>
            </RoundedButton>
            <>
                <motion.div ref={modalContainer} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"} className={styles.modalContainer}>
                    <div style={{ top: index * -100 + "%" }} className={styles.modalSlider}>
                        {
                            projects.map((project, index) => {
                                const { src, color } = project
                                return <div className={styles.modal} style={{ backgroundColor: color }} key={`modal_${index}`}>
                                    <Image
                                        src={`/images/${src}`}
                                        width={300}
                                        height={0}
                                        alt="image"
                                    />
                                </div>
                            })
                        }
                    </div>
                </motion.div>
                <motion.div ref={cursor} className={styles.cursor} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}></motion.div>
                <motion.div ref={cursorLabel} className={styles.cursorLabel} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}>View</motion.div>
            </>
        </main>
    )
}

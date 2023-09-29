import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import styles from './style.module.scss';
import { TypeofSlider } from '../../type';

interface SlidingVideosProps {
    sliderVideoFirst: TypeofSlider[]
    sliderVideoSecondary: TypeofSlider[]
}

const SlidingVideos: React.FC<SlidingVideosProps> = ({
    sliderVideoFirst,
    sliderVideoSecondary
}) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    })

    const x1 = useTransform(scrollYProgress, [0, 1], [0, 150])
    const x2 = useTransform(scrollYProgress, [0, 1], [0, -150])
    const height = useTransform(scrollYProgress, [0, 0.9], [50, 0])

    return (
        <div ref={container} className={styles.slidingImages}>
            <motion.div style={{ x: x1 }} className={styles.slider}>
                {
                    sliderVideoFirst.map((project, index) => {
                        return <div key={index} className={styles.project} style={{ backgroundColor: project.color }} >
                            <div className={styles.imageContainer}>
                                <video
                                    autoPlay
                                    muted
                                    loop
                                    src={`/videos/${project.src}`} />
                            </div>
                        </div>
                    })
                }
            </motion.div>
            <motion.div style={{ x: x2 }} className={styles.slider}>
                {
                    sliderVideoSecondary.map((project, index) => {
                        return <div key={index} className={styles.project} style={{ backgroundColor: project.color }} >
                            <div key={index} className={styles.imageContainer}>
                                <video
                                    autoPlay
                                    muted
                                    loop
                                    src={`/videos/${project.src}`} />
                            </div>
                        </div>
                    })
                }
            </motion.div>
            <motion.div style={{ height }} className={styles.circleContainer}>
                <div className={styles.circle}></div>
            </motion.div>
        </div>
    )
}

export default SlidingVideos;
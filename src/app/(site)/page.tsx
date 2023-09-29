"use client"

import { useEffect, useState } from "react";
import Landing from '../../../components/Landing/landing'
import { AnimatePresence } from 'framer-motion';
import PerLoader from '../../../components/Preloader/preloader';
import Description from '../../../components/Description/description';
import Projects from '../../../components/Projects/projects';
import SlidingImages from '../../../components/SlidingImages/sliding-images';
import Contact from '../../../components/Contact/contact';
import Header from '../../../components/Header/header';
import { sliderVideoFirst, sliderVideoSecondary, words } from "../../../data";
import SlidingVideos from "../../../components/SlidingVideos/sliding-videos";

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const LocomotiveScroll = (await import("locomotive-scroll")).default;
            const locomotiveScroll = new LocomotiveScroll();

            setTimeout(() => {
                setIsLoading(false);
                document.body.style.cursor = "default";
                window.scrollTo(0, 0);
            }, 2000);
        })();
    }, []);

    return (
        <main >
            <AnimatePresence mode='wait'>
                {isLoading && <PerLoader data={words} />}
            </AnimatePresence>
            <Header />
            <Landing />
            <Description />
            <Projects />
            {/*<SlidingImages
                slider1={slider1}
                slider2={slider2}
            />*/}
            <SlidingVideos
                sliderVideoFirst={sliderVideoFirst}
                sliderVideoSecondary={sliderVideoSecondary}
            />
            <Contact />
        </main>
    )
}

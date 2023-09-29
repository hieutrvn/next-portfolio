"use client"
import Header from "../../../components/Header/header";
import SlidingImages from "../../../components/SlidingImages/sliding-images";
import Contact from "../../../components/Contact/contact";
import { AnimatePresence } from "framer-motion";
import PerLoader from "../../../components/Preloader/preloader";
import { about, sliderImgFirst, sliderImgSecondary } from "../../../data";
import { useEffect, useState } from "react";
import Infor from "../../../components/Infor/infor";

const About = () => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const LocomotiveScroll = (await import("locomotive-scroll")).default;
            const locomotiveScroll = new LocomotiveScroll();

            setTimeout(() => {
                setIsLoading(false);
                document.body.style.cursor = "default";
                window.scrollTo(0, 0);
            }, 500);
        })();
    }, []);

    return (
        <>
            <AnimatePresence mode='wait'>
                {isLoading && <PerLoader data={about} />}
            </AnimatePresence>
            <Header style="about" />
            <Infor />
            <SlidingImages
                sliderImgFirst={sliderImgFirst}
                sliderImgSecondary={sliderImgSecondary}
            />
            <Contact />
        </>
    );
}

export default About;
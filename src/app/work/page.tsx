"use client"

import { AnimatePresence } from "framer-motion";
import PerLoader from "../../../components/Preloader/preloader";
import Header from "../../../components/Header/header";
import { useEffect, useState } from "react";
import Film from "../../../components/Film/film";
import Footer from "../../../components/Footer/footer";
import { work } from "../../../data";

const Work = () => {

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
                {isLoading && <PerLoader data={work} />}
            </AnimatePresence>
            <Header />
            <Film
                title="Work."
                desc="Coming soon!"
                btn="home"
            />
            <Footer />
        </>
    );
}

export default Work;
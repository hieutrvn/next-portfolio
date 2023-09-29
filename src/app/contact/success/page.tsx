"use client"

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import PerLoader from "../../../../components/Preloader/preloader";
import Header from "../../../../components/Header/header";
import { success } from "../../../../data";
import Film from "../../../../components/Film/film";
import Footer from "../../../../components/Footer/footer"

const Success = () => {

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
                {isLoading && <PerLoader data={success} />}
            </AnimatePresence>
            <Header />
            <Film
                title="Success"
                desc="Message sent!"
                btn="contact"
            />
            <Footer />
        </>
    );
}

export default Success;
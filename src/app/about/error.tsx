'use client' // Error components must be Client Components

import { AnimatePresence } from "framer-motion";
import PerLoader from "../../../components/Preloader/preloader";
import Header from "../../../components/Header/header";
import { useEffect, useState } from "react";
import Film from "../../../components/Film/film";
import Footer from "../../../components/Footer/footer";
import { errors } from "../../../data";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
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
                {isLoading && <PerLoader data={errors} />}
            </AnimatePresence>
            <Header />
            <Film
                title="Error."
                desc="Are you lost?"
                btn="home"
            />
            <Footer />
        </>
    )
}
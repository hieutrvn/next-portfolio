"use client"

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import PerLoader from "../../../components/Preloader/preloader";
import Header from "../../../components/Header/header";
import { contact } from "../../../data";
import ContactForm from "../../../components/ContactForm/contact-form";
import Footer from "../../../components/Footer/footer";

const Contact = () => {

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
                {isLoading && <PerLoader data={contact} />}
            </AnimatePresence>
            <Header />
            <ContactForm />
            <Footer style="black" />
        </>
    );
}

export default Contact;
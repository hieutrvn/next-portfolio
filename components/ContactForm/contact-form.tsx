/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import styles from "./style.module.scss"
import { useEffect } from "react"
import Magnetic from "../../common/Magnetic/magnetic";
import { z, ZodType } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

type FormData = {
    name: string
    email: string
    company: string
    service: string
    message: string
}

const ContactForm = () => {
    const router = useRouter()

    const schema: ZodType<FormData> = z.object({
        name: z.string().min(2, { message: "• Please enter a valid name" }),
        email: z.string().email({ message: "• Please enter a valid email address" }),
        company: z.string(),
        service: z.string(),
        message: z.string().min(3, { message: "• Please enter a text between 3 and 3000 characters" }).max(3000),
    })

    const onSubmit = async (data: FormData) => {
        try {
            const response = await fetch('https://formspree.io/f/mbjvzbay', {
                method: 'POST',
                body: JSON.stringify(data),
            });

            if (response.ok) {
                console.log(response.status)
            } else {
                console.error('Fetch error:', response.statusText);
            }
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };

    const {
        register,
        handleSubmit,
        formState,
        formState: { errors, isSubmitSuccessful }
    } = useForm<FormData>({ resolver: zodResolver(schema) })

    useEffect(() => {
        if (formState.isSubmitSuccessful) {
            router.push('/contact/success')
        }
    }, [formState])



    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <div className={styles.title}>
                    <div className={styles.container__title}>
                        <h1>
                            <span>Let's start a </span>
                            <span>project together</span>
                        </h1>
                    </div>
                </div>
                <div className={styles.image}>
                    <div className={styles.imageContainer}>
                        <Image fill={true} alt={"image"} src={`/images/favicon.png`} />
                    </div>
                </div>
            </div>
            <div className={styles.form}>
                <div className={styles.form__main}>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className={styles.form__col}>
                            <label className={styles.label} >What's your name?</label>
                            <input
                                className={styles.field}
                                id="name"
                                type="text"
                                placeholder="John Doe *"
                                {...register("name")}
                            />
                            {errors.name && <span className={styles.fieldErrors}> {errors.name.message} </span>}
                        </div>
                        <div className={styles.form__col}>
                            <label className={styles.label} htmlFor="email">What's your email?</label>
                            <input
                                className={styles.field}
                                id="email"
                                type="email"
                                placeholder="john@doe.com *"
                                {...register("email")}
                            />
                            {errors.email && <span className={styles.fieldErrors}> {errors.email.message} </span>}

                        </div>
                        <div className={styles.form__col}>
                            <label className={styles.label} >What's the name of your organization?</label>
                            <input
                                className={styles.field}
                                id="company"
                                type="text"
                                placeholder="John &amp; Doe ®"
                                {...register("company")}

                            />
                        </div>
                        <div className={styles.form__col}>
                            <label className={styles.label} >What services are you looking for?</label>
                            <input
                                className={styles.field}
                                id="service"
                                type="text"
                                placeholder="Web Design, Web Development ..."
                                {...register("service")}
                            />
                        </div>
                        <div className={styles.form__col}>
                            <label className={styles.label} >Your message</label>
                            <textarea
                                className={styles.field}
                                id="message"
                                rows={8}
                                placeholder="Hello Hieu, can you help me with ... *"
                                {...register("message")}
                            />
                            {errors.message && <span className={styles.fieldErrors}> {errors.message.message} </span>}
                        </div>
                        <Magnetic>
                            <button className={styles.button} type="submit" >
                                <p>
                                    Send it!
                                </p>
                            </button>
                        </Magnetic>
                    </form>

                </div>
                <div className={styles.info}>
                    <h5>Contact Details</h5>
                    <div>
                        <span>
                            <Magnetic>
                                <p className={styles.link}>
                                    <a
                                        href="mailto:tranhieuhalai@gmail.com"
                                    >
                                        tranhieuhalai@gmail.com
                                    </a>
                                </p>
                            </Magnetic>
                        </span>
                        <Magnetic>
                            <p className={styles.link}>
                                <a href="tel:+84814519333">
                                    +84 814 519 333
                                </a>
                            </p>
                        </Magnetic>
                    </div>
                    <h5>Business Details</h5>
                    <div className="links-wrap">
                        <p>Location: Thanh Hoa, Viet Nam</p>
                    </div>
                    <h5>Socials</h5>
                    <div>
                        <span>
                            <Magnetic>
                                <p className={styles.link}>
                                    <a
                                        target="blank"
                                        href="https://www.facebook.com/tranhieuhalai/"
                                    >
                                        Facebook
                                    </a>
                                </p>
                            </Magnetic>
                        </span>
                        <Magnetic>
                            <p className={styles.link}>
                                <a target="blank" href="https://www.instagram.com/hieutrvn/">
                                    Instagram
                                </a>
                            </p>
                        </Magnetic>
                        <Magnetic>
                            <p className={styles.link}>
                                <a target="blank" href="https://twitter.com/tranhieuhalai">
                                    Twitter
                                </a>
                            </p>
                        </Magnetic>
                        <Magnetic>
                            <p className={styles.link}>
                                <a
                                    target="blank"
                                    href="https://www.linkedin.com/in/tranhieuhalai/"
                                >
                                    LinkedIn
                                </a>
                            </p>
                        </Magnetic>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default ContactForm;
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import styles from "./style.module.scss"

const Infor = () => {

    function calculateAge(dateOfBirth: string): number {
        const birthDate = new Date(dateOfBirth);
        const today = new Date();

        const age = today.getFullYear() - birthDate.getFullYear() - (
            (today.getMonth() < birthDate.getMonth() ||
                (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())) ? 1 : 0
        );

        return age;
    }
    const birthDate = "2000-10-27";
    const age = calculateAge(birthDate);

    function calculateYearsAndMonthsExperience(startDate: string): string | null {
        const startDateDate = new Date(startDate);
        const currentDate = new Date();

        if (startDateDate > currentDate) {
            return null; // Start date is in the future
        }

        const yearsExperience = currentDate.getFullYear() - startDateDate.getFullYear();
        const monthsExperience = currentDate.getMonth() - startDateDate.getMonth();

        if (yearsExperience >= 1) {
            if (monthsExperience === 0) {
                return `${yearsExperience} years`;
            } else {
                return `${yearsExperience} years and ${monthsExperience} months`;
            }
        } else {
            return `${monthsExperience} months`;
        }
    }

    const startDateOfWork = "2023-04-01"; // ISO 8601 format (YYYY-MM-DD)
    const result = calculateYearsAndMonthsExperience(startDateOfWork);

    return (
        <>
            <div className={styles.title}>
                <div className={styles.container__title}>
                    <h1>
                        <span>Helping brands thrive </span>
                        <span>in the digital world</span>
                    </h1>
                </div>
            </div>
            <div className={styles.flex__stripe}>
                <div className={styles.stripe}></div>
            </div>
            <div className={styles.container__about}>
                <div className={styles.desc__about}>
                    <p>
                        Hello, My name's Tran Hieu, born in Thanh Hoa, and currently {age} years old. I pursued my education at Duy Tan University and graduated in 2023 with a degree in Software Engineering. I've been working as a Frontend Developer for the past {result}.
                    </p>
                    <p>
                        Throughout my academic and professional journey, I've gained valuable experience in teamwork, the project development process, and have undergone significant shifts in mindset.
                    </p>
                    <p>
                        My greatest strengths lie in problem-solving, teamwork, and effective communication.
                    </p>
                    <p>
                        In terms of personal interests, I have a passion for music, enjoy singing, and regularly engage in sports activities.
                    </p>
                </div>
                <div className={styles.img}>
                    <Image
                        src="/images/aboutme.jpg"
                        fill={true}
                        objectFit="cover"
                        alt="aboutme"
                    />
                </div>
            </div>
        </>
    );
}

export default Infor;
import styles from "./style.module.scss";

export default function Footer() {
    return (
        <div className={styles.footer}>
            <a target="blank" href="https://www.facebook.com/tranhieuhalai/">
                Facebook
            </a>
            <a target="blank" href="https://www.instagram.com/hieutrvn/">
                Instagram
            </a>
            <a target="blank" href="https://twitter.com/tranhieuhalai">
                Twitter
            </a>
            <a target="blank" href="https://www.linkedin.com/in/tranhieuhalai/">
                LinkedIn
            </a>
        </div>
    );
}

import styles from "./style.module.scss";
import iconMail from "../../assets/icon-mail.png";
import woman from "../../assets/woman.png";

export const EmailSending = () => {
    return (
        <section className={styles.emailSection}>
            <img src={woman} alt="woman" />
            <div className={styles.iconEmail}>
                <img src={iconMail} alt="icon mail" />
                <h2>GET IN TOUCH</h2>
            </div>
            <div className={styles.name}>
                <label className={styles.labelName} htmlFor="name">Your name</label>
                <input className={styles.inputName} type="text" id="name" placeholder="type your name here..." />
            </div>
            <div className={styles.emailAndPhone}>
                <div className={styles.email}>
                    <label htmlFor="email">Email*</label>
                    <input type="email" id="email" placeholder="example@example.com" />
                </div>
                <div className={styles.phone}>
                    <label htmlFor="phone">Telephone*</label>
                    <input type="phone" id="phone" placeholder="(  ) ____-____" />
                </div>
            </div>
            <div className={styles.textArea}>
                <label htmlFor="message">Message*</label>
                <textarea
                    name="message"
                    id="message"
                    placeholder="Type what you want to say to us"
                />
            </div>

        </section>
    )
}
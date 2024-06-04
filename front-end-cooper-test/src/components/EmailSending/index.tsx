import styles from "./style.module.scss";
import iconMail from "../../assets/icon-mail.png";
import woman from "../../assets/woman.png";
import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";

export const EmailSending = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    function sendEmail(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if (name === "" || email === "" || phone === "" || message === "") {
            alert("Preencha todos os campos")
            return;
        }

        const templateParams = {
            from_name: name,
            message: message,
            phone: phone,
            email: email,
        }

        emailjs.send(
            "service_p90ylzp",
            "template_1vejco6",
            templateParams,
            "2p1OHf-yfyrjItXGt")
            .then(() => {
                alert("Email enviado");
                setEmail("");
                setMessage("");
                setName("");
                setPhone("");
            }, (err) => {
                console.log("Algo deu errado: ", err)
                alert("Algo deu errado, tente novamente.")
            })

    }

    return (
        <form
            className={styles.emailForm}
            onSubmit={sendEmail}
        >
            <div className={styles.womanImage}>
                <img src={woman} alt="woman" />
            </div>
            <div className={styles.iconEmail}>
                <img src={iconMail} alt="icon mail" />
                <h2>GET IN TOUCH</h2>
            </div>
            <div className={styles.divSection}>
                <div className={styles.name}>
                    <label className={styles.labelName} htmlFor="name">Your name</label>
                    <input
                        className={styles.inputName}
                        type="text"
                        id="name"
                        placeholder="type your name here..."
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </div>
                <div className={styles.emailAndPhone}>
                    <div className={styles.email}>
                        <label htmlFor="email">Email*</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="example@example.com"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </div>
                    <div className={styles.phone}>
                        <label htmlFor="phone">Telephone*</label>
                        <input
                            type="phone"
                            id="phone"
                            placeholder="(  ) ____-____"
                            onChange={(e) => setPhone(e.target.value)}
                            value={phone}
                        />
                    </div>
                </div>
                <div className={styles.textArea}>
                    <label htmlFor="message">Message*</label>
                    <textarea
                        name="message"
                        id="message"
                        placeholder="Type what you want to say to us"
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                    />
                </div>
                <button>SEND NOW</button>
            </div>
        </form>
    )
}
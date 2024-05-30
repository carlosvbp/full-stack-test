import { useState } from "react";
import logo from "../../assets/Logo.png";
import styles from "./style.module.scss";
import { LoginModal } from "../modal/LoginModal";
import { RegisterModal } from "../modal/RegisterModal";


export const Header = () => {
    const [loginModalIsOpen, loginModalSetIsOpen] = useState(false);
    const [registerModalIsOpen, registerModalSetIsOpen] = useState(false);

    return (
        <header className={styles.header}>
            <img src={logo} alt="logo" />
            <div className={styles.headerButtons}>
                <button
                    className={styles.loginButton}
                    onClick={() => loginModalSetIsOpen(true)}>entrar</button>
                {
                    loginModalIsOpen ? <LoginModal setIsOpen={loginModalSetIsOpen} />
                        : null
                }
                <button
                    className={styles.registerButton}
                    onClick={() => registerModalSetIsOpen(true)}>registrar</button>
                {
                    registerModalIsOpen ? <RegisterModal setIsOpen={registerModalSetIsOpen} />
                        : null
                }
            </div>
        </header >
    );
}
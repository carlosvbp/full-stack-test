import logo from "../../assets/Logo.png";
import styles from "./style.module.scss";

export const Header = () => {
    return (
        <header className={styles.header}>
                <img src={logo} alt="logo" />
                <button>entrar</button>
        </header>
    );
};
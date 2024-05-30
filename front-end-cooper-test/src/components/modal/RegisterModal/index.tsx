import styles from "./style.module.scss";
import modalImg from "../../../assets/image 1.png"
import { UserRegisterForm } from "../../forms/UserRegisterForm";

interface TaskProviderProps {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const RegisterModal = ({ setIsOpen }: TaskProviderProps) => {
    return (
        <div className={styles.modalOverlay} role="dialog">
            <div className={styles.modalBox}>
                <button onClick={() => setIsOpen(false)} className={styles.closeButton}>close</button>
                <header className={styles.subtitle}>
                    <img src={modalImg} alt="modal image" />
                    <div>
                        <h1>Register</h1>
                        <h2>to access your list</h2>
                    </div>
                </header>
                <UserRegisterForm />
            </div>
        </div>
    );
};
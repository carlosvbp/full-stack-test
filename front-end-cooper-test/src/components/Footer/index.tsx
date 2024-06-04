import styles from "./style.module.scss";
import greenFooter from "../../assets/greenFooter.png";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerDiv}>
                <h2>Need help?</h2>
                <h2>coopers@coopers.pro</h2>
                <p>© 2021 Coopers. All rights reserved.</p>
                <img src={greenFooter} alt="green footer" />
            </div>
        </footer>
    )
}   
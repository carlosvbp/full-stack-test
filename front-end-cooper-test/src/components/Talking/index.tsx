import styles from "./style.module.scss";
import logo from "../../assets/BG.png";
import table from "../../assets/table.png";
import { Link } from 'react-scroll';

export const Talking = () => {
    return (
        <section>
            <div>
                <div className={styles.title}>
                    <h1>Organize</h1>
                    <h2>your daily jobs</h2>
                </div>
                <div className={styles.subtitle}>
                    <p>The only way to get things done</p>
                    <Link
                        to="tasks"
                        smooth={true}
                        duration={500}>
                        <button>Go to To-do list</button>
                    </Link>
                </div>
            </div>
            <div className={styles.images}>
                <img className={styles.logo} src={logo} alt="logo" />
                <img className={styles.table} src={table} alt="table" />
            </div>
        </section>
    );
};
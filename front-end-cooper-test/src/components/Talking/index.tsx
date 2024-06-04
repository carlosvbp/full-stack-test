import styles from "./style.module.scss";
/* import logo from "../../assets/BG.png";
import table from "../../assets/table.png"; */

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
                    <button>Go to To-do list</button>
                </div>
            </div>
            {/* <div >
                <img className={styles.logo} src={logo} alt="logo" />
                <img className={styles.table} src={table} alt="table" />
            </div> */}
        </section>
    );
};
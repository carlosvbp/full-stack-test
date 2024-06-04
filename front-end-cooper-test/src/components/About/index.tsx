import talking from "../../assets/Image1.png";
import artist from "../../assets/Image2.png";
import sewing from "../../assets/Image3.png";
import styles from "./style.module.scss";

export const About = () => {
    return (
        <ul className={styles.aboutList}>
            <h1 className={styles.aboutTitle}>good things</h1>
            <div className={styles.divCards}>
                <li className={styles.aboutCard}>
                    <img className={styles.aboutImage}
                        src={talking}
                        alt="talking"
                    />
                    <div className={styles.about}>
                        <button>function</button>
                        <p>
                            Organize your daily job enhance
                            your life performance
                        </p>
                        <span>read more</span>
                    </div>
                </li>
                <li className={styles.aboutCard}>
                    <img className={styles.aboutImage}
                        src={artist}
                        alt="artist"
                    />
                    <div className={styles.about}>
                        <button>function</button>
                        <p>
                            Organize your daily job enhance
                            your life performance
                        </p>
                        <span>read more</span>
                    </div>
                </li>
                <li className={styles.aboutCard}>
                    <img className={styles.aboutImage}
                        src={sewing}
                        alt="sewing"
                    />
                    <div className={styles.about}>
                        <button>function</button>
                        <p>
                            Organize your daily job enhance
                            your life performance
                        </p>
                        <span>leia mais</span>
                    </div>
                </li>
            </div>
            <div className={styles.divCards}>
                <li className={styles.aboutCard}>
                    <img className={styles.aboutImage}
                        src={talking}
                        alt="talking"
                    />
                    <div className={styles.about}>
                        <button>function</button>
                        <p>
                            Organize your daily job enhance
                            your life performance
                        </p>
                        <span>read more</span>
                    </div>
                </li>
                <li className={styles.aboutCard}>
                    <img className={styles.aboutImage}
                        src={artist}
                        alt="artist"
                    />
                    <div className={styles.about}>
                        <button>function</button>
                        <p>
                            Organize your daily job enhance
                            your life performance
                        </p>
                        <span>read more</span>
                    </div>
                </li>
                <li className={styles.aboutCard}>
                    <img className={styles.aboutImage}
                        src={sewing}
                        alt="sewing"
                    />
                    <div className={styles.about}>
                        <button>function</button>
                        <p>
                            Organize your daily job enhance
                            your life performance
                        </p>
                        <span>leia mais</span>
                    </div>
                </li>
            </div>
            <div className={styles.divCards}>
                <li className={styles.aboutCard}>
                    <img className={styles.aboutImage}
                        src={talking}
                        alt="talking"
                    />
                    <div className={styles.about}>
                        <button>function</button>
                        <p>
                            Organize your daily job enhance
                            your life performance
                        </p>
                        <span>read more</span>
                    </div>
                </li>
                <li className={styles.aboutCard}>
                    <img className={styles.aboutImage}
                        src={artist}
                        alt="artist"
                    />
                    <div className={styles.about}>
                        <button>function</button>
                        <p>
                            Organize your daily job enhance
                            your life performance
                        </p>
                        <span>read more</span>
                    </div>
                </li>
                <li className={styles.aboutCard}>
                    <img className={styles.aboutImage}
                        src={sewing}
                        alt="sewing"
                    />
                    <div className={styles.about}>
                        <button>function</button>
                        <p>
                            Organize your daily job enhance
                            your life performance
                        </p>
                        <span>leia mais</span>
                    </div>
                </li>
            </div>
        </ul>
    )
}
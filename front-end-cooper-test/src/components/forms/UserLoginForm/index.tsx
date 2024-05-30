import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../providers/UserContext";
import { useContext, useState } from "react";
import { UserCreate } from "../../../interfaces/users.interface";
import { createUserSchema } from "../../../schemas/users.schema";
import styles from "./style.module.scss";

export const UserLoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<UserCreate>({
        resolver: zodResolver(createUserSchema)
    });
    const [loading, setLoading] = useState(false);
    const { userLogin } = useContext(UserContext);

    const taskSubmit = (data: UserCreate) => {
        userLogin(data, setLoading);
    };

    return (
        <form className={styles.row} >
            <div className={styles.box}>
                <div className={styles.input}>
                    <label htmlFor="name">User:</label>
                    <input
                        type="text" id="name"
                        {...register("nickname")}
                        {...(errors.nickname ? { className: styles.error } : {})} />
                    {errors.nickname && <p>{errors.nickname.message}</p>}
                </div>
                <div className={styles.input}>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password" id="password"
                        {...register("password")}
                        {...(errors.password ? { className: styles.error } : {})} />
                    {errors.password && <p>{errors.password.message}</p>}
                </div>
                <div className={styles.signIn}>
                    <button
                        onClick={handleSubmit(taskSubmit)}
                        className={styles.loginButton}>
                        {loading ? "entered..." : "Sign in"}
                    </button>
                </div>
            </div>
        </form>
    );
};
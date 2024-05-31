import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import styles from "./style.module.scss";
import { Task, TaskUpdate } from "../../../interfaces/tasks.interface";
import { editTaskSchema } from "../../../schemas/tasks.schema";
import { TaskContext } from "../../../providers/TaskContext";

interface TaskProviderProps {
    task: Task;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const EditTaskForm = ({ task, setIsOpen }: TaskProviderProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm<TaskUpdate>({
        resolver: zodResolver(editTaskSchema)
    });
    const { editTask } = useContext(TaskContext);

    const taskSubmit = async (data: TaskUpdate) => {
        await editTask(data, task.id, setIsOpen);
    };

    return (
        <form className={styles.row} onSubmit={handleSubmit(taskSubmit)}>
            <div className={styles.box}>
                <div className={styles.input}>
                    <label htmlFor="name">Task name:</label>
                    <input
                        defaultValue={task.name}
                        type="text" id="name"
                        {...register("name")}
                        {...(errors.name ? { className: styles.error } : {})} />
                    {errors.name && <p>{errors.name.message}</p>}
                </div>
                <div className={styles.signIn}>
                    <button
                        className={styles.loginButton}>
                        Edit
                    </button>
                </div>
            </div>
        </form>
    );
};
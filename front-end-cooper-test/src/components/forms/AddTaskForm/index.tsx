import styles from "./style.module.scss";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createTaskSchema } from "../../../schemas/tasks.schema";
import { useContext, useState } from "react";
import { TaskContext } from "../../../providers/TaskContext";
import { TaskCreate } from "../../../interfaces/tasks.interface";

export const AddTaskForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<TaskCreate>({
        resolver: zodResolver(createTaskSchema)
    });
    const { createTask } = useContext(TaskContext);
    const taskSubmit = (data: TaskCreate) => {
        createTask(data);
    };

    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };
    const handleButtonClick = () => {
        setInputValue('');
    };

    return (
        <form className={styles.row} onSubmit={handleSubmit(taskSubmit)}>
            <input
                type="text"
                placeholder="Add your task"
                {...register("name")}
                {...(errors.name ? { className: styles.error } : {})}
                value={inputValue}
                onChange={handleInputChange}
            />
            {errors.name && <p>{errors.name.message}</p>}
            <button onClick={handleButtonClick}>Add</button>
        </form>
    );
};
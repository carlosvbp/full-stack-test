import styles from "./style.module.scss";
import { EditTaskForm } from "../../forms/EditTaskForm";
import { Task } from "../../../interfaces/tasks.interface";

interface TaskProviderProps {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    task: Task
};

export const EditTaskModal = ({ setIsOpen, task }: TaskProviderProps) => {
    return (
        <div className={styles.modalOverlay} role="dialog">
            <div className={styles.modalBox}>
                <button onClick={() => setIsOpen(false)} className={styles.closeButton}>close</button>
                <EditTaskForm task={task} setIsOpen={setIsOpen}/>
            </div>
        </div>
    );
};
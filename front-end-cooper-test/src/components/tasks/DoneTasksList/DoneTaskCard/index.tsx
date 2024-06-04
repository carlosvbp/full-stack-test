import { Task } from "../../../../interfaces/tasks.interface";
import styles from "../style.module.scss";
import { Draggable } from "@hello-pangea/dnd";

interface TaskCardProps {
    task: Task;
    index: number;
}

export const DoneTaskCard = ({ task, index }: TaskCardProps) => {
    return (
        <Draggable draggableId={task.id.toString()} index={index}>
            {(provided) => (
                <li
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    className={styles.taskCard}
                >
                    <p>{task.name}</p>
                </li>
            )}
        </Draggable>
    );
};
import { useContext, useEffect, useState } from "react";
import { Task } from "../../../../interfaces/tasks.interface";
import styles from "../style.module.scss";
import { TaskContext } from "../../../../providers/TaskContext";
import { EditTaskModal } from "../../../modal/EditTaskModal";
import { Draggable } from "@hello-pangea/dnd";

interface TaskCardProps {
    task: Task;
    index: number;
}

export const TaskCard = ({ task, index }: TaskCardProps) => {
    const { deleteTask } = useContext(TaskContext);
    const [editTaskModalIsOpen, editTaskModalSetIsOpen] = useState(false);

    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        const checkedTasks = JSON.parse(localStorage.getItem('checkedTasks') || '{}');
        setIsChecked(!!checkedTasks[task.id]);
    }, [task.id]);
    const handleCheck = () => {
        setIsChecked(!isChecked);
        const checkedTasks = JSON.parse(localStorage.getItem('checkedTasks') || '{}');
        checkedTasks[task.id] = !isChecked;
        localStorage.setItem('checkedTasks', JSON.stringify(checkedTasks));
    };

    return (
        <Draggable draggableId={task.id.toString()} index={index}>
            {(provided) => (
                <li
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    className={styles.taskCard}
                >
                    <p 
                    className={isChecked ? styles.checked : ""}
                     onClick={handleCheck}>
                        {task.name}
                    </p>
                    <div>
                        <span onClick={() => editTaskModalSetIsOpen(true)}>
                            edit
                        </span>
                        {
                            editTaskModalIsOpen ?
                                <EditTaskModal
                                    setIsOpen={editTaskModalSetIsOpen}
                                    task={task}
                                />
                                : null
                        }
                        <span onClick={() => deleteTask(task.id)}>
                            delete
                        </span>
                    </div>
                </li>
            )}
        </Draggable>
    );
};
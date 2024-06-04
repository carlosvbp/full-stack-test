import { useContext } from 'react';
import { TaskContext } from '../../../providers/TaskContext';
import { TaskCard } from './TaskCard';
import styles from "./style.module.scss";
import { Droppable } from '@hello-pangea/dnd';

export const TasksList = () => {
    const { tasks } = useContext(TaskContext);

    return (
        (tasks ?? []).length > 0 ? (
            <Droppable droppableId="tasks" type="TASK" direction="vertical">
                {(provided) => (
                    <ul
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className={styles.listContainer}>
                        {tasks.map((task, index) => (
                            <TaskCard key={task.id} task={task} index={index} />
                        ))}
                        {provided.placeholder}
                    </ul>
                )}
            </Droppable>
        ) : null
    );
};


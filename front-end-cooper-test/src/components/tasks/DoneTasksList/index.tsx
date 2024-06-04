import { useContext } from 'react';
import { TaskContext } from '../../../providers/TaskContext';
import { DoneTaskCard } from './DoneTaskCard';
import styles from "./style.module.scss";
import { Droppable } from '@hello-pangea/dnd';

export const DoneTasksList = () => {
    const { doneTasks } = useContext(TaskContext);

    return (
        (doneTasks ?? []).length > 0 ? (
            <Droppable droppableId="doneTasks" type="TASK" direction="vertical">
                {(provided) => (
                    <ul
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className={styles.listContainer}>
                        {doneTasks.map((task, index) => (
                            <DoneTaskCard key={task.id} task={task} index={index} />
                        ))}
                        {provided.placeholder}
                    </ul>
                )}
            </Droppable>
        ) : null
    );
};
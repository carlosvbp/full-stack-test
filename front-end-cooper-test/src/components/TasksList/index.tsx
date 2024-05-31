import { useContext } from 'react';
import { TaskContext } from '../../providers/TaskContext';
import { TaskCard } from './TaskCard';
import styles from "./style.module.scss";
/* import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd'; */

const TaskList = () => {
    const { tasks, removeAllTasks/* , setTasks */ } = useContext(TaskContext);

    /* const handleOnDragEnd = (result: DropResult) => {
        if (!result.destination) return;

        const items = Array.from(tasks);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setTasks(items);
    }; */

    return (
        (tasks ?? []).length > 0 ? (
            <>
                <ul className={styles.listContainer}>
                    {tasks.map(task => (
                        <TaskCard
                            key={task.id}
                            task={task} />
                    ))}
                    <button
                        onClick={removeAllTasks}
                        className={styles.removeAll}>
                        erase all
                    </button>
                </ul>
            </>
        ) : null
    );
};

export default TaskList;
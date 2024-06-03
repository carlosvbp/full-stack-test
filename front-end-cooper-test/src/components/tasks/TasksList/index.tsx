import { useContext } from 'react';
import { TaskContext } from '../../../providers/TaskContext';
import { TaskCard } from './TaskCard';
import styles from "./style.module.scss";
import { DragDropContext, DropResult, Droppable } from '@hello-pangea/dnd';

export const TasksList = () => {
    const { tasks, removeAllTasks, setTasks, setDoneTasks } = useContext(TaskContext);

    function reorder<T>(list: T[], startIndex: number, endIndex: number): T[] {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
    };

    const onDragEnd = (result: DropResult) => {
        if (!result.destination) {
            return;
        }
        const sourceIndex = result.source.index;
        const destinationIndex = result.destination.index;
        const sourceDroppableId = result.source.droppableId;
        const destinationDroppableId = result.destination.droppableId;

        if (sourceDroppableId === destinationDroppableId) {
            if (sourceDroppableId === "tasks") {
                const items = reorder(tasks, sourceIndex, destinationIndex);
                setTasks(items);
            }
        } else {
            if (sourceDroppableId === "tasks" && destinationDroppableId === "doneTasks") {
                const taskToMove = tasks[sourceIndex];
                taskToMove.done = true;
                setTasks(prevTasks => prevTasks.filter((_, idx) => idx !== sourceIndex));
                setDoneTasks(prevDoneTasks => [...prevDoneTasks, taskToMove]);
            }
        }
    };

    return (
        (tasks ?? []).length > 0 ? (
            <article>
                <DragDropContext onDragEnd={onDragEnd}>
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
                </DragDropContext>
                <button
                    onClick={removeAllTasks}
                    className={styles.removeAll}>
                    erase all
                </button>
            </article >
        ) : null
    );
};


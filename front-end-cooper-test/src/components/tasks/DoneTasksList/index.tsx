import { useContext } from 'react';
import { TaskContext } from '../../../providers/TaskContext';
import { DoneTaskCard } from './DoneTaskCard';
import styles from "./style.module.scss";
import { DragDropContext, DropResult, Droppable } from '@hello-pangea/dnd';

export const DoneTasksList = () => {
    const { tasks, removeAllTasks, setTasks, doneTasks, setDoneTasks } = useContext(TaskContext);

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
            if (sourceDroppableId === "doneTasks") {
                const items = reorder(doneTasks, sourceIndex, destinationIndex);
                setDoneTasks(items);
            }
        } else {    
            if (sourceDroppableId === "doneTasks" && destinationDroppableId === "tasks") {
                const taskToMove = doneTasks[sourceIndex];
                taskToMove.done = false;
                setDoneTasks(prevDoneTasks => prevDoneTasks.filter((_, idx) => idx !== sourceIndex));
                setTasks(prevTasks => [...prevTasks, taskToMove]);
            }
        }
    };

    return (
        (tasks ?? []).length > 0 ? (
            <article>
                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId="doneTasks" type="TASK" direction="vertical">
                        {(provided) => (
                            <ul
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                className={styles.listContainer}>
                                {tasks.map((task, index) => (
                                    <DoneTaskCard key={task.id} task={task} index={index} />
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


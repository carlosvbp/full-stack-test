import styles from "./style.module.scss";
import { AddTaskForm } from "../forms/AddTaskForm";
import { useContext } from "react";
import { TaskContext } from "../../providers/TaskContext";
import { TasksList } from "../tasks/TasksList";
import { DoneTasksList } from "../tasks/DoneTasksList";
import { DragDropContext, DropResult } from "@hello-pangea/dnd";

export const MainContent = () => {
    const { tasks, doneTasks, setTasks, setDoneTasks } = useContext(TaskContext);

    const reorder = <T,>(list: T[], startIndex: number, endIndex: number): T[] => {
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
            } else if (sourceDroppableId === "doneTasks") {
                const items = reorder(doneTasks, sourceIndex, destinationIndex);
                setDoneTasks(items);
            }
        } else {
            if (sourceDroppableId === "tasks" && destinationDroppableId === "doneTasks") {
                const taskToMove = tasks[sourceIndex];
                taskToMove.done = true;
                setTasks(prevTasks => prevTasks.filter((_, idx) => idx !== sourceIndex));
                setDoneTasks(prevDoneTasks => [...prevDoneTasks, taskToMove]);
            } else if (sourceDroppableId === "doneTasks" && destinationDroppableId === "tasks") {
                const taskToMove = doneTasks[sourceIndex];
                taskToMove.done = false;
                setDoneTasks(prevDoneTasks => prevDoneTasks.filter((_, idx) => idx !== sourceIndex));
                setTasks(prevTasks => [...prevTasks, taskToMove]);
            }
        }
    };

    return (
        <main className={styles.container}>
            <header className={styles.topic}>
                <h1>To-do List</h1>
                <p>
                    Drag and drop to set your main priorities,
                    check when done and create what´s new.
                </p>
            </header>
            <section className={styles.sectionsContainer}>
                <DragDropContext onDragEnd={onDragEnd}>
                    <section className={styles.tasksToDo}>
                        <article>
                            <header>
                                <h2>To-do</h2>
                                <div>
                                    <p>Take a breath.</p>
                                    <p>Start doing.</p>
                                </div>
                            </header>
                            <AddTaskForm />
                            <TasksList />
                        </article>
                    </section>
                    <section className={styles.tasksDone}>
                        <article>
                            <header>
                                <h2>Done</h2>
                                <div>
                                    <p>Congratulations!</p>
                                    <span>You have done {doneTasks.length} tasks.</span>
                                </div>
                            </header>
                            <DoneTasksList />
                        </article>
                    </section>
                </DragDropContext>
            </section>
        </main>
    );
};



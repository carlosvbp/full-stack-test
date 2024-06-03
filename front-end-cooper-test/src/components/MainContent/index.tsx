import styles from "./style.module.scss";
import { AddTaskForm } from "../forms/AddTaskForm";
import { useContext } from "react";
import { TaskContext } from "../../providers/TaskContext";
import { DoneTasksList } from "../tasks/DoneTasksList";
import { TasksList } from "../tasks/TasksList";

export const MainContent = () => {
    const { tasks } = useContext(TaskContext);

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
                                <p>Congratulions!</p>
                                <span>You have done {tasks.length} tasks.</span>
                            </div>
                        </header>
                        <DoneTasksList />
                    </article>
                </section>
            </section>
        </main>
    );
};




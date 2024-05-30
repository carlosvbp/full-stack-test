import styles from "./style.module.scss";
import TaskList from "../TasksList";
import { AddTaskForm } from "../forms/AddTaskForm";

export const MainContent = () => {
    return (
        <main className={styles.container}>
            <header className={styles.topic}>
                <h1>To-do List</h1>
                <p>
                    Drag and drop to set your main priorities,
                    check when done and create what´s new.
                </p>
            </header>
            <section>
                <article>
                    <header>
                        <h2>To-do</h2>
                        <div>
                            <p>Take a breath.</p>
                            <p>Start doing.</p>
                        </div>
                    </header>
                    <AddTaskForm />
                    <TaskList />
                </article>
            </section>
        </main>
    );
};


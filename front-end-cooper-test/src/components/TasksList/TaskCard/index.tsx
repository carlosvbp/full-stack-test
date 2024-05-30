import { Task } from "../../../interfaces/tasks.interface";

interface TaskCardProps {
    task: Task;
};

export const TaskCard = ({task}: TaskCardProps) => {
    return (
        <li>
            <div>
                <p>{task.name}</p>
            </div>
        </li>
    );
};
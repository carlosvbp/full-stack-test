import { useContext } from 'react';
import { TaskContext } from '../../providers/TaskContext';
import { TaskCard } from './TaskCard';

const TaskList = () => {
    const { tasks } = useContext(TaskContext);

    return (
        (tasks ?? []).length > 0 ? (
            <ul >
                {tasks.map(task => (
                    <TaskCard key={task.id} task={task} />
                ))}
            </ul>
        ) : null
    );
};

export default TaskList;
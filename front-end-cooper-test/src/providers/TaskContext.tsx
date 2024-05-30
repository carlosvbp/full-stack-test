import { ReactNode, createContext, useEffect, useState } from "react";
import { Task, TaskCreate, TaskUpdate } from "../interfaces/tasks.interface"
import { taskApi } from "../services/api";
import { toast } from "react-toastify";

interface TaskProviderProps {
    children: ReactNode;
};

interface TaskContextValues {
    createTask: (data: TaskCreate) => Promise<void>;
    editTask: (formData: TaskUpdate, taskId: number) => Promise<void>;
    deleteTask: (taskId: number) => Promise<void>
    tasks: Task[];
    editModalIsOpen: boolean;
    setEditModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const TaskContext = createContext<TaskContextValues>({} as TaskContextValues);

export const TaskProvider = ({ children }: TaskProviderProps) => {
    const [tasks, setTasks] = useState([] as Task[]);
    const [editModalIsOpen, setEditModalIsOpen] = useState(false)

    const token = localStorage.getItem("@TOKEN");

    const getTasks = async () => {
        taskApi.defaults.headers.common.Authorization = `Bearer ${token}`;
        try {
            const { data } = await taskApi.get("/tasks");
            setTasks(data)
        } catch (error) {
            console.error("Erro ao buscar tarefas:", error);
            toast.error("Erro ao buscar tarefas. Tente novamente.");
        };
    };

    useEffect(() => {
        if (token) {
            getTasks();
        };
    }, [token]);

    const createTask = async (data: TaskCreate) => {
        try {
            const response = await taskApi.post("/tasks", { ...data }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setTasks(previusTasks => [...previusTasks, response.data]);
            await getTasks();
        } catch (error) {
            console.error("Erro ao criar tarefa:", error);
            toast.error("Erro ao criar tarefa. Tente novamente.");
        }
    };

    const editTask = async (formData: TaskUpdate, taskId: number) => {
        try {
            const { data } = await taskApi.patch(`/tasks/${taskId}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const newTaskList = tasks.map(task => {
                if (task.id === taskId) {
                    return data;
                } else {
                    return task;
                };
            });
            setTasks(newTaskList);
            setEditModalIsOpen(false);
            toast.success("Tarefa editada com sucesso.");
            await getTasks();
        } catch (error) {
            console.error("Erro ao editar tarefa:", error);
            toast.error("Erro ao editar tarefa. Tente novamente.");
        };
    };

    const deleteTask = async (taskId: number) => {
        try {
            await taskApi.delete(`/tasks/${taskId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            toast.success("Tarefa excluída.");
            setTasks((previusTasks) => previusTasks.filter(task => task.id !== taskId));
        } catch (error) {
            console.error("Erro ao deletar tarefa:", error);
            toast.error("Erro ao deletar tarefa. Tente novamente.");
        };
    };

    return (
        <TaskContext.Provider value={{
            createTask,
            editTask,
            deleteTask,
            tasks,
            editModalIsOpen,
            setEditModalIsOpen
        }}>
            {children}
        </TaskContext.Provider>
    );
};
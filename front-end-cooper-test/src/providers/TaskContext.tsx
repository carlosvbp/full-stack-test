import { Dispatch, ReactNode, SetStateAction, createContext, useEffect, useState } from "react";
import { Task, TaskCreate, TaskUpdate } from "../interfaces/tasks.interface"
import { taskApi } from "../services/api";
import { toast } from "react-toastify";

interface TaskProviderProps {
    children: ReactNode;
};

interface TaskContextValues {
    createTask: (data: TaskCreate) => Promise<void>;
    editTask: (
        formData: TaskUpdate,
        taskId: number,
        setIsOpen: Dispatch<SetStateAction<boolean>>) => Promise<void>
    deleteTask: (taskId: number) => Promise<void>
    tasks: Task[];
    editModalIsOpen: boolean;
    setEditModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setTasks: Dispatch<SetStateAction<{
        id: number;
        name: string;
    }[]>>;
    removeAllTasks: () => void;
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
            toast.error("Token expirado, logue novamente.");
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

    const editTask = async (
        formData: TaskUpdate,
        taskId: number,
        setIsOpen: Dispatch<SetStateAction<boolean>>
    ) => {
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
            setIsOpen(false);
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
            setTasks((previusTasks) => previusTasks.filter(task => task.id !== taskId));
        } catch (error) {
            console.error("Erro ao deletar tarefa:", error);
            toast.error("Erro ao deletar tarefa. Tente novamente.");
        };
    };

    const removeAllTasks = () => {
        setTasks([]);
    };

    return (
        <TaskContext.Provider value={{
            createTask,
            editTask,
            deleteTask,
            tasks,
            editModalIsOpen,
            setEditModalIsOpen,
            setTasks,
            removeAllTasks
        }}>
            {children}
        </TaskContext.Provider>
    );
};
import { toast } from "react-toastify";
import { taskApi } from "../services/api";
import { Dispatch, ReactNode, SetStateAction, createContext, useContext } from "react";
import { UserCreate, UserLogin } from "../interfaces/users.interface";
import { TaskContext } from "./TaskContext";

interface UserProviderProps {
    children: ReactNode;
};
interface UserContextValues {
    userRegister: (
        formData: UserCreate,
        setLoading: (loading: boolean) => void,
        setIsOpen: Dispatch<SetStateAction<boolean>>) => Promise<void>
    userLogin: (
        formData: UserLogin,
        setLoading: (loading: boolean) => void) => Promise<void>;
};


export const UserContext = createContext<UserContextValues>({} as UserContextValues);

export const UserProvider = ({ children }: UserProviderProps) => {
    const { getTasks } = useContext(TaskContext);

    const userRegister = async (
        formData: UserCreate,
        setLoading: (loading: boolean) => void,
        setIsOpen: Dispatch<SetStateAction<boolean>>) => {
        try {
            setLoading(true);
            await taskApi.post("/users", formData);
            toast.success("Cadastro realizado");
            setIsOpen(false);
            getTasks();
        } catch (error) {
            console.error("Erro ao cadastrar:", error);
            toast.error("Erro ao cadastrar. Tente novamente.");
        } finally {
            setLoading(false);
        };
    };

    const userLogin = async (formData: UserLogin, setLoading: (loading: boolean) => void) => {
        try {
            setLoading(true);
            const { data } = await taskApi.post("/login", formData);
            taskApi.defaults.headers.common.Authorization = `Bearer ${data.token}`;
            localStorage.setItem("@TOKEN", data.token);
            toast.success("Logado com sucesso.");
            window.location.reload();
        } catch (error) {
            console.error("Erro ao logar:", error);
            toast.error("Erro ao logar. Tente novamente.");
        } finally {
            setLoading(false);
        };
    };

    return (
        <UserContext.Provider value={{
            userRegister,
            userLogin
        }}>
            {children};
        </UserContext.Provider>
    );
};
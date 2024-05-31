import { DashboardPage } from "./pages/DashboardPage";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./providers/UserContext";
import { TaskProvider } from "./providers/TaskContext";

function App() {
  return (
    <>
      <UserProvider>
        <TaskProvider>
          <DashboardPage />
          <ToastContainer autoClose={4 * 1000} />
        </TaskProvider>
      </UserProvider>
    </>
  )
}

export default App

import { DashboardPage } from "./pages/DashboardPage"
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <DashboardPage />
      <ToastContainer autoClose={4 * 1000} />
    </>
  )
}

export default App

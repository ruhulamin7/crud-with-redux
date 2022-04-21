import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from "./components/Counter/Counter";
import Layout from "./components/Layouts/Layout";
import AddTask from "./components/Tasks/AddTask";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import TaskDetail from "./pages/TaskDetail/TaskDetail";
import TaskEditPage from "./pages/TaskEditPage/TaskEditPage";

function App() {
  return (
    <BrowserRouter>
      {/* <Layout>
        <AddTask />
      </Layout> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/task-detail" element={<TaskDetail />} />
        <Route path="/edit/:id" element={<TaskEditPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

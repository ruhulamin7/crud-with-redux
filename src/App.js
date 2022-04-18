import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layouts/Layout";
import AddTask from "./components/Tasks/AddTask";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import TaskDetail from "./pages/TaskDetail/TaskDetail";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;

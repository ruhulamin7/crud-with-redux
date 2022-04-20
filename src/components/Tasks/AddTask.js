import React, { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { MdOutlineAddTask } from "react-icons/md";
import { BiTaskX } from "react-icons/bi";
import TaskList from "./TaskList";
import Counter from "../Counter/Counter";
import CreateTask from "./CreateTask";
import { useDispatch, useSelector } from "react-redux";
import { getTaskDataAction } from "../redux/actions/taskAction";

const AddTask = () => {
  // const [tasks, setTasks] = useState([]);

  const [isCreateMode, setIsCreateMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  // const [isAdded, setIsAdded] = useState(false);

  // https://todo-app37.herokuapp.com/loadTodo

  // useEffect(() => {
  //   fetch("https://todo-app37.herokuapp.com/loadTodo")
  //     .then((res) => res.json())
  //     .then((data) => setTasks(data));
  // }, []);

  useEffect(() => {
    dispatch(getTaskDataAction());
    setIsLoading(false);
  }, []);

  // const initializeData = async () => {
  //   const data = await getTaskDataAction();
  //   // for last data show first
  //   setIsLoading(false);
  // };

  return (
    <div>
      <Container>
        <Counter />

        <div className="add_task">
          <Button
            className="add_task_btn"
            onClick={() => setIsCreateMode(isCreateMode ? false : true)}
            title={isCreateMode ? "Minimize" : "Add New Task"}
          >
            {isCreateMode ? <BiTaskX /> : <MdOutlineAddTask />}
          </Button>
        </div>

        {isCreateMode && <CreateTask />}

        <TaskList tasks={tasks} isLoading={isLoading} />
      </Container>
    </div>
  );
};

export default AddTask;

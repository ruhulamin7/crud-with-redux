import React, { useEffect, useState } from "react";
import { Button, Container, Form, Spinner } from "react-bootstrap";
import { MdOutlineAddTask } from "react-icons/md";
import { BiTaskX } from "react-icons/bi";
import TaskList from "./TaskList";
import { getTaskData, storeTaskData } from "../../services/taskServices";
import axios from "axios";
import Counter from "../Counter/Counter";

const AddTask = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [isCreateMode, setIsCreateMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  // const [isAdded, setIsAdded] = useState(false);

  // https://todo-app37.herokuapp.com/loadTodo

  // useEffect(() => {
  //   fetch("https://todo-app37.herokuapp.com/loadTodo")
  //     .then((res) => res.json())
  //     .then((data) => setTasks(data));
  // }, []);

  useEffect(() => {
    initializeData();
  }, []);

  const initializeData = async () => {
    const data = await getTaskData();
    // for last data sho first
    data.sort();
    data.reverse();

    setTasks(data);
    setIsLoading(false);
  };

  async function handleAddTask(e) {
    e.preventDefault();

    if (!title) {
      alert("Please give a title");
      return;
    } else if (!description) {
      alert("Please give a description");
      return;
    } else if (!priority) {
      alert("Please set priority");
      return;
    }
    const newTask = {
      Title: title,
      Description: description,
      Priority: priority,
    };

    const isAdded = await storeTaskData(newTask);
    if (isAdded) {
      setTitle("");
      setDescription("");
      setPriority("");
      await initializeData();
    } else {
      alert("Something went wrong");
    }

    // setIsAdded(true);
  }

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

        {isCreateMode && (
          <Form onSubmit={handleAddTask} className="add_task_form">
            <h4 className="mb-3">Add New Task</h4>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                onChange={(e) => setTitle(e.target.value)}
                name="title"
                type="text"
                value={title}
                placeholder="Task Title"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                onChange={(e) => setDescription(e.target.value)}
                name="description"
                placeholder="Task Description"
                as="textarea"
                value={description}
                rows={3}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                onChange={(e) => setPriority(e.target.value)}
                name="priority"
                as="select"
                value={priority}
              >
                <option value="">--Select Priority--</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </Form.Control>
            </Form.Group>
            <Button type="submit" variant="success">
              Submit
            </Button>{" "}
          </Form>
        )}

        <TaskList tasks={tasks} isLoading={isLoading} />
      </Container>
    </div>
  );
};

export default AddTask;

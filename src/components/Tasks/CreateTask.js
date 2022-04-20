import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { storeTaskData } from "../../services/taskServices";
import {
  getTaskDataAction,
  storeTaskDataAction,
} from "../redux/actions/taskAction";

const CreateTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");

  const dispatch = useDispatch();

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

    // call api and store to the database
    await storeTaskData(newTask);
    // if (isAdded) {
    //   setTitle("");
    //   setDescription("");
    //   setPriority("");
    // } else {
    //   alert("Something went wrong");
    // }

    dispatch(storeTaskDataAction(newTask));
    // const data = await getTaskDataAction();
    // for last data show first
    // data.sort();
    // data.reverse();
    // dispatch({ type: "GET_TASKS", payload: data });

    // setIsAdded(true);
  }
  return (
    <div>
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
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            onChange={(e) => setDescription(e.target.value)}
            name="description"
            placeholder="Task Description"
            as="textarea"
            value={description}
            rows={3}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
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
    </div>
  );
};

export default CreateTask;

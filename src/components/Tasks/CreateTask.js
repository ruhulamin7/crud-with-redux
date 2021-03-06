import React from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  handleChangeTextInputAction,
  storeTaskDataAction,
} from "../redux/actions/taskAction";

const CreateTask = () => {
  const dispatch = useDispatch();
  const taskForm = useSelector((state) => state.taskReducer.taskForm);
  console.log("useSelector", taskForm);
  // console.log(taskForm);

  const handleChangeText = (name, value) => {
    dispatch(handleChangeTextInputAction(name, value));
  };

  async function handleAddTask(e) {
    e.preventDefault();
    // call api and store to the database

    dispatch(storeTaskDataAction(taskForm));
  }
  return (
    <div>
      <Form onSubmit={handleAddTask} className="add_task_form">
        <h4 className="mb-3">Add New Task</h4>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            onChange={(e) => handleChangeText("Title", e.target.value)}
            name="title"
            type="text"
            value={taskForm.Title}
            placeholder="Task Title"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            onChange={(e) => handleChangeText("Description", e.target.value)}
            name="description"
            placeholder="Task Description"
            as="textarea"
            value={taskForm.Description}
            rows={3}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            onChange={(e) => handleChangeText("Priority", e.target.value)}
            name="priority"
            as="select"
            value={taskForm.Priority}
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

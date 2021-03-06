import React, { Fragment } from "react";
import { Button, Spinner, Table } from "react-bootstrap";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTaskDataAction } from "../redux/actions/taskAction";

const TaskList = ({ tasks, isLoading }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="my_task_area">
        <h2 className="">My Task List</h2>
      </div>

      {isLoading ? (
        <div className="spinner">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <React.Fragment>
          <Table className="task_table" responsive="sm" striped bordered hover>
            <thead>
              <tr>
                <th>SL</th>
                <th>Task Title</th>
                <th>Description</th>
                <th>Priority</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{task.Title}</td>
                  <td>{task.Description}</td>
                  <td>{task.Priority}</td>
                  <td className="action_btns">
                    <Link to={`/edit/${task._id}`}>
                      <Button title="Edit Task" className="btn-success ">
                        <FaPencilAlt />
                      </Button>
                    </Link>

                    <Button
                      onClick={() => dispatch(deleteTaskDataAction(task._id))}
                      title="Delete Task"
                      className="btn-danger"
                    >
                      <FaTrash />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </React.Fragment>
      )}
    </>
  );
};

export default TaskList;

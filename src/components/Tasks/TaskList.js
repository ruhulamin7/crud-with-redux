import { Button, Table } from "react-bootstrap";
import { FaPencilAlt, FaTrash } from "react-icons/fa";

const TaskList = ({ tasks }) => {
  return (
    <div>
      <div className="my_task_area">
        <h2 className="">My Task List</h2>
      </div>
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
                <Button title="Edit Task" className="btn-success ">
                  <FaPencilAlt />
                </Button>
                <Button title="Delete Task" className="btn-danger">
                  <FaTrash />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TaskList;

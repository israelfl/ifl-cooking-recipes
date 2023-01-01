import { useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

function Tasks() {
  const [showTaskDone, setshowTaskDone] = useState(false);
  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <TaskForm />
        <header className="d-flex justify-content-between my-3">
          <span className="h5">
            {showTaskDone ? "Done tasks" : "Pending tasks"}
          </span>
          <button
            className="btn btn-dark btn-sm"
            onClick={() => setshowTaskDone(!showTaskDone)}
          >
            {showTaskDone ? "Show Pending Tasks" : "Show Done Tasks"}
          </button>
        </header>
        <TaskList done={showTaskDone} />
      </div>
    </div>
  );
}

export default Tasks;

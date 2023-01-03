import { useState } from "react";
import { useTasks } from "../../contexts/taskContext";

function TaskForm({ done = false }) {
  const [taskName, setTaskName] = useState("");
  const { createTask, adding } = useTasks();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTask(taskName, done);
    setTaskName("");
  };

  return (
    <form onSubmit={handleSubmit} className="card card-body">
      <input
        type="text"
        name="taskName"
        placeholder="Write a task name"
        onChange={(e) => setTaskName(e.target.value)}
        value={taskName}
        className="form-control mb-2"
      />
      <div className="ms-auto">
        <button className="btn btn-primary btn-sm" disabled={adding}>
          {adding ? "Adding..." : "Add"}
        </button>
      </div>
    </form>
  );
}

export default TaskForm;

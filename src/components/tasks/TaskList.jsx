import { useEffect } from "react";
import { useTasks } from "../../contexts/taskContext";
import TaskCard from "./TaskCard";

function TaskList({ done = false }) {
  const { tasks, getTasks, loading } = useTasks();

  useEffect(() => {
    async function fetchData() {
      await getTasks(done);
    }
    fetchData();
  }, [done]);

  function renderTasks() {
    if (loading) return <p>Loading...</p>;
    else if (!tasks.length) return <p>No tasks found</p>;
    else
      return (
        <div>
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      );
  }

  return <div>{renderTasks()}</div>;
}

export default TaskList;

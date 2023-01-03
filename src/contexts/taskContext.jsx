import { createContext, useContext, useState } from "react";
import { supabase } from "../supabase/client";
import { useAuthContext } from "./authContext";

export const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context)
    throw new Error("useTasks must be used within a TaskContextProvider");
  return context;
};

export const TaskContextProvider = ({ children }) => {
  const { user } = useAuthContext();
  const [tasks, setTasks] = useState([]);
  const [adding, setadding] = useState(false);
  const [loading, setLoading] = useState(true);

  const getTasks = async (done = false) => {
    setLoading(true);
    if (user.id) {
      const { error, data } = await supabase
        .from("tasks")
        .select()
        .eq("userId", user.id)
        .eq("done", done)
        .order("id", { ascending: true });

      if (error) throw error;
      setTasks(data);
      setLoading(false);
    }
  };

  const createTask = async (taskName, done = false) => {
    setadding(true);
    try {
      const { error, data } = await supabase
        .from("tasks")
        .insert({
          name: taskName,
          userId: user.id,
        })
        .select();
      if (error) throw error;
      if (!done) setTasks([...tasks, ...data]);
    } catch (error) {
      console.error(error);
    } finally {
      setadding(false);
    }
  };

  const deleteTask = async (id) => {
    const { error } = await supabase
      .from("tasks")
      .delete()
      .eq("userId", user.id)
      .eq("id", id)
      .select();

    if (error) throw error;

    setTasks(tasks.filter((task) => task.id !== id));
  };

  const updateTask = async (id, updateFields) => {
    const { error } = await supabase
      .from("tasks")
      .update(updateFields)
      .eq("userId", user.id)
      .eq("id", id)
      .select();

    if (error) throw error;

    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        getTasks,
        createTask,
        deleteTask,
        updateTask,
        adding,
        loading,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

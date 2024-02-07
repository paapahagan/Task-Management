import { createContext, useState } from "react";

export const TaskContext = createContext();

function TaskProvider({ children }) {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    const newTask = {
      id: Math.floor(Math.random() * 1000) + 1,
      task: task,
    };
    setTasks([...tasks, newTask]);

    setText("");
  };

  return (
    <TaskContext.Provider
      value={{ addTask, text, setText, tasks, date, setDate }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export default TaskProvider;

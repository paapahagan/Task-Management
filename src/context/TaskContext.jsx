import { createContext, useState } from "react";

export const TaskContext = createContext();

function TaskProvider({ children }) {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [tasks, setTasks] = useState([]);
  const [showTask, setShowTask] = useState();

  const addTask = (task) => {
    const newTask = {
      id: Math.floor(Math.random() * 1000) + 1,
      task: task,
      date: date,
    };
    setTasks([...tasks, newTask]);

    setText("");
    setDate("");
  };

  //Delete Task
  const DeleteTask = (id) => {
    const newTask = tasks.filter((task) => task.id !== id);
    setTasks(newTask);
    console.log(newTask);
  };

  return (
    <TaskContext.Provider
      value={{
        addTask,
        text,
        setText,
        tasks,
        date,
        setDate,
        DeleteTask,
        showTask,
        setShowTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export default TaskProvider;

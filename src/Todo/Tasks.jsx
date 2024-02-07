import { useContext } from "react";
import { TasksDiv } from "../components/Styled/div/div.styles";
import { TaskContext } from "../context/TaskContext";

function Tasks() {
  const { tasks } = useContext(TaskContext);
  return (
    <TasksDiv>
      {tasks.map((task) => {
        return <li key={task.id}>{task.task}</li>;
      })}
    </TasksDiv>
  );
}

export default Tasks;

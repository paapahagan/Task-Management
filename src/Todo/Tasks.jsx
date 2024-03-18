import { useContext } from "react";
import { TasksDiv } from "../components/Styled/div/div.styles";
import { TaskContext } from "../context/TaskContext";
import Item from "./Item";

function Tasks() {
  const { tasks } = useContext(TaskContext);
  //   console.log(tasks);
  return (
    <TasksDiv>
      {tasks.map((task) => {
        return <Item key={task.id} task={task} />;
      })}
    </TasksDiv>
  );
}

export default Tasks;

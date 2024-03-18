import { HeadDiv } from "../components/Styled/div/div.styles";
import { AddButton } from "../components/Styled/Button.styles";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function Header() {
  const { showTask, setShowTask } = useContext(TaskContext);
  return (
    <HeadDiv>
      <h1>Tasks</h1>

      <AddButton onClick={() => setShowTask(!showTask)}>Add Task</AddButton>
    </HeadDiv>
  );
}

export default Header;

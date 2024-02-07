import { DivContainer, TaskForm } from "../components/Styled/div/div.styles";
import { FormInput } from "../components/Styled/input/Input.styles";
import { AddButton } from "../components/Styled/Button.styles";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function Task() {
  const { text, setText, addTask, date, setDate } = useContext(TaskContext);
  return (
    <TaskForm>
      <DivContainer>
        <label>Task</label>
        <FormInput
          placeholder="Enter Task... "
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <label>Time & Date</label>
        <FormInput
          placeholder="Enter Time & Date... "
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </DivContainer>
      <DivContainer>
        <AddButton
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            addTask(text, date);
          }}
        >
          Add Task
        </AddButton>
      </DivContainer>
    </TaskForm>
  );
}

export default Task;

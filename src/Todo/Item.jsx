import { useContext } from "react";
import { HStack, Items } from "../components/Styled/div/div.styles";

import { FaTimes } from "react-icons/fa";
import { TaskContext } from "../context/TaskContext";

function Item({ task }) {
  const { DeleteTask } = useContext(TaskContext);
  return (
    <Items>
      <HStack justifyContent="space-between">
        <h3>{task.task}</h3>
        <FaTimes
          style={{ cursor: "pointer", color: "red" }}
          onClick={() => DeleteTask(task.id)}
        />
      </HStack>

      <p>{task.date}</p>
    </Items>
  );
}

export default Item;

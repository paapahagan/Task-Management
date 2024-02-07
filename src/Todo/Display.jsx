import { DisplayDiv } from "../components/Styled/div/div.styles";
import Header from "./Header";
import Task from "./Task";
import Tasks from "./Tasks";

function Display() {
  return (
    <DisplayDiv>
      <Header />
      <Task />
      <Tasks />
    </DisplayDiv>
  );
}

export default Display;

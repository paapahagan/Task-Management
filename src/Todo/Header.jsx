import { HeadDiv } from "../components/Styled/div/div.styles";
import { AddButton } from "../components/Styled/Button.styles";

function Header() {
  return (
    <HeadDiv>
      <h1>Tasks</h1>
      <AddButton>Add Task</AddButton>
    </HeadDiv>
  );
}

export default Header;

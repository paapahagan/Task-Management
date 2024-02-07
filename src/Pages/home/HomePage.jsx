import { ContainerDiv, InnerDiv } from "../../components/Styled/div/div.styles";
import Display from "../../Todo/Display";

function HomePage() {
  return (
    <ContainerDiv>
      <InnerDiv>
        <h1>Welcome to the home page!</h1>
        <Display />
      </InnerDiv>
    </ContainerDiv>
  );
}

export default HomePage;

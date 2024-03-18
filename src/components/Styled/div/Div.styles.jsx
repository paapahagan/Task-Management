import styled from "styled-components";

export const ContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #8e8d8a;
`;

export const HStack = styled.div`
  display: flex;
  justify-content: ${(props) => props.justifyContent ?? "center"};
`;

export const VStack = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: inherit;
  border-radius: 10px;
  margin: 10px;

  background: #eae7dc; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #d8c3a5,
    #eae7dc
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #d8c3a5,
    #eae7dc
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
  @media (min-width: 600px) {
    width: 50%;
  }
`;

export const InnerDiv = styled.div`
  display: grid;
  align-items: center;
  padding: 40px 20px;
  gap: 30px;
  width: 100%;
  /* text-align: center; */
`;
export const InputDiv = styled(InnerDiv)`
  gap: 0px;
  border: none;
  padding: 0%;
`;

//HEADER
export const HeaderDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;
//Google Button
export const Google = styled.div`
  display: flex;
  justify-content: center;
`;

// Div for Todo
export const HeadDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;

  @media (min-width: 600px) {
    width: 50%;
  }
`;
export const TaskForm = styled.form`
  padding: 10px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  border: 1px solid;
  margin: 5px 0;

  @media (min-width: 600px) {
    width: 50%;
  }
`;
export const DivContainer = styled.div`
  display: grid;
  padding: 10px;
  margin: 0px;
`;

export const DisplayDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

//Task
export const TasksDiv = styled(DivContainer)`
  border: 1px solid black;
  border-radius: 5px;
  width: 100%;

  @media (min-width: 600px) {
    width: 50%;
  }
`;

export const Items = styled(DivContainer)`
  background-color: #90dbee3f;
  margin: 5px;
  border-radius: 5px;
`;

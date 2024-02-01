import GoogleButton from "react-google-button";
import { PrimaryButton } from "../../components/Styled/Button.styles";
import {
  ContainerDiv,
  Google,
  HStack,
  HeaderDiv,
  InnerDiv,
  InputDiv,
  VStack,
} from "../../components/Styled/div/div.styles";
import { Input } from "../../components/Styled/input/Input.styles";

function Login() {
  return (
    <ContainerDiv>
      <VStack>
        <HeaderDiv>
          <h1>Welcome Back</h1>
          <h2>Login</h2>
        </HeaderDiv>
        <InnerDiv>
          <InputDiv>
            <label>Email</label>
            <Input placeholder="Enter your Email..." />
          </InputDiv>
          <InputDiv>
            <label>Password</label>
            <Input type="password" placeholder="Enter your Password..." />
          </InputDiv>
          <PrimaryButton>Login</PrimaryButton>
          <HStack>
            <a href="#">Forgot password?</a>
          </HStack>
          <Google>
            <GoogleButton />
          </Google>
        </InnerDiv>
      </VStack>
    </ContainerDiv>
  );
}

export default Login;

import GoogleButton from "react-google-button";
import { PrimaryButton } from "../../components/Styled/Button.styles";
import {
  ContainerDiv,
  Google,
  HeaderDiv,
  InnerDiv,
  InputDiv,
  VStack,
} from "../../components/Styled/div/div.styles";
import { Input } from "../../components/Styled/input/Input.styles";
import { useContext } from "react";
import { SignUpContext } from "../../context/SignUpContext";

function SignUp() {
  const { register, handleSubmit, control, errors, onSubmit } =
    useContext(SignUpContext);
  return (
    <ContainerDiv>
      <VStack onSubmit={handleSubmit}>
        <HeaderDiv>
          <h1>Sign Up</h1>
        </HeaderDiv>
        <InnerDiv>
          <InputDiv>
            <label>Name</label>
            <Input
              type="text"
              placeholder="Enter your Name..."
              required
              {...register("name")}
            />
          </InputDiv>
          <InputDiv>
            <label>Email</label>
            <Input
              type="email"
              placeholder="Enter your Email..."
              required
              {...register("email")}
            />
            <span style={{ color: "red" }}>{errors.email?.message}</span>
          </InputDiv>
          <InputDiv>
            <label>Password</label>
            <Input
              type="password"
              placeholder="Enter your Password..."
              required
              {...register("password")}
            />
            <span style={{ color: "red" }}>{errors.password?.message}</span>
          </InputDiv>
          <PrimaryButton onClick={handleSubmit}>SignUp</PrimaryButton>

          <Google>
            <GoogleButton />
          </Google>
        </InnerDiv>
      </VStack>
    </ContainerDiv>
  );
}

export default SignUp;

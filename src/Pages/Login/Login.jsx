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
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../../context/LoginContext";

function Login() {
  const { register, handleSubmit, errors, onSubmit } = useContext(LoginContext);
  return (
    <ContainerDiv>
      <VStack onSubmit={handleSubmit(onSubmit)}>
        <HeaderDiv>
          <h1>Welcome Back</h1>
          <h2>Login</h2>
        </HeaderDiv>
        <InnerDiv>
          <InputDiv>
            <label>Email</label>
            <Input
              type="email"
              placeholder="Enter your Email..."
              required
              {...register("email")}
            />
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
          <PrimaryButton type="submit" onClick={handleSubmit(onSubmit)}>
            Login
          </PrimaryButton>
          <HStack>
            <a href="#">Forgot password?</a>
          </HStack>
          <Google>
            <GoogleButton />
          </Google>
          <HStack>
            <p>
              Don't have an account?
              <Link to="/" style={{ color: "white", fontWeight: "bold" }}>
                SignUp
              </Link>
            </p>
          </HStack>
        </InnerDiv>
      </VStack>
    </ContainerDiv>
  );
}

export default Login;

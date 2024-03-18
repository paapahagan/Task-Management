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
import { useContext } from "react";
import { SignUpContext } from "../../context/SignUpContext";
import { Link } from "react-router-dom";

function SignUp() {
  const { register, handleSubmit, errors, onSubmit, handleGoogle } =
    useContext(SignUpContext);
  return (
    <ContainerDiv>
      <VStack onSubmit={handleSubmit(onSubmit)}>
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
          <PrimaryButton onClick={handleSubmit(onSubmit)}>SignUp</PrimaryButton>
          <Google>
            <GoogleButton onClick={handleGoogle} />
          </Google>
          <HStack>
            <p>
              Already have an account?{" "}
              <Link to="/login" style={{ color: "white", fontWeight: "bold" }}>
                Login
              </Link>
            </p>
          </HStack>
        </InnerDiv>
      </VStack>
    </ContainerDiv>
  );
}

export default SignUp;

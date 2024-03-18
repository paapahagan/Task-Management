import { createContext, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { NewSignIn } from "../firebase/Firebase";
import { useNavigate } from "react-router-dom";

const schema = yup.object({
  email: yup.string().email().required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password cannot exceed 20 characters")
    .required("Password is required"),
});

export const LoginContext = createContext();

// eslint-disable-next-line react/prop-types
function LoginProvider({ children }) {
  const [errorMessage, setErrorMessage] = useState();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ mode: "all", resolver: yupResolver(schema) });
  console.log(errors);
  const onSubmit = async (data) => {
    console.log(data);
    try {
      await NewSignIn(data.email, data.password);
      navigate("/home");
    } catch (error) {
      setErrorMessage(data.message);
      console.log(error);
    }
    console.log(data);
  };

  return (
    <LoginContext.Provider
      value={{ register, handleSubmit, control, errors, onSubmit }}
    >
      {children}
    </LoginContext.Provider>
  );
}

export default LoginProvider;

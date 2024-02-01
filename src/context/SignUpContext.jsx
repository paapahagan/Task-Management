import { createContext, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { NewSignUp } from "../firebase/Firebase";

const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password cannot exceed 20 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("Password")], "Passwords must match"),
});

export const SignUpContext = createContext();

function SignUpProvider({ children }) {
  // State for keeping track of form input values
  const [errorMessage, setErrorMessage] = useState();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ mode: "all", resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    try {
      await NewSignUp(data.email, data.password);
    } catch {
      setErrorMessage(data.errorMessage);
    }
  };

  return (
    <SignUpContext.Provider
      value={{
        register,
        handleSubmit,
        control,
        errors,
        onSubmit,
      }}
    >
      {children}
    </SignUpContext.Provider>
  );
}

export default SignUpProvider;
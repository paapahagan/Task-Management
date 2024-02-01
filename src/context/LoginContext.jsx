import { createContext } from "react";

export const LoginContext = createContext();

// eslint-disable-next-line react/prop-types
function LoginProvider({ children }) {
  return <LoginContext.Provider value={{}}>{children}</LoginContext.Provider>;
}

export default LoginProvider;

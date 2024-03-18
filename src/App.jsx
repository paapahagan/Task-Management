import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/home/HomePage";
import SignUp from "./Pages/SignUp/SignUp";
import Login from "./Pages/Login/Login";
import SignUpProvider from "./context/SignUpContext";
import LoginProvider from "./context/LoginContext";

function App() {
  return (
    <Router>
      <SignUpProvider>
        <LoginProvider>
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="login" element={<Login />} />
            <Route path="/home" element={<HomePage />} />
          </Routes>
        </LoginProvider>
      </SignUpProvider>
    </Router>
  );
}

export default App;

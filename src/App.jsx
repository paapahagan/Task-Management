import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/home/HomePage";
import SignUp from "./Pages/SignUp/SignUp";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;

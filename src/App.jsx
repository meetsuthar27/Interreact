import { useState } from "react";
import "./index.css";
import HomePage from "./pages/HomePage";
import UserLoginForm from "./components/user-components/LoginForm/UserLoginForm";

function App() {
  return (
    <>
      <HomePage />
      <UserLoginForm />
    </>
  );
}

export default App;

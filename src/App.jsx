import { useState } from "react";
import "./index.css";
import HomePage from "./pages/HomePage";
import UserLoginForm from "./components/user-components/LoginForm/UserLoginForm";
import CardwithPhoto from "./components/user-components/Card/CardwithPhoto";
import Custom from "./components/user-components/trial/Custom";
import WorkspacePage from "./pages/WorkspacePage";

function App() {
  return (
    <>
      {/* <HomePage /> */}
      {/* <Custom /> */}
      <WorkspacePage />
      {/* <UserLoginForm /> */}
      {/* <CardwithPhoto /> */}
    </>
  );
}

export default App;

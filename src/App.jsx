import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/HomePage";
import Workspace from "./pages/WorkspacePage";
import Custom from "./components/user-components/trial/Custom";

// import ComponentsPage from "./pages/Components";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />{" "}
        {/* Redirect "/" to "/home" */}
        <Route path="/home" element={<Home />} />
        <Route path="/workspace" element={<Workspace />} />
        <Route path="/custom" element={<Custom />} />
        {/* <Route path="/components" element={<ComponentsPage />} /> */}
      </Routes>
    </Router>
  );
};

export default App;

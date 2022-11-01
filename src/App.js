import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<UserList />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;

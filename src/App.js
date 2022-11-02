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
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <Router>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/user/:userId" element={<User />} />
            <Route path="/newUser" element={<NewUser />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;

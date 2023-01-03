import "./App.css";
import { BrowserRouter, Route, Routes /*useNavigate*/ } from "react-router-dom";
import { IconContext } from "react-icons";
import {
  ADMIN,
  LOGIN,
  MYKITCHEN,
  SIGNUP,
  PRIVATE,
  TASKS,
} from "./config/routes/paths";
import { TaskContextProvider } from "./contexts/taskContext";
import { AuthContextProvider } from "./contexts/authContext";
import PublicRoute from "./components/routes/PublicRoute";
import PrivateRoute from "./components/routes/PrivateRoute";
import AdminRoute from "./components/routes/AdminRoute";

// Public routes
import Home from "./pages/public/Home";
import Login from "./pages/public/Login";
import Signup from "./pages/public/Signup";
import NotFound from "./pages/NotFound";

// Private routes
import DashBoard from "./pages/private/Dashboard";
import Tasks from "./pages/private/Tasks";
import MyKitchen from "./pages/private/MyKitchen";

// Admin routes
import Dashboard from "./pages/admin/Dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <IconContext.Provider value={{ color: "#666", size: "1.3em" }}>
          <AuthContextProvider>
            <Routes>
              <Route path="/" element={<PublicRoute />}>
                <Route index element={<Home />} />
                <Route path={LOGIN} element={<Login />} />
                <Route path={SIGNUP} element={<Signup />} />
              </Route>
              <Route path={PRIVATE} element={<PrivateRoute />}>
                <Route index element={<DashBoard />} />
                <Route path={MYKITCHEN} element={<MyKitchen />} />
                <Route
                  path={TASKS}
                  element={
                    <TaskContextProvider>
                      <Tasks />
                    </TaskContextProvider>
                  }
                />
              </Route>
              <Route path={ADMIN} element={<AdminRoute />}>
                <Route
                  index
                  element={
                    <TaskContextProvider>
                      <Dashboard />
                    </TaskContextProvider>
                  }
                />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AuthContextProvider>
        </IconContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;

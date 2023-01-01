import "./App.css";
import { BrowserRouter, Route, Routes /*useNavigate*/ } from "react-router-dom";
import { LOGIN, SIGNUP, TASKS } from "./config/routes/paths";
import { TaskContextProvider } from "./contexts/TaskContext";
import { AuthContextProvider } from "./contexts/authContext";
import PublicRoute from "./components/routes/PublicRoute";
import PrivateRoute from "./components/routes/PrivateRoute";
import Login from "./pages/Login";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

import Tasks from "./pages/Tasks";
import Signup from "./pages/Signup";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <AuthContextProvider>
            <Routes>
              <Route path="/" element={<PublicRoute />}>
                <Route index element={<Home />} />
                <Route path={LOGIN} element={<Login />} />
                <Route path={SIGNUP} element={<Signup />} />
              </Route>
              <Route path={TASKS} element={<PrivateRoute />}>
                <Route
                  index
                  element={
                    <TaskContextProvider>
                      <Tasks />
                    </TaskContextProvider>
                  }
                />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

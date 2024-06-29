import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import DashboardHome from "./Pages/Dashboard/DashboardHome/DashboardHome";
import Otp from "./Pages/Auth/Otp";
import Login from "./Pages/Auth/Login";
import UpdatePassword from "./Pages/Auth/UpdatePassword";
import NotFound from "./404";
import PrivateRoute from "./routes/PrivateRoute";
import MakeAdmin from "./Pages/Dashboard/SubscriptMangement";
import ChangePassword from "./Pages/Dashboard/Setting/ChangePassword";
import Setting from "./Pages/Dashboard/Setting/Setting";
import ForgotPassword from "./Pages/Auth/ForgotPassword";
import UserManagement from "./Pages/Dashboard/UserManagement";
// import TotalSellerList from "./Pages/Dashboard/TotalSellerList";
import Profile from "./Pages/Dashboard/Setting/Profile";

function App() {
  return (
    <>
      <div className="maincontainer">
        <Router>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <PrivateRoute>
                  {" "}
                  <Dashboard />{" "}
                </PrivateRoute>
              }
            >
              <Route path="/" element={<DashboardHome />} />

              <Route path="/make-admin" element={<MakeAdmin />} />
              <Route path="/setting" element={<Setting />} />
              <Route
                path="/setting-change-password"
                element={<ChangePassword />}
              />
              <Route path="/settings-profile" element={<Profile />} />
              <Route path="/user-list" element={<UserManagement />} />
            </Route>

            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/otp" element={<Otp />} />
            <Route path="/update-password" element={<UpdatePassword />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;

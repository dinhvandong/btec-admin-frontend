import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PublicRoute from "./components/PublicRoute";
import { Login } from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import { Home } from "./pages/Home";
import Configuration from "./pages/Configuration";
import ConfigurationCourse from "./pages/configuration/ConfigurationCourse";
import ConfigurationUser from "./pages/configuration/ConfigurationUser";
import ConfigurationTeacher from "./pages/configuration/ConfigurationTeacher";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/"
          element={
            <PublicRoute>
              <Home />
            </PublicRoute>
          }
        />
        <Route
          path="/home"
          element={
            <PublicRoute>
              <Home />
            </PublicRoute>
          }
        />
        <Route
          path="/configuration"
          element={
            <PublicRoute>
              <Configuration />
            </PublicRoute>
          }
        />
        <Route
          path="/configuration/users"
          element={
            <PublicRoute>
              <ConfigurationUser />
            </PublicRoute>
          }
        />
        <Route
          path="/configuration/teacher"
          element={
            <PublicRoute>
              <ConfigurationTeacher />
            </PublicRoute>
          }
        />
        <Route
          path="/configuration/courses"
          element={
            <PublicRoute>
              <ConfigurationCourse />
            </PublicRoute>
          }
        />
        <Route
          path="/configuration/assign-teacher"
          element={
            <PublicRoute>
              <ConfigurationCourse />
            </PublicRoute>
          }
        />
        <Route
          path="/configuration/assign-student"
          element={
            <PublicRoute>
              <ConfigurationCourse />
            </PublicRoute>
          }
        />
        <Route
          path="/configuration/assignments"
          element={
            <PublicRoute>
              <ConfigurationCourse />
            </PublicRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

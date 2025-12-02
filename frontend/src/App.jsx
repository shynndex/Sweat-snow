// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayout from "./components/DashboardLayout";
import Units from "./pages/Units";
import Suppliers from "./pages/Suppliers";
import Login from "./pages/login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <DashboardLayout>
              <div className="text-center py-10 text-gray-500">
                Chào mừng bạn đến với hệ thống!
              </div>
            </DashboardLayout>
          }
        />
        <Route
          path="/don-vi-tinh"
          element={
            <DashboardLayout>
              <Units />
            </DashboardLayout>
          }
        />
        <Route
          path="/nha-cung-cap"
          element={
            <DashboardLayout>
              <Suppliers />
            </DashboardLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

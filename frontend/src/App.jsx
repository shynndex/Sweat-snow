// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import DashboardLayout from './components/DashboardLayout';
import Units from './pages/Units'; // giữ nguyên component
import Suppliers from './pages/Suppliers'; // giữ nguyên component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={
          <DashboardLayout>
            <div className="text-center py-10 text-gray-500">Welcome to the system!</div>
          </DashboardLayout>
        } />
        <Route path="/units" element={
          <DashboardLayout>
            <Units />
          </DashboardLayout>
        } />
        <Route path="/suppliers" element={
          <DashboardLayout>
            <Suppliers />
          </DashboardLayout>
        } />
      </Routes>
    </Router>
  );
}

export default App;
// src/components/DashboardLayout.jsx
import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Header />
        <main className="p-6 pt-20">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
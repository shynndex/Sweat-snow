// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="bg-[#F5B951] text-black py-3 px-6 flex items-center justify-between shadow-md fixed top-0 left-0 right-0 z-50 h-16"> {/* Thêm h-16 để cố định chiều cao */}
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </div>
        <div>
          <div className="font-bold text-lg">Hệ Thống</div>
          <div className="text-sm font-medium">Quản Lý Tiệm Tạp Hoá</div>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full hover:bg-yellow-400 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-5-5.002A6.002 6.002 0 007 11v3.159c0 .538-.214 1.055-.595 1.436L11 18.159c.381.381.896.595 1.436.595h5z" />
          </svg>
        </button>

        <div className="flex items-center space-x-2">
          <img src="https://via.placeholder.com/32" alt="Avatar" className="w-8 h-8 rounded-full border-2 border-white" />
          <span className="font-medium text-sm">Nguyễn Văn Thế</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
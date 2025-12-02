// src/components/Sidebar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const menus = [
    {
      name: 'Trang Chủ',
      path: '/',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 001 1h3m-6 0a1 1 0 001-1v-4a1 1 0 00-1-1h-2a1 1 0 00-1 1v4a1 1 0 001 1m3-11h6m-6 0a1 1 0 00-1 1v4a1 1 0 001 1h6a1 1 0 001-1v-4a1 1 0 00-1-1z" />
        </svg>
      ),
    },
    {
      name: 'Danh mục',
      path: '/danh-muc',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16v2H4V6zm4 8v2h8v-2H8zm-4-4v2h8v-2H4z" />
        </svg>
      ),
      children: [
        { name: 'Nhà cung cấp', path: '/nha-cung-cap' },
        { name: 'Đơn vị tính', path: '/don-vi-tinh' },
        { name: 'Nhập kho', path: '/nhap-kho' },
      ],
    },
    {
      name: 'Sản phẩm',
      path: '/san-pham',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8v6h-8V7z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 13h8v6h-8v-6z" />
        </svg>
      ),
    },
    {
      name: 'Bán hàng',
      path: '/ban-hang',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9l4 4m0 0l-4 4m4-4H7m6 6l-6 6m6-6l6 6" />
        </svg>
      ),
    },
    {
      name: 'Báo cáo - thống kê',
      path: '/bao-cao',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9M9 9l3 3-3 3m12-3a2 2 0 00-2-2h-2a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2v-6z" />
        </svg>
      ),
    },
    {
      name: 'Cài đặt',
      path: '/cai-dat',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-.426 1.038-.426 1.464 0l1.514 1.514c1.038 1.038 1.038 2.704 0 3.742l-1.514 1.514A2.504 2.504 0 009.37 9.75l1.514-1.514A2.504 2.504 0 0012 6.75zM12 12c2.704 0 5 2.296 5 5 0 2.704-2.296 5-5 5-2.704 0-5-2.296-5-5 0-2.704 2.296-5 5-5z" />
        </svg>
      ),
    },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <aside className="w-64 bg-white h-screen fixed left-0 top-0 pb-8 shadow-md z-40">
      <div className="px-6 mb-6">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-2 border border-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </div>
      </div>

      {/* Thêm pt-6 để tạo khoảng trống giữa logo và menu */}
      <nav className="px-4 pt-6">
        {menus.map((menu, index) => (
          <div key={index}>
            <Link
              to={menu.path}
              className={`flex items-center px-4 py-2.5 text-sm font-medium rounded-md mb-1 ${
                isActive(menu.path)
                  ? 'bg-gray-200 text-black'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span className="mr-3">{menu.icon}</span>
              {menu.name}
            </Link>

            {menu.children && (
              <div className="ml-6 mt-1">
                {menu.children.map((child, idx) => (
                  <Link
                    key={idx}
                    to={child.path}
                    className={`block px-4 py-2 text-xs font-medium rounded-md mb-1 ${
                      isActive(child.path)
                        ? 'text-orange-600'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {child.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
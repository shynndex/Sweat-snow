// src/pages/Units.jsx (đã sửa lại)
import React from 'react';

const Units = () => {
  const data = [
    { id: 1, code: 'ĐVT-1', name: 'Hộp', status: 'Hoạt động' },
    { id: 2, code: 'ĐVT-2', name: 'Kg', status: 'Hoạt động' },
    { id: 3, code: 'ĐVT-3', name: 'Cân', status: 'Hoạt động' },
    { id: 4, code: 'ĐVT-4', name: 'Túi', status: 'Không hoạt động' },
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Danh sách đơn vị tính</h2>
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Tìm kiếm"
            className="border border-gray-300 rounded-md px-3 py-2 w-40"
          />
          <button className="bg-[#F5B951] text-black px-4 py-2 rounded-md font-medium hover:bg-yellow-500">
            Thêm mới
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-[#E6C87A]">
              <th className="py-2 px-4 text-left font-bold">STT</th>
              <th className="py-2 px-4 text-left font-bold">Mã</th>
              <th className="py-2 px-4 text-left font-bold">Tên</th>
              <th className="py-2 px-4 text-left font-bold">Trạng thái</th>
              <th className="py-2 px-4 text-left font-bold">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="py-2 px-4">{index + 1}</td>
                <td className="py-2 px-4">{item.code}</td>
                <td className="py-2 px-4 underline">{item.name}</td>
                <td className="py-2 px-4">
                  <span className={item.status === 'Hoạt động' ? 'text-green-600' : 'text-red-600'}>
                    {item.status}
                  </span>
                </td>
                <td className="py-2 px-4">
                  <div className="flex space-x-2">
                    {/* Icon Sửa */}
                    <button className="text-blue-500 hover:text-blue-700">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-5L20 14M5 18h2.262M5 6h2.262m10 12h2.262M5 6h2.262M6 6h12v12H6z" />
                      </svg>
                    </button>
                    {/* Icon Xem */}
                    <button className="text-blue-500 hover:text-blue-700">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                    {/* Icon Xóa */}
                    <button className="text-blue-500 hover:text-blue-700">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-4">
        <div>
          <span>Hiển thị </span>
          <select className="border border-gray-300 rounded-md px-2 py-1">
            <option>10</option>
            <option>20</option>
            <option>50</option>
          </select>
          <span> ▲</span>
        </div>
        <div className="flex items-center space-x-2">
          <span>1-4 of 4</span>
          <button className="border border-gray-300 rounded-md px-3 py-1 hover:bg-gray-100">←</button>
          <button className="border border-gray-300 rounded-md px-3 py-1 bg-gray-200 font-medium">1</button>
          <button className="border border-gray-300 rounded-md px-3 py-1 hover:bg-gray-100">→</button>
        </div>
      </div>
    </div>
  );
};

export default Units;
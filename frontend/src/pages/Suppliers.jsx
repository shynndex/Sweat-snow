// src/pages/Suppliers.jsx
import React, { useState } from 'react';
import SupplierDetailModal from '../components/SupplierDetailModal';
import SupplierAddModal from '../components/SupplierAddModal';
import SupplierEditModal from '../components/SupplierEditModal';
import SupplierDeleteModal from '../components/SupplierDeleteModal';

const Suppliers = () => {
  const [selectedSupplier, setSelectedSupplier] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [suppliers, setSuppliers] = useState([
    { id: 1, code: 'NCC-1', name: 'Nhà cung cấp 1', phone: '0328218261', address: 'Hà Nội', status: 'Hoạt động', email: 'ncc1@gmail.com', note: 'Ghi chú 1', createdAt: '22-1-2025' },
    { id: 2, code: 'NCC-2', name: 'Nhà cung cấp 2', phone: '0328213746', address: 'Ninh Bình', status: 'Hoạt động', email: 'ncc2@gmail.com', note: 'Ghi chú 2', createdAt: '23-1-2025' },
    { id: 3, code: 'NCC-3', name: 'Nhà cung cấp 3', phone: '0382816216', address: 'Nghệ An', status: 'Hoạt động', email: 'ncc3@gmail.com', note: 'Ghi chú 3', createdAt: '24-1-2025' },
    { id: 4, code: 'NCC-4', name: 'Nhà cung cấp 4', phone: '0382748281', address: 'Hung Yên', status: 'Không hoạt động', email: 'ncc4@gmail.com', note: 'Ghi chú 4', createdAt: '25-1-2025' },
  ]);

  const handleViewClick = (supplier) => {
    setSelectedSupplier(supplier);
    setIsModalOpen(true);
  };

  const handleAddClick = () => {
    setIsAddModalOpen(true);
  };

  const handleEditClick = (supplier) => {
    setSelectedSupplier(supplier);
    setIsEditModalOpen(true);
  };

  const handleDeleteClick = (supplier) => {
    setSelectedSupplier(supplier);
    setIsDeleteModalOpen(true);
  };

  const handleSaveNewSupplier = (newSupplierData) => {
    const newSupplier = {
      id: suppliers.length + 1,
      ...newSupplierData,
      status: newSupplierData.status ? 'Hoạt động' : 'Không hoạt động',
      createdAt: new Date().toLocaleDateString('vi-VN'),
    };

    setSuppliers([...suppliers, newSupplier]);
  };

  const handleSaveEditedSupplier = (editedSupplier) => {
    setSuppliers(suppliers.map(s =>
      s.id === editedSupplier.id ? editedSupplier : s
    ));
  };

  const handleConfirmDelete = (supplierId) => {
    setSuppliers(suppliers.filter(s => s.id !== supplierId));
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Danh sách nhà cung cấp</h2>
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Tìm kiếm"
            className="border border-gray-300 rounded-md px-3 py-2 w-40"
          />
          <button
            onClick={handleAddClick}
            className="bg-[#F5B951] text-black px-4 py-2 rounded-md font-medium hover:bg-yellow-500"
          >
            Thêm mới
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-[#E6C87A]">
              <th className="py-2 px-3 text-center font-bold w-12 border-r border-gray-300">STT</th>
              <th className="py-2 px-3 text-center font-bold w-20 border-r border-gray-300">Mã</th>
              <th className="py-2 px-3 text-center font-bold w-32 border-r border-gray-300">Tên</th>
              <th className="py-2 px-3 text-center font-bold w-24 border-r border-gray-300">SĐT</th>
              <th className="py-2 px-3 text-center font-bold w-28 border-r border-gray-300">Địa chỉ</th>
              <th className="py-2 px-3 text-center font-bold w-24 border-r border-gray-300">Trạng thái</th>
              <th className="py-2 px-3 text-center font-bold w-20">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {suppliers.map((item, index) => (
              <tr key={item.id} className={`border-t border-gray-300 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                <td className="py-3 px-3 text-center border-r border-gray-300">{index + 1}</td>
                <td className="py-3 px-3 text-center border-r border-gray-300">{item.code}</td>
                <td className="py-3 px-3 text-center border-r border-gray-300">{item.name}</td>
                <td className="py-3 px-3 text-center border-r border-gray-300">{item.phone}</td>
                <td className="py-3 px-3 text-center border-r border-gray-300">{item.address}</td>
                <td className="py-3 px-3 text-center border-r border-gray-300">
                  <span className={item.status === 'Hoạt động' ? 'text-green-600' : 'text-red-600'}>
                    {item.status}
                  </span>
                </td>
                <td className="py-3 px-3 text-center">
                  <div className="flex justify-center space-x-2">
                    <button
                      className="text-blue-500 hover:text-blue-700"
                      onClick={() => handleViewClick(item)}
                      title="Xem chi tiết"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                    <button
                      className="text-blue-500 hover:text-blue-700"
                      onClick={() => handleEditClick(item)}
                      title="Chỉnh sửa"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                    <button
                      className="text-blue-500 hover:text-blue-700"
                      onClick={() => handleDeleteClick(item)}
                      title="Xóa"
                    >
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
        </div>
        <div className="flex items-center space-x-2">
          <span>1-{suppliers.length} of {suppliers.length}</span>
          <button className="border border-gray-300 rounded-md px-3 py-1 hover:bg-gray-100">←</button>
          <button className="border border-gray-300 rounded-md px-3 py-1 bg-gray-200 font-medium">1</button>
          <button className="border border-gray-300 rounded-md px-3 py-1 hover:bg-gray-100">→</button>
        </div>
      </div>

      {/* Modal chi tiết */}
      <SupplierDetailModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        supplier={selectedSupplier}
      />

      {/* Modal thêm mới */}
      <SupplierAddModal
        open={isAddModalOpen}
        onOpenChange={setIsAddModalOpen}
        onSave={handleSaveNewSupplier}
      />

      {/* Modal chỉnh sửa */}
      <SupplierEditModal
        open={isEditModalOpen}
        onOpenChange={setIsEditModalOpen}
        supplier={selectedSupplier}
        onSave={handleSaveEditedSupplier}
      />

      {/* Modal xác nhận xóa */}
      <SupplierDeleteModal
        open={isDeleteModalOpen}
        onOpenChange={setIsDeleteModalOpen}
        supplier={selectedSupplier}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
};

export default Suppliers;
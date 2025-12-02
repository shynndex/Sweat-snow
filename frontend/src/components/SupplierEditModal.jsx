import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const SupplierEditModal = ({ open, onOpenChange, supplier, onSave }) => {
    const [formData, setFormData] = useState({
        code: '',
        name: '',
        phone: '',
        email: '',
        address: '',
        note: '',
        status: true,
    });

    // Update form data when supplier changes
    useEffect(() => {
        if (supplier) {
            setFormData({
                code: supplier.code || '',
                name: supplier.name || '',
                phone: supplier.phone || '',
                email: supplier.email || '',
                address: supplier.address || '',
                note: supplier.note || '',
                status: supplier.status === 'Hoạt động',
            });
        }
    }, [supplier]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleToggleStatus = () => {
        setFormData(prev => ({
            ...prev,
            status: !prev.status
        }));
    };

    const handleSave = () => {
        // Validation
        if (!formData.code || !formData.name || !formData.phone) {
            alert('Vui lòng nhập đầy đủ các trường bắt buộc (Mã, Tên, Số điện thoại)');
            return;
        }

        const updatedSupplier = {
            ...supplier,
            ...formData,
            status: formData.status ? 'Hoạt động' : 'Không hoạt động',
        };

        onSave && onSave(updatedSupplier);
        onOpenChange(false);
    };

    const handleCancel = () => {
        onOpenChange(false);
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[520px] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-lg font-semibold">Chỉnh sửa nhà cung cấp</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 py-4">
                    <div className="space-y-2">
                        <label className="text-sm font-normal text-gray-700">
                            Mã <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="code"
                            value={formData.code}
                            onChange={handleInputChange}
                            placeholder="Nhập mã nhà cung cấp"
                            className="w-full px-3 py-2.5 border border-gray-300 rounded-md text-gray-700 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F5B951] focus:border-transparent"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-normal text-gray-700">
                            Tên <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Nhập tên nhà cung cấp"
                            className="w-full px-3 py-2.5 border border-gray-300 rounded-md text-gray-700 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F5B951] focus:border-transparent"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-normal text-gray-700">
                            Số điện thoại <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Nhập số điện thoại"
                            className="w-full px-3 py-2.5 border border-gray-300 rounded-md text-gray-700 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F5B951] focus:border-transparent"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-normal text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Nhập email"
                            className="w-full px-3 py-2.5 border border-gray-300 rounded-md text-gray-700 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F5B951] focus:border-transparent"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-normal text-gray-700">Địa chỉ</label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            placeholder="Nhập địa chỉ"
                            className="w-full px-3 py-2.5 border border-gray-300 rounded-md text-gray-700 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F5B951] focus:border-transparent"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-normal text-gray-700">Ghi chú</label>
                        <input
                            type="text"
                            name="note"
                            value={formData.note}
                            onChange={handleInputChange}
                            placeholder="Nhập ghi chú"
                            className="w-full px-3 py-2.5 border border-gray-300 rounded-md text-gray-700 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F5B951] focus:border-transparent"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-normal text-gray-700">Trạng thái</label>
                        <div className="flex items-center py-1">
                            <button
                                type="button"
                                onClick={handleToggleStatus}
                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${formData.status ? 'bg-[#F5B951]' : 'bg-gray-300'
                                    }`}
                            >
                                <span
                                    className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-sm transition-transform ${formData.status ? 'translate-x-6' : 'translate-x-1'
                                        }`}
                                />
                            </button>
                        </div>
                    </div>
                </div>
                <DialogFooter className="mt-2 flex gap-2">
                    <Button
                        type="button"
                        onClick={handleCancel}
                        variant="outline"
                        className="bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 font-medium px-6"
                    >
                        Hủy
                    </Button>
                    <Button
                        type="button"
                        onClick={handleSave}
                        className="bg-[#F5B951] text-black hover:bg-[#E5A941] font-medium px-6"
                    >
                        Lưu
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default SupplierEditModal;

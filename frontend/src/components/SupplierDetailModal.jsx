import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const SupplierDetailModal = ({ open, onOpenChange, supplier }) => {
    if (!supplier) return null;

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-lg font-semibold">Xem chi tiết nhà cung cấp</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 py-4">
                    <div className="space-y-2">
                        <label className="text-sm font-normal text-gray-700">Mã</label>
                        <input
                            type="text"
                            value={supplier.code}
                            readOnly
                            className="w-full px-3 py-2.5 border border-gray-300 rounded-md bg-gray-50 text-gray-600 text-sm"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-normal text-gray-700">Tên</label>
                        <input
                            type="text"
                            value={supplier.name}
                            readOnly
                            className="w-full px-3 py-2.5 border border-gray-300 rounded-md bg-gray-50 text-gray-600 text-sm"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-normal text-gray-700">Số điện thoại</label>
                        <input
                            type="text"
                            value={supplier.phone}
                            readOnly
                            className="w-full px-3 py-2.5 border border-gray-300 rounded-md bg-gray-50 text-gray-600 text-sm"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-normal text-gray-700">Email</label>
                        <input
                            type="text"
                            value={supplier.email || 'ncc1@gmail.com'}
                            readOnly
                            className="w-full px-3 py-2.5 border border-gray-300 rounded-md bg-gray-50 text-gray-600 text-sm"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-normal text-gray-700">Địa chỉ</label>
                        <input
                            type="text"
                            value={supplier.address}
                            readOnly
                            className="w-full px-3 py-2.5 border border-gray-300 rounded-md bg-gray-50 text-gray-600 text-sm"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-normal text-gray-700">Ghi chú</label>
                        <input
                            type="text"
                            value={supplier.note || 'Nhập ghi chú'}
                            readOnly
                            className="w-full px-3 py-2.5 border border-gray-300 rounded-md bg-gray-50 text-gray-600 text-sm"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-normal text-gray-700">Ngày tạo</label>
                        <input
                            type="text"
                            value={supplier.createdAt || '22-1-2025'}
                            readOnly
                            className="w-full px-3 py-2.5 border border-gray-300 rounded-md bg-gray-50 text-gray-600 text-sm"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-normal text-gray-700">Trạng thái</label>
                        <div className="flex items-center py-1">
                            <button
                                type="button"
                                disabled
                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${supplier.status === 'Hoạt động' ? 'bg-[#F5B951]' : 'bg-gray-300'
                                    }`}
                            >
                                <span
                                    className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-sm transition-transform ${supplier.status === 'Hoạt động' ? 'translate-x-6' : 'translate-x-1'
                                        }`}
                                />
                            </button>
                        </div>
                    </div>
                </div>
                <DialogFooter className="mt-2">
                    <Button
                        type="button"
                        onClick={() => onOpenChange(false)}
                        className="bg-[#F5B951] text-black hover:bg-[#E5A941] font-medium px-6"
                    >
                        Đóng
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default SupplierDetailModal;
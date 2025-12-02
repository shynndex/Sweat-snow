import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const SupplierDeleteModal = ({ open, onOpenChange, supplier, onConfirm }) => {
    if (!supplier) return null;

    const handleDelete = () => {
        onConfirm && onConfirm(supplier.id);
        onOpenChange(false);
    };

    const handleCancel = () => {
        onOpenChange(false);
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[450px]">
                <DialogHeader>
                    <DialogTitle className="text-lg font-semibold">Xóa nhà cung cấp</DialogTitle>
                </DialogHeader>
                <div className="py-6">
                    <p className="text-center text-gray-700">
                        Bạn chắc chắn muốn xóa "{supplier.name}" ?
                    </p>
                </div>
                <DialogFooter className="flex gap-2">
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
                        onClick={handleDelete}
                        className="bg-[#F5B951] text-black hover:bg-[#E5A941] font-medium px-6"
                    >
                        Xóa
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default SupplierDeleteModal;

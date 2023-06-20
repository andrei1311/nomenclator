import React from "react";
import { ProductForm } from "../product-form";

export const EditModal = ({ onClose, onSubmit, product }) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center modal bg-gray-500/50 "
      onClick={onClose}
    >
      <div
        className="bg-white modal-content w-96"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header p-2.5 flex justify-between">
          <h4 className="m-0">Editeaza produs</h4>
          <button onClick={onClose} className="text-gray-400">
            X
          </button>
        </div>
        <div className="modal-body p-2.5 border-t">
          <ProductForm
            initialData={product}
            onSubmit={(data) => {
              onSubmit(data);
              onClose();
            }}
          />
        </div>
      </div>
    </div>
  );
};

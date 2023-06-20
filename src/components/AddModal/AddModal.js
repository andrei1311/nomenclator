import React from "react";
import { generateRandomId } from "../../libs";
import { ProductForm } from "../product-form";

export const AddModal = ({ onClose, onSubmit }) => {
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
          <h4 className="m-0">Adauga produs</h4>
          <button onClick={onClose} className="text-gray-400">
            X
          </button>
        </div>
        <div className="modal-body p-2.5 border-t">
          <ProductForm
            onSubmit={(data) => {
              onSubmit({ ...data, id: generateRandomId() });
              onClose();
            }}
          />
        </div>
      </div>
    </div>
  );
};

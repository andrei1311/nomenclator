import React, { useState } from "react";
import { EditModal } from "../EditModal/EditModal";
import { AddModal } from "../AddModal/AddModal";
import { useLocalStorage } from "@mantine/hooks";

const Table = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [products, setProducts] = useLocalStorage({
    key: "products",
    defaultValue: [],
  });
  const [editingProductId, setEditingProductId] = useState(null);
  const updateProduct = (data) => {
    setProducts(
      products.map((product) => (product.id === data.id ? data : product))
    );
  };

  const editingProduct = editingProductId
    ? products.find((product) => product.id === editingProductId)
    : null;

  return (
    <div>
      <div>
        <div className="flex m-10">
          <button
            className="p-2 text-white rounded-full bg-cyan-700"
            onClick={() => setShowAddModal(true)}
          >
            Adauga produs
          </button>
          {showAddModal ? (
            <AddModal
              onClose={() => setShowAddModal(false)}
              onSubmit={(data) => {
                setProducts([...products, data]);
              }}
            />
          ) : null}
        </div>
        <div className="flex justify-center p-10 align-middle">
          <table className="border table-auto">
            <thead className="border">
              <tr className="p-2 border">
                <th className="p-2 border">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                    />
                  </svg>
                </th>
                <th className="p-2 border">Nume</th>
                <th className="p-2 border">Cod</th>
                <th className="p-2 border">Procent TVA </th>
                <th className="p-2 border">Pret achizitie</th>
                <th className="p-2 border">Pret amanunt</th>
                <th className="p-2 border">Stare</th>
              </tr>
            </thead>
            <tbody className="p-2 border">
              {products.map((product) => (
                <tr className="p-2 border" key={product.id}>
                  <td className="p-2 border">
                    <button
                      className="bg-green-600 rounded-lg"
                      onClick={() => setEditingProductId(product.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                        />
                      </svg>
                    </button>
                  </td>
                  <td className="p-2 border">{product.name}</td>
                  <td className="p-2 border">{product.code}</td>
                  <td className="p-2 border">{product.vatPercentage}</td>
                  <td className="p-2 border">{product.purchasePrice}</td>
                  <td className="p-2 border">{product.sellingPrice}</td>
                  <td className="p-2 border">{product.status}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {editingProduct ? (
            <EditModal
              product={editingProduct}
              onSubmit={updateProduct}
              onClose={() => setEditingProductId(null)}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Table;

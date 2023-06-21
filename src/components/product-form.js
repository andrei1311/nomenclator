import React, { useState } from "react";

const defaultValues = {
  name: "",
  code: "",
  vatPercentage: "",
  purchasePrice: "",
  sellingPrice: "",
  status: "",
};

const inactiveProductStyle = {
  backgroundColor: "lightgray",
};

export const ProductForm = ({ onSubmit, initialData = {} }) => {
  const [data, setData] = useState({
    ...defaultValues,
    ...initialData,
  });

  const handleFieldChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form
      onSubmit={(ev) => {
        ev.preventDefault();
        onSubmit(data);
      }}
    >
      <div className="w-full">
        <div className="relative flex mb-2">
          <input
            required
            name="name"
            type="text"
            className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none mt-10"
            value={data.name}
            onChange={handleFieldChange}
          />
          <label className="pointer-events-none absolute left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out">
            Nume produs:
          </label>
        </div>
        <div className="relative flex mb-6">
          <input
            required
            type="text"
            className="peer min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none mt-10"
            name="code"
            value={data.code}
            onChange={handleFieldChange}
          />
          <label className="pointer-events-none absolute left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out">
            Cod produs:
          </label>
        </div>
        <div className="relative flex mb-6">
          <input
            required
            type="number"
            className="peer min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none mt-10"
            name="vatPercentage"
            value={data.vatPercentage}
            onChange={handleFieldChange}
          />
          <label className="pointer-events-none absolute left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out">
            Procent TVA:
          </label>
        </div>
        <div className="relative flex mb-6">
          <input
            type="number"
            className="peer min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none mt-10"
            name="purchasePrice"
            value={data.purchasePrice}
            onChange={handleFieldChange}
          />
          <label className="pointer-events-none absolute left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out">
            Pret achizitie:
          </label>
        </div>
        <div className="relative flex mb-6">
          <input
            type="number"
            className="peer min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none mt-10"
            name="sellingPrice"
            value={data.sellingPrice}
            onChange={handleFieldChange}
          />
          <label className="pointer-events-none absolute left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out">
            Pret amanunt:
          </label>
        </div>
        <div className="relative flex mb-6">
          <select
            className="peer min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none mt-10 text-center"
            name="status"
            value={data.status}
            onChange={handleFieldChange}
            required
          >
            <option></option>
            <option value="active">Activ</option>
            <option value="inactive">Inactiv</option>
          </select>
          <label className="pointer-events-none absolute left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out text-center">
            Stare produs:
          </label>
        </div>
      </div>
      <div className="flex justify-evenly">
        <button
          type="button"
          className="inline-block w-full rounded-full bg-red-500 m-2 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
          onClick={() => {
            setData({
              ...defaultValues,
              ...initialData,
            });
          }}
        >
          Reseteaza
        </button>

        <button
          type="submit"
          className="inline-block w-full rounded-full bg-blue-500 m-2 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
        >
          Salveaza
        </button>
      </div>
    </form>
  );
};

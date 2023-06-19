import React from "react";
import DateRange from "../DateRange/DateRange";

const EditModal = (props) => {
  if (!props.showEditModal) {
    return null;
  }

  return (
    <div
      className="modal fixed inset-0 bg-gray-500/50  flex items-center justify-center "
      onClick={props.onClose}
    >
      <div
        className="modal-content bg-white w-96"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header p-2.5 flex justify-between">
          <h4 className="m-0">Editeaza produs</h4>
          <button onClick={props.onClose} className="text-gray-400">
            X
          </button>
        </div>
        <div className="modal-body p-2.5 border-t">
          <form className="flex">
            <div className="w-full">
              <div className="relative mb-2 flex">
                <input
                  type="text"
                  className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none mt-10"
                  aria-describedby="emailHelp"
                />
                <label className="pointer-events-none absolute left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out">
                  Nume produs:
                </label>
              </div>
              <div className="relative mb-6 flex">
                <input
                  type="tel"
                  className="peer min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none mt-10"
                />
                <label className="pointer-events-none absolute left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out">
                  Cod produs:
                </label>
              </div>
              <div className="relative mb-6 flex">
                <input
                  type="tel"
                  className="peer min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none mt-10"
                />
                <label className="pointer-events-none absolute left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out">
                  Procent TVA:
                </label>
              </div>
              <div className="relative mb-6 flex">
                <input
                  type="tel"
                  className="peer min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none mt-10"
                />
                <label className="pointer-events-none absolute left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out">
                  Pret achizitie:
                </label>
              </div>
              <div className="relative mb-6 flex">
                <input
                  type="tel"
                  className="peer min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none mt-10"
                />
                <label className="pointer-events-none absolute left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out">
                  Pret amanunt:
                </label>
              </div>
              <div className="relative mb-6 flex">
                <select className="peer min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none mt-10 text-center">
                  <option>Activ</option>
                  <option>Inactiv</option>
                </select>
                <label className="pointer-events-none absolute left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out text-center">
                  Stare produs:
                </label>
              </div>

              <DateRange />
            </div>
          </form>
          <div className="flex justify-evenly">
            <button
              onClick={props.onClose}
              className="inline-block w-full rounded-full bg-red-500 m-2 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Reseteaza
            </button>

            <button
              onClick={props.onClose}
              className="inline-block w-full rounded-full bg-blue-500 m-2 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Salveaza
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;

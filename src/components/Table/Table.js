import React from "react";

const Table = () => {
  return (
    <div className="flex align-middle justify-center p-10">
      <table className="table-auto border">
        <thead className="border">
          <tr className="border p-2">
            <th className="border p-2">
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
            <th className="border p-2">Nume</th>
            <th className="border p-2">Cod</th>
            <th className="border p-2">Procent TVA </th>
            <th className="border p-2">Pret achizitie</th>
            <th className="border p-2">Pret amanunt</th>
            <th className="border p-2">Stare</th>
          </tr>
        </thead>
        <tbody className="border p-2">
          <tr className="border p-2 bg-green-300">
            <td className="border p-2">
              <button className="rounded-lg bg-green-600">
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
            <td className="border p-2">
              The Sliding Mr. Bones (Next Stop, Pottersville)
            </td>
            <td className="border p-2">Malcolm Lockyer</td>
            <td className="border p-2">1961</td>
            <td className="border p-2">1961</td>
            <td className="border p-2">1961</td>
            <td className="border p-2">1961</td>
          </tr>
          <tr className="border p-2">
            <td className="border p-2">
              <button>
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
            <td className="border p-2">Witchy Woman</td>
            <td className="border p-2">The Eagles</td>
            <td className="border p-2">1972</td>
            <td className="border p-2">1972</td>
            <td className="border p-2">1972</td>
            <td className="border p-2">1972</td>
          </tr>
          <tr className="border p-2">
            <td className="border p-2">
              <button>
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
            <td className="border p-2">Shining Star</td>
            <td className="border p-2">Earth, Wind, and Fire</td>
            <td className="border p-2">1975</td>
            <td className="border p-2">1975</td>
            <td className="border p-2">1975</td>
            <td className="border p-2">1975</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;

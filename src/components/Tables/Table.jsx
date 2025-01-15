import React from "react";
import { Link } from "react-router-dom";

function Table({
  thNo_1,
  thNo_2,
  thNo_3,
  thNo_4,
  thNo_5,
  data,
  bg,
  handleUpdate,
  handleDelete,
}) {
  return (
    <div className="w-full">
      <table
        style={{ backgroundColor: bg ?? "white" }}
        className="table-auto w-full text-left bg-gray-50 rounded-2xl"
      >
        <thead>
          <tr className="bg-blue-400">
            <th className="p-1 border-blue-gray-100 bg-blue-gray-50/50">
              <p className="block font-sans text-xs md:text-sm font-bold text-black opacity-70 text-center text-wrap">
                {thNo_1}
              </p>
            </th>
            <th className="p-1 border-blue-gray-100 bg-blue-gray-50/50">
              <p className="block font-sans text-xs md:text-sm font-bold text-black opacity-70 text-center text-wrap">
                {thNo_2}
              </p>
            </th>
            <th className="p-1 border-blue-gray-100 bg-blue-gray-50/50">
              <p className="block font-sans text-xs md:text-sm font-bold text-black opacity-70 text-center text-wrap">
                {thNo_3}
              </p>
            </th>
            <th className="p-1 py-4 border-blue-gray-100 bg-blue-gray-50/50">
              <p className="font-sans text-xs md:text-sm font-bold text-black text-center text-wrap">
                {thNo_4}
              </p>
            </th>
            <th className="p-1 py-4 border-blue-gray-100 bg-blue-gray-50/50 col-span-3">
              <p className="font-sans text-xs md:text-sm font-bold text-black text-center text-wrap">
                {thNo_5}
              </p>
            </th>
          </tr>
          
        </thead>

        <tbody>
        <tr>
          <td style={{display:'none'}} id="showUserError" colSpan="5" className="text-center font-bold p-4 text-red-600 bg-gray-300"></td>
          </tr>
          {data.map((data, id = 1) => (
            <tr key={data.id}>
              <td className="px-1 border-b border-blue-gray-50 text-center">
                <p className="block text-[7px] md:text-sm lg:text-sm xl:text-sm 2xl:text-sm font-normal text-blue-gray-900 text-center">
                  {id + 1}
                </p>
              </td>
              <td className="px-1  border-b border-blue-gray-50 text-center">
                <p className="text-blue-gray-900 text-[7px] md:text-sm lg:text-sm xl:text-sm 2xl:text-sm font-normal text-center">
                  {data.name}
                </p>
              </td>
              <td className="px-1  border-b border-blue-gray-50 text-center">
                <p className="font-sans text-[7px] md:text-sm lg:text-sm xl:text-sm 2xl:text-sm font-normal text-blue-gray-900 text-center">
                  {data.email}
                </p>
              </td>
              <td className="px-1 py-4 border-b border-blue-gray-50 text-center ">
                <p className="text-center text-[7px] md:text-sm lg:text-sm xl:text-sm 2xl:text-sm font-normal text-blue-gray-900">
                  {data.username}
                </p>
              </td>
              <td className="flex px-1 py-4 border-b border-blue-gray-50 text-center items-center justify-center">
                <Link
                  to={`/userView/${data.id}`}
                  type="button"
                  className="flex mx-2 px-3 py-1 hover:bg-blue-800 text-center text-[7px] md:text-sm lg:text-sm xl:text-sm 2xl:text-sm font-normal text-blue-gray-900 bg-blue-600 rounded-lg text-white"
                >
                  View
                </Link>
                <button
                  type="button"
                  onClick={() => handleUpdate(data.id)}
                  className="flex mx-2 px-3 py-1 hover:bg-green-600 text-center text-[7px] md:text-sm lg:text-sm xl:text-sm 2xl:text-sm font-normal text-blue-gray-900 bg-green-400 rounded-lg"
                >
                  <svg
                    className="h-3 w-2 mr-1 text-red-500 md:h-5 md:w-4 lg:h-5 lg:w-4 xl:h-5 xl:w-4"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {" "}
                    <path stroke="none" d="M0 0h24v24H0z" />{" "}
                    <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />{" "}
                    <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                  </svg>
                  Edit
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete(data.id)}
                  className="flex mx-2 px-3 py-1 hover:bg-red-600 text-center text-[7px] text-white md:text-sm lg:text-sm xl:text-sm 2xl:text-sm font-normal text-blue-gray-900 bg-red-700 rounded-lg"
                >
                  <svg
                    className=" h-3 text-gray-300 w-2 mr-1 md:h-5 md:w-4 lg:h-5 lg:w-4 xl:h-5 xl:w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 16"
                  >
                    <path d="M19 0H1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1ZM2 6v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6H2Zm11 3a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0h2a1 1 0 0 1 2 0v1Z"></path>
                  </svg>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;

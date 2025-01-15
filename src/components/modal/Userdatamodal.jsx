import React, { useEffect, useState } from 'react'

function Userdatamodal({handleSubmit, closeModal , modalData, setdata, btnName}) {
    
    return (
        <div
          id="authentication-modal"
          tabIndex="-1"
          className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-60 mt-32 justify-center items-center w-full md:inset-0"
        >
          <div className="grid grid-cols-4  p-4 mx-auto w-full max-w-lg ">
            <div className=" p-4 mx-auto w-full  col-span-4 ">
              <div className=" bg-white rounded-lg shadow">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {btnName} User
                  </h3>
                  <button
                    onClick={() => closeModal()}
                    type="button"
                    className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                    data-modal-hide="authentication-modal"
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>

                <div className="p-4 md:p-5">
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        onChange={(e) =>
                            setdata({ ...modalData, name: e.target.value })
                        }
                        value={modalData.name}
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="name@company.com"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        onChange={(e) =>
                            setdata({ ...modalData, email: e.target.value })
                        }
                        value={modalData.email}
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="name@company.com"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="username"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Username
                      </label>
                      <input
                        type="text"
                        name="username"
                        onChange={(e) =>
                            setdata({ ...modalData, username: e.target.value })
                        }
                        value={modalData.username}
                        id="username"
                        placeholder="Username"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                      {btnName}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Userdatamodal

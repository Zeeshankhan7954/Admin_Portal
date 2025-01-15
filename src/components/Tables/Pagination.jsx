import React from 'react'

function Pagination({numberPerPage, totalPages, paginate, currentPage, prePage, NextPage}) {
    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(totalPages/numberPerPage); i++) {
        pageNumber.push(i);
    }
     
    return (
        <div className="flex items-center justify-between p-1  border-blue-gray-50">
                <button
                  className="select-none rounded-lg border border-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                  onClick={() => prePage()}
                  >
                  Previous
                </button>
                <div className="flex items-center gap-2">
                    {pageNumber.map((number)=>(
                        
                        <button
                        key={number}
                        className={`relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg border border-gray-900 text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ${number === currentPage && 'bg-gray-900/20'}`}
                        type="button"
                        onClick={() => paginate(number)}
                        >
                        <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                          {number}
                        </span>
                        </button>
                    ))}
                  
                </div>
                <button
                  className="select-none rounded-lg border border-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                  onClick={() => NextPage()}
                >
                  Next
                </button>
              </div>
    )
}

export default Pagination

import React from 'react'

function Table_1({pages, loading}) {
    
        if (loading){
        return (
        <table className="w-full text-left table-auto min-w-max">
                  <thead>
                    <tr>
                      <th className="p-4  border-blue-gray-100 bg-blue-gray-50/50">
                        <p className="block font-sans text-sm antialiased font-bold leading-none text-black opacity-70 text-center">
                          Book On
                        </p>
                      </th>
                      <th className="p-4  border-blue-gray-100 bg-blue-gray-50/50">
                        <p className="block font-sans text-sm antialiased font-bold leading-none text-black opacity-70 text-center">
                          Book Off
                        </p>
                      </th>
                      <th className="p-4  border-blue-gray-100 bg-blue-gray-50/50">
                        <p className="block font-sans text-sm antialiased font-bold leading-none text-black opacity-70 text-center">
                          Date
                        </p>
                      </th>
                      <th className="p-4  border-blue-gray-100 bg-blue-gray-50/50">
                        <p className="block font-sans text-sm antialiased font-bold leading-none text-black opacity-70 text-center">
                          Actions
                        </p>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-4 border-b border-blue-gray-50">
                        <div className="flex items-center gap-2">
                          <h1 className='text-2xl font-bold'>Loading....</h1>
                        </div>
                      </td>
                      
                    </tr>
                  </tbody>
                </table>
    )}

    return (
        <div>
            <table className="w-full text-left table-auto bg-gray-50 rounded-2xl">
                  <thead>
                    <tr>
                      <th className="p-4  border-blue-gray-100 bg-blue-gray-50/50">
                        <p className="block font-sans text-sm antialiased font-bold leading-none text-black opacity-70 text-center">
                          Book On
                        </p>
                      </th>
                      <th className="p-4  border-blue-gray-100 bg-blue-gray-50/50">
                        <p className="block font-sans text-sm antialiased font-bold leading-none text-black opacity-70 text-center">
                          Book Off
                        </p>
                      </th>
                      <th className="p-4  border-blue-gray-100 bg-blue-gray-50/50">
                        <p className="block font-sans text-sm antialiased font-bold leading-none text-black opacity-70 text-center">
                          Date
                        </p>
                      </th>
                      <th className="p-4  border-blue-gray-100 bg-blue-gray-50/50">
                        <p className="block font-sans text-sm antialiased font-bold leading-none text-black text-center">
                          Actions
                        </p>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {pages.map((data) => (
                        <tr key={data.id}>
                      <td className="p-4 border-b border-blue-gray-50">
                        <div className="flex items-center gap-2">
                          <img
                            src={data.img}
                            alt="Spotify"
                            className="relative inline-block h-16 w-12 !rounded-full border border-blue-gray-50 bg-blue-gray-50/50 object-contain object-center p-1"
                          />
                          <div>
                            <p className="text-xs font-thin text-blue-gray-900 mx-3">
                              {data.book_on}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 border-b border-blue-gray-50">
                        <div className="flex items-center gap-2">
                          <img
                            src={data.img}
                            alt="Spotify"
                            className="relative inline-block h-16 w-12 !rounded-full border border-blue-gray-50 bg-blue-gray-50/50 object-contain object-center p-1"
                          />
                          <div>
                          <p className="text-xs font-thin text-blue-gray-900 mx-3">
                              {data.book_off}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 border-b border-blue-gray-50">
                        <p className=" font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 text-center">
                          {data.id}
                        </p>
                      </td>

                      <td className="p-4 border-b border-blue-gray-50">
                        <div className="bg-[#DFE9EA] p-2 hover:bg-[#051A31] rounded-full">
                          <p className="text-blue-800 hover:text-blue-100 text-xs font-bold text-center">
                            Generate Report
                          </p>
                        </div>
                      </td>
                    </tr>))}
                  </tbody>
                </table>
        </div>
    )
}

export default Table_1

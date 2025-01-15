import React from "react";

function ProjectData({name, numbers, width,bgColor}) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-2">
      <div className="flex items-center mb-4">
        <div className="w-8 h-8 flex justify-center items-center rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-yellow-500"
          >
            <path d="M12 2l5 7H7l5-7zm1.53 1.94l3.97 5.53H6.5l3.97-5.53zM2 10v2l5 10h10l5-10v-2H2zm2.05 2H19.95L16 20H8l-3.95-8z" />
          </svg>
        </div>
        <div className="float-right text-end w-full">
          <h4 className="text-[#898F91]">{name}</h4>
          <p className="text-xl font-semibold text-gray-800">{numbers}</p>
        </div>
      </div>

      <div className="">
        <div className="overflow-hidden h-1 text-xs flex rounded bg-gray-200">
          <div
            style={{ width: `${width}%`, backgroundColor: `${bgColor || "green"}` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-400"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default ProjectData;

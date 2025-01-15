import React, { useEffect, useState } from "react";
import PieChart from "../../components/ChartJS/PieChart";
import BarChart from "../../components/ChartJS/BarChart";
import UserCard from "../../components/Cards/UserCard";
import { UserData } from "../../components/Api/Data";
import DoughnutChart from "../../components/ChartJS/DoughnutChart";
import ProjectData from "../../components/Cards/ProjectData";
import { useNavigate, GetToken } from "../../components";

function Dashboard() {
  const [pieChartData, setPieChartData] = useState({
    labels: [2018, 2019, 2020, 2021],
    datasets: [
      {
        label: "user Gained",
        data: [10000, 20000, 30000, 40000],
        backgroundColor: [
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
          "#9453e7",
          "#774ee0",
          "#ff7c9a",
          "#ff9f43",
          "#ffcc5c",
          "#ffeb3b",
        ],
      },
    ],
  });
  const [dougChartData, setDougChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "",
        data: [20000, 5000],
        backgroundColor: [
          "#ff7c9a",
          "#CAC9F3",
          "#2a71d0",
          "#9453e7",
          "#774ee0",
          "#ff7c9a",
          "#ff9f43",
          "#ffcc5c",
          "#ffeb3b",
        ],
      },
    ],
  });

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "user Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "#50AF95",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
          "#9453e7",
          "#774ee0",
          "#ff7c9a",
          "#ff9f43",
          "#ffcc5c",
          "#ffeb3b",
          "#C1C1C1",
          "#6DD4FF",
          "#E43D30",
          "#0078D4",
          "#2EA043",
          "#CAC9F3",
        ],
      },
    ],
  });

  const token = GetToken();
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 border-2 mt-14 bg-[#F2F5F7]">
        <h1 className="text-3xl mb-4">
          <b>Dashboard</b>
        </h1>
        <div className="grid grid-cols-4 gap-4 mb-4 ">
          <div className="flex items-center justify-center  rounded bg-white col-span-4 md:col-span-4 lg:col-span-2 xl:col-span-1 2xl:col-span-1  sm:col-span-4">
            <PieChart chartData={pieChartData} />
          </div>
          <div className="flex items-center justify-center  rounded bg-white col-span-4 md:col-span-4 lg:col-span-2 xl:col-span-2 2xl:col-span-2  sm:col-span-4">
            <BarChart chartData={pieChartData} />
          </div>
          <div className=" items-center justify-center rounded bg-white col-span-4 md:col-span-4 lg:col-span-2 xl:col-span-1 2xl:col-span-1  sm:col-span-4">
            <UserCard />
          </div>
        </div>

        <div className="grid grid-cols-6  gap-4 mb-4">
          <div className="flex items-center justify-center rounded bg-white  col-span-6 md:col-span-6 lg:col-span-3 xl:col-span-4 2xl:col-span-4  sm:col-span-6">
            <BarChart chartData={userData} />
          </div>
          <div className=" items-center justify-center rounded bg-white  col-span-6 md:col-span-6 lg:col-span-3 xl:col-span-2 2xl:col-span-2  sm:col-span-6">
            <h1 className="p-4">Overall Process</h1>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-1">
                <div className="bg-[#F8F9FA] ml-7 p-2">
                  <h1 className="text-center text-[#44A2D2]">P1-Launch Date</h1>
                  <p className="text-center text-[#9B9FA3] text-sm">
                    Tuesday, 25 December 2018
                  </p>
                  <h1 className="text-center text-xl">180 Days</h1>
                </div>
              </div>
              <div className="col-span-1 h-36 w-40 -mt-8 m-auto">
                <DoughnutChart chartData={dougChartData} />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4 pt-4 bg-[#F2F5F7]">
              <div className="col-span-1">
                <div className="bg-white shadow-lg rounded-lg p-2">
                  <div className="flex items-center mb-4">
                    <div className="bg-yellow-500 w-8 h-8 flex justify-center items-center rounded-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 text-white"
                      >
                        <path d="M12 2l5 7H7l5-7zm1.53 1.94l3.97 5.53H6.5l3.97-5.53zM2 10v2l5 10h10l5-10v-2H2zm2.05 2H19.95L16 20H8l-3.95-8z" />
                      </svg>
                    </div>
                    <div className="mx-auto w-1 float-right">
                      <h4 className="text-[#898F91]">Projects</h4>
                      <p className="text-2xl font-semibold text-gray-800 ml-7">
                        35
                      </p>
                    </div>
                  </div>

                  <div className="">
                    <div className="overflow-hidden h-1 text-xs flex rounded bg-gray-200">
                      <div
                        style={{ width: "35%" }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-400"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-1">
                <ProjectData
                  name={"Member"}
                  numbers={12}
                  width={50}
                  bgColor={"#777EDD"}
                />
              </div>
              <div className="col-span-1">
                <ProjectData
                  name={"Tasks"}
                  numbers={35}
                  width={45}
                  bgColor={"#0ACF97"}
                />
              </div>
              <div className="col-span-1">
                <ProjectData
                  name={"Budget"}
                  numbers={"$18090"}
                  width={40}
                  bgColor={"#FF679B"}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 mb-4">
          <div className="flex items-center justify-center rounded bg-white h-28 dark:bg-gray-800 col-span-3">
            <p className="text-2xl text-gray-400 dark:text-white"></p>
          </div>
          <div className="flex items-center justify-center rounded bg-white h-28 dark:bg-gray-800">
            {/* <div className="bg-white shadow-lg rounded-lg p-4 w-full">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-500 w-8 h-8 flex justify-center items-center rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-white"
                  >
                    <path d="M12 2l5 7H7l5-7zm1.53 1.94l3.97 5.53H6.5l3.97-5.53zM2 10v2l5 10h10l5-10v-2H2zm2.05 2H19.95L16 20H8l-3.95-8z" />
                  </svg>
                </div>
                <div className="mx-auto">
                  <h4 className="text-white">Projects</h4>
                  <p className="text-3xl font-semibold text-gray-800">35</p>
                </div>
              </div>

              <div className="relative pt-1">
                <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                  <div
                    style={{ width: "35%" }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-400"
                  ></div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center justify-center rounded bg-white h-28 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-white">
              <svg
                className="w-3.5 h-3.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </p>
          </div>
          <div className="flex items-center justify-center rounded bg-white h-28 dark:bg-gray-800">
            {/* <div className="bg-white shadow-lg rounded-lg p-4 w-full">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-500 w-8 h-8 flex justify-center items-center rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-white"
                  >
                    <path d="M12 2l5 7H7l5-7zm1.53 1.94l3.97 5.53H6.5l3.97-5.53zM2 10v2l5 10h10l5-10v-2H2zm2.05 2H19.95L16 20H8l-3.95-8z" />
                  </svg>
                </div>
                <div className="mx-auto">
                  <h4 className="text-white">Projects</h4>
                  <p className="text-3xl font-semibold text-gray-800">35</p>
                </div>
              </div>

              <div className="relative pt-1">
                <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                  <div
                    style={{ width: "35%" }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-400"
                  ></div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

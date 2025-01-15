import React, { useState, useEffect } from "react";
import e6 from "../../assets/Image/e6.jpg";
import { TableData } from "../../components/Api/TableApi";
import Table_1 from "../../components/Tables/Table_1";
import Pagination from "../../components/Tables/Pagination";
import PersonalInfo from "../../components/Form/PersonalInfo";
import { GetToken, useNavigate } from "../../components";

function List() {
  const token = GetToken();

  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

  const [showModal, setShowModal] = useState(false);
  const [personalInfo, setPersonalInfo] = useState(false);
  const [timeSheet, setTimeSheet] = useState(true);

  const [phoneNumber, setPhoneNumber] = useState(447700900077);
  const [email, setEmail] = useState("howardpatterson@gmail.com");
  const [transportMode, setTransportMode] = useState("None");
  const [activationCode, setActivationCode] = useState("1234");
  const [accountStatus, setAccountStatus] = useState("Inactive");
  const [location, setLocation] = useState("B69 3BH");
  const [warning, setWarning] = useState("Warning");
  const [siaNumber, setSiaNumber] = useState("1234757767765734");

  const [phoneNumberShow, setPhoneNumberShow] = useState("");
  const [emailShow, setEmailShow] = useState("");
  const [transportModeShow, setTransportModeShow] = useState("");
  const [activationCodeShow, setActivationCodeShow] = useState("");
  const [accountStatusShow, setAccountStatusShow] = useState("");
  const [locationShow, setLocationShow] = useState("");
  const [warningShow, setWarningShow] = useState("");
  const [siaNumberShow, setSiaNumberShow] = useState("");

  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [numberPerPage, setNumberPerPage] = useState(5);

  useEffect(() => {
    setLoading(true);
    setPages(TableData);
    setLoading(false);
  }, []);
  const lastPage = currentPage * numberPerPage;
  const firstPage = lastPage - numberPerPage;
  const currentnumber = pages.slice(firstPage, lastPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const prePage = () =>
    currentPage > 1 ? setCurrentPage(currentPage - 1) : "";
  const NextPage = () =>
    currentPage < pages.length / numberPerPage
      ? setCurrentPage(currentPage + 1)
      : "";

  const hendelEditForm = (e) => {
    e.preventDefault();
    console.log(1);

    setShowModal(false);
    setPhoneNumberShow(phoneNumber);
    setEmailShow(email);
    setTransportModeShow(transportMode);
    setActivationCodeShow(activationCode);
    setAccountStatusShow(accountStatus);
    setLocationShow(location);
    setWarningShow(warning);
    setSiaNumberShow(siaNumber);
  };

  const showPersonalInfo = () => {
    setPersonalInfo(true);
    setTimeSheet(false);
  };
  const showTimeSheet = () => {
    setTimeSheet(true);
    setPersonalInfo(false);
  };

  return (
    <>
      <div className="p-4 sm:ml-64">
        <div className="p-4  mt-10 ">
          <h1 className="text-sm mb-4">
            <b>Security Members</b>
          </h1>
          <div className="grid grid-cols-4 gap-4 mb-4 ">
            <div className="flex rounded bg-white col-span-4 md:col-span-4 lg:col-span-4 xl:col-span-4 2xl:col-span-4  sm:col-span-4">
              <div className=" h-28   mt-2 ">
                <img className="h-24 rounded-3xl " src={e6} alt="" />
              </div>
              <div className="ml-4 mt-2 ">
                <h1 className="text-3xl font-medium">Zeeshan Khan</h1>
                <p className="mt-1 font-thin">Zeeshankhan@gmail.com</p>
                <p className=" font-thin">+44 7700 00077</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-6 gap-4 mb-1 ">
            <div className="flex rounded bg-white col-span-6 md:col-span-6 lg:col-span-4 xl:col-span-4 2xl:col-span-4  sm:col-span-6">
              <nav className="">
                <div className=" px-0 sm:px-6 lg:px-0">
                  <div className="relative flex items-center justify-between">
                    <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
                      <div className="">
                        <div className="flex space-x-2">
                          <a
                            className="rounded-md px-3 py-2 text-sm font-medium bg-[#E9F0EE]  text-gray-500 hover:bg-gray-700 hover:text-white"
                            aria-current="page"
                          >
                            Employee Verifecation
                          </a>
                          <a
                            href="#"
                            className={`rounded-md px-3 py-2 text-sm font-medium bg-[#E9F0EE] text-gray-500 hover:bg-gray-700 hover:text-white ${
                              personalInfo ? "bg-gray-700 text-white" : ""
                            }`}
                            onClick={showPersonalInfo}
                          >
                            Personal Info
                          </a>
                          <a
                            href="#"
                            className={`rounded-md px-3 py-2 text-sm font-medium bg-[#E9F0EE] text-gray-500 hover:bg-gray-700 hover:text-white ${
                              timeSheet ? "bg-gray-700 text-white" : ""
                            }`}
                            onClick={showTimeSheet}
                          >
                            Timesheet
                          </a>
                          <a
                            href="#"
                            className="rounded-md px-3 py-2 text-sm font-medium bg-[#E9F0EE] text-gray-500 hover:bg-gray-700 hover:text-white"
                          >
                            Rota
                          </a>
                          <a
                            href="#"
                            className="rounded-md px-3 py-2 text-sm font-medium bg-[#E9F0EE] text-gray-500 hover:bg-gray-700 hover:text-white"
                          >
                            Account
                          </a>
                          <a
                            href="#"
                            className="rounded-md px-3 py-2 text-sm font-medium bg-[#E9F0EE] text-gray-500 hover:bg-gray-700 hover:text-white"
                          >
                            Payslips
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
            <div
              className={`flex rounded bg-white col-span-6 md:col-span-6 lg:col-span-4 xl:col-span-4 2xl:col-span-4  sm:col-span-6 ${
                personalInfo ? "hidden" : ""
              }`}
            >
              <div className="relative flex flex-col w-full h-full text-gray-700 bg-white  rounded-xl">
                <div className="p-6 px-0 ">
                  <Table_1 pages={currentnumber} loading={loading} />
                </div>
                <Pagination
                  numberPerPage={numberPerPage}
                  totalPages={pages.length}
                  paginate={paginate}
                  prePage={prePage}
                  NextPage={NextPage}
                  currentPage={currentPage}
                />
              </div>
            </div>
            <div
              className={`rounded bg-white ${
                personalInfo ? "" : "xl:-mt-14"
              } col-span-6 md:col-span-6 md:mt-0 sm:mt-0 lg:col-span-2 xl:col-span-2 2xl:col-span-2  sm:col-span-6`}
            >
              <h1 className="text-center text-2xl -mt-0 font-bold m-auto">
                Worker Info
              </h1>
              <div
                className={` bg-[#EAF1EF]  rounded-3xl p-2 mt-10 ${
                  personalInfo ? "hidden" : ""
                }`}
              >
                <div className="">
                  <div className="flex">
                    <h1 className="p-2 font-bold w-80">Howard Patterson</h1>
                    <div className="w-full text-end">
                      <button
                        className="bg-[#353535] text-white active:bg-pink-600 font-bold text-sm px-3 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-3 mt-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(true)}
                      >
                        Edits
                      </button>
                    </div>
                  </div>
                  <div>
                    <p className="p-2 text-xs">Phone Number</p>
                  </div>
                  <div>
                    <p className="pl-2 text-sm font-thin">
                      {phoneNumberShow || "+44 7700 900077"}
                    </p>
                  </div>

                  <div>
                    <p className="p-2 text-xs">Email</p>
                  </div>
                  <div>
                    <p className="pl-2 text-sm font-thin">
                      {emailShow || "howardpatterson@gmail.com"}
                    </p>
                  </div>

                  <div>
                    <p className="p-2 text-xs">Transport Mode</p>
                  </div>
                  <div>
                    <p className="pl-2 text-sm font-thin">
                      {transportModeShow || "None"}
                    </p>
                  </div>

                  <div>
                    <p className="p-2 text-xs">Activation Code</p>
                  </div>
                  <div>
                    <p className="pl-2 text-sm font-thin">
                      {activationCodeShow || "1234"}
                    </p>
                  </div>

                  <div>
                    <p className="p-2 text-xs">Account Status</p>
                  </div>
                  <div>
                    <p className="pl-2 text-sm font-thin">
                      {accountStatusShow || "Inactive"}
                    </p>
                  </div>

                  <div>
                    <p className="p-2 text-xs">Location</p>
                  </div>
                  <div>
                    <p className="pl-2 text-sm font-thin">
                      {locationShow || "B69 3BH"}
                    </p>
                  </div>

                  <div>
                    <p className="p-2 text-xs">Warning</p>
                  </div>

                  <div className="flex">
                    <p className="pl-2 text-sm font-thin">
                      {warningShow || "Warning"}
                    </p>
                    <div className="float-right text-end w-full">
                      <div className="float-right text-end">
                        <label className=" cursor-pointer">
                          <input
                            type="checkbox"
                            value=""
                            className="sr-only peer"
                          />
                          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                    </div>
                  </div>

                  <h1 className="p-2 mt-1 mb-1">-----------</h1>

                  <h1 className="p-2 font-bold">SIA Info</h1>

                  <div>
                    <p className="p-2 text-xs">SIA Number</p>
                  </div>
                  <div className="flex">
                    <p className="pl-2 mb-20 text-sm font-thin">
                      {siaNumberShow || "1234757767765734"}
                    </p>
                    <div className="float-right text-end w-full">
                      <span className="font-bold text-end text-green-500">
                        Valid
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <>
        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-3xl font-semibold">Update Info</h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-red-500 opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-red-500 opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="p-6 flex-auto">
                    <div className="mb-4 ">
                      <form
                        className="grid grid-cols-2 gap-4 "
                        onSubmit={hendelEditForm}
                      >
                        <label
                          htmlFor="phone_no"
                          className="block text-gray-600"
                        >
                          Phone Number
                        </label>
                        <input
                          type="number"
                          value={phoneNumber}
                          id="phone_no"
                          name="phone_no"
                          className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                          autoComplete="off"
                          onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                        <label htmlFor="email" className="block text-gray-600">
                          Email
                        </label>
                        <input
                          type="email"
                          value={email}
                          id="email"
                          name="email"
                          className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                          autoComplete="off"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <label
                          htmlFor="transort_mode"
                          className="block text-gray-600"
                        >
                          Transport Mode
                        </label>
                        <input
                          type="text"
                          value={transportMode}
                          id="transort_mode"
                          name="transort_mode"
                          className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                          autoComplete="off"
                          onChange={(e) => setTransportMode(e.target.value)}
                        />
                        <label
                          htmlFor="activation_code"
                          className="block text-gray-600"
                        >
                          Activation Code
                        </label>
                        <input
                          type="text"
                          value={activationCode}
                          id="activation_code"
                          name="activation_code"
                          className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                          autoComplete="off"
                          onChange={(e) => setActivationCode(e.target.value)}
                        />
                        <label
                          htmlFor="account_status"
                          className="block text-gray-600"
                        >
                          Account Status
                        </label>
                        <input
                          type="text"
                          value={accountStatus}
                          id="account_status"
                          name="account_status"
                          className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                          autoComplete="off"
                          onChange={(e) => setAccountStatus(e.target.value)}
                        />
                        <label
                          htmlFor="location"
                          className="block text-gray-600"
                        >
                          Location
                        </label>
                        <input
                          type="text"
                          value={location}
                          id="location"
                          name="location"
                          className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                          autoComplete="off"
                          onChange={(e) => setLocation(e.target.value)}
                        />
                        <label
                          htmlFor="warning"
                          className="block text-gray-600"
                        >
                          Warning
                        </label>
                        <input
                          type="text"
                          value={warning}
                          id="warning"
                          name="warning"
                          className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                          autoComplete="off"
                          onChange={(e) => setWarning(e.target.value)}
                        />
                        <label
                          htmlFor="sia_number"
                          className="block text-gray-600"
                        >
                          SIA Number
                        </label>
                        <input
                          type="number"
                          value={siaNumber}
                          id="sia_number"
                          name="sia_number"
                          className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                          autoComplete="off"
                          onChange={(e) => setSiaNumber(e.target.value)}
                        />
                      </form>
                    </div>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      type="submit"
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      onClick={hendelEditForm}
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}

        <div className="grid grid-cols-6 gap-4 mb-4 ">
          <div
            className={`flex rounded bg-white col-span-6 md:col-span-6 lg:col-span-6 xl:col-span-6 2xl:col-span-6  sm:col-span-6 ${
              personalInfo ? "" : "hidden"
            }`}
          >
            <PersonalInfo />
          </div>
        </div>
      </>
    </>
  );
}

export default List;

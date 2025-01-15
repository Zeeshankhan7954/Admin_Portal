import React, { useState, useEffect } from "react";
import profilePhoto from "../../assets/Image/profilePicture.jpg"
import DatePicker from "react-datepicker";

function PersonalInfo() {
  const [personalInfo, setPersonalInfo] = useState(false);

  const [username, setUsername] = useState('Zeeshan Khan');
  const [firstName, setFirstName] = useState('Zeeshan');
  const [lastName, setLastName] = useState('Khan');
  const [dateOfBirth, setDateOfBirth] = useState('2003-09-11');
  const [email, setEmail] = useState("howardpatterson@gmail.com");
  const [primaryPhoneNumber, setPrimaryPhoneNumber] = useState('+44 213 1287 09876')
  const [secondaryPhoneNumber, setSecondaryPhoneNumber] = useState('+44 213 1287 09876')
  const [accountStatus, setAccountStatus] = useState("Inactive");
  const [country, setCountry] = React.useState("Pakistan");
  const [state, setState] = React.useState("Punjab");
  const [city, setCity] = React.useState("Lahore");
  const [permanentAddress, setPermanentAddress] = useState('8 usman block garden town lahore')
  const [otherAddress, setOtherAddress] = useState('8 usman block garden town lahore')
  const [postCode, setPostCode] = useState('10104');
  const [profilePicture, setProfilePicture] = useState(profilePhoto);
  const [siaNumber, setSiaNumber] = useState("1234757767765734");
  const [siaPicture, setSiaPicture] = useState(profilePhoto);
  const [brpNumber, setBrpNumber] = useState("1234757767765734");
  const [brpPicture, setBrpPicture] = useState(profilePhoto);
  const [passportPicture, setPassportPicture] = useState(profilePhoto);
  const [password, setPassword] = useState('0987654321')
  const [confirmpassword, setConfirmPassword] = useState('0987654321')

  const [phoneNumberShow, setPhoneNumberShow] = useState("");
  const [emailShow, setEmailShow] = useState("");
  const [transportModeShow, setTransportModeShow] = useState("");
  const [activationCodeShow, setActivationCodeShow] = useState("");
  const [accountStatusShow, setAccountStatusShow] = useState("");
  const [locationShow, setLocationShow] = useState("");
  const [warningShow, setWarningShow] = useState("");
  const [siaNumberShow, setSiaNumberShow] = useState("");

  console.log('image', profilePhoto);
  

  const editFormSubmit = (e) => {
    e.preventDefault();
    console.log(1);
    setPersonalInfo(false)
  };
  return (
    <>
      <div className="grid grid-cols-6 items-center px-4 sm:ml-64 w-full">
        <div className={`col-span-6 ${personalInfo ? "" : "hidden"}`}>
          <div className="flex justify-center items-center mb-5 min-h-screen w-full">
            <div className="card p-4 shadow-lg w-full border-2 border-gray-200 rounded-xl">
              <div className="flex">
                <h3 className="text-center m-auto mb-4 font-bold text-2xl">
                  Personal Info
                </h3>
                <button
                  onClick={(e) => setPersonalInfo(false)}
                  className="text-end mb-4 font-bold text-xl hover:bg-red-600 hover:text-white px-3 pb-1 border-2 border-gray-300"
                >
                  x
                </button>
              </div>

              <form
                action=""
                method="POST"
                encType="multipart/form-data"
                onSubmit={editFormSubmit}
              >
                <div className="p-2 grid grid-cols-2">
                  {/* Username Input */}
                  <div className="gap-3 mb-3 col-span-2 xl:col-span-1 2xl:col-span-1 px-2">
                    <label
                      htmlFor="username_2"
                      className="block text-gray-600 text-1xl pb-2"
                    >
                      Username:
                    </label>
                    <input
                      type="text"
                      id="username_2"
                      value={username}
                      onChange={(e)=> setUsername(e.target.value)}
                      placeholder="Username"
                      name="username"
                      className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 text-1xl"
                      autoComplete="off"
                    />
                  </div>
                </div>

                <div className="p-2 grid grid-cols-2">
                  {/* First And Last Name Input */}
                  <div className="col-span-2 xl:col-span-1  px-3">
                    <label
                      htmlFor="first_name"
                      className="block text-gray-600 text-1xl pb-2"
                    >
                      First Name:
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      value={firstName}
                      onChange={(e)=> setFirstName(e.target.value)}
                      placeholder="First Name"
                      name="first_name"
                      className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 text-1xl"
                    />
                  </div>
                  <div className=" mb-3 col-span-2 xl:col-span-1 px-3">
                    <label
                      htmlFor="last_name"
                      className="block text-gray-600 text-1xl pb-2"
                    >
                      Last Name:
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 text-1xl"
                      name="last_name"
                      id="last_name"
                      value={lastName}
                      onChange={(e)=> setLastName(e.target.value)}
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>

                <div className="p-2 grid grid-cols-2">
                  {/* Date Of Birth Input */}
                  <div className="gap-3 mb-3 col-span-2 xl:col-span-1 2xl:col-span-1 px-2">
                    <div>
                      <label
                        htmlFor="date_of_birth"
                        className="block text-gray-600 text-1xl pb-2"
                      >
                        Date Of Birth:
                      </label>
                      <input
                        id="date_of_birth"
                        value={dateOfBirth}
                      onChange={(e)=> setDateOfBirth(e.target.value)}
                        className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 text-1xl"
                        type="date"
                        name="date_of_birth"
                      />
                       
                    </div>
                  </div>
                </div>
                <div className="p-2 grid grid-cols-3">
                  {/* Contact Input */}
                  <div className="col-span-3 md:col-span-2 xl:col-span-1 2xl:col-span-1 w-full px-2">
                    <label
                      htmlFor="email"
                      className="block text-gray-600 text-1xl pb-2"
                    >
                      Email:
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e)=>setEmail(e.target.value)}
                      className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                      name="email"
                      id="email"
                      placeholder="Email Address"
                      required
                    />
                  </div>
                  <div className="col-span-3 md:col-span-2 xl:col-span-1 2xl:col-span-1 w-full px-2">
                    <label
                      htmlFor="primary_contact"
                      className="block text-gray-600 text-1xl pb-2"
                    >
                      Primary Phone Number:
                    </label>
                    <input
                      type="text"
                      value={primaryPhoneNumber}
                      onChange={(e)=> setPrimaryPhoneNumber(e.target.value)}
                      className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                      name="primary_contact"
                      id="primary_phone"
                      placeholder="Enter your phone with country code (e.g +44 (UK))"
                      required
                    />
                  </div>
                  <div className="col-span-3 md:col-span-2 xl:col-span-1 2xl:col-span-1 w-full px-2">
                    <label
                      htmlFor="secondary_contact"
                      className="block text-gray-600 text-1xl pb-2"
                    >
                      Secondary Phone Number (Optional):
                    </label>
                    <input
                      type="text"
                      value={secondaryPhoneNumber}
                      onChange={(e)=> setSecondaryPhoneNumber(e.target.value)}
                      className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                      name="secondary_contact"
                      id="secondary_phone"
                      placeholder="Enter your phone with country code"
                    />
                  </div>
                </div>
                <div className="p-2 grid grid-cols-1">
                  <hr className="my-5 font-bold" />
                </div>

                <div className="p-2 grid grid-cols-3">
                  {/* Country, State, and City Inputs */}

                  <div className="col-span-3 md:col-span-2 xl:col-span-1 2xl:col-span-1 w-full px-2">
                    <label
                      htmlFor="country"
                      className="block text-gray-600 text-1xl pb-2"
                    >
                      Country:
                    </label>
                    <select
                      name="country"
                      id="country"
                      onChange={(e) => setCountry(e.target.value)}
                      value={country}
                      className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                      required
                    >
                      <option value="">Select Country</option>
                      <option value="Pakistan">Pakistan</option>
                    </select>
                  </div>
                  <div className="col-span-3 md:col-span-2 xl:col-span-1 2xl:col-span-1 w-full px-2">
                    <label
                      htmlFor="state"
                      className="block text-gray-600 text-1xl pb-2"
                    >
                      State:
                    </label>
                    <select
                      name="state"
                      id="state"
                      onChange={(e) => setState(e.target.value)}
                      value={state}
                      className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                      required
                    >
                      <option value="">Select State</option>
                      <option value="Punjab">Punjab</option>
                      <option value="KPK">KPK</option>
                    </select>
                  </div>
                  <div className="col-span-3 md:col-span-2 xl:col-span-1 2xl:col-span-1 w-full px-2">
                    <label
                      htmlFor="city"
                      className="block text-gray-600 text-1xl pb-2"
                    >
                      <i className="bi bi-building"></i> City:
                    </label>
                    <select
                      name="city"
                      id="city"
                      onChange={(e) => setCity(e.target.value)}
                      value={city}
                      className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                      required
                    >
                      <option value="">Select City</option>
                      <option value="Lahore">Lahore</option>
                    </select>
                  </div>
                </div>

                <div className="p-2 grid grid-cols-2">
                  <div className="col-span-2 md:col-span-2 xl:col-span-1 2xl:col-span-1 w-full px-2">
                    <label
                      htmlFor="permanent_address"
                      className="block text-gray-600 text-1xl pb-2"
                    >
                      <i className="bi bi-geo-alt-fill"></i> Permanent Address:
                    </label>
                    <textarea
                      className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                      name="permanent_address"
                      id="permanent_address"
                      value={permanentAddress}
                      onChange={(e) => setPermanentAddress(e.target.value)}
                      rows="3"
                    />
                  </div>
                  <div className="col-span-2 md:col-span-2 xl:col-span-1 2xl:col-span-1 w-full px-2">
                    <label
                      htmlFor="other_address"
                      className="block text-gray-600 text-1xl pb-2"
                    >
                      <i className="bi bi-geo-alt-fill"></i> Other Address:
                    </label>
                    <textarea
                      className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                      name="other_address"
                      id="other_address"
                      value={otherAddress}
                      onChange={(e) => setOtherAddress(e.target.value)}
                      rows="3"
                    />
                  </div>
                </div>

                {/* Post Code Input */}
                <div className="p-2 grid grid-cols-2">
                  <div className="col-span-2 md:col-span-2 xl:col-span-1 2xl:col-span-1 w-full px-2">
                    <label
                      htmlFor="post_code"
                      className="block text-gray-600 text-1xl pb-2"
                    >
                      <i className="bi bi-journal-medical"></i> Post Code:
                    </label>
                    <input
                      type="text"
                      value={postCode}
                      onChange={(e) => setPostCode(e.target.value)}
                      className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                      name="post_code"
                      id="post_code"
                      placeholder="Post Code"
                      required
                    />
                  </div>
                </div>

                <div className="p-2 grid grid-cols-1">
                  <hr className="my-5" />
                </div>

                <div className="p-2 grid grid-cols-1">
                  <div className="col-span-1 md:col-span-1 xl:col-span-1 2xl:col-span-1 w-full px-2">
                    <label
                      htmlFor="profile"
                      className="block text-gray-600 text-1xl pb-2"
                    >
                      <i className="bi bi-image"></i> Upload Profile Picture:
                    </label>
                    <input
                      type="file"
                      onChange={(e) => setProfilePicture(e.target.files[0])}
                      className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                      name="profile"
                      id="profile"
                      accept="image/*"
                    />
                  </div>
                </div>
                <div className="p-2 grid grid-cols-2">
                  <div className="col-span-2 md:col-span-2 xl:col-span-1 2xl:col-span-1 w-full px-2">
                    <label
                      htmlFor="sia_no"
                      className="block text-gray-600 text-1xl pb-2"
                    >
                      <i className="bi bi-image"></i>SIA No:
                    </label>
                    <input
                      type="text"
                      value={siaNumber}
                      onChange={(e)=> setSiaNumber(e.target.value)}
                      className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                      name="sia_no"
                      id="sia_no"
                      required
                    />
                  </div>
                </div>

                <div className="p-2 grid grid-cols-1">
                  <div className="col-span-1 md:col-span-1 xl:col-span-1 2xl:col-span-1 w-full px-2">
                    <label
                      htmlFor="sia_picture"
                      className="block text-gray-600 text-1xl pb-2"
                    >
                      <i className="bi bi-image"></i>Upload SIA Picture:
                    </label>
                    <input
                      type="file"
                      onChange={(e) => setSiaPicture(e.target.files[0])}
                      className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                      name="sia_picture"
                      id="sia_picture"
                      accept="image/*"
                    />
                  </div>
                </div>

                <div className="p-2 grid grid-cols-2">
                  <div className="col-span-2 md:col-span-2 xl:col-span-1 2xl:col-span-1 w-full px-2">
                    <label
                      htmlFor="brp_no"
                      className="block text-gray-600 text-1xl pb-2"
                    >
                      <i className="bi bi-image"></i>BRP No:
                    </label>
                    <input
                      type="text"
                      value={brpNumber}
                      onChange={(e) => setBrpNumber(e.target.value)}
                      className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                      name="brp_no"
                      id="brp_no"
                      required
                    />
                  </div>
                </div>

                <div className="p-2 grid grid-cols-1">
                  <div className="col-span-1 md:col-span-1 xl:col-span-1 2xl:col-span-1 w-full px-2">
                    <label
                      htmlFor="brp_picture"
                      className="block text-gray-600 text-1xl pb-2"
                    >
                      <i className="bi bi-image"></i>Upload BRP Picture:
                    </label>
                    <input
                      type="file"
                      onChange={(e) => setBrpPicture(e.target.files[0])}
                      className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                      name="brp_picture"
                      id="brp_picture"
                      accept="image/*"
                    />
                  </div>
                </div>

                <div className="p-2 grid grid-cols-1">
                  <div className="col-span-1 md:col-span-1 xl:col-span-1 2xl:col-span-1 w-full px-2">
                    <label
                      htmlFor="passport_picture"
                      className="block text-gray-600 text-1xl pb-2"
                    >
                      <i className="bi bi-image"></i>Upload Passport Picture:
                    </label>
                    <input
                      type="file"
                      onChange={(e) => setPassportPicture(e.target.files[0])}
                      className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                      name="passport_picture"
                      id="passport_picture"
                      accept="image/*"
                    />
                  </div>
                </div>

                <div className="p-2 grid grid-cols-2">
                  {/* Password Inputs */}

                  <div className="col-span-2 md:col-span-2 xl:col-span-1 2xl:col-span-1 w-full px-2">
                    <label
                      htmlFor="id_password"
                      className="block text-gray-600 text-1xl pb-2"
                    >
                      Password:
                    </label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                      name="id_password"
                      id="id_password"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                  <div className="col-span-2 md:col-span-2 xl:col-span-1 2xl:col-span-1 w-full px-2">
                    <label
                      htmlFor="confirm_password"
                      className="block text-gray-600 text-1xl pb-2"
                    >
                      Confirm Password:
                    </label>
                    <input
                      type="password"
                      value={confirmpassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                      name="confirm_password"
                      id="confirm_password"
                      placeholder="Confirm your password"
                      required
                    />
                  </div>
                </div>
                <div className="p-2 grid grid-cols-1">
                  {/* Submit Button */}
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn btn-primary rounded-lg p-2 btn-md bg-blue-500 text-white border-0"
                    >
                      Submit
                    </button>
                  </div>
                </div>
                <div className="p-2 grid grid-cols-1">
                  {/* Link to Sign In */}
                  <div className=" text-center">
                    <small>
                      <a href="#">Already have an account? Sign in</a>
                    </small>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div
          className={`col-span-6 sm:col-span-6 md:col-span-6 lg:col-span-4 2xl:col-span-4 xl:col-span-4 bg-[#EAF1EF] rounded-xl ${
            personalInfo ? "hidden" : ""
          }`}
        >
          <div className="flex justify-center items-center min-h-screen w-full">
            <div className="card w-full max-w-full lg:max-w-full xl:max-w-full px-5 rounded-xl">
              <div className="w-full">
                <div className="py-2 grid grid-cols-1 sm:grid-cols-2">
                  <div className="flex col-span-2 ">
                    <h1 className="p-5 font-bold text-lg sm:text-xl w-full">
                      ZEESHAN KHAN
                    </h1>
                    <div className="w-full text-end my-2">
                      <button
                        className="bg-[#353535] text-white font-bold text-sm px-3 py-2 rounded shadow hover:bg-gray-500 focus:outline-none transition duration-150"
                        type="button"
                        onClick={() => setPersonalInfo(true)}
                      >
                        Edits
                      </button>
                    </div>
                  </div>
                </div>

                {/* Date Of Birth */}
                <div>
                  <p className="px-5 pb-2 text-xs sm:text-sm font-bold">
                    Username
                  </p>
                  <p className="px-5 pb-3 text-sm sm:text-base font-thin">
                    {username || "Username"}
                  </p>
                </div>

                {/* Date Of Birth */}
                <div>
                  <p className="px-5 pb-2 text-xs sm:text-sm font-bold">
                    Date Of Birth
                  </p>
                  <p className="px-5 pb-3 text-sm sm:text-base font-thin">
                    {dateOfBirth || "11/09/2003"}
                  </p>
                </div>

                {/* Email */}
                <div>
                  <p className="px-5 pb-2 text-xs sm:text-sm font-bold">
                    Email
                  </p>
                  <p className="px-5 pb-3 text-sm sm:text-base font-thin">
                    {email || "howardpatterson@gmail.com"}
                  </p>
                </div>

                {/* Phone */}
                <div>
                  <p className="px-5 pb-2 text-xs sm:text-sm font-bold">
                    Primary Phone Number
                  </p>
                  <p className="px-5 pb-3 text-sm sm:text-base font-thin">
                    {primaryPhoneNumber || "+44 7700 900077"}
                  </p>
                </div>

                {/* Country */}
                <div>
                  <p className="px-5 pb-2 text-xs sm:text-sm font-bold">
                    Country
                  </p>
                  <p className="px-5 pb-3 text-sm sm:text-base font-thin">
                    {country || "Pakistan"}
                  </p>
                </div>

                {/* State */}
                <div>
                  <p className="px-5 pb-2 text-xs sm:text-sm font-bold">
                    State
                  </p>
                  <p className="px-5 pb-3 text-sm sm:text-base font-thin">
                    {state || "Punjab"}
                  </p>
                </div>

                {/* City */}
                <div>
                  <p className="px-5 pb-2 text-xs sm:text-sm font-bold">City</p>
                  <p className="px-5 pb-3 text-sm sm:text-base font-thin">
                    {city || "Lahore"}
                  </p>
                </div>
                {/* Address */}
                <div>
                  <p className="px-5 pb-2 text-xs sm:text-sm font-bold">
                    Permanent Address
                  </p>
                  <p className="px-5 pb-3 text-sm sm:text-base font-thin">
                    {permanentAddress || "Lahore"}
                  </p>
                </div>

                <div>
                  <p className="px-5 pb-2 text-xs sm:text-sm font-bold">
                    Other Address
                  </p>
                  <p className="px-5 pb-3 text-sm sm:text-base font-thin">
                    {otherAddress || "Lahore"}
                  </p>
                </div>

                {/* Transport Mode */}
                <div>
                  <p className="px-5 pb-2 text-xs sm:text-sm font-bold">
                    Post Code
                  </p>
                  <p className="px-5 pb-3 text-sm sm:text-base font-thin">
                    {postCode || "10065"}
                  </p>
                </div>

                {/* SIA Info */}
                <h1 className="px-5 mt-2 mb-2 text-xl font-bold">SIA Info</h1>
                <div>
                  <p className="px-5 pb-2 text-xs sm:text-sm font-bold">
                    SIA Number
                  </p>
                  <div className="flex">
                    <p className="px-5 pb-3 text-sm sm:text-base font-thin">
                      {siaNumber || "1234757767765734"}
                    </p>
                    <div className="w-full text-end">
                      <span className="font-bold text-green-500">Valid</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PersonalInfo;

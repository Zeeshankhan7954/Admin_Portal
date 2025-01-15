import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../components/Api/axiosInterceptors";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [checkUsername, setCheckUsername] = useState([]);

  useEffect(() => {
    axiosInstance.get("Users/").then((response) => {
      setCheckUsername(response.data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkUsername.find((user) => user.email === username)) {
        localStorage.setItem("token", String(Date.now()));
        navigate("/");
      } else { 
        document.getElementById("username").style.border = "1px solid red";
        document.getElementById("password").style.border = "1px solid red";
      }
    
  };

  return (
    <>
      <div className="bg-[#FFFFFF] flex justify-center items-center h-[100%]">
        <div className="w-[83%] h-auto">
          <img
            src="https://earnflex.com/assets/Sigin_Image.5df935ce.webp"
            alt="Placeholder Image"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
          <h1 className="text-2xl font-semibold mb-4">Account Sign In</h1>
          <form action="#" method="POST" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-600">
                Username
              </label>
              <input
                type="email"
                value={username}
                id="username"
                name="username"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                autoComplete="off"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-800">
                Password
              </label>
              <input
                type="password"
                value={password}
                id="password"
                name="password"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                autoComplete="off"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                className="text-red-500"
              />
              <label htmlFor="remember" className="text-green-900 ml-2">
                Remember Me
              </label>
            </div>

            {/* <div className="mb-6 text-blue-500">
              <a href="#" className="hover:underline">
                Forgot Password?
              </a>
            </div> */}

            <button
              type="submit"
              className="bg-green-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
            >
              Login
            </button>
          </form>

          <div className="mt-6 text-green-500 text-center">
            <a href="#" className="hover:underline">
              Sign up Here
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

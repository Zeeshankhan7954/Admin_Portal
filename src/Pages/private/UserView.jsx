import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function UserView() {
  const [user, setUser] = useState("");

  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:3000/Users/" + id)
      .then((response) => {
        setUser(response.data);
      })
      .catch((err) => console.log(err));
  });
  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 border-2 mt-14 bg-[#F2F5F7] w-full">
        <h1 className="text-3xl mb-4">
          <b>View User Data</b>
        </h1>
        <div className="p-1 grid grid-cols-6 gap-5 bg-white rounded-2xl">
          <div className="col-span-2 justify-center text-right py-3">
            <div className="mb-4 font-bold md:text-xl xl:text-xl 2xl:text-xl text-sm">
              <h1>ID:</h1>
            </div>
            <div className="mb-4 font-bold md:text-xl xl:text-xl 2xl:text-xl text-sm">
              <h1>Name:</h1>
            </div>
            <div className="mb-4 font-bold md:text-xl xl:text-xl 2xl:text-xl text-sm">
              <h1>Email:</h1>
            </div>
            <div className="mb-4 font-bold md:text-xl xl:text-xl 2xl:text-xl text-sm">
              <h1>Usermane:</h1>
            </div>
            <div className="mb-4 font-bold md:text-xl xl:text-xl 2xl:text-xl text-sm">
              {/* <h1>City:</h1> */}
            </div>
          </div>
          <div className="col-span-3 justify-center text-left py-3">
            <div className="mb-4 md:text-xl xl:text-xl 2xl:text-xl text-sm">
              <h1>{user.id}</h1>
            </div>
            <div className="mb-4 md:text-xl xl:text-xl 2xl:text-xl text-sm">
              <h1>{user.name}</h1>
            </div>
            <div className="mb-4 md:text-xl xl:text-xl 2xl:text-xl text-sm">
              <h1>{user.email}</h1>
            </div>
            <div className="mb-4 md:text-xl xl:text-xl 2xl:text-xl text-sm">
              <h1>{user.username}</h1>
            </div>
            {/* <div className="mb-4 text-2xl"><h1>{user.address.city}</h1></div> */}
          </div>
          <div className="col-span-6 p-4">
            <Link to={"/users"} className="text-left py-2 bg-blue-600 px-6 text-white hover:bg-black rounded-2xl">
                Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserView;

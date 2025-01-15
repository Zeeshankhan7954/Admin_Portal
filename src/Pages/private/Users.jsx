import React, { useState, useEffect } from "react";
import {
  axiosInstance,
  Table,
  Userdatamodal,
  GetToken,
  useNavigate,
  AxiosGet,
  GetUserById,
} from "../../components";
function Users() {
  const [users, setUsers] = useState([]);
  const [openModel, setopenModel] = useState(false);
  const [openUpdateModel, setopenUpdateModel] = useState(false);
  const [updateId, setUpdateId] = useState("");
  const [updateUser, setUpdateUser] = useState({
    name: "",
    email: "",
    username: "",
  });
  const [addUser, setAddUser] = useState({
    name: "",
    email: "",
    username: "",
  });

  const [search, setSearch] = useState("");

  const token = GetToken();

  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

  const handleAdd = (e) => {
    e.preventDefault();
    axiosInstance
      .post("/Users", addUser)
      .then((response) => {
        console.log(response);
        setopenModel(false);
        setAddUser("");
      })
      .catch((error) => console.log(error));
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    axiosInstance
      .put("Users/" + updateId, updateUser)
      .then((response) => {
        console.log(response);

        setopenUpdateModel(false);
      })
      .catch((error) => console.log(error));
  };

  const handleUpdate = (id) => {
    // Update user
    setopenUpdateModel(true);
    setUpdateId(id);
  };

  const handleDelete = (id) => {
    axiosInstance
      .delete("/Users/" + id)
      .then((response) => {
        alert("Are you sure you want to delete this user?");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const closeModal = () => {
    setopenModel(false);
    setopenUpdateModel(false);
  };
  //  const getUserById = AxiosGetById(updateId)
  useEffect(() => {
    GetUserById(updateId, setUpdateUser);
  }, [openUpdateModel]);

  const userData = AxiosGet();
  useEffect(() => {
    if (search === "") {
      setUsers(userData);
    } else {
      const filteredUsers = userData.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
      );
      setUsers(filteredUsers);
    }
  }, [search, updateUser, handleDelete, userData]);

  // useEffect(() => {
  //   axiosInstance
  //     .get("/Users")
  //     .then((response) => {
  //       if (search === "") {
  //         setUsers(response.data);
  //       } else {
  //         const filteredUsers = userData.filter((user) =>
  //           user.name.toLowerCase().includes(search.toLowerCase())
  //         );
  //         setUsers(filteredUsers);
  //       }
  //     })
  //     .catch((error) => console.log(error));
  // }, [search, updateUser, handleDelete]);

  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 border-2 mt-14 bg-[#F2F5F7] w-full">
        <h1 className="text-3xl mb-4">
          <b>Users</b>
        </h1>
        <div className="p-1 grid grid-cols-6 gap-5">
          <div className="col-span-6">
            <div className="flex">
              <div className="text-left ">
                <input
                  type="text"
                  placeholder="Search by name..."
                  className="border-2 border-gray-300 p-2 rounded-2xl"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <div className="w-full text-right">
                <button
                  onClick={() => setopenModel(true)}
                  className="text-right p-2 m-2 bg-gray-700 text-white hover:bg-black rounded-2xl"
                >
                  Add User
                </button>
              </div>
            </div>
            <Table
              data={users}
              thNo_1={"id"}
              thNo_2={"Name"}
              thNo_3={"Email"}
              thNo_4={"Username"}
              thNo_5={"Action"}
              bg={"white"}
              handleUpdate={handleUpdate}
              handleDelete={handleDelete}
            />
          </div>
        </div>
      </div>

      {openModel && (
        <Userdatamodal
          modalData={addUser}
          closeModal={closeModal}
          setdata={setAddUser}
          handleSubmit={handleAdd}
          btnName={"Add"}
        />
      )}
      {openUpdateModel && (
        <Userdatamodal
          modalData={updateUser}
          closeModal={closeModal}
          setdata={setUpdateUser}
          handleSubmit={handleUpdateSubmit}
          btnName={"Update"}
        />
      )}
    </div>
  );
}

export default Users;

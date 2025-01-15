import React, { useState, useEffect } from "react";
import { axiosInstance } from "../../components";

function AxiosGet() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axiosInstance
    .get("/Users")
      .then((response) => {
        setUserData(response.data || []);
      })
      .catch((error) => console.log(error));
  }, [userData]);
  
  return userData ;  
}
export default AxiosGet;

// export const GetUserData = () =>{
//     return axiosInstance.get("/Users")
// }
import React, { useState, useEffect } from "react";
import { axiosInstance } from "..";

function GetUserById(updateId, setUpdateUser) {
  axiosInstance
  .get("/Users/" + updateId)
  .then((response) => setUpdateUser(response.data))
  .catch((error) => console.log(error));
}
export default GetUserById;

// export const AxiosGetById = (updateId) =>{
//     return axiosInstance.get("/Users/" + updateId)
// }

import React from "react";

function GetToken() {
  const token = localStorage.getItem("token");
  return token;
}

export default GetToken;

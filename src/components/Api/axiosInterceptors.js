import axios from "axios";

import React, { useState } from "react";

const token = localStorage.getItem("token");

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  headers: { "Content-Type": "application/json" },
});

axiosInstance.interceptors.request.use(
  (config) => {
    // Add authorization token if available

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle error request
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,

  (error) => {
    const dataError = document.getElementById("showUserError");

    console.log("error", error);

    dataError.style.display = "";
    dataError.innerHTML = error;

    if (error.response.status === 401) {
      // Handle unauthorized request
      dataError.style.display = "";
      dataError.innerHTML = "Unauthorized request";
    } else if (error.response.status === 500) {
      // Handle server error
      dataError.style.display = "";
      dataError.innerHTML = "Server error";
    } else {
      // Handle other error types
      dataError.style.display = "";
      dataError.innerHTML = error.response.data;
    }
    dataError.style.display = "";
    dataError.innerHTML = error;
  }
);

export default axiosInstance;

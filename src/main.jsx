import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./Pages/private/Dashboard.jsx";
import List from "./Pages/private/List.jsx";
import Login from "./Pages/public/login.jsx";
import Posts from "./Pages/private/Posts.jsx";
import Users from "./Pages/private/Users.jsx";
import UserView from "./Pages/private/UserView.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
    <Route path="/" element={<App />}>
      <Route path="" element={<Dashboard />} />
      <Route path="/inbox" element={<List />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/users" element={<Users />} />
      <Route path="/userView/:id" element={<UserView />} />

    </Route>
    <Route path="/login" element={<Login />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

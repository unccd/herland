import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from "./404/404";

import Homepage from "./Homepage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
], {basename: import.meta.env['BASE_URL']});

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

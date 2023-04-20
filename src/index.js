import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import LabAssistance from "./LabAssistance";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={LabAssistance} />
  </React.StrictMode>
);

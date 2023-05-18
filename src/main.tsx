import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import { Friends, Home, SignUp, LandingPage } from "./views";
import "./index.css";

const router = createBrowserRouter([
  /*{
    path: "/",
    element: <LandingPage />,

  },*/
  {
    path: "/",
    element: <Home />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "friends",
    element: <Friends />,
  },
  {
    path: "SignUp",
    element: <SignUp />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

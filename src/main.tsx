import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import { Friends, Home, SignUp, LandingPage, Login, Navbar, Settings } from "./views";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,

  },
  {
    element: <Navbar />,
    children:[
      {
        path: "/home",
        element: <Home />,
    // errorElement: <ErrorPage />,
      },
      {
        path: "/friends",
        element: <Friends />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },

    ]
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

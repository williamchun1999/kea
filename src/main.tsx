import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import { Friends, Home, SignUp, LandingPage, Profile } from "./views";
// import { loader as userLoader } from './views/profile';
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,

  },
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
    path: "/SignUp",
    element: <SignUp />,
  },
  {
    path: "profile/:uuid",
    element: <Profile />,
    // loader: userLoader,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

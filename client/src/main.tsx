import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";




import { Friends, Home, SignUp, LandingPage, Profile, Login, Navbar, Settings } from "./views";

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
        path: "/kea/home",
        element: <Home />,
    // errorElement: <ErrorPage />,
      },
      {
        path: "/kea/friends",
        element: <Friends />,
      },
      {
        path: "/kea/settings",
        element: <Settings />,
      },
      {
        path: "/kea/profile",
        element: <Profile />,
        
      },
      {
        path: "/kea/friends/:userId",
        element: <Profile />,
        
      }

    ]
  },
  {
    path: "/kea/signup",
    element: <SignUp />,
  },
  {
    path: "/kea/login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

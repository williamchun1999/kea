import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";




import { Friends, Home, SignUp, LandingPage, Profile, Login, Navbar, Settings } from "./views";
import { loader as profileLoader } from './views/profile'
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
      {
        path: "/profile/:userId",
        element: <Profile />,
        loader: profileLoader
      },
      {
        path: "/friends/:userId",
        element: <Profile />,
      }

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

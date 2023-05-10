import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
<<<<<<< HEAD
import Home from './views/home.tsx'
=======
import App from './App.tsx'
>>>>>>> 125e7002a028686d1a8b38c8847a211d00f4be12
import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
<<<<<<< HEAD
    element: <Home />,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    
=======
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <MainPanel />,
      },
      {
        path: "profile",
        element: <Profile />,
        children: [
          {
            index: true,
            element: <ProfileCard />,
          },
          {
            path: "edit",
            element: <EditProfile />,
          },
          {
            path: "settings",
          },
        ],
      },
>>>>>>> 125e7002a028686d1a8b38c8847a211d00f4be12
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Friends, Home} from './views';
import './index.css'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Friends />,
    // errorElement: <ErrorPage />,
   
  },
  {
    path: "friends",
    element: <Friends />
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

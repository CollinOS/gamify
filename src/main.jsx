import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root';
import Profile from "./routes/profile";
import Start from "./routes/start";
import ErrorPage from "./routes/error-page";
import './assets/styles/index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/start",
    element: <Start />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>  
)

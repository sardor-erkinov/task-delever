import React from 'react'
import ReactDOM from 'react-dom/client'
import "./scss/index.scss"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/root.jsx';
import ErrorPage from './error-page';
import { Home } from './routes/home/home';
// import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        index: true,
        element: <Home />,
        errorElement: <ErrorPage />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

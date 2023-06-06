import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Import do React Router Dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import Pages
import Home from "./routes/Home.tsx";
import Repositories from "./routes/Repositories.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/repos/:username",
        element: <Repositories />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

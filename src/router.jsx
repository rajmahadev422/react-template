import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./pages/App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "team",
        element: <div>Home</div>,
      },
    ],
  },
]);

export default router;
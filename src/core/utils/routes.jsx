import RootView from "@/features/global/views/RootView.jsx";
import Home from "@/features/home/view";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootView />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

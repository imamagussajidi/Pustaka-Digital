import About from "@/features/about/view";
import Books from "@/features/books/view";
import Donation from "@/features/donation/view";
import RootView from "@/features/global/views/RootView.jsx";
import Home from "@/features/home/view";
import { createBrowserRouter } from "react-router-dom";

export const Menus = [
  { name: "Home", to: "/" },
  { name: "Populer", to: "/#popular" },
  { name: "Buku", to: "/books" },
  { name: "Donasi", to: "/donate" },
  { name: "Tentang", to: "/about" },
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootView Menus={Menus} />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "/donate",
        element: <Donation />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

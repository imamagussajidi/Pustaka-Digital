import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../components/Navbar";

export const Menus = [
  { name: "Home", to: "/" },
  { name: "Populer", to: "#popular" },
  { name: "Buku", to: "/buku" },
  { name: "Donasi", to: "#donasi" },
  { name: "Tentang", to: "#tentang" },
];

const RootView = () => {
  return (
    <>
      <Navbar Menus={Menus} />
      <Outlet />
      <ScrollRestoration />
    </>
  );
};

export default RootView;

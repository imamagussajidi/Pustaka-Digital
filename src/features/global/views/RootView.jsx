import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RootView = ({ Menus }) => {
  return (
    <>
      <Navbar Menus={Menus} />
      <Outlet />
      <ScrollRestoration />
      <Footer Menus={Menus} />
    </>
  );
};

export default RootView;

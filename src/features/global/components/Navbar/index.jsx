import { useEffect, useState } from "react";
import Item from "./item";
import { APP_CONFIG } from "@/core/config/app";
import Section from "../Section";

const Navbar = ({ Menus }) => {
  const [isScroll, setIsScroll] = useState(false);
  const [isActive, setIsActive] = useState("Home");
  
  const listenScrollEvent = () => {
    if (window.scrollY > 0) {
      return setIsScroll(true);
    } else {
      return setIsScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[999]">
      <Section
        className={`flex items-center z-[9999] duration-300 ${
          isScroll ? "bg-default py-5 text-white" : "bg-transparent py-7"
        }`}
      >
        <div className={`w-full flex items-center justify-between`}>
          <h1 className="text-4xl duration-300 italic font-rubik">{APP_CONFIG.APP_NAME}</h1>
          <ul className={`flex items-center gap-6`}>
            {Menus.map((item, index) => (
              <Item
                key={index}
                name={item.name}
                to={item.to}
                onClick={() => setIsActive(item.name)}
                className={`hover:scale-[1.2] py-[1px] px-3 flex justify-center relative duration-600 before:content-[''] before:z-10 before:absolute before:w-0 before:h-full before:duration-300 hover:before:w-[80%] before:border-b ${isScroll ? "before:border-white" : "before:border-black"} ${isActive === item.name ? "before:w-[80%] scale-[1.1]" : ""}`}
              />
            ))}
          </ul>
        </div>
      </Section>
    </nav>
  );
};

export default Navbar;

import React, { useEffect, useState } from "react";
import logo from "../../assets/logo-recortado-icon.png";
import { motion, useScroll } from "framer-motion";
import menu from "../../assets/SVG/menu.svg";
import close from "../../assets/SVG/close.svg";

const Navbar = () => {
  const [navbarColor, setNavbarColor] = useState("bg-transparent text-[#fff]");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [toggle, setToggle] = useState(false);
  const { scrollYProgress } = useScroll();

  const handleScroll = () => {
    const totalScroll = document.documentElement.scrollTop;
    const windowHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scroll = `${totalScroll / windowHeight}`;

    setScrollProgress(scroll);
    if (window.scrollY === 0) {
      setNavbarColor("bg-transparent text-[#fff]");
      /* setNavbarLogo(logo2) */
    } else {
      setNavbarColor("bg-quinto text-primary shadow-sm shadow-black "); // Reemplaza 'bg-custom' con tu clase de color personalizado
      /* setNavbarLogo(logo) */
      console.log("scroll", window.scrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full h-16 flex flex-row items-center justify-between duration-1000 transition-all z-10 ${navbarColor} text-white fixed`}
    >
      {/* Flecha back to the top */}
      <div className="absolute sm:-bottom-[40rem] -bottom-[43rem] left-5 rounded-md bg-cuarto w-12 h-12 z-10 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m4.5 15.75 7.5-7.5 7.5 7.5"
          />
        </svg>
      </div>
      <div className="w-1/3 ml-4 flex flex-row">
        <img src={logo} className="w-12 mr-2"></img>
        <span className="font-bold">Webdev</span>
      </div>
      <div className=" hidden sm:flex flex-row w-1/2 justify-end h-full items-center">
        <a
          href="#services"
          className="group transtion-all relative w-1/4 h-full flex justify-center items-center overflow-hidden"
        >
          <span className="w-full absolute h-0 -translate-y-10 group-hover:tranlate-y-0 transition-all group-hover:bg-yellow-400 group-hover:h-36"></span>
          <span className="z-10 group-hover:text-black">Servicios</span>
        </a>
        <a
          href="#content"
          className="group transtion-all relative w-1/4 h-full flex justify-center items-center overflow-hidden"
        >
          <span className="w-full absolute h-0 -translate-y-10 group-hover:tranlate-y-0 transition-all group-hover:bg-yellow-400 group-hover:h-36"></span>
          <span className="z-10 group-hover:text-black">¿Porque nosotros?</span>
        </a>
        <a
          href="#Form"
          className="group transtion-all relative w-1/4 h-full flex justify-center items-center overflow-hidden"
        >
          <span className="w-full absolute h-0 -translate-y-10 group-hover:tranlate-y-0 transition-all group-hover:bg-yellow-400 group-hover:h-36"></span>
          <span className="z-10 group-hover:text-black">Contacto</span>
        </a>
      </div>
      <div className="sm:hidden flex  items-center justify-center pr-4">
        <img
          src={toggle ? close : menu}
          onClick={() => setToggle((prev) => !prev)}
          className="z-10"
        ></img>
        <div className={`absolute items-center justify-center w-full right-0 top-14  bg-black ${toggle? 'h-96 flex transition-all':'h-0 hidden transition-all'}`}>
          <div className="text-white flex flex-col w-full h-full justify-center items-end px-6">
            <a href="#services" className="my-4" onClick={() => setToggle((prev) => !prev)}>Servicios</a>
            <a href="#content" className="my-4" onClick={() => setToggle((prev) => !prev)}>¿Porque nosotros?</a>
            <a href="#Form" className="my-4" onClick={() => setToggle((prev) => !prev)}>Contacto</a>
          </div>
        </div>
      </div>
      <div
        style={{ width: `${scrollProgress * 100}%` }}
        className={`absolute -bottom-0 h-1 left-0 bg-secundario z-10`}
      ></div>
    </div>
  );
};

export default Navbar;

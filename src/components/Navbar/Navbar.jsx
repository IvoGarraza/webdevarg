import React, { useEffect, useState } from "react";
import logo from "../../assets/logo-recortado-icon.png";
import { motion, useScroll } from "framer-motion";
import menu from "../../assets/SVG/menu.svg";
import close from "../../assets/SVG/close.svg";
import { useTranslation } from "react-i18next";
import ToggleLanguage from "../ToggleLenguage/ToggleLanguage";

const Navbar = () => {
  const [navbarColor, setNavbarColor] = useState("bg-transparent text-[#fff]");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [toggle, setToggle] = useState(false);
  const { scrollYProgress } = useScroll();
  const [language, setLanguage] = useState("es");
  const [t, i18n] = useTranslation("global");

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      // No incluir behavior si ya está configurado en el CSS
    });
  };

  const toggleLanguage = (e) => {
    e.stopPropagation();
    if (language === "en") {
      setLanguage("es");
      i18n.changeLanguage("es");
      console.log(language);
    } else {
      setLanguage("en");
      i18n.changeLanguage("en");
      console.log(language);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(language);
  return (
    <div
      className={`w-full h-16 flex flex-row items-center justify-between duration-1000 transition-all z-10 ${navbarColor} text-white fixed`}
    >
      {/* Flecha back to the top */}
      <div
        onClick={scrollToTop}
        className="absolute cursor-pointer sm:top-[40rem] -bottom-[50rem] left-5 rounded-md bg-cuarto w-12 h-12 z-10 flex items-center justify-center"
      >
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
      {/* ------------------------------ */}
      <div className="w-1/3 ml-4 flex flex-row">
        <img src={logo} className="w-12 mr-2"></img>
        <span className="font-bold font-Code">WebdeV</span>
      </div>

      <div className=" hidden sm:flex flex-row w-1/2 justify-end h-full items-center">
        <ToggleLanguage/>
        <a
          href="#services"
          className="group transtion-all relative w-1/4 h-full flex justify-center items-center overflow-hidden"
        >
          <span className="w-full absolute h-0 -translate-y-10 group-hover:tranlate-y-0 transition-all group-hover:bg-yellow-400 group-hover:h-36"></span>
          <span className="z-10 group-hover:text-black">
            {t("navbar.services")}
          </span>
        </a>
        <a
          href="#content"
          className="group transtion-all relative w-1/4 h-full flex justify-center items-center overflow-hidden"
        >
          <span className="w-full absolute h-0 -translate-y-10 group-hover:tranlate-y-0 transition-all group-hover:bg-yellow-400 group-hover:h-36"></span>
          <span className="z-10 group-hover:text-black flex text-center">
            {t("navbar.why us")}
          </span>
        </a>
        <a
          href="#Form"
          className="group transtion-all relative w-1/4 h-full flex justify-center items-center overflow-hidden"
        >
          <span className="w-full absolute h-0 -translate-y-10 group-hover:tranlate-y-0 transition-all group-hover:bg-yellow-400 group-hover:h-36"></span>
          <span className="z-10 group-hover:text-black">
            {t("navbar.contact")}
          </span>
        </a>
      </div>
      {/* Navbar del movil */}
      
      <div className="sm:hidden flex  items-center justify-center pr-4">
        <img
          src={toggle ? close : menu}
          onClick={() => setToggle((prev) => !prev)}
          className="z-10"
        ></img>
        <div
          className={`absolute items-center justify-center w-full right-0 top-14  bg-black ${
            toggle ? "h-96 transition-all" : "h-0  transition-all"
          }`}
        >
          <div className={`text-white flex flex-col w-full h-full ${toggle ? 'flex':'hidden'} transition-all justify-center items-end px-6`}>
            <a
              href="#services"
              className="my-4"
              onClick={() => setToggle((prev) => !prev)}
              >
              {t('navbar.services')}
            </a>
            <a
              href="#content"
              className="my-4"
              onClick={() => setToggle((prev) => !prev)}
            >
              {t('navbar.why us')}
            </a>
            <a
              href="#Form"
              className="my-4"
              onClick={() => setToggle((prev) => !prev)}
            >
              {t('navbar.contact')}
            </a>
            <br/>
            <ToggleLanguage/>
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

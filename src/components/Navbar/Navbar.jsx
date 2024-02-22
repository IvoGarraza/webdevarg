import React from "react";
import logo from "../../assets/logo-recortado-icon.png";

const Navbar = () => {
  return (
    <div className="w-full h-16 flex flex-row items-center justify-between bg-black text-white">
      <div className="w-1/3 ml-4 flex flex-row">
        <img src={logo} className="w-12 mr-2"></img>
        <span className="font-bold">Webdevarg</span>
      </div>
      <div className=" hidden sm:flex flex-row w-1/2 justify-end h-full items-center">
        <a className="group transtion-all relative w-1/4 h-full flex justify-center items-center overflow-hidden">
          <span className="w-full absolute h-0 -translate-y-10 group-hover:tranlate-y-0 transition-all group-hover:bg-yellow-400 group-hover:h-36"></span>
          <span className="z-10 group-hover:text-black">Servicios</span>
        </a>
        <a className="group transtion-all relative w-1/4 h-full flex justify-center items-center overflow-hidden">
          <span className="w-full absolute h-0 -translate-y-10 group-hover:tranlate-y-0 transition-all group-hover:bg-yellow-400 group-hover:h-36"></span>
          <span className="z-10 group-hover:text-black">¿Porque nosotros?</span>
        </a>
        <a href="#Form" className="group transtion-all relative w-1/4 h-full flex justify-center items-center overflow-hidden">
          <span className="w-full absolute h-0 -translate-y-10 group-hover:tranlate-y-0 transition-all group-hover:bg-yellow-400 group-hover:h-36"></span>
          <span className="z-10 group-hover:text-black">Contacto</span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;

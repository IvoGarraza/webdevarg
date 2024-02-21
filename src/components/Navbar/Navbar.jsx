import React from "react";
import logo from "../../assets/logo-recortado-icon.png";

const Navbar = () => {
  return (
    <div className="w-full h-16 flex flex-row items-center justify-between bg-black text-white">
      <div className="w-1/3 ml-4 flex flex-row">
        <img src={logo} className="w-12 mr-2"></img>
        <span className="font-bold">Webdevarg</span>
      </div>
      <div className="group flex flex-row w-1/3 justify-around h-full items-center">
        <a className="transtion-all relative w-1/4 h-full flex justify-center items-center overflow-hidden">
          <span className="w-full absolute h-0 -translate-y-10 group-hover:tranlate-y-0 transition-all group-hover:bg-yellow-400 group-hover:h-36"></span>
          <span className="z-10 group-hover:text-black">Inicio</span>
        </a>
        <div>Servicios</div>
        <div>¿Porque nosotros?</div>
        <div>Contacto</div>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import icono1 from "../../assets/icon1.png";
import icono2 from "../../assets/icono2.png";
import icono3 from "../../assets/icono3.svg";
import draw from "../../assets/HOMEFINAL.png";
/* import {ReactComponent as ReactLogo} from '../../assets/SVG/search.svg' */
import search from "../../assets/SVG/search.svg";
import design from "../../assets/SVG/design.svg";
import sales from "../../assets/SVG/sales.svg";
import isometricDraw from "../../assets/SVG/isometric-draw.svg";

const Content = () => {
  return (
    <div
      id="content"
      className="w-full bg-white relative flex sm:flex-row items-center flex-col h-[35rem]"
    >
      <div className="w-1/2 hidden sm:flex items-center justify-center">
        <img src={isometricDraw} className="w-[80%]"></img>
      </div>
      <div className="sm:w-1/2 w-full h-full flex flex-col items-center justify-around">
        <div className="group w-full h-1/3 flex flex-row items-center sm:pl-12 px-4 rounded-md hover:bg-slate-300">
          <div>
            <img className="w-32 mr-10" src={sales}></img>
            {/* <ReactLogo></ReactLogo> */}
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl">Incrementa tus ventas</span>
            <span>
              Llega a muchos mas visitantes con un sitio web optimizado para
              vender.
            </span>
            <div className="w-0 h-1 group-hover:w-full transition-all duration-700 bg-secundario rounded-full"></div>
          </div>
        </div>
        <div className="group w-full h-1/3 flex flex-row items-center sm:pl-12 px-4 rounded-md hover:bg-slate-300">
          <div>
            <img className="w-32 mr-10" src={search}></img>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl">Te indexamos con google.</span>
            <span>
              Hace que tus clientes te encuentren en el buscador mas usado del
              mundo.
            </span>
            <div className="w-0 h-1 group-hover:w-full transition-all duration-700 bg-secundario rounded-full"></div>
          </div>
        </div>
        <div className="group w-full h-1/3 flex flex-row items-center sm:pl-12 px-4 rounded-md hover:bg-slate-300">
          <div>
            <img className="w-32 mr-10" src={design}></img>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl">Diseño adaptable</span>
            <span>
              Tu sitio web, preparado para celulares, pcs, notebooks y tablets.
            </span>
            <div className="w-0 h-1 group-hover:w-full transition-all duration-700 bg-secundario rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;

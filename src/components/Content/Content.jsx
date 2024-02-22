import React from "react";
import icono1 from "../../assets/icon1.png";
import icono2 from "../../assets/icono2.png";
import icono3 from "../../assets/icono3.svg";
import draw from "../../assets/HOMEFINAL.png";
/* import {ReactComponent as ReactLogo} from '../../assets/SVG/search.svg' */
import search from "../../assets/SVG/search.svg";
import design from "../../assets/SVG/design.svg";
import sales from "../../assets/SVG/sales.svg";

const Content = () => {
  return (
    <div className="w-full relative flex sm:flex-row items-center flex-col h-[35rem]">
        {/* Start Waves */}
{/*       <div className="absolute w-full top-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#000000"
            fill-opacity="1"
            d="M0,192L48,192C96,192,192,192,288,181.3C384,171,480,149,576,122.7C672,96,768,64,864,85.3C960,107,1056,181,1152,192C1248,203,1344,149,1392,122.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div className="absolute w-full -bottom-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#000000"
            fill-opacity="1"
            d="M0,192L48,192C96,192,192,192,288,181.3C384,171,480,149,576,122.7C672,96,768,64,864,85.3C960,107,1056,181,1152,192C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div> */}
      {/*finish waves*/}
      <div className="w-1/2 flex items-center justify-center">
        <img src={search} className="w-96"></img>
      </div>
      <div className="w-1/2 h-full flex flex-col items-center justify-around">
        <div className="w-full h-1/6 flex flex-row items-center pl-12 rounded-md hover:bg-slate-300">
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
          </div>
        </div>
        <div className="w-full h-1/6 flex flex-row items-center pl-12 rounded-md hover:bg-slate-300">
          <div>
            <img className="w-32 mr-10" src={search}></img>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl">Te indexamos con google.</span>
            <span>
              Hace que tus clientes te encuentren en el buscador mas usado del
              mundo.
            </span>
          </div>
        </div>
        <div className="w-full h-1/6 flex flex-row items-center pl-12 rounded-md hover:bg-slate-300">
          <div>
            <img className="w-32 mr-10" src={design}></img>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl">Diseño adaptable</span>
            <span>
              Tu sitio web, preparado para celulares, pcs, notebooks y tablets.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;

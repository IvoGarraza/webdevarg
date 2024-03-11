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
import { useTranslation } from "react-i18next";

const Content = () => {
  const {t}= useTranslation("global")
  return (
    <div
      id="content"
      className="w-full bg-white relative flex sm:flex-row items-center flex-col h-[35rem]"
    >
      <div className="w-1/2 h-full hidden sm:flex flex-col items-center justify-center">
        <span className="font-bold text-3xl w-full text-center">{t("content.main")}</span>
        <img src={isometricDraw} className="w-[70%]"></img>
      </div>
      <div className="sm:w-1/2 w-full h-full flex flex-col items-center justify-around">
        <div className="group w-full h-1/3 flex flex-row items-center sm:pl-12 px-4 rounded-md hover:bg-slate-300">
          <div>
            <img className="w-32 mr-10" src={sales}></img>
            {/* <ReactLogo></ReactLogo> */}
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl">{t("content.card1Title")}</span>
            <span>
            {t("content.card1Text")}
            </span>
            <div className="w-0 h-1 group-hover:w-full transition-all duration-700 bg-secundario rounded-full"></div>
          </div>
        </div>
        <div className="group w-full h-1/3 flex flex-row items-center sm:pl-12 px-4 rounded-md hover:bg-slate-300">
          <div>
            <img className="w-32 mr-10" src={search}></img>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl">{t("content.card2Title")}</span>
            <span>
            {t("content.card2Text")}
            </span>
            <div className="w-0 h-1 group-hover:w-full transition-all duration-700 bg-secundario rounded-full"></div>
          </div>
        </div>
        <div className="group w-full h-1/3 flex flex-row items-center sm:pl-12 px-4 rounded-md hover:bg-slate-300">
          <div>
            <img className="w-32 mr-10" src={design}></img>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl">{t("content.card3Title")}</span>
            <span>
            {t("content.card3Text")}
            </span>
            <div className="w-0 h-1 group-hover:w-full transition-all duration-700 bg-secundario rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;

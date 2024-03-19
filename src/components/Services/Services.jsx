import React from "react";
import { useTranslation } from "react-i18next";

const Services = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div
      id="services"
      className="sm:h-[50rem] h-[80rem] w-full bg-white flex flex-col items-center justify-center"
    >
      <div className="w-full sm:h-[20%] h-[10%] sm:px-0 px-6 flex flex-col text-center items-center justify-center ">
        <span className="text-2xl font-bold">{t('services.title')}</span>
        <span className="font-medium ">
          {t('services.subtitles')}
        </span>
        <span className="text-gray-700">
          {t('services.subtitles2')}
        </span>
      </div>
      <div className=" w-full flex sm:flex-row flex-col items-center justify-around py-6 sm:h-[80%] h-[90%]">
        <div className="group shadow-lg hover:-mt-4 hover:mb-4 transition-all sm:w-1/4 sm:h-[95%] h-[30%] w-[90%] flex flex-col items-center justify-between bg-white rounded-md border-[1px] overflow-hidden border-slate-200">
          <div className="bg-black flex-col group-hover:bg-yellow-400 group-hover:text-black transition-all text-white w-full h-[20%] flex items-center justify-center font-semibold">
            <span className="text-xl sm:mb-[10px] mb-[5px]">{t('services.card1.title')}</span>
            <div className="sm:flex hidden w-[90%] h-[2px] bg-white opacity-50 rounded-full"></div>
            <span className="sm:mt-[10px] sm:flex hidden mt-[5px]">$110.000</span>
          </div>
          <div className="h-[70%] overflow-hidden text-sm">
            <p className="p-4  text-center">{t('services.card1.content')}
            </p>
          </div>
          <a className="bg-terciario w-full sm:h-[10%] h-[20%] text-white font-bold flex items-center justify-center rounded-b-md">
            {t('services.card1.button')}
          </a>
        </div>
        <div className="group shadow-lg hover:-mt-4 hover:mb-4 transition-all sm:w-1/4 sm:h-[95%] w-[90%] h-[30%] flex flex-col items-center justify-between bg-white rounded-md border-[1px] overflow-hidden border-slate-200">
          <div className="bg-black flex-col group-hover:bg-yellow-400 group-hover:text-black transition-all text-white w-full h-[20%] flex items-center justify-center font-semibold">
            <span className="text-xl sm:mb-[10px] mb-[5px]">{t('services.card2.title')}</span>
            <div className="w-[90%] h-[2px] bg-white opacity-50 rounded-full sm:flex hidden"></div>
            <span className="sm:mt-[10px] mt-[5px] sm:flex hidden">$160.000</span>
          </div>
          <div className="h-[70%] overflow-hidden text-sm">
            <p className="p-4  text-center">
              {t('services.card2.content')}
            </p>
          </div>
          <a
            href="https://www.google.com.ar"
            className="bg-terciario w-full sm:h-[10%] h-[20%] text-white font-bold flex items-center justify-center rounded-b-md"
          >
            {t('services.card2.button')}
          </a>
        </div>
        <div className="group shadow-lg hover:-mt-4 hover:mb-4 transition-all sm:w-1/4 sm:h-[95%] w-[90%] h-[30%] flex flex-col items-center justify-between bg-white rounded-md border-[1px] overflow-hidden border-slate-200">
          <div className="bg-black flex-col group-hover:bg-yellow-400 group-hover:text-black transition-all text-white w-full h-[20%] flex items-center justify-center font-semibold">
            <span className="text-xl sm:mb-[10px] mb-[5px]">{t('services.card3.title')}</span>
            <div className="w-[90%] h-[2px] bg-white opacity-50 rounded-full sm:flex hidden"></div>
            <span className="sm:mt-[10px] mt-[5px] sm:flex hidden">$0...</span>
          </div>
          <div className="overflow-hidden h-[70%] text-sm">
            <p className="p-4 text-center">{t('services.card3.content')}
            </p>
          </div>
          <a
            href="https://www.google.com.ar"
            className="bg-terciario w-full sm:h-[10%] h-[20%] text-white font-bold flex items-center justify-center rounded-b-md"
          >
            {t('services.card3.button')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;

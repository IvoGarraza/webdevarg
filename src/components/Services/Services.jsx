import React from "react";

const Services = () => {
  return (
    <div
      id="services"
      className="sm:h-[50rem] h-[80rem] w-full bg-white flex flex-col items-center justify-center"
    >
      <div className="w-full sm:h-[20%] h-[10%] flex flex-col items-center justify-center ">
        <span className="text-2xl font-bold">Nuestros servicios</span>
        <span className="font-medium text-center">
          Estos son algunos de los planes que ofrecemos
        </span>
      </div>
      <div className=" w-full flex sm:flex-row flex-col items-center justify-around py-6 sm:h-[80%] h-[90%]">
        <div className="group shadow-lg hover:-mt-4 hover:mb-4 transition-all sm:w-1/4 sm:h-[95%] h-full w-[90%] flex flex-col items-center justify-between bg-white rounded-md border-[1px] overflow-hidden border-slate-200">
          <div className="bg-black flex-col group-hover:bg-yellow-400 group-hover:text-black transition-all text-white w-full h-[20%] flex items-center justify-center font-semibold">
            <span className="text-xl sm:mb-[10px] mb-[5px]">One Page</span>
            <div className="w-[90%] h-[2px] bg-white opacity-50 rounded-full"></div>
            <span className="sm:mt-[10px] mt-[5px]">$0...</span>
          </div>
          <div className="h-[70%] overflow-hidden">
            <p className="p-4  text-center">
              One page concentra toda la información en una sola página. Los
              visitantes pueden deslizarse hacia abajo en un flujo continuo para
              conocer tu negocio. Aunque es más concisa y directa, a veces es
              ideal para presentar una idea o producto de manera cautivadora y
              efectiva, especialmente en dispositivos móviles donde la
              simplicidad es fundamental.
            </p>
          </div>
          <a className="bg-terciario w-full h-[10%] text-white font-bold flex items-center justify-center rounded-b-md">
            Solicitar
          </a>
        </div>
        <div className="group shadow-lg hover:-mt-4 hover:mb-4 transition-all sm:w-1/4 sm:h-[95%] w-[90%] h-[30%] flex flex-col items-center justify-between bg-white rounded-md border-[1px] overflow-hidden border-slate-200">
          <div className="bg-black flex-col group-hover:bg-yellow-400 group-hover:text-black transition-all text-white w-full h-[20%] flex items-center justify-center font-semibold">
            <span className="text-xl sm:mb-[10px] mb-[5px]">Institucional</span>
            <div className="w-[90%] h-[2px] bg-white opacity-50 rounded-full"></div>
            <span className="sm:mt-[10px] mt-[5px]">$0...</span>
          </div>
          <div className="h-[70%] overflow-hidden">
            <p className="p-4  text-center">
              Esta es tu tarjeta de presentación digital. A diferencia de una
              página one page, aquí tenemos múltiples páginas. Cada página tiene
              un propósito específico, como “Inicio”, “Acerca de Nosotros”,
              “Servicios”, “Contacto”, y más. Cada sección se dedica a una
              función particular, lo que permite una presentación detallada de
              tu empresa y sus servicios. Desde dispositivos móviles, tus
              visitantes pueden navegar fácilmente a través de estas páginas
              para obtener información completa y específica sobre tu negocio.
            </p>
          </div>
          <a href="https://www.google.com.ar" className="bg-terciario w-full h-[10%] text-white font-bold flex items-center justify-center rounded-b-md">
            Solicitar
          </a>
        </div>
        <div className="group shadow-lg hover:-mt-4 hover:mb-4 transition-all sm:w-1/4 sm:h-[95%] w-[90%] h-[30%] flex flex-col items-center justify-between bg-white rounded-md border-[1px] overflow-hidden border-slate-200">
          <div className="bg-black flex-col group-hover:bg-yellow-400 group-hover:text-black transition-all text-white w-full h-[20%] flex items-center justify-center font-semibold">
            <span className="text-xl sm:mb-[10px] mb-[5px]">Tienda online</span>
            <div className="w-[90%] h-[2px] bg-white opacity-50 rounded-full"></div>
            <span className="sm:mt-[10px] mt-[5px]">$0...</span>
          </div>
          <div className="overflow-hidden h-[70%]">
            <p className="p-4 text-center">
              Si deseas vender productos en línea, necesitas una página de
              e-commerce. Es como tener una tienda virtual abierta las 24 horas.
              Desde dispositivos móviles, tus clientes pueden explorar tu
              catálogo y realizar compras seguras. Es una forma eficiente y conveniente de
              expandir tu negocio en el mundo digital.
            </p>
          </div>
          <a className="bg-terciario w-full h-[10%] text-white font-bold flex items-center justify-center rounded-b-md pointer-events-none cursor-default opacity-40">
            No Disponible
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;

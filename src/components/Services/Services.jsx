import React from "react";

const Services = () => {
  return (
    <div
      id="services"
      className="sm:h-[50rem] h-[80rem] w-full flex flex-col items-center justify-center"
    >
      <div className="w-full h-[20%] flex flex-col items-center justify-center ">
        <span className="text-2xl font-bold">Nuestros servicios</span>
        <span className="font-medium">
          Estos son algunos de los planes que ofrecemos
        </span>
      </div>
      <div className=" w-full flex sm:flex-row flex-col items-center justify-around py-6 sm:h-[80%] h-[80%]">
        <div className="group shadow-lg hover:-mt-4 hover:mb-4 transition-all sm:w-1/4 h-1/3 w-[90%] flex flex-col items-center justify-between bg-white rounded-md border-[1px] overflow-hidden border-slate-200">
          <div className="bg-black flex-col group-hover:bg-yellow-400 group-hover:text-black transition-all text-white w-full h-[20%] flex items-center justify-center font-semibold">
            <span className="text-xl mb-[10px]">One Page</span>
            <div className="w-[90%] h-[2px] bg-white opacity-50 rounded-full"></div>
            <span className="mt-[10px]">$2000</span>
          </div>
          <p className="p-4 h-[70%] text-center">
            One page concentra toda la información en una sola página. Los
            visitantes pueden deslizarse hacia abajo en un flujo continuo para
            conocer tu negocio. Aunque es más concisa y directa, a veces es
            ideal para presentar una idea o producto de manera cautivadora y
            efectiva, especialmente en dispositivos móviles donde la simplicidad
            es fundamental.
          </p>
          <a className="bg-green-400 w-[90%] h-[10%] mb-2 text-white font-bold flex items-center justify-center rounded-md">
            Solicitar
          </a>
        </div>
        <div className="group shadow-lg hover:-mt-4 hover:mb-4 transition-all sm:w-1/4 w-[90%] h-1/3 flex flex-col items-center justify-between bg-white rounded-md border-[1px] overflow-hidden border-slate-200">
          <div className="bg-black flex-col group-hover:bg-yellow-400 group-hover:text-black transition-all text-white w-full h-[20%] flex items-center justify-center font-semibold">
            <span className="text-xl mb-[10px]">One Page</span>
            <div className="w-[90%] h-[2px] bg-white opacity-50 rounded-full"></div>
            <span className="mt-[10px]">$2000</span>
          </div>
          <p className="p-4 h-[70%] text-center">
            Esta es tu tarjeta de presentación digital. A diferencia de una
            página one page, aquí tenemos múltiples páginas. Cada página tiene
            un propósito específico, como “Inicio”, “Acerca de Nosotros”,
            “Servicios”, “Contacto”, y más. Cada sección se dedica a una función
            particular, lo que permite una presentación detallada de tu empresa
            y sus servicios. Desde dispositivos móviles, tus visitantes pueden
            navegar fácilmente a través de estas páginas para obtener
            información completa y específica sobre tu negocio.
          </p>
          <a className="bg-green-400 w-[90%] h-[10%] mb-2 text-white font-bold flex items-center justify-center rounded-md">
            Solicitar
          </a>
        </div>
        <div className="group shadow-lg hover:-mt-4 hover:mb-4 transition-all sm:w-1/4 w-[90%] h-1/3 flex flex-col items-center justify-between bg-white rounded-md border-[1px] overflow-hidden border-slate-200">
          <div className="bg-black flex-col group-hover:bg-yellow-400 group-hover:text-black transition-all text-white w-full h-[20%] flex items-center justify-center font-semibold">
            <span className="text-xl mb-[10px]">One Page</span>
            <div className="w-[90%] h-[2px] bg-white opacity-50 rounded-full"></div>
            <span className="mt-[10px]">$2000</span>
          </div>
          <p className="p-4 h-[70%] text-center">
            Si deseas vender productos en línea, necesitas una página de
            e-commerce. Es como tener una tienda virtual abierta las 24 horas.
            Desde dispositivos móviles, tus clientes pueden explorar tu
            catálogo, realizar compras seguras y recibir sus productos en la
            puerta de su casa. Es una forma eficiente y conveniente de expandir
            tu negocio en el mundo digital.
          </p>
          <a className="bg-green-400 w-[90%] h-[10%] mb-2 text-white font-bold flex items-center justify-center rounded-md">
            Solicitar
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;

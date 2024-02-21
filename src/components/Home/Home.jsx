import React from "react";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div className="bg-black w-full flex sm:flex-row flex-col justify-around items-center text-white h-96">
      <div className="flex flex-col text-start">
        <div>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Transformamos tus ideas en un Sitio Web",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              /* 'We produce food for Hamsters',
        1000,
        'We produce food for Guinea Pigs',
        1000,
        'We produce food for Chinchillas',
        1000 */
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
          />
        </div>
        <span>
          Desarrollo web de última generación para impulsar tu presencia en
          línea
        </span>
        <div className="mt-4">
          <a
            href="#_"
            class="relative inline-flex items-center px-10 py-3 overflow-hidden text-lg font-medium text-yellow-400 border-2 border-yellow-400 rounded-full hover:text-white group hover:bg-gray-50"
          >
            <span class="absolute left-0 block w-full h-0 transition-all bg-yellow-400 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
            <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
            </span>
            <span class="relative">Contactanos</span>
          </a>
        </div>
      </div>
      <div>Iagen Home</div>
    </div>
  );
};

export default Home;

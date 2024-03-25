import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import spain from '../../assets/spain.png'
import eeuu from '../../assets/eeuu.png'

const ToggleLanguage = () => {
    const [toggle, setToggle] = useState(false);
    const [language, setLanguage] = useState("es");
    const [t, i18n] = useTranslation("global");

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
  return (
    <div onClick={toggleLanguage} className='w-1/4 cursor-pointer uppercase text-center'>
      <div className='flex flex-row w-full justify-center'>
        {/* <img src={language=='es' ? spain: eeuu} className='w-6'></img> */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
        </svg>

        <span className='ml-2 text-xs flex justify-end items-center'>{language=='es'?'ESPAÑOL':'ENGLISH'}</span>
      </div>
      {/* <span>{language=='es'?'ESPAÑOL':'ENGLISH'}</span> */}
    </div>
  )
}

export default ToggleLanguage
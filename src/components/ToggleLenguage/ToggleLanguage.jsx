import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';

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
    <div onClick={toggleLanguage} className='cursor-pointer'>
        <span>{language}</span>
        
    </div>
  )
}

export default ToggleLanguage
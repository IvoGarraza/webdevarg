import React from 'react'
import recent from '../../assets/recent.svg'
import imageWork from '../../assets/andesdean.jpg'
import { useTranslation } from 'react-i18next'

const RecentsWorks = () => {
    const {t}= useTranslation("global")
  return (
    <div className='w-full bg-transparent h-[40rem] text-white flex flex-col items-center sm:justify-center justify-around shadow-md'>
        <div className='flex flex-col items-center justify-center'>
            <span className='font-bold text-2xl'>{t("works.title")}</span>
            <span>{t("works.subtitle")}</span>
        </div>
        <div className='flex sm:flex-row flex-col h-[60%] items-center w-full sm:justify-center justify-around sm:pt-12'>
            <div className=''>
                <img src={imageWork} className='w-72 rounded-md grayscale-1'></img>    
            </div>       
            <div className='sm:ml-12 flex flex-col text-center'>
                {/* <div>01/02/2024</div> */}
                <a className='bg-yellow-400 flex flex-row rounded-md p-2 justify-center items-center'>
                    <img src={recent} className='w-6 fill-black'></img>
                    <a>Ver sitio</a>
                </a>
            </div>     
        </div>
    </div>
  )
}

export default RecentsWorks
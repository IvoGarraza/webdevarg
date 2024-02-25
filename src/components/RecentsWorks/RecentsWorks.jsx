import React from 'react'
import recent from '../../assets/recent.svg'
import imageWork from '../../assets/andesdean.jpg'

const RecentsWorks = () => {
  return (
    <div className='w-full bg-cuarto h-[40rem] text-white flex flex-col items-center justify-center shadow-md'>
        <span className='font-bold text-2xl'>Trabajo reciente</span>
        <span>Podes ver el ultimo trabajo que realizamos!</span>
        <div className='flex sm:flex-row items-center w-full justify-center pt-12'>
            <div className=''>
                <img src={imageWork} className='w-72 rounded-md grayscale-1'></img>    
            </div>       
            <div className='ml-12'>
                <div>Realizado: 01/02/2024</div>
                <a className='bg-yellow-400 flex flex-row rounded-md p-2 justify-center items-center'>
                    <img src={recent} className='w-6'></img>
                    <a>Ver sitio</a>
                </a>
            </div>     
        </div>
    </div>
  )
}

export default RecentsWorks
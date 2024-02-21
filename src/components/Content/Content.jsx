import React from 'react'
import icono1 from '../../assets/icon1.png'
import icono2 from '../../assets/icono2.png'
import icono3 from '../../assets/icono3.svg'
import draw from '../../assets/HOMEFINAL.png'

const Content = () => {
  return (
    <div className='w-full flex sm:flex-row flex-col h-96'>
        <div className='w-1/2 flex items-center justify-center'>
            <img src={draw} className='w-96'></img>
        </div>
        <div className='w-1/2 flex flex-col'>
            <div className='w-full h-1/3 flex flex-row items-center pl-12 rounded-md hover:bg-slate-300'>
                <div>
                    <img className='w-12 mr-10' src={icono1}></img>
                </div>
                <div className='flex flex-col'>
                    <span className='font-bold text-xl'>Incrementa tus ventas</span>
                    <span>Llega a muchos mas visitantes con un sitio web optimizado para vender.</span>
                </div>
            </div>
            <div className='w-full h-1/3 flex flex-row items-center pl-12 rounded-md hover:bg-slate-300'>
                <div>
                    <img className='w-12 mr-10' src={icono2}></img>
                </div>
                <div className='flex flex-col'>
                    <span className='font-bold text-xl'>Te indexamos con google.</span>
                    <span>Hace que tus clientes te encuentren en el buscador mas usado del mundo.</span>
                </div>
            </div>
            <div className='w-full h-1/3 flex flex-row items-center pl-12 rounded-md hover:bg-slate-300'>
                <div>
                    <img className='w-12 mr-10' src={icono3}></img>
                </div>
                <div className='flex flex-col'>
                    <span className='font-bold text-xl'>Diseño adaptable</span>
                    <span>Tu sitio web, preparado para celulares, pcs, notebooks y tablets.</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Content
import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Content from './components/Content/Content'
import RecentsWorks from './components/RecentsWorks/RecentsWorks'
import ContactForm from './components/ContactForm/ContactForm'
import Footer from './components/Footer/Footer'
import Services from './components/Services/Services'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import logo from '../src/assets/logo.png'

function App() {

  return (
    <div className='flex flex-col relative w font-montserrat'>

      <Navbar className=''></Navbar>
      <Home></Home>
      <Content></Content>
      <RecentsWorks></RecentsWorks>
      <Services></Services>
      <ContactForm></ContactForm>
      <Footer></Footer>
      <FloatingWhatsApp phoneNumber='+5493562408275' avatar={logo} accountName='WebdeV' statusMessage='Normalmente responde en 1 hora' chatMessage='Hola! Como te puedo ayudar?' placeholder='Escribe un mensaje...' className='wm:w-auto w-10'></FloatingWhatsApp>
    </div>
  )
}

export default App

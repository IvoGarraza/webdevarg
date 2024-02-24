import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Content from './components/Content/Content'
import RecentsWorks from './components/RecentsWorks/RecentsWorks'
import ContactForm from './components/ContactForm/ContactForm'
import Footer from './components/Footer/Footer'
import Services from './components/Services/Services'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

function App() {

  return (
    <div className='flex flex-col relative font-montserrat'>

      <Navbar className=''></Navbar>
      <Home></Home>
      <Content></Content>
      <RecentsWorks></RecentsWorks>
      <Services></Services>
      <ContactForm></ContactForm>
      <Footer></Footer>
      <FloatingWhatsApp phoneNumber='+5493562408275' accountName='WebdeV'></FloatingWhatsApp>
    </div>
  )
}

export default App

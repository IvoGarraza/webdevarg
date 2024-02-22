import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Content from './components/Content/Content'
import RecentsWorks from './components/RecentsWorks/RecentsWorks'
import ContactForm from './components/ContactForm/ContactForm'

function App() {

  return (
    <div className='flex flex-col'>
      <Navbar className=''></Navbar>
      <Home></Home>
      <Content></Content>
      <RecentsWorks></RecentsWorks>
      <ContactForm></ContactForm>
    </div>
  )
}

export default App

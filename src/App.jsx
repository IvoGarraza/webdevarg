import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Content from "./components/Content/Content";
import RecentsWorks from "./components/RecentsWorks/RecentsWorks";
import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";
import Services from "./components/Services/Services";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import logo from "../src/assets/logo.png";
import i18next from "i18next";
import global_es from './traducciones/es/global.json'
import global_en from './traducciones/en/global.json'
import { I18nextProvider } from "react-i18next";

function App() {
  i18next.init({
    interpolation: { escapeValue: false }, // Evita la necesidad de escapar contenido
    lng: "es", // Idioma predeterminado
    resources: {
      en: {
        global: global_en,
      },
      es: {
        global: global_es,
      },
    },
  })
  return (
    <I18nextProvider i18n={i18next} className="flex flex-col relative w font-montserrat">
      <Navbar className=""></Navbar>
      <Home></Home>
      <Content></Content>
      <RecentsWorks></RecentsWorks>
      <Services></Services>
      <ContactForm></ContactForm>
      <Footer></Footer>
      <FloatingWhatsApp
        phoneNumber="+5493562408275"
        avatar={logo}
        accountName="WebdeV"
        statusMessage="Normalmente responde en 1 hora"
        chatMessage="Hola! Como puedo ayudarte?"
        placeholder="Escribe un mensaje..."
        notificationSound='true'
        allowEsc='true'
        allowClickAway='true'
      ></FloatingWhatsApp>
    </I18nextProvider>
  );
}

export default App;

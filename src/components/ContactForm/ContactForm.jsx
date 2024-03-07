import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import {motion} from 'framer-motion'
import Check from "./Check/Check";

const ContactForm = ({onCampoCompleto}) => {
  const [formularioEnviado, setFormularioEnviado] = useState(false);
  const [valorCampo, setValorCampo] = useState('');
  const form = useRef();

  const manejarEnvioFormulario = (e) => {
    e.preventDefault();
    // Realizar acciones de envío del formulario (puedes enviar datos a un servidor aquí)
    // ...

    // Después de enviar el formulario, actualiza el estado para mostrar el mensaje
    setFormularioEnviado(true);
    onCampoCompleto(valorCampo);
  };

  


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_5o9syz9', 'id_webdev', form.current, {
        publicKey: 's_8mUhqB7dbE1SOMx',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setFormularioEnviado(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    
    <div
      id="Form"
      className="sm:h-[40rem] h-[50rem] flex sm:flex-row flex-col bg-yellow-400 text-black items-center justify-center"
    >
      
      <div className="h-[20%] sm:w-1/2 w-full flex  flex-col text-center items-center justify-center text-black">
        <span className="font-bold text-2xl">¡Hablanos de tu idea!</span>
        <span className="text-black ">Completa el formulario para poder contactarte</span>
      </div>
      <div className="h-[90%]  sm:w-[45%] w-[98%] items-center justify-around flex flex-col  ">
        {
          !formularioEnviado ? (
            <div class="flex items-center bg-white rounded-md justify-center w-full px-6 py-6">
            <div class=" w-full ">
              <form ref={form} onSubmit={sendEmail/* ();manejarEnvioFormulario() */}>
                <div class="mb-5">
                  <label
                    for="name"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Nombre"
                    class="w-full rounded-md border border-black py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                <div class="mb-5">
                  <label
                    for="email"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Email 
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="example@domain.com"
                    class="w-full rounded-md border border-black py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                <div class="mb-5">
                  <label
                    for="subject"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Numero de telefono
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Telefono"
                    class="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                <div class="mb-5">
                  <label
                    for="message"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Mensaje
                  </label>
                  <textarea
                    rows="4"
                    name="message"
                    id="message"
                    placeholder="Escriba su mensaje"
                    value={valorCampo}
                    onChange={(e) => setValorCampo(e.target.value)}
                    class="w-full resize-none rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  ></textarea>
                </div>
                <div>
                  <input class="hover:shadow-form rounded-md bg-black hover:bg-yellow-400 hover:text-white transition-all py-3 px-8 text-base font-semibold text-white outline-none" type="submit" value="Enviar" ></input>
  {/*                 <button class="hover:shadow-form rounded-md bg-black hover:bg-yellow-400 hover:text-white transition-all py-3 px-8 text-base font-semibold text-white outline-none">
                    Enviar
                  </button> */}
                </div>
              </form>
            </div>
          </div>
          ):(
            <motion.div initial={{scale:0}} animate={{scale:1}} className="bg-white rounded-md flex items-center justify-center h-[50%] w-full">
              <Check></Check>
              <span className="ml-2 font-bold text-xl">Formulario enviado</span>
            </motion.div>
          )
        }

      </div>
    </div>
  );
};

export default ContactForm;

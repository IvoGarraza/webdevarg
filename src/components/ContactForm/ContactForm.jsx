import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

const ContactForm = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_84vju6n', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
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
      <div className="h-[20%] w-1/2 flex items-center justify-center text-black">
        <span className="font-bold text-2xl">¡Contactanos!</span>
      </div>
      <div className="h-[90%]  sm:w-[45%] w-[95%] items-center justify-around flex flex-col  ">
        <div class="flex items-center bg-white rounded-md justify-center w-full px-4 py-6">
          <div class=" w-full ">
            <form ref={form} onSubmit={sendEmail}>
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
      </div>
    </div>
  );
};

export default ContactForm;

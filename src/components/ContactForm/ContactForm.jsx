import React from "react";

const ContactForm = () => {
  return (
    <div className="h-[40rem] flex flex-col bg-yellow-400 text-black items-center justify-center">
      <div className="h-[20%] w-full flex items-center justify-center text-black">
        <span className="font-bold text-2xl">¡Contactanos!</span>
      </div>
      <div className="h-[70%] w-full items-center justify-around flex flex-col">
        <div className=" w-full h-1/6 flex  items-center justify-center">
          <label className="w-[50%] border-black border-[2px] px-4 rounded-full">
            Name:
            <input
              className="text-black bg-yellow-400 p-2 rounded-full outline-none"
              placeholder="Your name..."
            ></input>
          </label>
        </div>
        <div className=" w-full h-1/6 flex  items-center justify-center">
          <label className="w-[50%] border-black border-[2px] px-4 rounded-full">
            Email:
            <input
              className="text-black bg-yellow-400 p-2 rounded-full outline-none"
              placeholder="Your name..."
            ></input>
          </label>
        </div>
        <div className=" w-full h-1/6 flex  items-center justify-center">
          <label className="w-[50%] border-black border-[2px] px-4 rounded-full">
            Phone number:
            <input
              className="text-black bg-yellow-400 p-2 rounded-full outline-none"
              placeholder="Your name..."
            ></input>
          </label>
        </div>
        <div className=" w-full h-1/6 flex  items-center justify-center">
          <label className="w-[50%] border-black border-[2px] px-4 rounded-full">
            Messaje:
            <input
              className="text-black bg-yellow-400 p-2 rounded-full outline-none"
              placeholder="Your name..."
            ></input>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

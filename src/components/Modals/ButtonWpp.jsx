import React from "react";

const ButtonWpp = () => {

  return (
    <div class="flex justify-center items-center fixed top-[85%] left-[90%] z-[1000]">
      <div class="relative inline-flex justify-center items-center">
        <div
          href="https://api.whatsapp.com/send/?phone=3052751143"
          target="blank"
          class="w-[60px] h-[60px] relative cursor-pointer hover:scale-[0.8] transition-transform rounded-full z-10"
        >
          <a
            href="https://api.whatsapp.com/send/?phone=3052751143"
            target="blank"
            className="absolute w-[100%] h-[100%]"
          ></a>
          <img className="rounded-full" src="images/Wpp.png" alt="" />
        </div>
        <div class="w-[50px] h-[50px] bg-green-300 rounded-full absolute top-[10%] left-[10%] animate-ping"></div>
        <div class="w-[60px] h-[60px] bg-green-500 rounded-full absolute top-0 left-0 animate-ping"></div>
      </div>
    </div>
  );
};

export default ButtonWpp;

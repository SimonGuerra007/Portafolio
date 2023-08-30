import React from "react";

const ModalShowGmail = ({ darkMode, handleShowModalGmail, showModalGmail }) => {
  return (
    <div
      className={`h-screen w-screen top-0 right-0 bg-black/80 fixed z-[2000] flex justify-center items-center transition-all ${
        showModalGmail ? "visible" : "invisible"
      }`}
    >
      <div className={`h-screen w-screen flex justify-center items-center fixed transition-all ${showModalGmail ? 'left-0' : 'left-[-200%]'}`}>
        <div
          className={`hover:transform-cpu transition-all w-[100%] h-[100%] sm:w-[500px] sm:h-[60%] relative rounded-none sm:rounded-[20px] flex flex-col justify-center items-center gap-5 ${
            darkMode ? "bg-[#211d32] text-white" : "bg-[#828773] text-black"
          }`}
        >
          <span
            onClick={handleShowModalGmail}
            className={`font-bold rounded-full py-1 px-[10px] cursor-pointer absolute top-2 right-2 ${
              darkMode ? "bg-[#c7c7c7] text-black" : "bg-[#202020] text-white"
            }`}
          >
            X
          </span>
          <div className="w-[130px] px-3 bg-white rounded-[15px]">
            <img src="/images/gmail.png" alt="" />
          </div>
          <h4 className="text-2xl font-bold">guerrasimon007@gmail.com</h4>
          <a
            className={`w-[100px] py-2 text-center shadow-md rounded-[5px] font-semibold transition-all ${
              darkMode
                ? "bg-[#1b1827] hover:bg-[#42304d] shadow-white"
                : "bg-[#5c5c5c] hover:bg-[#414141] shadow-black"
            }`}
            href="https://mail.google.com/mail/u/0/#inbox?compose=new"
            target="blank"
          >
            ir a Gmail
          </a>
        </div>
      </div>
    </div>
  );
};

export default ModalShowGmail;

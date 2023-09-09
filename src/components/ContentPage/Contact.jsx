import React from "react";
import { Link } from "react-scroll";

const Contact = ({ darkMode, handleShowModalGmail}) => {
  return (
    <div className="fixed z-[10] top-[38%] left-[3%] flex flex-col gap-6 invisible md:visible">
      <div onClick={handleShowModalGmail} className="w-[50px] p-[5px] rounded-[15px] relative transition-all cursor-pointer bg-[#ffffff]">
        <img src="/images/gmail.png" alt="" />
      </div>
      <a href="https://www.linkedin.com/in/simon-guerra-02252626b/" target="blank" className="w-[50px] cursor-pointer">
        <img  className="rounded-[15px]" src="/images/linkedin.png" alt="" />
      </a>
      <a href="https://github.com/SimonGuerra007" target="blank" className={`w-[50px] p-[px] rounded-[15px] transition-all cursor-pointer bg-white ${darkMode ? '' : 'border-[4px] border-black'} `}>
        <img src="/images/github.png" alt="" />
      </a>
    </div>
  );
};

export default Contact;

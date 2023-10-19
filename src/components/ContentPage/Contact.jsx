import React from "react";

const Contact = ({
  darkMode,
  handleShowModalGmail,
  handleShowModalDownload,
}) => {
  return (
    <div className="fixed z-[10] top-[28%] left-[3%] flex flex-col gap-6 invisible md:visible">
      <div
        onClick={handleShowModalGmail}
        className="w-[50px] h-[50px] p-[5px] border-[2px] border-black rounded-[15px] relative transition-all cursor-pointer bg-[#ffffff] hover:w-[150px] flex justify-end"
      >
        <img className="w-[35px]" src="/images/gmail.png" alt="" />
        <p className="text-3xl pt-[3px] pl-[8px] font-semibold opacity-0 absolute top-0 right-0 w-[100%] h-[100%] hover:opacity-100 transition-all text-black  ">
          <span className="text-[#356bff]">G</span>
          <span className="text-[#ff3737]">m</span>
          <span className="text-[#ffcc00]">a</span>
          <span className="text-[#356bff]">i</span>
          <span className="text-[#45b500]">l</span>
        </p>
      </div>
      <a
        href="https://www.linkedin.com/in/simon-guerra-02252626b/"
        target="blank"
        className="w-[50px] h-[50px] cursor-pointer relative hover:w-[170px] hover:bg-white rounded-[15px] flex justify-end transition-all"
      >
        <img
          className="rounded-[15px] w-[50px]"
          src="/images/linkedin.png"
          alt=""
        />
        <p className="text-[35px] font-bold opacity-0 absolute top-0 right-0 w-[100%] h-[100%] hover:opacity-100 transition-all text-black pl-[10px] ">
          Linked
        </p>
      </a>
      <a
        href="https://github.com/SimonGuerra007"
        target="blank"
        className={`w-[50px] h-[50px] rounded-[15px] relative hover:w-[170px] flex justify-end transition-all border-[3px] border-black cursor-pointer bg-white ${
          darkMode ? "" : ""
        } `}
      >
        <img className="w-[50px]" src="/images/github.png" alt="" />
        <p className="text-3xl font-bold opacity-0 absolute top-0 right-0 w-[100%] h-[100%] hover:opacity-100 transition-all text-[#1c1c1c] pl-[10px] pt-[4px] ">
          GitHub
        </p>
      </a>
      <button
        onClick={handleShowModalDownload}
        href=""
        className="w-[50px] h-[50px] p-[5px] relative rounded-[15px] hover:w-[175px] flex justify-end transition-all cursor-pointer bg-white border-[3px] border-black "
      >
        <img className="w-[35px]" src="/images/curriculum.png" alt="" />
        <p className="text-2xl font-bold opacity-0 absolute top-0 right-[16px] w-[100%] h-[100%] hover:opacity-100 transition-all text-[#1c1c1c] pl-[px] pt-[5px] ">
          Curriculum
        </p>
      </button>
    </div>
  );
};

export default Contact;

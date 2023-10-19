import React from "react";
import "../styles/skills.css";
import { useTranslation } from "react-i18next";

const Skills = ({ darkMode }) => {
  const { t } = useTranslation();
  return (
    <div
      className={`h-[100vh] flex flex-col justify-center items-center gap-[50px] ${
        darkMode
          ? "bg-gradient-to-r from-[#161616] to-[#292929]"
          : "bg-gradient-to-r from-[#64afff] to-[#e3e3e3]"
      } `}
    >
      <h2
        className={`text-center text-[25px] md:text-[50px]  font-bold px-[15px] py-[5px] rounded-full shadow-md ${
          darkMode
            ? "bg-[#0f0f0f] shadow-[#000000]"
            : "bg-[#e1efff] shadow-[#000000]"
        } `}
      >
        {t("skills.title")}
      </h2>
      <div
        className={`w-[75%] text-center md:text-[20px] font-bold p-[10px] rounded-[20px] shadow-md flex flex-col justify-around gap-8 ${
          darkMode
            ? "bg-[#0f0f0f] shadow-[#000000]"
            : "bg-[#e1efff] shadow-[#000000]"
        }`}
      >
        <div className="flex justify-end items-center gap-4 pr-[20%]">
          <h4>HTML</h4>
          <div
            className={`w-[50%] h-[10px] rounded-full after:content-[''] after:block after:w-[80%] after:h-full after:rounded-full ${
              darkMode ? "bg-white/20 after:bg-[#ffbf1d]" : "bg-black/70 after:bg-[#408cff]"
            }`}
          ></div>
          <span>80%</span>
        </div>
        <div className="flex justify-end items-center gap-4 pr-[20%]">
          <h4>CSS</h4>
          <div
            className={`w-[50%] h-[10px] rounded-full after:content-[''] after:block after:w-[80%] after:h-full after:rounded-full ${
              darkMode ? "bg-white/20 after:bg-[#ffbf1d]" : "bg-black/70 after:bg-[#408cff]"
            }`}
          ></div>
          <span>80%</span>
        </div>
        <div className="flex justify-end items-center gap-4 pr-[20%]">
          <h4>JAVASCRIPT</h4>
          <div
            className={`w-[50%] h-[10px] rounded-full after:content-[''] after:block after:w-[75%] after:h-full after:rounded-full ${
              darkMode ? "bg-white/20 after:bg-[#ffbf1d]" : "bg-black/70 after:bg-[#408cff]"
            }`}
          ></div>
          <span>75%</span>
        </div>
        <div className="flex justify-end items-center gap-4 pr-[20%]">
          <h4>REACT</h4>
          <div
            className={`w-[50%] h-[10px] rounded-full after:content-[''] after:block after:w-[85%] after:h-full after:rounded-full ${
              darkMode ? "bg-white/20 after:bg-[#ffbf1d]" : "bg-black/70 after:bg-[#408cff]"
            }`}
          ></div>
          <span>85%</span>
        </div>
        <div className="flex justify-end items-center gap-4 pr-[20%]">
          <h4>REDUX & ROUTER</h4>
          <div
            className={`w-[50%] h-[10px] rounded-full after:content-[''] after:block after:w-[70%] after:h-full after:rounded-full ${
              darkMode ? "bg-white/20 after:bg-[#ffbf1d]" : "bg-black/70 after:bg-[#408cff]"
            }`}
          ></div>
          <span>70%</span>
        </div>
        <div className="flex justify-end items-center gap-4 pr-[20%]">
          <h4>NODEJS</h4>
          <div
            className={`w-[50%] h-[10px] rounded-full after:content-[''] after:block after:w-[50%] after:h-full after:rounded-full ${
              darkMode ? "bg-white/20 after:bg-[#ffbf1d]" : "bg-black/70 after:bg-[#408cff]"
            }`}
          ></div>
          <span>60%</span>
        </div>
        <div className="flex justify-end items-center gap-4 pr-[20%]">
          <h4>EXPRESS</h4>
          <div
            className={`w-[50%] h-[10px] rounded-full after:content-[''] after:block after:w-[50%] after:h-full after:rounded-full ${
              darkMode ? "bg-white/20 after:bg-[#ffbf1d]" : "bg-black/70 after:bg-[#408cff]"
            }`}
          ></div>
          <span>60%</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;

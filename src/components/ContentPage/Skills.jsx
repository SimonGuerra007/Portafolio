import React from "react";
import "../styles/skills.css";
import { useTranslation } from "react-i18next";

const Skills = ({ darkMode }) => {
  const { t } = useTranslation()
  return (
    <div
      className={`h-[100vh] flex flex-col justify-center items-center gap-[50px] ${
        darkMode
          ? "bg-gradient-to-r from-[#161616] to-[#292929]"
          : "bg-gradient-to-r from-[#383838] to-[#929292]"
      } `}
    >
      <h2
        className={`text-center text-[25px] md:text-[50px]  font-bold px-[15px] py-[5px] rounded-full shadow-md ${
          darkMode
            ? "bg-[#0f0f0f] shadow-[#747474]"
            : "bg-[#b6b6b6] shadow-[#000000]"
        } `}
      >
        {t("skills.title")}
      </h2>
      <div
        className={`w-[60%] text-center md:text-[20px] font-bold p-[10px] rounded-[20px] shadow-md flex flex-col justify-around ${
          darkMode
            ? "bg-[#0f0f0f] shadow-[#747474]"
            : "bg-[#b6b6b6] shadow-[#000000]"
        }`}
      >
        <div className="w-[70px] md:w-[100px] self-center mb-[40px] md:mb-0">
          <p>HTML</p>
          <img src="/images/Html.png" alt="" />
        </div>
        <div className="flex flex-col md:flex-row justify-around items-center md:pl-[40px] gap-[40px] md:gap-0">
          <div className="w-[70px] md:w-[100px]">
            <p>CSS</p>
            <img src="/images/Css.png" alt="" />
          </div>
          <div className="w-[130px] md:w-[190px]">
            <p>JAVASCRIPT</p>
            <img src="/images/Javascript.png" alt="" />
          </div>
        </div>
        <div className="w-[70px] md:w-[100px] self-center mt-[40px] md:mt-0">
          <p>REACT</p>
          <img src="/images/React.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Skills;

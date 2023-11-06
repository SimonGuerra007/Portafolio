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
        className={`w-[75%] text-center md:text-[20px] font-bold p-[10px] rounded-[20px] shadow-md flex flex-col justify-around items-center gap-8 ${
          darkMode
            ? "bg-[#0f0f0f] shadow-[#000000]"
            : "bg-[#e1efff] shadow-[#000000]"
        }`}
      >
        <div className="w-full flex justify-around items-center gap-5">
          <div className="flex flex-col justify-center items-center">
          <div className="w-[70px]">
              <img src="/images/Html.png" alt="" />
            </div>
            <h4>HTML</h4>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="w-[70px]">
              <img src="/images/Css.png" alt="" />
            </div>
            <h4>CSS</h4>
            <div>
              <h4 className="font-semibold">Tailwind CSS</h4>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="w-[70px]">
            <img src="/images/React.png" alt="" />
          </div>
          <h4>REACT.JS</h4>
          <div className="flex justify-center items-center gap-5">
            <h4 className="font-semibold">Redux</h4>
            <h4 className="font-semibold">Router</h4>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="w-[120px]">
            <img src="/images/NodeJS.webp" alt="" />
          </div>
          <h4 className="font-semibold">Express</h4>
        </div>
      </div>
    </div>
  );
};

export default Skills;

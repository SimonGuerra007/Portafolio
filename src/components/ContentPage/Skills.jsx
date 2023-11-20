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
        className={`w-[100%] h-[150px] text-center md:text-[20px] font-bold p-[40px] shadow-md flex flex-col justify-around items-center gap-5 md:gap-[100px] ${
          darkMode
            ? "bg-[#0f0f0f] shadow-[#000000]"
            : "bg-[#e1efff] shadow-[#000000]"
        }`}
      >
      </div>
    </div>
  );
};

export default Skills;

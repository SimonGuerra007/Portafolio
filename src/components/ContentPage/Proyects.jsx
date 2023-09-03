import React from "react";
import { useTranslation } from "react-i18next";

const Proyects = ({ darkMode }) => {
  const { t } = useTranslation();
  return (
    <div
      className={`h-[100vh] flex flex-col justify-center items-center select-none ${
        darkMode
          ? "bg-gradient-to-r from-[#161616] to-[#292929]"
          : "bg-gradient-to-r from-[#383838] to-[#929292]"
      } `}
    >
      <h2
        className={`text-center text-[25px] md:text-[50px]  font-bold py-[5px] px-[20px] rounded-full shadow-md mb-[30px] ${
          darkMode
            ? "bg-[#0f0f0f] shadow-[#747474]"
            : "bg-[#b6b6b6] shadow-[#000000]"
        } `}
      >
        {t("projects.title")}
      </h2>
      <div className="flex flex-col sm:flex-row gap-[20px] lg:gap-[60px]">
        <div className="flex flex-col gap-[20px] lg:gap-[60px]">
          <div className="w-[230px] sm:w-[280px] lg:w-[350px] relative">
            <div className="hover:bg-black/80 rounded-[10px] absolute opacity-0 hover:opacity-[1] transition-all h-full w-full cursor-pointer flex flex-col sm:flex-row justify-center items-center gap-[10px] lg:gap-[30px]">
              <a href="https://pokedex-simonguerra.netlify.app/pokedex" target="blank" className="bg-[#ffb92c] rounded-[5px] py-[5px] px-[20px] hover:bg-[#434343] transition-all">
                {t("projects.seeWeb")}
              </a>
              <a href="https://github.com/SimonGuerra007/Pokedex" target="blank" className="bg-[#ffb92c] rounded-[5px] py-[5px] px-[20px] hover:bg-[#434343] transition-all">
                {t("projects.seeRepository")}
              </a>
            </div>
            <img className="rounded-[10px]" src="/images/Pokedex.png" alt="" />
          </div>
          <div className="w-[230px] sm:w-[280px] lg:w-[350px] relative">
            <div className="hover:bg-black/80 rounded-[10px] absolute opacity-0 hover:opacity-[1] transition-all h-full w-full cursor-pointer flex flex-col sm:flex-row justify-center items-center gap-[10px] lg:gap-[30px]">
              <a href="https://weather-app-simonguerra.netlify.app/" target="blank" className="bg-[#ffb92c] rounded-[5px] py-[5px] px-[20px] hover:bg-[#434343] transition-all">
                {t("projects.seeWeb")}
              </a>
              <a href="https://github.com/SimonGuerra007/Weather-App" target="blank" className="bg-[#ffb92c] rounded-[5px] py-[5px] px-[20px] hover:bg-[#434343] transition-all">
                {t("projects.seeRepository")}
              </a>
            </div>
            <img className="rounded-[10px]" src="/images/Weather.png" alt="" />
          </div>
        </div>
        <div className="flex flex-col gap-[20px] lg:gap-[60px]">
          <div className="w-[230px] sm:w-[280px] lg:w-[350px] relative">
            <div className="hover:bg-black/80 rounded-[10px] absolute opacity-0 hover:opacity-[1] transition-all h-full w-full cursor-pointer flex flex-col sm:flex-row justify-center items-center gap-[10px] lg:gap-[30px]">
              <a href="https://rickandmorty-simonguerra.netlify.app/" target="blank" className="bg-[#ffb92c] rounded-[5px] py-[5px] px-[20px] hover:bg-[#434343] transition-all">
                {t("projects.seeWeb")}
              </a>
              <a href="https://github.com/SimonGuerra007/RickAndMorty" target="blank" className="bg-[#ffb92c] rounded-[5px] py-[5px] px-[20px] hover:bg-[#434343] transition-all">
                {t("projects.seeRepository")}
              </a>
            </div>
            <img className="rounded-[10px]" src="/images/RickAndMorty.png" alt="" />
          </div>
          <div className="w-[230px] sm:w-[280px] lg:w-[350px] relative">
            <div className="hover:bg-black/80 rounded-[10px] absolute opacity-0 hover:opacity-[1] transition-all h-full w-full cursor-pointer flex flex-col sm:flex-row justify-center items-center gap-[10px] lg:gap-[30px]">
              <a href="https://ecommerce-simonguerra.netlify.app/" target="blank" className="bg-[#ffb92c] rounded-[5px] py-[5px] px-[20px] hover:bg-[#434343] transition-all">
                {t("projects.seeWeb")}
              </a>
              <a href="https://github.com/SimonGuerra007/ecommerce" target="blank" className="bg-[#ffb92c] rounded-[5px] py-[5px] px-[20px] hover:bg-[#434343] transition-all">
                {t("projects.seeRepository")}
              </a>
            </div>
            <img className="rounded-[10px]" src="/images/Ecommerce.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proyects;

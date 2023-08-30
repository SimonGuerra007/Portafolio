import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Navbar = ({ darkMode, setDarkMode, handleChangeLanguague, languague }) => {
  const [rotateLogo, setRotateLogo] = useState(false)
  const { t } = useTranslation();

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
    setRotateLogo(!rotateLogo)
  };


  return (
    <nav className={`flex justify-between items-center px-9 py-3 fixed top-0 z-[999] w-[100%] shadow-lg ${darkMode ? 'bg-[#171424] shadow-[#747474]' : 'bg-[#4e555a] shadow-[#000000]'}`}>
      <h3 className="text-2xl cursor-pointer">Simon Guerra</h3>
      <ul className="flex gap-10 font-bold ">
        <li className={`cursor-pointer rounded-[4px] py-2 px-4 transition-all  ${darkMode ? 'hover:bg-[#302b41]' : 'hover:bg-[#ffffff5f]'}`}>{t("navbar.home")}</li>
        <li className={`cursor-pointer rounded-[4px] py-2 px-4 transition-all  ${darkMode ? 'hover:bg-[#302b41]' : 'hover:bg-[#ffffff5f]'}`}>{t("navbar.aboutMe")}</li>
        <li className={`cursor-pointer rounded-[4px] py-2 px-4 transition-all  ${darkMode ? 'hover:bg-[#302b41]' : 'hover:bg-[#ffffff5f]'}`}>{t("navbar.skills")}</li>
        <li className={`cursor-pointer rounded-[4px] py-2 px-4 transition-all  ${darkMode ? 'hover:bg-[#302b41]' : 'hover:bg-[#ffffff5f]'}`}>{t("navbar.proyects")}</li>
      </ul>
      <div className="flex justify-between items-center gap-3">
        <div className="flex items-center gap-2">
          <select
            onChange={handleChangeLanguague}
            className={`bg-inherit p-1 rounded-[5px] cursor-pointer border-2 ${
              darkMode ? "border-white text-white" : "border-black text-black"
            }`}
          >
            <option
              className={`w-[25px] transition-all ${
                darkMode ? "bg-[#121424f3]" : "bg-[#636363]"
              } `}
            >
              {t("navbar.selectEnglish")}
            </option>
            <option
              className={`w-[25px] transition-all ${
                darkMode ? "bg-[#121424f3]" : "bg-[#636363]"
              } `}
            >
              {t("navbar.selectSpanish")}
            </option>
          </select>
        </div>
        <div>
          <div
            onClick={handleDarkMode}
            className={`${
              darkMode ? "border-[#c2c2c2] hover:rotate-1" : "border-[#1d1d1d] hover:-rotate-12 bg-white/50"
            } text-white cursor-pointer border-2 rounded-full p-1 transition-all ${rotateLogo ? 'rotate-180' : 'rotate-0'}`}
          >
            {darkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 transition-all"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-black transition-all"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

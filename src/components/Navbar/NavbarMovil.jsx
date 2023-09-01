import React from "react";
import { useTranslation } from "react-i18next";

const NavbarMovil = ({ darkMode, setShowMain, showMain, handleChangeLanguague, handleDarkMode, rotateLogo }) => {

    const { t } = useTranslation()

  const handleShowMain = () => {
    setShowMain(!showMain);
  };

  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-12 h-12 cursor-pointer"
        onClick={handleShowMain}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
      <div
        className={`fixed h-[100%] w-[100%] top-0 z-[5000] bg-white/30 ${
          showMain ? "visible" : "invisible"
        } `}
      >
        <div
          className={`h-[100%] w-screen sm:w-[70%] md:invisible flex flex-col fixed top-0 p-3 transition-all ${
            darkMode ? "bg-[#171424]" : "bg-[#4e555a]"
          } ${showMain ? "left-0" : "left-[-200%]"}`}
        >
          <p
            onClick={handleShowMain}
            className="cursor-pointer self-end px-[20px] font-semibold"
          >
            Close
          </p>
          <div className="flex flex-col gap-[50px] p-[20px]">
            <h3 className="text-2xl cursor-pointer">Simon Guerra</h3>
            <ul className="flex flex-col gap-3 lg:gap-10 font-bold ">
              <li
                className={`cursor-pointer rounded-[4px] py-2 px-4 transition-all  ${
                  darkMode ? "hover:bg-[#302b41]" : "hover:bg-[#ffffff5f]"
                }`}
              >
                {t("navbar.home")}
              </li>
              <li
                className={`cursor-pointer rounded-[4px] py-2 px-4 transition-all  ${
                  darkMode ? "hover:bg-[#302b41]" : "hover:bg-[#ffffff5f]"
                }`}
              >
                {t("navbar.aboutMe")}
              </li>
              <li
                className={`cursor-pointer rounded-[4px] py-2 px-4 transition-all  ${
                  darkMode ? "hover:bg-[#302b41]" : "hover:bg-[#ffffff5f]"
                }`}
              >
                {t("navbar.skills")}
              </li>
              <li
                className={`cursor-pointer rounded-[4px] py-2 px-4 transition-all  ${
                  darkMode ? "hover:bg-[#302b41]" : "hover:bg-[#ffffff5f]"
                }`}
              >
                {t("navbar.proyects")}
              </li>
            </ul>
            <div className="flex flex-col items-end gap-3 px-[50px]">
              <div className="flex items-center gap-2">
                <select
                  onChange={handleChangeLanguague}
                  className={`bg-inherit p-1 rounded-[5px] cursor-pointer border-2 ${
                    darkMode
                      ? "border-white text-white"
                      : "border-black text-black"
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
                    darkMode
                      ? "border-[#c2c2c2] hover:rotate-1"
                      : "border-[#1d1d1d] hover:-rotate-12 bg-white/50"
                  } text-white cursor-pointer border-2 rounded-full p-1 transition-all  ${
                    rotateLogo ? "rotate-180" : "rotate-0"
                  }`}
                >
                  {darkMode ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 transition-all hover:animate-spin"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
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
                      className="w-5 h-5 text-black hover:animate-spin"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarMovil;

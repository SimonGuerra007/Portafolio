import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";

const NavbarMovil = ({
  darkMode,
  setShowMain,
  showMain,
  handleChangeLanguague,
  handleDarkMode,
  rotateLogo,
  handleShowModalGmail,
}) => {
  const { t } = useTranslation();

  const handleShowMain = () => {
    setShowMain(!showMain);
  };

  return (
    <div
      className={`${
        darkMode
          ? "bg-gradient-to-r from-[#161616] to-[#3f3f3f]"
          : "bg-gradient-to-r from-[#3f3f3f] to-[#aaaaaa]"
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-12 h-12 cursor-pointer md:invisible"
        onClick={handleShowMain}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
      <div
        className={`fixed h-[100%] w-[100%] top-0 z-[5000] md:invisible ${
          showMain ? "visible" : "invisible"
        } `}
      >
        <div
          className={`h-[100%] w-screen md:invisible flex flex-col fixed top-0 p-3 transition-all ${
            darkMode
              ? "bg-gradient-to-r from-[#161616] to-[#3f3f3f]"
              : "bg-gradient-to-r from-[#3f3f3f] to-[#aaaaaa]"
          } ${showMain ? "left-0" : "left-[-200%]"}`}
        >
          <p
            onClick={handleShowMain}
            className="cursor-pointer self-end px-[20px] font-semibold"
          >
            {t("navbar.close")}
          </p>
          <div className="flex flex-col gap-[50px] p-[20px]">
            <h3
              onClick={handleShowMain}
              className="text-2xl cursor-pointer font-bold text-[#ffb92c]"
            >
              Simon Guerra
            </h3>
            <ul className="flex flex-col gap-3 lg:gap-10 font-bold ">
              <Link
                onClick={handleShowMain}
                to="Home"
                spy={true}
                smooth={true}
                duration={500}
                offset={-50}
              >
                <li
                  className={`cursor-pointer rounded-[4px] py-2 px-4 transition-all  ${
                    darkMode ? "hover:bg-[#717171]" : "hover:bg-[#ffffff5f]"
                  }`}
                >
                  {t("navbar.home")}
                </li>
              </Link>
              <Link
                onClick={handleShowMain}
                to="AboutMe"
                spy={true}
                smooth={true}
                duration={500}
                offset={-50}
              >
                <li
                  className={`cursor-pointer rounded-[4px] py-2 px-4 transition-all  ${
                    darkMode ? "hover:bg-[#717171]" : "hover:bg-[#ffffff5f]"
                  }`}
                >
                  {t("navbar.aboutMe")}
                </li>
              </Link>
              <Link
                onClick={handleShowMain}
                to="Skills"
                spy={true}
                smooth={true}
                duration={500}
                offset={-50}
              >
                <li
                  className={`cursor-pointer rounded-[4px] py-2 px-4 transition-all  ${
                    darkMode ? "hover:bg-[#717171]" : "hover:bg-[#ffffff5f]"
                  }`}
                >
                  {t("navbar.skills")}
                </li>
              </Link>
              <Link
                onClick={handleShowMain}
                to="Proyects"
                spy={true}
                smooth={true}
                duration={500}
                offset={-50}
              >
                <li
                  className={`cursor-pointer rounded-[4px] py-2 px-4 transition-all  ${
                    darkMode ? "hover:bg-[#717171]" : "hover:bg-[#ffffff5f]"
                  }`}
                >
                  {t("navbar.proyects")}
                </li>
              </Link>
            </ul>
            <div className="flex flex-col items-end gap-3 px-[50px]">
              <div className="flex items-center gap-2">
                <select
                  onChange={handleChangeLanguague}
                  className={`bg-inherit p-1 rounded-[5px] cursor-pointer border-2 ${
                    darkMode
                      ? "border-[#ffb92c] text-[#ffb92c]"
                      : "border-[#000000] text-[#000000] bg-[#ffb92c]"
                  }`}
                >
                  <option
                    className={`w-[25px] transition-all ${
                      darkMode ? "bg-[#484848] text-[#ffb92c]" : "bg-[#ffb92c]"
                    } `}
                  >
                    {t("navbar.selectEnglish")}
                  </option>
                  <option
                    className={`w-[25px] transition-all ${
                      darkMode ? "bg-[#484848] text-[#ffb92c]" : "bg-[#ffb92c]"
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
                      ? "border-[#ffb92c] hover:rotate-1 text-[#ffb92c]"
                      : "border-[#1d1d1d] hover:-rotate-12 bg-[#ffb92c]"
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
                      className="h-[35px] w-[35px] transition-all hover:animate-spin text-[#ffb92c]"
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
                      className="w-[30px] h-[30px] transition-all text-black hover:animate-spin"
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
          <div className="flex flex-row justify-center items-center gap-6">
            <div
              onClick={handleShowModalGmail}
              className="w-[50px] p-[5px] rounded-[15px] relative transition-all cursor-pointer bg-[#ffffff]"
            >
              <img src="/images/gmail.png" alt="" />
            </div>
            <a
              href="https://www.linkedin.com/in/simon-guerra-02252626b/"
              target="blank"
              className="w-[50px] cursor-pointer"
            >
              <img
                className="rounded-[15px]"
                src="/images/linkedin.png"
                alt=""
              />
            </a>
            <a
              href="https://github.com/SimonGuerra007"
              target="blank"
              className={`w-[50px] p-[px] rounded-[15px] transition-all cursor-pointer bg-white ${
                darkMode ? "" : "border-[4px] border-black"
              } `}
            >
              <img src="/images/github.png" alt="" />
            </a>
            <a
              href="https://www.instagram.com/simond_guerra_b/"
              target="blank"
              className="w-[50px] rounded-[18px] bg-white transition-all cursor-pointer"
            >
              <img src="/images/instagram.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarMovil;

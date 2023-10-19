import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/aboutMe.css";

const AboutMe = ({ darkMode }) => {
  const { t } = useTranslation();
  return (
    <div
      className={`h-[100vh] w-[100%] md:w-[100%] overflow-hidden flex justify-center items-center  ${
        darkMode
          ? "bg-gradient-to-r from-[#161616] to-[#292929]"
          : "bg-gradient-to-r from-[#64afff] to-[#e3e3e3]"
      } `}
    >
      <div className="w-[80%] h-[80%] m-auto flex md:flex-row flex-col items-center justify-center gap-[30px] select-none">
        <div
          className={`font-bold text-[20px] text-center sm:text-[40px] max:w-[50px] py-2 px-[30px] rounded-full flex md:flex-col flex-row sm:gap-[30px] md:rounded-full shadow-lg ${
            darkMode
              ? "bg-[#0f0f0f] shadow-[#000000]"
              : "bg-[#e1efff] shadow-[#000000]"
          } `}
        >
          <div className="w-[100%] flex md:flex-col justify-center items-center px-2 md:px-0">
            <h5>{t("aboutMe.title1")}</h5>
            <h5>{t("aboutMe.title2")}</h5>
            <h5>{t("aboutMe.title3")}</h5>
            <h5>{t("aboutMe.title4")}</h5>
            <h5>{t("aboutMe.title5")}</h5>
          </div>
          <div className="md:flex md:flex-col items-center pr-2 md:pr-0">
            <h5>{t("aboutMe.title6")}</h5>
            <h5>{t("aboutMe.title7")}</h5>
          </div>
        </div>

        <div className="h-[80%] w-[100%] flex flex-col justify-center items-center gap-4">
          <h3
            className={`text-xl sm:text-3xl text-center font-bold w-[90%] max-h-[100px] rounded-[20px] p-2 shadow-md ${
              darkMode
                ? "bg-[#0f0f0f] shadow-[#000000]"
                : "bg-[#e1efff] shadow-[#000000]"
            }`}
          >
            Simon David Guerra Bedoya
          </h3>
          <div
            className={`sm:text-xl w-[90%] h-[350px] md:h-[400px] overflow-auto rounded-l-[20px] rounded-r-[5px] p-5 shadow-md flex flex-col gap-3 ${
              darkMode
                ? "bg-[#0f0f0f] shadow-[#000000]"
                : "bg-[#e1efff] shadow-[#000000]"
            }`}
          >
            <div className="flex lg:flex-row flex-col-reverse justify-center items-center decoration-red-700">
              <p className="lg:w-[65%]">{t("aboutMe.information")}</p>
              <div className="lg:w-[35%] relative">
                {darkMode ? <img
                  className={`rounded-full h-[200px] w-[200px] border-[4px] border-[#ffb92c]`}
                  src="/images/PhotoPortafolioDark.png"
                  alt=""
                /> : <img
                className={`rounded-full h-[200px] w-[200px] border-[4px] border-black`}
                src="/images/PhotoPortafolio.png"
                alt=""
              />}
              </div>
            </div>
            <p>{t("aboutMe.information2")}</p>
            <p>{t("aboutMe.information3")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

import React from "react";
import { useTranslation } from "react-i18next";
import Contact from "./Contact";
import { Link } from "react-scroll";

const Home = ({ darkMode }) => {
  const { t } = useTranslation();

  return (
    <div
      className={`select-none ${
        darkMode
          ? "bg-gradient-to-r from-[#161616] to-[#3f3f3f]"
          : "bg-gradient-to-r from-[#7cbbff] to-[#ffffff]"
      } `}
    >
      <div className="h-[94vh] md:h-[93vh] w-[80%] md:w-[70%] m-auto flex flex-col md:flex-row justify-around items-center ">
        <div className="flex flex-col justify-center gap-[30px] sm:pb-[10px]">
          <div>
            <h4 className="font-semibold text-[10px] sm:text-[20px]">
              {t("home.title1")}
            </h4>
            <h1 className="font-bold text-[30px] sm:text-[35px] md:text-[60px] lg:text-[80px]">
              Simon Guerra
            </h1>
            <h4 className=" text-[10px] sm:text-[20px]">
              <span
                className={`font-bold ${
                  darkMode ? "text-[#ffb92c]" : "text-[#1e8bff]"
                }`}
              >
                ---{" "}
              </span>
              {t("home.title2")}
            </h4>
          </div>
          <Link
            to="AboutMe"
            spy={true}
            smooth={true}
            duration={500}
            offset={-50}
          >
            <button
              className={`w-[200px] p-[10px] rounded-full shadow-md transition-[1s] font-bold shadow-black ${
                darkMode
                  ? "bg-[#cf9013] hover:bg-[#946c1c]"
                  : "bg-[#1e8bff] hover:bg-[#5fadff]"
              } `}
            >
              {t("home.seeMore")}
            </button>
          </Link>
        </div>
        <div
          className={`w-[80%] h-full sm:w-[40%] mt-[20px] md:mt-0 rounded-t-[15px] md:rounded-none [transition:1s] ${
            darkMode ? "bg-[#cf9013]" : "bg-[#1e8bff]"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default Home;

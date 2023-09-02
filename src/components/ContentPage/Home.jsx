import React from "react";
import { useTranslation } from "react-i18next";
import Contact from "./Contact";
import { Link } from "react-scroll";

const Home = ({ darkMode }) => {
  const { t } = useTranslation();

  return (
    <div
      className={`${
        darkMode
          ? "bg-gradient-to-r from-[#161616] to-[#3f3f3f]"
          : "bg-gradient-to-r from-[#3f3f3f] to-[#aaaaaa]"
      } `}
    >
      <div className="h-[94vh] sm:h-[93vh] w-[80%] md:w-[70%] m-auto flex flex-col md:flex-row justify-around items-center ">
        <div className="flex flex-col justify-center gap-[30px] mb-[40px] sm:mb-[100px]">
          <div>
            <h4 className="font-semibold text-[10px] sm:text-[20px]">
              {t("home.title1")}
            </h4>
            <h1 className="font-bold text-[30px] sm:text-[35px] md:text-[60px] lg:text-[80px]">
              Simon Guerra
            </h1>
            <h4 className=" text-[10px] sm:text-[20px]">
              <span className="text-[#ffb92c] font-bold">--- </span>
              {t("home.title2")}
            </h4>
          </div>
          <Link to="AboutMe" spy={true} smooth={true} duration={500} offset={-50}>
            <button
              className={`w-[200px] p-[10px] rounded-full shadow-md transition-[1s] font-bold bg-[#cf9013] hover:bg-[#ffb218] shadow-black`}
            >
              {t("home.seeMore")}
            </button>
          </Link>
        </div>
        <div className="relative">
          <div
            className={`w-[300px] md:w-[430px] lg:w-[500px] absolute z-[10] bottom-[-150px] right-[-160px] md:bottom-[-350px] md:right-[-280px]`}
          >
            {darkMode ? (
              <img src="/images/PhotoPortafolioDark.png" alt="" />
            ) : (
              <img src="/images/PhotoPortafolio.png" alt="" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

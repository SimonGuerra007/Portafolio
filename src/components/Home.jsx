import React from "react";
import { useTranslation } from "react-i18next";

const Home = ({ darkMode }) => {
  const { t } = useTranslation();

  return (
    <div className="h-[100vh] flex justify-around items-center">
      <div className="flex flex-col justify-center gap-[30px]">
        <div>
          <h3 className="font-bold text-[40px]">Simon Guerra</h3>
          <h1 className="font-bold text-[40px]">{t("home.title")}</h1>
        </div>
        <button className={`w-[200px] p-[10px] rounded-[5px] shadow-md transition-[1s] font-bold ${darkMode ? 'bg-[#171424] shadow-[#747474] hover:bg-[#0e0c1a]' : 'bg-[#636363] shadow-[#000000] hover:bg-[#3d3d3d]'}`}>
          {t("home.seeMore")}
        </button>
      </div>
      <div
        className={`h-[350px] w-[350px] rounded-full border-2 ${
          darkMode ? "border-white" : "border-black"
        }`}
      >
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Home;

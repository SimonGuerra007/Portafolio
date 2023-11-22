import React from "react";
import { useTranslation } from "react-i18next";

const ModalDownloadCv = ({
  darkMode,
  modalDownload,
  handleShowModalDownload,
  cvLanguage,
}) => {
  const { t } = useTranslation();
  return (
    <div
      className={`h-screen w-full bg-black/60 flex justify-center items-center fixed top-0  z-[7500] ${
        modalDownload ? "visible" : "invisible"
      } `}
    >
      <div
        className={`w-[100%] h-[50%] sm:w-[60%] sm:h-[50%] p-5 rounded-[20px] flex flex-col justify-center items-center gap-[30px] transition-all fixed ${
          modalDownload ? "sm:left-[20%] left-0" : "left-[-200%]"
        } ${
          darkMode
            ? "bg-gradient-to-r from-[#161616] to-[#3f3f3f]"
            : "bg-gradient-to-r from-[#64afff] to-[#e3e3e3]"
        }`}
      >
        <h3 className="text-2xl text-center font-semibold">
          {t("modalDownload.title")}
        </h3>
        <div className="flex justify-center items-center gap-[30px]">
          <a
            onClick={handleShowModalDownload}
            href="/files/CV-SIMONGUERRA.pdf"
            download="CV Simon David Guerra Bedoya"
            className={`w-[100px] py-2 shadow-md rounded-[5px] text-center font-semibold transition-all bg-[#cf9013] hover:bg-[#ffb218] ${
              darkMode
                ? "bg-[#cf9013] hover:bg-[#8a6927] shadow-white"
                : "bg-[#007bff] hover:bg-[#3395ff] shadow-black"
            }`}
          >
            {t("modalDownload.download")}
          </a>
          <button
            onClick={handleShowModalDownload}
            className={`w-[100px] py-2 shadow-md rounded-[5px] font-semibold transition-all bg-[#cf9013] hover:bg-[#ffb218] ${
              darkMode
                ? "bg-[#cf9013] hover:bg-[#8a6927] shadow-white"
                : "bg-[#007bff] hover:bg-[#3395ff] shadow-black"
            }`}
          >
            {t("modalDownload.cancel")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalDownloadCv;

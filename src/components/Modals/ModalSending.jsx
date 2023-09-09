import React from "react";
import { useTranslation } from "react-i18next";

const ModalSending = ({ darkMode, modalSending }) => {
  const { t } = useTranslation();

  return (
    <div
      className={`h-screen w-full bg-black/60 flex justify-center items-center fixed top-0  z-[7500] ${
        modalSending ? "visible" : "invisible"
      } `}
    >
      <div
        className={`w-[100%] h-[50%] sm:w-[60%] sm:h-[50%] p-5 rounded-[20px] flex flex-col justify-center items-center gap-[30px] transition-all fixed ${
          modalSending ? "top-[25%]" : "top-[200%]"
        }  ${
          darkMode
            ? "bg-gradient-to-r from-[#161616] to-[#3f3f3f]"
            : "bg-gradient-to-r from-[#64afff] to-[#e3e3e3]"
        }`}
      >
        <div
          className={`w-[150px] rounded-full p-3 top-[35%] left-[70%] sm:left-[88%] [transition:1s]${
            darkMode ? "bg-[#ffbf00]" : "bg-[#64afff]"
          }`}
        >
          <img
            className="animate-spin"
            viewBox="0 0 24 24"
            src="/images/logoReact.png"
            alt=""
          />
        </div>
        <h4 className="text-2xl text-center font-semibold">
          {t("modalSending.title")}
        </h4>
      </div>
    </div>
  );
};

export default ModalSending;

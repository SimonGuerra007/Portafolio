import React from "react";
import { useTranslation } from "react-i18next";

const SendingSuccess = ({ sendingSuccess, darkMode }) => {
  const { t } = useTranslation();
  return (
    <div className={` border-[2px]  font-semibold py-[5px] px-[5px] w-[250px] flex items-center gap-[10px] fixed z-[8000] top-[85%] [transition:1s] ${sendingSuccess ? 'right-0' : 'right-[-200%]'} ${darkMode ? 'border-[#ffbc2c] bg-[#2b2b2b] text-white' : 'border-[#007bff] bg-[#b8daff] text-black'}`}>
      <p>{t("sendingSuccess.title")}</p>
      <div className="w-[10%]">
        <img src="/images/Sent.png" alt="" />
      </div>
    </div>
  );
};

export default SendingSuccess;

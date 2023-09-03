import React from "react";
import { useTranslation } from "react-i18next";

const SendingSuccess = ({ sendingSuccess }) => {
  const { t } = useTranslation();
  return (
    <div className={`bg-[#000000] text-white border-[2px] border-[#ffbc2c] font-semibold py-[5px] px-[5px] w-[250px] flex items-center gap-[10px] fixed z-[8000] top-[85%] [transition:1s] ${sendingSuccess ? 'right-0' : 'right-[-200%]'}`}>
      <p>{t("sendingSuccess.title")}</p>
      <div className="w-[10%]">
        <img src="/images/Sent.png" alt="" />
      </div>
    </div>
  );
};

export default SendingSuccess;

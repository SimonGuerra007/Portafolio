import React from "react";
import { useTranslation } from "react-i18next";

const ModalSuccessSend = ({ darkMode, sendEmail, setShowModalSuccessEmail, showModalSuccessEmail }) => {
  const { t } = useTranslation();

  const handleSubmitEmail = () => {
    sendEmail();
    setShowModalSuccessEmail(false)
  };

  const handleCloseModalSuccess = () => {
    setShowModalSuccessEmail(false)
  }

  return (
    <div className={`h-screen w-full bg-black/60 flex justify-center items-center fixed z-[5000] ${showModalSuccessEmail ? 'visible' : 'invisible'} `}>
      <div
        className={`w-[100%] h-[50%] sm:w-[60%] sm:h-[50%] p-5 rounded-[20px] flex flex-col justify-center items-center gap-[30px] transition-all fixed ${showModalSuccessEmail ? 'top-[25%]' : 'top-[200%]'}  ${
          darkMode ? "bg-[#211d32] text-white" : "bg-[#aab9bd] text-black"
        }`}
      >
        <h4 className="text-2xl text-center font-semibold">{t("modalSuccessSend.title")}</h4>
        <div className="flex justify-center items-center gap-[30px]">
          <button
            onClick={handleSubmitEmail}
            className={`w-[100px] py-2 shadow-md rounded-[5px] font-semibold transition-all ${
              darkMode
                ? "bg-[#1b1827] hover:bg-[#42304d] shadow-white"
                : "bg-[#4e555a] hover:bg-[#2d3639] shadow-black"
            }`}
          >{t("modalSuccessSend.confirm")}</button>
          <button
            onClick={handleCloseModalSuccess}
            className={`w-[100px] py-2 shadow-md rounded-[5px] font-semibold transition-all ${
              darkMode
                ? "bg-[#1b1827] hover:bg-[#42304d] shadow-white"
                : "bg-[#4e555a] hover:bg-[#2d3639] shadow-black"
            }`}
          >{t("modalSuccessSend.cancel")}</button>
        </div>
      </div>
    </div>
  );
};

export default ModalSuccessSend;

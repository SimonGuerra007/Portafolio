import React from "react";
import { useTranslation } from "react-i18next";

const ModalSuccessSend = ({ darkMode, sendEmail, setShowModalSuccessEmail, showModalSuccessEmail, setModalSending }) => {
  const { t } = useTranslation();

  const handleSubmitEmail = () => {
    sendEmail();
    setShowModalSuccessEmail(false)
    setModalSending(true)
  };

  const handleCloseModalSuccess = () => {
    setShowModalSuccessEmail(false)
  }

  return (
    <div className={`h-screen w-full bg-black/60 flex justify-center items-center fixed top-0  z-[7500] ${showModalSuccessEmail ? 'visible' : 'invisible'} `}>
      <div
        className={`w-[100%] h-[50%] sm:w-[60%] sm:h-[50%] p-5 rounded-[20px] flex flex-col justify-center items-center gap-[30px] transition-all fixed ${showModalSuccessEmail ? 'top-[25%]' : 'top-[200%]'}  ${
          darkMode
            ? "bg-gradient-to-r from-[#161616] to-[#3f3f3f]"
            : "bg-gradient-to-r from-[#3f3f3f] to-[#aaaaaa]"
        }`}
      >
        <h4 className="text-2xl text-center font-semibold">{t("modalSuccessSend.title")}</h4>
        <div className="flex justify-center items-center gap-[30px]">
          <button
            onClick={handleSubmitEmail}
            className={`w-[100px] py-2 shadow-md rounded-[5px] font-semibold transition-all bg-[#cf9013] hover:bg-[#ffb218] ${
              darkMode
                ? "shadow-white"
                : "shadow-black"
            }`}
          >{t("modalSuccessSend.confirm")}</button>
          <button
            onClick={handleCloseModalSuccess}
            className={`w-[100px] py-2 shadow-md rounded-[5px] font-semibold transition-all bg-[#cf9013] hover:bg-[#ffb218] ${
              darkMode
                ? "shadow-white"
                : "shadow-black"
            }`}
          >{t("modalSuccessSend.cancel")}</button>
        </div>
      </div>
    </div>
  );
};

export default ModalSuccessSend;

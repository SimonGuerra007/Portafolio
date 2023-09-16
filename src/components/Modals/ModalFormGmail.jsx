import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const ModalFormGmail = ({
  darkMode,
  handleShowModalGmail,
  showModalGmail,
  userFormGmail,
  setUserFormGmail,
  handleSubmit,
  register,
  errors,
  setShowModalSuccessEmail,
}) => {
  const { t } = useTranslation();

  const submit = (data) => {
    setUserFormGmail(data);
    if ({...userFormGmail}) {
      setShowModalSuccessEmail(true);
    }
  };

  return (
    <div
      className={`h-screen w-screen top-0 right-0 bg-black/80 fixed z-[7000] flex justify-center items-center transition-all ${
        showModalGmail ? "visible" : "invisible"
      }`}
    >
      <div
        className={`h-screen w-screen flex justify-center items-center fixed transition-all ${
          showModalGmail ? "left-0" : "left-[-200%]"
        }`}
      >
        <div
          className={`hover:transform-cpu transition-all w-[100%] h-[100%] sm:w-[600px] sm:h-[90%] relative rounded-none sm:rounded-[20px] flex flex-col justify-center items-center gap-5 ${
            darkMode
            ? "bg-gradient-to-r from-[#161616] to-[#3f3f3f]"
            : "bg-gradient-to-r from-[#64afff] to-[#e3e3e3]"
          }`}
        >
          <span
            onClick={handleShowModalGmail}
            className={`rounded-full py-1 px-[10px] font-bold cursor-pointer absolute top-2 right-2 transition-all hover:text-red-600 ${
              darkMode ? "bg-[#c7c7c7] text-black" : "bg-[#202020] text-white"
            }`}
          >
            X
          </span>
          <div className="w-[100px] px-2 bg-white rounded-[15px]">
            <img src="/images/gmail.png" alt="" />
          </div>
          <form
            onSubmit={handleSubmit(submit)}
            className={`flex flex-col justify-center items-center gap-3 `}
          >
            <div>
              <input
                className={`px-4 py-2 rounded-full w-[250px] sm:w-[350px] ${
                  darkMode
                  ? "bg-[#454545]"
                  : "bg-[#daecff] placeholder:text-[#3f3f3f] text-black"
                }`}
                type="text"
                name="name"
                id="name"
                placeholder={t("formEmail.placeHolderName")}
                {...register("name", {
                  required: {
                    value: true,
                    message: t("formEmail.name"),
                  },
                })}
              />
              <p className="text-xs text-[#ff0000] font-bold">
                {errors.name?.message}
              </p>
            </div>
            <div>
              <input
                className={`px-4 py-2 rounded-full w-[250px] sm:w-[350px] ${
                  darkMode
                  ? "bg-[#454545]"
                  : "bg-[#daecff] placeholder:text-[#3f3f3f] text-black"
                }`}
                type="email"
                name="email"
                id="email"
                placeholder={t("formEmail.placeHolderEmail")}
                {...register("email", {
                  required: {
                    value: true,
                    message: t("formEmail.email"),
                  },
                  pattern: {
                    value: /(?=.*[@])/,
                    message: t("formEmail.email2")
                  }
                })}
              />
              <p className="text-xs text-[#ff0000] font-bold">
                {errors.email?.message}
              </p>
            </div>
            <div>
              <textarea
                rows=""
                cols=""
              
                className={`px-4 py-2 rounded-[15px] resize-none overflow-y-auto box-border flex flex-col flex-wrap w-[250px] h-[200px] sm:w-[350px] ${
                  darkMode
                  ? "bg-[#454545]"
                  : "bg-[#daecff] placeholder:text-[#3f3f3f] text-black"
                }`}
                type="text"
                name="message"
                id="message"
                placeholder={t("formEmail.placeHolderMessage")}
                {...register("message", {
                  required: {
                    value: true,
                    message: t("formEmail.message1"),
                  },
                  maxLength: {
                    value: 1000,
                    message: t("formEmail.message2"),
                  },
                })}
              />
              <p
               className="text-xs text-[#ff0000] font-bold">
                {errors.message?.message}
              </p>
            </div>
            <button
              className={`w-[150px] py-2 shadow-md rounded-full font-semibold transition-all ${
                darkMode
                  ? "bg-[#cf9013] hover:bg-[#8a6927] shadow-white"
                  : "bg-[#007bff] hover:bg-[#3395ff] shadow-black"
              }`}
            >
              {t("formEmail.button")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalFormGmail;

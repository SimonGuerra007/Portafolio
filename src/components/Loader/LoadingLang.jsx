import React from "react";

const LoadingLang = ({ loadingLang, darkMode }) => {
  return (
    <div>
      <div
        className={`h-[100%] w-[50%] top-0 fixed z-[6000] transition-all ${
          darkMode
            ? "bg-[#171717]"
            : "bg-[#e3e3e3]"
        } ${loadingLang ? "left-0" : "left-[-200%]"}`}
      >
        <div className="relative w-full h-full">
          <div
            className={`absolute w-[150px] rounded-full p-3 top-[35%] left-[70%] sm:left-[88%] transition-all ${
              loadingLang ? "visible" : "visible"
            } ${darkMode ? "bg-[#ffbf00]" : "bg-[#007bff]"}`}
          >
            <img
              className="animate-spin"
              viewBox="0 0 24 24"
              src="/images/logoReact.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div
        className={`h-[100%] w-[50%] fixed top-0 right-0 z-[5500] transition-all ${
          loadingLang ? "right-0" : "right-[-200%]"
        } ${
          darkMode
            ? "bg-[#ffbf00]"
            : "bg-[#64afff]"
        }`}
      ></div>
    </div>
  );
};

export default LoadingLang;

import React from "react";

const LoadingGeneral = ({ loading, darkMode }) => {
  return (
    <div>
      <div
        className={`h-[100%] w-[50%] top-0 fixed z-[6000] [transition:1s] ${
          darkMode ? "bg-[#171717]" : "bg-[#e3e3e3]"
        } ${loading ? "left-0" : "left-[-200%]"}`}
      >
        <div className="relative w-full h-full">
          <div
            className={`absolute w-[150px] rounded-full p-3 top-[35%] left-[70%] sm:left-[88%] transition-all ${
              loading ? "visible" : "visible"
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
        className={`h-[100%] w-[50%] fixed top-0 right-0 z-[5500] [transition:1s] ${
          loading ? "right-0" : "right-[-200%]"
        } ${darkMode ? "bg-[#ffbf00]" : "bg-[#64afff]"}`}
      ></div>
    </div>
  );
};

export default LoadingGeneral;

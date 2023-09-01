import React from "react";

const LoadingLang = ({ loadingLang, darkMode }) => {
  return (
    <div>
      <div
        className={`h-[100%] w-[50%] top-0 fixed z-[6000] transition-all ${
          darkMode ? "bg-[#24223c]" : "bg-[#5d6a74]"
        } ${loadingLang ? "left-0" : "left-[-200%]"}`}
      >
        <div className="relative w-full h-full">
          <div
            className={`absolute w-[150px] rounded-full p-3 top-[35%] left-[88%] ${loadingLang ? 'visible' : 'invisible'} ${
              darkMode ? "bg-[#1e1d2d]" : "bg-[#343f46]"
            }`}
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
        className={`h-[100%] w-[50%] fixed top-0 right-0 z-[5000] transition-all ${
          darkMode ? "bg-[#24223c]" : "bg-[#5d6a74]"
        } ${loadingLang ? "right-0" : "right-[-200%]"}`}
      ></div>
    </div>
  );
};

export default LoadingLang;

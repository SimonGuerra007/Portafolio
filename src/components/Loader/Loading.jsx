import React from "react";

const Loading = ({ loadingLang, darkMode }) => {
  return (
    <div>
      <div
        className={` left-0 top-0 fixed z-[4000] transition-all rounded-br-full ${
          darkMode ? "bg-[#1b1a2b]" : "bg-[#b2ccd2]"
        } ${loadingLang ? "h-full w-[100%]" : "h-[0%] w-[0%]"} `}
      >
        <div className="relative w-full h-full">
          <div
            className={`absolute w-[150px] rounded-full p-3 top-[35%] left-[45%] ${loadingLang ? 'visible' : 'invisible'} ${
              darkMode ? "bg-[#292740]" : "bg-[#def9ff]"
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
        className={`fixed bottom-0 right-0 z-[3000] transition-all rounded-tl-full ${
          darkMode ? "bg-[#1b1a2b]" : "bg-[#b2ccd2]"
        } ${loadingLang ? "h-[100%] w-[100%]" : "h-[0%] w-[0%]"} `}
      ></div>
    </div>
  );
};

export default Loading;

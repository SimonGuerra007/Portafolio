import React from 'react'

const LoadingGeneral = ({ loading, darkMode }) => {
  return (
    <div>
      <div
        className={`h-[100%] w-[50%] top-0 fixed z-[4000] [transition:1s] ${
          darkMode ? "bg-[#1b1a2b]" : "bg-[#4e555a]"
        } ${loading ? "left-0" : "left-[-200%]"}`}
      >
        <div className="relative w-full h-full">
          <div
            className={`absolute w-[150px] rounded-full p-3 top-[35%] left-[88%] [transition:1s] ${loading ? 'visible' : 'invisible'} ${
              darkMode ? "bg-[#292740]" : "bg-[#343f46]"
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
        className={`h-[100%] w-[50%] fixed top-0 right-0 z-[3000] [transition:1s] ${
          darkMode ? "bg-[#1b1a2b]" : "bg-[#4e555a]"
        } ${loading ? "right-0" : "right-[-200%]"}`}
      ></div>
    </div>
  )
}

export default LoadingGeneral
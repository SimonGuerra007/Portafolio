import React from "react";
import "../styles/button_wpp.css";

const ButtonWpp = () => {
  return (
    <a href="https://api.whatsapp.com/send/?phone=3052751143" target="blank" className="frontSide">
      <div className="image-wpp">
        <img src="images/Wpp.png" alt="" />
      </div>
    </a>
  );
};

export default ButtonWpp;

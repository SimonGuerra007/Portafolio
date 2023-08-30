import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/aboutMe.css"

const AboutMe = ({ darkMode }) => {
  const { t } = useTranslation();
  return (
    <div className="h-[100vh] w-[90%] md:w-[75%] m-auto flex md:flex-row flex-col items-center justify-center gap-[30px]">
      <div
        className={`font-bold text-[40px] w-[90%] md:w-[10%] py-5 px-[50px] rounded-full flex md:flex-col flex-row gap-[30px] md:rounded-[10px] shadow-lg ${
          darkMode
            ? "bg-[#171424] shadow-[#747474]"
            : "bg-[#4e555a] shadow-[#000000]"
        } `}
      >
        <div className="md:flex flex-col items-center pr-2 md:pr-0">
          <span>{t("aboutMe.title1")}</span>
          <span>{t("aboutMe.title2")}</span>
          <span>{t("aboutMe.title3")}</span>
          <span>{t("aboutMe.title4")}</span>
          <span>{t("aboutMe.title5")}</span>
        </div>
        <div className="md:flex md:flex-col items-center pr-2 md:pr-0">
          <span>{t("aboutMe.title6")}</span>
          <span>{t("aboutMe.title7")}</span>
        </div>
      </div>

      <p
        className={`text-2xl w-[90%] rounded-[20px] p-5 shadow-lg ${
          darkMode
            ? "bg-[#171424] shadow-[#747474]"
            : "bg-[#4e555a] shadow-[#000000]"
        }`}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, ea!
        Consequatur aut, nisi natus nesciunt officiis ipsam enim repellendus
        maxime suscipit? Ex id at quo, in ipsa iusto repellat facere. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Excepturi a nesciunt
        architecto accusantium dignissimos voluptates distinctio ratione quam
        sapiente, commodi in placeat nobis laudantium sint ipsam blanditiis
        provident cum porro. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Ipsum consequuntur, tempore hic, cupiditate ut, quos modi aperiam
        porro in repudiandae optio repellendus magni dignissimos fuga inventore
        qui ipsam voluptatem voluptate? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Laboriosam ipsum at adipisci esse reprehenderit iure
        consectetur unde inventore recusandae dignissimos voluptatum dicta
        doloribus quos ullam, sunt culpa ut nam. Similique?
      </p>
    </div>
  );
};

export default AboutMe;

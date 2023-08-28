import React from "react";
import { useTranslation } from "react-i18next";

const AboutMe = ({ darkMode }) => {
  const { t } = useTranslation();
  return (
    <div className="h-[100vh] w-[75%] m-auto flex flex-col justify-center gap-[30px]">
      <h3
        className={`font-bold text-[40px] w-[70%] py-5 px-[50px] rounded-full self-start shadow-lg ${
          darkMode
            ? "bg-[#171424] shadow-[#747474]"
            : "bg-[#636363] shadow-[#000000]"
        } `}
      >
        {t("aboutMe.title")}
      </h3>
      <p
        className={`text-2xl w-[70%] h-[400px] self-end rounded-[20px] p-5 shadow-lg overflow-y-scroll ${
          darkMode
            ? "bg-[#171424] shadow-[#747474]"
            : "bg-[#636363] shadow-[#000000]"
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
        qui ipsam voluptatem voluptate? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ipsum at adipisci esse reprehenderit iure consectetur unde inventore recusandae dignissimos voluptatum dicta doloribus quos ullam, sunt culpa ut nam. Similique?
      </p>
    </div>
  );
};

export default AboutMe;

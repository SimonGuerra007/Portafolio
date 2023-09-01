import { useEffect, useState } from "react";
import "./App.css";
import { Fade } from "react-awesome-reveal";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/ContentPage/Home";
import AboutMe from "./components/ContentPage/AboutMe";
import Skills from "./components/ContentPage/Skills";
import Proyects from "./components/ContentPage/Proyects";
import Contact from "./components/ContentPage/Contact";
import LoadingLang from "./components/Loader/LoadingLang";
import LoadingGeneral from "./components/Loader/LoadingGeneral";
import ModalFormGmail from "./components/Modals/ModalFormGmail";
import NavbarMovil from "./components/Navbar/NavbarMovil";
import { EMPTY_FORM_VALUES } from "./components/shared/constants";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import ModalSuccessSend from "./components/Modals/ModalSuccessSend";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [languague, setLanguague] = useState("");
  const [showModalGmail, setShowModalGmail] = useState(false);
  const [loadingLang, setLoadingLang] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userFormGmail, setUserFormGmail] = useState(null);
  const [showModalSuccessEmail, setShowModalSuccessEmail] = useState(false);
  const [showMain, setShowMain] = useState(false);
  const [rotateLogo, setRotateLogo] = useState(false);
  const { i18n } = useTranslation();

  const {
    reset,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const handleShowModalGmail = () => {
    setShowModalGmail(!showModalGmail);
  };

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
    setRotateLogo(!rotateLogo);
  };

  const handleChangeLanguague = (e) => {
    setLanguague(e.target.value);

    if (languague === "Spanish" || languague === "Español") {
      setTimeout(() => {
        i18n.changeLanguage("en");
      }, 150);
      setLoadingLang(true);
    } else {
      setTimeout(() => {
        i18n.changeLanguage("es");
      }, 150);
      setLoadingLang(true);
    }

    setTimeout(() => {
      setLoadingLang(false);
    }, 200);
  };

  const sendEmail = () => {
    emailjs
      .send(
        "service_pz2jvva",
        "template_gagyctg",
        userFormGmail,
        "_vnGSaP0Lzhbg9U01"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          reset(EMPTY_FORM_VALUES);
          setShowModalGmail(false);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  };

  setTimeout(() => {
    setLoading(false);
  }, 700);

  return (
    <main
      className={`transition-all ${
        darkMode ? "bg-[#121212] text-white" : "bg-[#818181] text-black"
      }`}
    >
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        handleChangeLanguague={handleChangeLanguague}
        languague={languague}
        handleDarkMode={handleDarkMode}
      />

      <NavbarMovil
        darkMode={darkMode}
        setShowMain={setShowMain}
        showMain={showMain}
        handleChangeLanguague={handleChangeLanguague}
        handleDarkMode={handleDarkMode}
        handleShowModalGmail={handleShowModalGmail}
      />

      <Contact
        darkMode={darkMode}
        handleShowModalGmail={handleShowModalGmail}
      />

      <ModalFormGmail
        darkMode={darkMode}
        handleShowModalGmail={handleShowModalGmail}
        showModalGmail={showModalGmail}
        userFormGmail={userFormGmail}
        setUserFormGmail={setUserFormGmail}
        sendEmail={sendEmail}
        handleSubmit={handleSubmit}
        register={register}
        errors={errors}
        setShowModalSuccessEmail={setShowModalSuccessEmail}
      />

      <ModalSuccessSend
        darkMode={darkMode}
        sendEmail={sendEmail}
        setShowModalSuccessEmail={setShowModalSuccessEmail}
        showModalSuccessEmail={showModalSuccessEmail}
      />

      <LoadingLang loadingLang={loadingLang} darkMode={darkMode} />

      <LoadingGeneral loading={loading} darkMode={darkMode} />

      <Fade className="overflow-hidden" direction="left">
        <Home darkMode={darkMode} />
        <AboutMe darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Proyects darkMode={darkMode} />
      </Fade>
    </main>
  );
}

export default App;

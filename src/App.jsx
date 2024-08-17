import { useState, useEffect } from "react";
import "./App.css";

// ! COMPONENTS

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
import ModalSuccessSend from "./components/Modals/ModalSuccessSend";

// TODO: SHARED

import { EMPTY_FORM_VALUES } from "./components/shared/constants";

// ? LIBRARY

import { Fade } from "react-awesome-reveal";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { Element } from "react-scroll";
import ModalSending from "./components/Modals/ModalSending";
import SendingSuccess from "./components/Modals/SendingSuccess";
import ModalDownloadCv from "./components/Modals/ModalDownloadCv";
import ButtonWpp from "./components/Modals/ButtonWpp";

function App() {
  const getDarkModeStorage = JSON.parse(localStorage.getItem("darkMode"));

  const [darkMode, setDarkMode] = useState(getDarkModeStorage);
  const [languague, setLanguague] = useState("");
  const [showModalGmail, setShowModalGmail] = useState(false);
  const [loadingLang, setLoadingLang] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userFormGmail, setUserFormGmail] = useState(null);
  const [showModalSuccessEmail, setShowModalSuccessEmail] = useState(false);
  const [showMain, setShowMain] = useState(false);
  const [rotateLogo, setRotateLogo] = useState(false);
  const [modalSending, setModalSending] = useState(false);
  const [sendingSuccess, setSendingSuccess] = useState(false);
  const [modalDownload, setModalDownload] = useState(false);
  const [cvLanguage, setCvLanguage] = useState(false)

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

  const handleShowModalDownload = () => {
    setModalDownload(!modalDownload);
  };

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
    setRotateLogo(!rotateLogo);
  };

  const handleChangeLanguague = (e) => {
    setLanguague(e.target.value);

    if (languague === "Spanish") {
      setTimeout(() => {
        i18n.changeLanguage("en");
      }, 150);
      setLoadingLang(true);
      setCvLanguage(false)
    } else {
      setTimeout(() => {
        i18n.changeLanguage("es");
      }, 150);
      setLoadingLang(true);
      setCvLanguage(true)
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
          setModalSending(false);
          setSendingSuccess(true);
          setTimeout(() => {
            setSendingSuccess(false);
          }, 3000);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  };

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  localStorage.setItem("darkMode", JSON.stringify(darkMode));

  useEffect(() => {
    if (!darkMode) {
      setDarkMode(!darkMode);
    }
  }, []);

  return (
    <main
      className={`transition-all overflow-hidden  ${
        darkMode ? "bg-[#121212] text-white" : "bg-[#aed5ff] text-black"
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
        handleShowModalDownload={handleShowModalDownload}
      />

      <ModalSuccessSend
        darkMode={darkMode}
        sendEmail={sendEmail}
        setShowModalSuccessEmail={setShowModalSuccessEmail}
        showModalSuccessEmail={showModalSuccessEmail}
        setModalSending={setModalSending}
      />

      <ModalSending darkMode={darkMode} modalSending={modalSending} />

      <SendingSuccess sendingSuccess={sendingSuccess} darkMode={darkMode} />

      <ButtonWpp />

      <LoadingLang loadingLang={loadingLang} darkMode={darkMode} />

      <LoadingGeneral loading={loading} darkMode={darkMode} />

      <Fade direction="left">
        <Element name="Home">
          <Home darkMode={darkMode} />
        </Element>
        <Element name="AboutMe">
          <AboutMe darkMode={darkMode} />
        </Element>
        <Element name="Proyects">
          <Proyects darkMode={darkMode} />
        </Element>
      </Fade>
    </main>
  );
}

export default App;

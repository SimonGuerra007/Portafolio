import { useState } from "react";
import "./App.css";
import { Fade } from "react-awesome-reveal";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/ContentPage/Home";
import AboutMe from "./components/ContentPage/AboutMe";
import Skills from "./components/ContentPage/Skills";
import Proyects from "./components/ContentPage/Proyects";
import Contact from "./components/ContentPage/Contact";
import Loading from "./components/Loader/Loading";
import { useTranslation } from "react-i18next";
import ModalShowGmail from "./components/Modals/ModalShowGmail";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [languague, setLanguague] = useState("");
  const [showModalGmail, setShowModalGmail] = useState(false);
  const [loadingLang, setLoadingLang] = useState(false);
  const { i18n } = useTranslation();

  const handleShowModalGmail = () => {
    setShowModalGmail(!showModalGmail);
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

  return (
    <main
      className={`transition-all ${
        darkMode ? "bg-[#211d32] text-white" : "bg-[#aab9bd] text-black"
      }`}
    >
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        handleChangeLanguague={handleChangeLanguague}
        languague={languague}
      />

      <Contact
        darkMode={darkMode}
        handleShowModalGmail={handleShowModalGmail}
      />

      <ModalShowGmail
        darkMode={darkMode}
        handleShowModalGmail={handleShowModalGmail}
        showModalGmail={showModalGmail}
      />

      <Loading loadingLang={loadingLang} darkMode={darkMode} />

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

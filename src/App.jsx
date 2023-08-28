import { useState } from "react";
import "./App.css";
import { Fade } from "react-awesome-reveal";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Proyects from "./components/Proyects";
import Contact from "./components/Contact";
import { useTranslation } from "react-i18next";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [languague, setLanguague] = useState("");
  const { i18n } = useTranslation();

  const handleChangeLanguague = (e) => {
    setLanguague(e.target.value);
    if (languague === "Spanish" || languague === "Español") {
      i18n.changeLanguage("en");
    } else {
      i18n.changeLanguage("es");
    }
  };

  return (
    <main
      className={`transition-all ${
        darkMode ? "bg-[#211d32] text-white" : "bg-[#cfd6bc] text-black"
      }`}
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} handleChangeLanguague={handleChangeLanguague} languague={languague} />
      {/* <Contact /> */}
      <Fade direction="left">
        <Home darkMode={darkMode} />
        <AboutMe darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Proyects darkMode={darkMode} />
      </Fade>
    </main>
  );
}

export default App;

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import global_en from './languages/global_en.json'
import global_es from './languages/global_es.json'


const resources = {
  en: {
    translation: global_en
  },
  es: {
    translation: global_es
  }
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: "en",

    interpolation: {
      escapeValue: false 
    }
  });

  export default i18n;
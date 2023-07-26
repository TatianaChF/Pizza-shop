import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from 'i18next-http-backend';

void i18n 
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'ru',
        debug: true,
        detection: {
            order: ['queryString', 'cookie']
        },
        interpolation: {
            escapeValue: false
        }
    })

export default i18n;
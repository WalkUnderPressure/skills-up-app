import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import i18n, { InitOptions } from 'i18next';

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({        
        lng: 'en',
        supportedLngs: ['en', 'uk'],
        fallbackLng: 'en',
        load: 'currentOnly',

        ns: 'common',
        defaultNS: 'common',

        debug: __IS_DEV__,

        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },
    } as InitOptions);

export default i18n;

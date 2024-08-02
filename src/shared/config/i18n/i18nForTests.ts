import i18nForTests, { InitOptions } from 'i18next';
import { initReactI18next } from 'react-i18next';

const DEFAULT_LNG = 'en';
const DEFAULT_NS = 'common';

i18nForTests.use(initReactI18next).init({
  lng: DEFAULT_LNG,
  supportedLngs: ['en', 'uk'],
  fallbackLng: DEFAULT_LNG,
  load: 'currentOnly',

  ns: DEFAULT_NS,
  defaultNS: DEFAULT_NS,

  debug: false,

  resources: {
    en: { common: {} },
    uk: { common: {} },
  },
} as InitOptions);

export default i18nForTests;
export { DEFAULT_LNG, DEFAULT_NS };

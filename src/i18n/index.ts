import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import * as en from './en.json'
import * as zhCHS from './zh-CHS.json'

i18n.use(initReactI18next).init({
  resources: {
    en,
    'zh-CHS': zhCHS
  },
  lng: 'en',
  detection: {},
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
})

export default i18n

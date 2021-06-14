const ruTranslationMessages = require('./translations/ru.json');
const enTranslationMessages = require('./translations/en.json');

const appLocales = ['ru', 'en'];
// use default language from browser
const { language } = window.navigator;

const isAvailableLanguage = appLocales.includes(language.slice(0, 2));

const DEFAULT_LOCALE = isAvailableLanguage ? language.slice(0, 2) : 'ru';

const formatTranslationMessages = (locale, messages) => {
  const defaultFormattedMessages =
    locale !== DEFAULT_LOCALE
      ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages)
      : {};
  const flattenFormattedMessages = (formattedMessages, key) => {
    const formattedMessage =
      !messages[key] && locale !== DEFAULT_LOCALE ? defaultFormattedMessages[key] : messages[key];
    return Object.assign(formattedMessages, { [key]: formattedMessage });
  };
  return Object.keys(messages).reduce(flattenFormattedMessages, {});
};

const translationMessages = {
  ru: formatTranslationMessages('ru', ruTranslationMessages),
  en: formatTranslationMessages('en', enTranslationMessages),
};

exports.appLocales = appLocales;
exports.formatTranslationMessages = formatTranslationMessages;
exports.translationMessages = translationMessages;
exports.DEFAULT_LOCALE = DEFAULT_LOCALE;

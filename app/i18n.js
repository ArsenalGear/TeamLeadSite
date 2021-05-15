/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data for your app.
 *
 *   IMPORTANT: This file is used by the internal build
 *   script `extract-intl`, and must use CommonJS module syntax
 *   You CANNOT use import/export in this file.
 */

const ruTranslationMessages = require('./translations/ru.json');
const enTranslationMessages = require('./translations/en.json');

// const DEFAULT_LOCALE = 'en';

// prettier-ignore
const appLocales = [
  'ru',
  'en',
];
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
      !messages[key] && locale !== DEFAULT_LOCALE
        ? defaultFormattedMessages[key]
        : messages[key];
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

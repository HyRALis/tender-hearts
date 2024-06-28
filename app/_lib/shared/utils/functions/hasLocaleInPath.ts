import { LOCALES } from '../consts';

/**
 * Checks if the given path contains a locale from the LOCALES constant.
 *
 * @param {string} path - The path to check.
 * @return {boolean} - True if the path contains a locale, false otherwise.
 */
export const hasLocaleInPath = (path: string) => {
  let hasLocale = false;
  for (let locale in LOCALES) {
    if (path.split('/').includes(locale)) {
      hasLocale = true;
      break;
    }
  }

  return hasLocale;
};

import { TLocales } from '@/app/_lib/types/shared';
import { hasLocaleInPath } from './hasLocaleInPath';

/**
 * Computes the callback URL based on the given path and locale.
 *
 * @param {string | null} path - The path to compute the callback URL for. If null, returns '/'.
 * @param {TLocales} locale - The locale to use in the callback URL.
 * @return {string} The computed callback URL. If the path contains a locale, returns the path as is. Otherwise, returns the path prefixed with the locale.
 */
export const computeCallbackUrl = (path: string | null, locale: TLocales) => {
  if (path === null) {
    return `/${locale}`;
  }

  if (hasLocaleInPath(path)) return path;

  return `/${locale}/${path}`;
};

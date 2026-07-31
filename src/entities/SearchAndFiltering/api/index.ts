type QueryParamValue = string | number | boolean | (string | number)[] | undefined | null;

export type QueryParamsMap = Record<string, QueryParamValue>;

/**
 * Builds a URL string by combining a base URL and a query parameters object.
 * - Formats arrays as comma-separated strings (`ids=1,2,3`)
 * - Ignores `undefined`, `null`, and empty strings
 * - Safely handles base URLs that already contain query parameters
 */
export const buildUrlWithQueryParams = (baseUrl: string, params?: QueryParamsMap): string => {
  if (!params) return baseUrl;

  // Split path and any existing query parameters from baseUrl
  const [path, existingQuery] = baseUrl.split('?');
  const searchParams = new URLSearchParams(existingQuery);

  Object.entries(params).forEach(([key, value]) => {
    // 1. Remove param if value is undefined, null, or empty string
    if (value === undefined || value === null || value === '') {
      searchParams.delete(key);
      return;
    }

    // 2. Format arrays as comma-separated lists
    if (Array.isArray(value)) {
      if (value.length > 0) {
        searchParams.set(key, value.join(','));
      } else {
        searchParams.delete(key);
      }
    } else {
      // 3. Set scalar value
      searchParams.set(key, String(value));
    }
  });

  const queryString = searchParams.toString();
  return queryString ? `${path}?${queryString}` : path;
};

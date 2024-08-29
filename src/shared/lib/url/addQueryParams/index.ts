export function getQueryParams(params: PartialRecord<string, string>) {
  const searchParams = new URLSearchParams(window.location.search);
  Object.entries(params).forEach(([name, value]) => {
    if (value !== undefined) {
      searchParams.set(name, value);
    }
  });
  return `?${searchParams.toString()}`;
}

/**
 * Function which add search params to window URL
 */
export function addQueryParams(params: PartialRecord<string, string>) {
  window.history.pushState(null, '', getQueryParams(params));
}

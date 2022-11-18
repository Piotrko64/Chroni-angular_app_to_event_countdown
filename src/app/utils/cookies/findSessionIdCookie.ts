const SEARCHING_WORD = 'sessionId';

export function findSessionIdCookie(): false | string {
  const arrayCookies = document.cookie.split(';').map((cookie) => ({
    name: cookie.split('=')[0],
    value: cookie.split('=')[1],
  }));

  return (
    arrayCookies.find((arrayCookie) => arrayCookie.name === SEARCHING_WORD)
      ?.value || false
  );
}

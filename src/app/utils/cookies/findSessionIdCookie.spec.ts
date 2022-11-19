import { findSessionIdCookie } from './findSessionIdCookie';

describe('tests finding of cookies', () => {
  it('finds value of sessionId that exist', () => {
    Object.defineProperty(window.document, 'cookie', {
      writable: true,
      value: 'sessionId=1234;Other=something',
    });

    const valueCookieFromFunction = findSessionIdCookie();

    const expectValueCookie = '1234';

    expect(valueCookieFromFunction).toEqual(expectValueCookie);
  });

  it('not finds any value - return false', () => {
    Object.defineProperty(window.document, 'cookie', {
      writable: true,
      value: '',
    });

    const valueCookieFromFunction = findSessionIdCookie();

    expect(valueCookieFromFunction).toBeFalse();
  });
});

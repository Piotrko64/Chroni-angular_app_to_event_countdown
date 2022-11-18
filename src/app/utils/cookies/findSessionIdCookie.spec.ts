import { findSessionIdCookie } from './findSessionIdCookie';

describe('Tests finding of cookies', () => {
  it('Finds value of sessionId that exist', () => {
    Object.defineProperty(window.document, 'cookie', {
      writable: true,
      value: 'SessionId=1234;Other=something',
    });

    const valueCookieFromFunction = findSessionIdCookie();

    const expectValueCookie = '1234';

    expect(valueCookieFromFunction).toEqual(expectValueCookie);
  });

  it('Not finds any value - return false', () => {
    Object.defineProperty(window.document, 'cookie', {
      writable: true,
      value: '',
    });

    const valueCookieFromFunction = findSessionIdCookie();

    expect(valueCookieFromFunction).toBeFalse();
  });
});

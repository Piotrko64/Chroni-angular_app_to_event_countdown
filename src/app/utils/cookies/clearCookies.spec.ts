import { clearCookies } from './clearCookies';

describe('tests clearing cookies', () => {
  beforeEach(() => {
    Object.defineProperty(window.document, 'cookie', {
      writable: true,
      value: 'myCookie=omnomnom',
    });
  });

  it('check expires of cookies', () => {
    clearCookies();

    expect(window.document.cookie).toContain(
      '=;expires=Thu, 01 Jan 1970 00:00:00 GMT'
    );
  });

  it('checks lack of expires date', () => {
    expect(window.document.cookie).not.toContain(
      '=;expires=Thu, 01 Jan 1970 00:00:00 GMT'
    );
  });
});

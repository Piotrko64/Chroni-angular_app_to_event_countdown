import { SliceTextPipe } from './slice-text.pipe';

describe('SliceTextPipe', () => {
  it('create an instance', () => {
    const pipe = new SliceTextPipe();
    expect(pipe).toBeTruthy();
  });

  it('should contain "..." ', () => {
    const pipe = new SliceTextPipe();
    const longText =
      'printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';

    expect(pipe.transform(longText)).toContain('...');
  });

  it('should be equal this same text', () => {
    const pipe = new SliceTextPipe();
    const shortText = 'Lorem Ipsum';

    expect(pipe.transform(shortText)).toEqual(shortText);
  });
});

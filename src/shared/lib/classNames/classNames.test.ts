import classNames from '~/shared/lib/classNames';

describe('classNames', () => {
  test('Work with only one first parameter', () => {
    const expectedResult = 'app';
    const actualResult = classNames('app');

    expect(actualResult).toEqual(expectedResult);
  });

  test('Work with additional parameter', () => {
    const additionalParams = ['primary', 'dark'];
    const mainClassName = 'app';

    const expectedResult = [mainClassName, ...additionalParams].join(' ');
    const actualResult = classNames('app', {}, additionalParams);

    expect(actualResult).toEqual(expectedResult);
  });

  test('Work with optional parameter', () => {
    const optionalParams = { hovered: true, focused: false };
    const mainClassName = 'app';

    const expectedResult = `${mainClassName} hovered`;
    const actualResult = classNames('app', optionalParams);

    expect(actualResult).toEqual(expectedResult);
  });

  test('Work with empty params', () => {
    const expectedResult = '';
    const actualResult = classNames('');

    expect(actualResult).toBe(expectedResult);
  });

  test('Work with null and undefined in params', () => {
    const expectedResult = '';
    const actualResult = classNames('', { bordered: null, highlighted: undefined }, [
      null,
      undefined,
    ]);

    expect(actualResult).toBe(expectedResult);
  });
});

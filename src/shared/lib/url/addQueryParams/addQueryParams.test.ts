import { getQueryParams } from '.';

describe('getQueryParams', () => {
  test('with one parameter', () => {
    const params = getQueryParams({
      search: 'west',
    });

    expect(params).toBe('?search=west');
  });

  test('with multiple parameters', () => {
    const params = getQueryParams({
      type: 'asc',
      field: 'name',
    });
    expect(params).toBe('?type=asc&field=name');
  });

  test('with undefined', () => {
    const params = getQueryParams({
      name: 'alex',
      surname: undefined,
    });

    expect(params).toBe('?name=alex');
  });
});

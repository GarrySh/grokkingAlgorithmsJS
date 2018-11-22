import quickSort from '../src/4.quickSort';

test('data set 1', () => {
  const arr = [1, 5, 3, 4, 2];
  const expected = [1, 2, 3, 4, 5];
  expect(quickSort(arr)).toEqual(expected);
});

test('data set 2', () => {
  const arr = [-41, 5, 0, 1, 243, 5, -12, 15];
  const expected = [-41, -12, 0, 1, 5, 5, 15, 243];
  expect(quickSort(arr)).toEqual(expected);
});

test('data set 3', () => {
  const arr = [25];
  const expected = [25];
  expect(quickSort(arr)).toEqual(expected);
});

test('data set 4', () => {
  const arr = [];
  const expected = [];
  expect(quickSort(arr)).toEqual(expected);
});

import selectionSort from '../src/2.selectionSort';

test('data set 1', () => {
  const arr = [3, 17, 1, 5, 7, 15, 4];
  const expected = [1, 3, 4, 5, 7, 15, 17];
  expect(selectionSort(arr)).toEqual(expected);
});

test('data set 2', () => {
  const arr = [44, 17, 1, -5, 981, 0, 15, 4];
  const expected = [-5, 0, 1, 4, 15, 17, 44, 981];
  expect(selectionSort(arr)).toEqual(expected);
});

test('data set 3', () => {
  const arr = [153];
  const expected = [153];
  expect(selectionSort(arr)).toEqual(expected);
});

test('data set 4', () => {
  const arr = [];
  const expected = [];
  expect(selectionSort(arr)).toEqual(expected);
});

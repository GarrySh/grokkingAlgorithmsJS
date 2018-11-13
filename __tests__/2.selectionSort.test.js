import selectionSort from '../src/2.selectionSort';

test('data set 1', () => {
  const arr = [3, 17, 1, 5, 7, 15, 4];
  const expected = [1, 3, 4, 5, 7, 15, 17];
  expect(selectionSort(arr)).toEqual(expected);
});

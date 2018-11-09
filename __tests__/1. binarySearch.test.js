import binarySearch from '../src/1.binarySearch';

test('data set 1', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7];
  expect(binarySearch(arr, 1)).toBe(0);
  expect(binarySearch(arr, 2)).toBe(1);
  expect(binarySearch(arr, 3)).toBe(2);
  expect(binarySearch(arr, 4)).toBe(3);
  expect(binarySearch(arr, 5)).toBe(4);
  expect(binarySearch(arr, 6)).toBe(5);
  expect(binarySearch(arr, 7)).toBe(6);
  expect(binarySearch(arr, -1)).toBeNull();
});

test('data set 2', () => {
  const arr = [1, 3, 8, 12, 44, 55, 666, 987];
  expect(binarySearch(arr, 1)).toBe(0);
  expect(binarySearch(arr, 3)).toBe(1);
  expect(binarySearch(arr, 12)).toBe(3);
  expect(binarySearch(arr, 44)).toBe(4);
  expect(binarySearch(arr, 987)).toBe(7);
  expect(binarySearch(arr, 2)).toBeNull();
});

test('data set 3', () => {
  const arr = [1];
  expect(binarySearch(arr, 1)).toBe(0);
  expect(binarySearch(arr, 2)).toBeNull();
});

test('data set 4', () => {
  const arr = [];
  expect(binarySearch(arr, -1)).toBeNull();
  expect(binarySearch(arr, 2)).toBeNull();
});

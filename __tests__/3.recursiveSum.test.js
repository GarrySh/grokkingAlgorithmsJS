import recursiveSum from '../src/3.recursiveSum';

test('data set 1', () => {
  const arr = [1, 2, 3, 4];
  expect(recursiveSum(arr)).toBe(10);
});

test('data set 2', () => {
  const arr = [-1, 2, 3, 7, 100, 0];
  expect(recursiveSum(arr)).toBe(111);
});

test('data set 3', () => {
  const arr = [];
  expect(recursiveSum(arr)).toBe(0);
});

test('data set 4', () => {
  const arr = [121];
  expect(recursiveSum(arr)).toBe(121);
});

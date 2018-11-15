import count from '../src/4.2.recursiveCount';

test('data set 1', () => {
  const arr = [1, 2, 3, 4];
  expect(count(arr)).toBe(4);
});

test('data set 2', () => {
  const arr = [1, 2, 3, 4, -7, 15, 22, 555];
  expect(count(arr)).toBe(8);
});

test('data set 3', () => {
  const arr = [133];
  expect(count(arr)).toBe(1);
});

test('data set 4', () => {
  const arr = [];
  expect(count(arr)).toBe(0);
});

import max from '../src/4.3.recursiveMaxValue';

test('data set 1', () => {
  const arr = [1, 5, 3, 4, 2];
  expect(max(arr)).toBe(5);
});

test('data set 2', () => {
  const arr = [1, 0, 3, 555, -7, 15, 22, 43];
  expect(max(arr)).toBe(555);
});

test('data set 3', () => {
  const arr = [133];
  expect(max(arr)).toBe(133);
});

test('data set 4', () => {
  const arr = [];
  expect(max(arr)).toBeNull();
});

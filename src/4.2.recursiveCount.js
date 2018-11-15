const count = arr => {
  if (arr.length === 0) {
    return 0;
  }
  const [, ...tail] = arr;
  return 1 + count(tail);
};

export default count;

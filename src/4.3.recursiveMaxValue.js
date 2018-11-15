const max = arr => {
  const [head, ...tail] = arr;
  if (arr.length === 0) {
    return null;
  }
  if (arr.length === 2) {
    return head > tail[0] ? head : tail[0];
  }
  const iterMax = max(tail);
  return head > iterMax ? head : iterMax;
};

export default max;

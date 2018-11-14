const recursiveSum = arr => {
  const [head, ...tail] = arr;
  if (arr.length === 0) {
    return 0;
  }
  if (arr.length === 1) {
    return head;
  }
  return head + recursiveSum(tail);
};

export default recursiveSum;

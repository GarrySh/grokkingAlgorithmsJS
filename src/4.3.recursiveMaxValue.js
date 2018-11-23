const max = arr => {
  const [first, second, ...tail] = arr;
  if (arr.length === 1) {
    return first;
  }
  const greater = first > second ? first : second;
  if (arr.length === 2) {
    return greater;
  }
  console.log({ greater, tail });
  return max([greater, ...tail]);
};

export default max;

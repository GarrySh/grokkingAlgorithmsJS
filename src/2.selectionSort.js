const getMinValueIndex = arr => {
  let currentMinIndex = 0;
  let currentMin = arr[currentMinIndex];
  arr.forEach((item, index) => {
    if (item < currentMin) {
      currentMin = item;
      currentMinIndex = index;
    }
  });
  return currentMinIndex;
};

export default arr => {
  const sortedArr = [];
  const len = arr.length;
  for (let i = 0; i < len; i += 1) {
    const minIndex = getMinValueIndex(arr);
    const [minValue] = arr.splice(minIndex, 1);
    sortedArr.push(minValue);
  }
  return sortedArr;
};

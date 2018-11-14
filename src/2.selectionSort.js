const getMinValueIndex = arr => {
  let currentMinIndex = 0;
  let currentMin = arr[currentMinIndex];
  for (let i = 1; i <= arr.length; i += 1) {
    if (arr[i] < currentMin) {
      currentMin = arr[i];
      currentMinIndex = i;
    }
  }
  return currentMinIndex;
};

export default arr => {
  const sortedArr = [];
  const max = arr.length;
  for (let i = 0; i < max; i += 1) {
    const minIndex = getMinValueIndex(arr);
    const [minValue] = arr.splice(minIndex, 1);
    sortedArr.push(minValue);
  }
  return sortedArr;
};

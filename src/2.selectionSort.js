const getMinValueIndex = arr => {
  let currentMinIndex = 0;
  let currentMin = arr[currentMinIndex];
  for (let i = 0; i <= arr.length; i += 1) {
    if (arr[i] < currentMin) {
      currentMin = arr[i];
      currentMinIndex = i;
    }
  }
  return currentMinIndex;
};

export default arr => {
  const sortedArr = [];
  return sortedArr;
};

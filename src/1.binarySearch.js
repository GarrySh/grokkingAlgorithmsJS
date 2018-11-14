const binarySearch = (list, item) => {
  let low = 0;
  let high = list.length - 1;
  for (let i = 0; low <= high; i += 1) {
    const middle = low + Math.floor((high - low) / 2);
    const current = list[middle];
    if (current === item) {
      return middle;
    }
    if (item < current) {
      high = middle - 1;
    } else if (item > current) {
      low = middle + 1;
    }
  }
  return null;
};

export default binarySearch;

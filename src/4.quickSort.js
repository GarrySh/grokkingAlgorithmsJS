const quickSort = arr => {
  if (arr.length < 2) {
    return arr;
  }
  const [pivot, ...tail] = arr;
  const less = tail.filter(item => item <= pivot);
  const more = tail.filter(item => item > pivot);
  return [...quickSort(less), pivot, ...quickSort(more)];
};

export default quickSort;

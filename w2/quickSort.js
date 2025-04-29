const quickSort = (arr) => {
  if (arr.length <= 1) return arr;

  const pivotInd = Math.floor(arr.length / 2);
  const pivot = arr[pivotInd];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length; i++) {
    if (i != pivotInd) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
};

console.log(quickSort([5, 4, 3, 2, 1]));

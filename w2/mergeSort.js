const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
};

const merge = (left, right) => {
  let leftInd = 0;
  let rightInd = 0;
  let result = [];

  while (leftInd < left.length && rightInd < right.length) {
    if (left[leftInd] < right[rightInd]) {
      result.push(left[leftInd]);
      leftInd++;
    } else {
      result.push(right[rightInd]);
      rightInd++;
    }
  }

  while (leftInd < left.length) {
    result.push(left[leftInd]);
    leftInd++;
  }
  while (rightInd < right.length) {
    result.push(right[rightInd]);
    rightInd++;
  }

  return result;
};

console.log(mergeSort([5, 4, 3, 2, 1]));

const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};

const arr = [1, 2, 3, 4, 5];
console.log(binarySearch(arr, 5));

const binarySearchRecursion = (
  arr,
  target,
  left = 0,
  right = arr.length - 1
) => {
  if (arr.length < 1) return arr;
  let mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) return mid;

  return arr[mid] < target
    ? binarySearch(arr, target, (left = 0), (right = mid - 1))
    : binarySearch(arr, target, (left = mid + 1), right);
};

console.log(binarySearchRecursion(arr,4));
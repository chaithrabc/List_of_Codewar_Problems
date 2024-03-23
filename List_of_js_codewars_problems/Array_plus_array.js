function arrayPlusArray(arr1, arr2) {
  let sum = 0;
  for (let num of arr1) {
    sum += num;
  }
  for (let num of arr2) {
    sum += num;
  }
  return sum;
}

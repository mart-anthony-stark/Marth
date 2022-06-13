export const quicksort = (array: any): any => {
  if (array.length <= 1) {
    return array;
  }

  let pivot = array[0];

  let left = [];
  let right = [];

  for (let i = 1; i < array.length; i++) {
    array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
  }

  return quicksort(left).concat(pivot, quicksort(right));
};

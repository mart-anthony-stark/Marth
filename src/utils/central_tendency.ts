/**
 * Computes the mean of the dataset
 * @returns number - Mean
 */
export const _mean = (instance: any): number => {
  return instance.summation() / instance.size();
};

export const _median = (instance: any): number => {
  const nums = instance.sort();
  let half = Math.floor(instance.size() / 2);
  if (instance.size() % 2) return nums[half];

  return (nums[half - 1] + nums[half]) / 2.0;
};
export const _mode = (instance: any): number => {
  const arr = instance.dataset;
  const mode: any = {};
  let max = 0,
    count = 0;

  for (let i = 0; i < arr.length; i++) {
    const item = Math.floor(arr[i]);

    if (mode[item]) {
      mode[item]++;
    } else {
      mode[item] = 1;
    }

    if (count < mode[item]) {
      max = item;
      count = mode[item];
    }
  }

  return max;
};

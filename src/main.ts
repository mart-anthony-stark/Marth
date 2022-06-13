const Marth = (dataset: Array<number>) => {
  const size = (): number => instance.dataset.length;

  // MEASURES OF CENTRAL TENDENCY
  const mean = (): number => {
    return instance.summation() / instance.size();
  };
  const median = (): number => {
    const nums = instance.sort();
    let half = Math.floor(instance.size() / 2);
    if (instance.size() % 2) return nums[half];

    return (nums[half - 1] + nums[half]) / 2.0;
  };
  const mode = (): number => {
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
  const range = (): number =>
    instance.sort()[instance.dataset.length - 1] - instance.sort()[0];

  // Variance of SAMPLE population
  const sVar = (): number => {
    const m = instance.mean();
    const sum = instance.dataset.reduce((curr, n) => {
      return (curr += Math.pow(n - m, 2));
    }, 0);
    return sum / (instance.size() - 1);
  };

  // Standard Deviation of SAMPLE population

  const sDeviation = (): number => {
    return Math.sqrt(instance.sVar());
  };

  // Quartiles
  const q1 = (): number => {
    const index = Math.floor((instance.size() + 1) / 4);
    return instance.sort()[index];
  };
  const q2 = (): number => {
    const index = Math.floor((instance.size() + 1) / 2);
    return instance.sort()[index];
  };
  const q3 = (): number => {
    const index = Math.floor((3 * instance.size()) / 4);
    return instance.sort()[index];
  };

  // Frequency of a data
  const occurrences: any = dataset.reduce(function (acc: any, curr: any) {
    return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
  }, {});
  // Function to get occurances
  const getFrequency = (data: number): number => {
    return occurrences[data] || -1;
  };

  // CLASS INSTANCE
  const instance = {
    dataset,
    size,
    summation: (): number => {
      return instance.dataset.reduce((prev, current) => prev + current, 0);
    },
    sort: () => {
      return quicksort(instance.dataset);
    },
    mean,
    median,
    mode,
    range,
    sVar,
    sDeviation,
    q1,
    q2,
    q3,
    occurrences,
    getFrequency,
  };

  return instance;
};

function quicksort(array: any): any {
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
}
export default Marth;

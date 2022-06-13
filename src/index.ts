import { quicksort } from "./utils";
import { _mean, _median, _mode } from "./utils/central_tendency";

/**
 * @class
 * @description Marth.js
 * @param       dataset {Array<number>}
 * @returns
 */
const Marth = (dataset: Array<number>) => {
  const size = (): number => instance.dataset.length;

  // Central tendency
  const mean = (): number => _mean(instance);
  const median = (): number => _median(instance);
  const mode = (): number => _mode(instance);
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

    /**
     * Computes the median of the dataset
     * @returns number - Median
     */
    median,

    /**
     * Computes the mode of the dataset
     * @returns number - Mode
     */
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

export = Marth;

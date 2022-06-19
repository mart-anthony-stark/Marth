import { summation, quicksort } from "./utils";

/**
 * @class
 * @description Marth.js
 * @param       dataset {Array<number>}
 * @returns
 */
class Marth {
  private size?: number;
  private dataset?: any;
  constructor(dataset?: Array<number> | []) {
    this.dataset = dataset;
    this.size = dataset?.length;
  }

  /**
   * Computes the mean of the dataset
   * @param {number} optional dataset Array to override the data from current instance
   * @returns {number} Mean or average
   */
  mean(data?: any): number {
    const param = data ? data : this.dataset;
    const size = data ? data.length : this.size;
    return summation(param) / size;
  }

  /**
   * Computes the median or the middle value of the dataset
   * @param {number} optional dataset Array to override the data from current instance
   * @returns {number} Median
   */
  median(data?: any): number {
    const nums = data ? quicksort(data) : quicksort(this.dataset);
    const size = data ? data.length : this.size;
    let half = Math.floor(size / 2);
    if (size % 2) return nums[half];

    return (nums[half - 1] + nums[half]) / 2.0;
  }

  /**
   * Computes the mode or the value that appears most often in the dataset
   * @param {number} optional dataset Array to override the data from current instance
   * @returns {number} Mode
   */
  mode(data?: any): number {
    const arr = data ? data : this.dataset;
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
  }

  /**
   * Sorts the dataset (uses quicksort algorithm)
   * @param data dataset
   * @returns sorted array
   */
  sort(data?: any) {
    const nums = data ? data : this.dataset;
    return quicksort(nums);
  }

  /**
   *
   * @param data dataset
   * @returns {number} range of the dataset
   */
  range(data?: any): number {
    const nums = data ? data : this.dataset;
    const sorted = this.sort(nums);
    return sorted[nums.length - 1] - sorted[0];
  }

  /**
   * Computes the variance of the sample population
   * @param data
   * @returns {number} variance
   */
  sVar(data?: any): number {
    const nums = data ? data : this.dataset;
    const m = this.mean(nums);
    const sum = nums.reduce((curr: any, n: any) => {
      return (curr += Math.pow(n - m, 2));
    }, 0);
    return sum / (nums.length - 1);
  }

  /**
   * Computes the standard deviation of the sample population
   * @param data
   * @returns {number} standard deviation
   */
  sDev(data?: any): number {
    const nums = data ? data : this.dataset;
    return Math.sqrt(this.sVar(nums));
  }

  /**
   * Sets the dataset of the current Marth instance
   * @param {Array<number> | []} dataset
   */
  setDataset(data: Array<number> | []) {
    this.dataset = data;
    this.size = data.length;
  }

  /**
   *
   * @function
   * @returns {Array} dataset
   */
  getDataset(): Array<number> | [] {
    return this.dataset;
  }
}
export = Marth;

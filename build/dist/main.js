"use strict";
const utils_1 = require("./utils");
/**
 * @class
 * @description Marth.js
 * @param       dataset {Array<number>}
 * @returns
 */
class Marth {
    constructor(dataset) {
        this.dataset = dataset;
        this.size = dataset === null || dataset === void 0 ? void 0 : dataset.length;
    }
    /**
     * Computes the mean of the dataset
     * @param {number} optional dataset Array to override the data from current instance
     * @returns {number} Mean or average
     */
    mean(data) {
        const param = data ? data : this.dataset;
        const size = data ? data.length : this.size;
        return (0, utils_1.summation)(param) / size;
    }
    /**
     * Computes the median or the middle value of the dataset
     * @param {number} optional dataset Array to override the data from current instance
     * @returns {number} Median
     */
    median(data) {
        const nums = data ? (0, utils_1.quicksort)(data) : (0, utils_1.quicksort)(this.dataset);
        const size = data ? data.length : this.size;
        let half = Math.floor(size / 2);
        if (size % 2)
            return nums[half];
        return (nums[half - 1] + nums[half]) / 2.0;
    }
    /**
     * Computes the mode or the value that appears most often in the dataset
     * @param {number} optional dataset Array to override the data from current instance
     * @returns {number} Mode
     */
    mode(data) {
        const arr = data ? data : this.dataset;
        const mode = {};
        let max = 0, count = 0;
        for (let i = 0; i < arr.length; i++) {
            const item = Math.floor(arr[i]);
            if (mode[item]) {
                mode[item]++;
            }
            else {
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
    sort(data) {
        const nums = data ? data : this.dataset;
        return (0, utils_1.quicksort)(nums);
    }
    /**
     *
     * @param data dataset
     * @returns {number} range of the dataset
     */
    range(data) {
        const nums = data ? data : this.dataset;
        const sorted = this.sort(nums);
        return sorted[nums.length - 1] - sorted[0];
    }
    /**
     * Computes the variance of the sample population
     * @param data
     * @returns {number} variance
     */
    sVar(data) {
        const nums = data ? data : this.dataset;
        const m = this.mean(nums);
        const sum = nums.reduce((curr, n) => {
            return (curr += Math.pow(n - m, 2));
        }, 0);
        return sum / (nums.length - 1);
    }
    /**
     * Computes the standard deviation of the sample population
     * @param data
     * @returns {number} standard deviation
     */
    sDev(data) {
        const nums = data ? data : this.dataset;
        return Math.sqrt(this.sVar(nums));
    }
    /**
     * Sets the dataset of the current Marth instance
     * @param {Array<number> | []} dataset
     */
    setDataset(data) {
        this.dataset = data;
        this.size = data.length;
    }
    /**
     *
     * @function
     * @returns {Array} dataset
     */
    getDataset() {
        return this.dataset;
    }
}
module.exports = Marth;

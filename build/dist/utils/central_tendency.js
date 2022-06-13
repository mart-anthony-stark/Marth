"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._mode = exports._median = exports._mean = void 0;
/**
 * Computes the mean of the dataset
 * @returns number - Mean
 */
const _mean = (instance) => {
    return instance.summation() / instance.size();
};
exports._mean = _mean;
/**
 * Computes the median of the dataset
 * @returns number - Median
 */
const _median = (instance) => {
    const nums = instance.sort();
    let half = Math.floor(instance.size() / 2);
    if (instance.size() % 2)
        return nums[half];
    return (nums[half - 1] + nums[half]) / 2.0;
};
exports._median = _median;
/**
 * Computes the mode of the dataset
 * @returns number - Mode
 */
const _mode = (instance) => {
    const arr = instance.dataset;
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
};
exports._mode = _mode;

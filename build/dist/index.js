"use strict";
const utils_1 = require("./utils");
const central_tendency_1 = require("./utils/central_tendency");
/**
 * @class
 * @description Marth.js
 * @param       dataset {Array<number>}
 * @returns
 */
const Marth = (dataset) => {
    const size = () => instance.dataset.length;
    // Central tendency
    const mean = () => (0, central_tendency_1._mean)(instance);
    const median = () => (0, central_tendency_1._median)(instance);
    const mode = () => (0, central_tendency_1._mode)(instance);
    const range = () => instance.sort()[instance.dataset.length - 1] - instance.sort()[0];
    // Variance of SAMPLE population
    const sVar = () => {
        const m = instance.mean();
        const sum = instance.dataset.reduce((curr, n) => {
            return (curr += Math.pow(n - m, 2));
        }, 0);
        return sum / (instance.size() - 1);
    };
    // Standard Deviation of SAMPLE population
    const sDeviation = () => {
        return Math.sqrt(instance.sVar());
    };
    // Quartiles
    const q1 = () => {
        const index = Math.floor((instance.size() + 1) / 4);
        return instance.sort()[index];
    };
    const q2 = () => {
        const index = Math.floor((instance.size() + 1) / 2);
        return instance.sort()[index];
    };
    const q3 = () => {
        const index = Math.floor((3 * instance.size()) / 4);
        return instance.sort()[index];
    };
    // Frequency of a data
    const occurrences = dataset.reduce(function (acc, curr) {
        return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
    }, {});
    // Function to get occurances
    const getFrequency = (data) => {
        return occurrences[data] || -1;
    };
    // CLASS INSTANCE
    const instance = {
        dataset,
        size,
        summation: () => {
            return instance.dataset.reduce((prev, current) => prev + current, 0);
        },
        sort: () => {
            return (0, utils_1.quicksort)(instance.dataset);
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
module.exports = Marth;

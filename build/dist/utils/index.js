"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.summation = exports.quicksort = void 0;
const quicksort = (array) => {
    if (array.length <= 1) {
        return array;
    }
    let pivot = array[0];
    let left = [];
    let right = [];
    for (let i = 1; i < array.length; i++) {
        array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
    }
    return (0, exports.quicksort)(left).concat(pivot, (0, exports.quicksort)(right));
};
exports.quicksort = quicksort;
const summation = (arr) => arr.reduce((prev, current) => prev + current, 0);
exports.summation = summation;

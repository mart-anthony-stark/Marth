const Marth = require("./index.js");

const data = new Marth([
  1, 1, 1, 1, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, 1, 2, 5, 3, 2, 2,
]);
console.log(data.mean());
console.log(data.median());
console.log(data.mode());
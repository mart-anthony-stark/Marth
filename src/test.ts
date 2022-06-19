import Marth from "./main";

const mt = new Marth();
mt.setDataset([3, 2, 1]);
console.log(mt.getDataset());
console.log(mt.mean());
console.log(mt.sort());
console.log(mt.getDataset());
console.log(mt.range());

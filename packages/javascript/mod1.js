var lib = require('./mod2');

// The imported value is a (disconnected) copy
console.log(lib.mutableValue); // 3
lib.incMutableValue();
console.log(lib.mutableValue); // 3

// The imported value can be changed
lib.mutableValue++;
console.log(lib.mutableValue); // 4
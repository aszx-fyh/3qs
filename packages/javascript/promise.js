"use strict";
let promise = Promise.resolve();
let arr = [1, 2, 3, 4, 5];

// then执行顺序随机
// arr.forEach(function (el) {
//     promise.then((res) => {
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 console.log("promise" + ":" + el, res);
//                 resolve(el);
//             }, Math.random() * 100);
//         });
//     });
// });
// promise.then((res) => {
//     console.log("promise end:", res);
// });

// then执行顺序固定
let promise1 = Promise.resolve();

arr.forEach(function (el) {
    promise1 = promise1.then((res) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log("promise1" + ":" + el, res);
                resolve(el);
            }, Math.random() * 100);
        });
    });
});

promise1.then((res) => {
    console.log("promise1 end:", res);
});

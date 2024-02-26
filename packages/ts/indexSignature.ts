// https://github.com/microsoft/TypeScript/issues/33099
interface A {
    name: string;
}
type C = { name: string };

function testFn(param: { [key: string]: string }) {
    return param;
}

let testA: A = { name: "Xavier" };
let testB: { name: string } = { name: "Xavier" };
let testC: C = { name: "Xavier" };

testFn(testA); // throw an error
testFn(testB); // same structure but this works
testFn(testC); // Works like object literal type.

type First<T extends any[]> = T extends [infer First, ...any] ? First : never;
type arr1 = ["a", "b", "c", 9];
type head1 = First<arr1>; // expected to be 'a'

type Last<T extends any[]> = T extends [...any, infer L] ? L : never;
type last = Last<arr1>;

// Push
type Push<T extends any[], U> = [...T, U];
type push = Push<arr1, 555>;

// Reverse:
type b = Reverse<["a", "b", "c", 1, 2, 3]>; // ['c', 'b', 'a']
type Reverse<T extends any[]> = T extends [infer Head, ...infer Rest] ? [...Reverse<Rest>, Head] : T;

type Req<T> = T extends `${infer head}Req` ? T : never;
type req = Req<"xxdReq">;

interface IPerson1 {
    id: string;
    age: number;
}
interface IPerson2 {
    id: string;
    name: number;
}

type t1 = IPerson1 & IPerson2;
type t2 = IPerson1 | IPerson2;
const person1: t1; // id,age,name
const person2: t2; // id

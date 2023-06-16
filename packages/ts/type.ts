export {};
interface Person {
    name: string;
    age: number;
    address: {
        province: string;
        city: Date;
    };
}

type PersonNameType = Person["name"];
type PersonAddress = Pick<Person, "address">;
type PersonAddressType = Person["address"];
type PersonAddressKeys = keyof PersonAddressType;
type PersonAddressTypeNew = {
    [k in PersonAddressKeys]: string;
} & {
    area: string;
    code: number;
};

type GetAddressProvinceType<T> = T extends { address: { province: infer R } } ? R : never;
type AddressProvinceType = GetAddressProvinceType<Person>;
type s = {
    [k in PersonAddressKeys]: {
        [k1 in k]: PersonAddressType[k1];
    };
}[PersonAddressKeys];

type Template = {
    aaa: string;
    bbb: {
        cc: {
            dd: string;
        };
    };
    eee: {
        ff: string;
        gg: number;
    };
    kk: Date;
};
// 联合类型参与类型运算
type ss = `xx.${2 | "d"}`;
type DFS<Obj> = {
    [key in keyof Obj]: key extends string
        ? Obj[key] extends Record<string, any>
            ? `${key}.${DFS<Obj[key]>}`
            : key
        : never;
}[keyof Obj];

// "aaa" | "bbb" |"bbb.cc.dd"
type res = DFS<Template>;

let s: res = "eee.ff";

interface B {
    aaa: 1;
    bbb: 2;
    fun: () => true;
}

type UpperKeys<R extends Record<string, any>> = {
    [K in keyof R as R[K] extends Function ? K : never]: R[K];
    // [K in keyof R as K extends string ? Uppercase<K> : never]: R[K];
};
type res1 = UpperKeys<B>;

type res2 = B & Person;
// let res2: res2 = {
//     aaa: 1,
//     bbb: 2,
//     fun: () => true,
//     name:""
// };

// 字符串替换
type ReplaceAll<
    Str extends string,
    From extends string,
    To extends string
> = Str extends `${infer Front}${From}${infer Rest}` ? `${Front}${To}${ReplaceAll<Rest, From, To>}` : Str;
type res3 = ReplaceAll<"ddd33f", "dd3", "AAA">;

// 变量声明
type A1 = "hello"; // 声明全局变量
type B1 = [A1] extends infer T
    ? T // => 在这个表达式的作用域内，T 都为 [A]
    : never; // 声明局部变量

// 函数声明与调用
type Func<A extends number, B extends string = "hello"> = [A, B];
//     ↑ ↑           ↑    ↑           ↑        ↑        ↑
// 函数名 参数名    参数类型  参数名       参数类型  默认值      函数体

type Test = Func<10, "world">; // => [10, 'world']

function Func(A: number, B: string = "hello") {
    return [A, B];
}
const Test = Func(10, "world"); // => [10, 'world']

type OnlyNumber<N extends number> = N;
type Tmp<A extends number> = { a: A };
type Test0 = { a: 10 } extends Tmp<infer A> // infer A 只能是 number 类型
    ? OnlyNumber<A> // 不报错
    : never;

// 遍历数组
type ArrayStuct<Head extends string, Tail extends string[]> = [Head, ...Tail];

type Join<Str extends string[], op extends string> = Str extends ArrayStuct<infer Head, infer Tail>
    ? Head extends string
        ? Tail extends []
            ? `${Head}`
            : `${Head}${op}${Join<Tail, op>}`
        : ""
    : "";

type Test1 = Join<["foo", "bar", "hello", "dd4"], ",">;
// => type Test = "foo,bar,hello"

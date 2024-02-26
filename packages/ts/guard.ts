export {};

interface Bird {
    fly(): number;
    layEggs(): number;
}

interface Fish {
    swim(): number;
    layEggs(): number;
}

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}
function getSmallPet(): Fish | Bird {
    return {} as Fish;
}

const pet = getSmallPet();
if (isFish(pet)) {
    pet.swim();
} else {
    pet.fly();
}
function move(pet: Fish | Bird) {
    if ("swim" in pet) {
        return pet.swim();
    }
    return pet.fly();
}
move(pet);

//typeof 类型守卫
function isNumber(x: any): x is number {
    return typeof x === "number";
}

function isString(x: any): x is string {
    return typeof x === "string";
}

// function padLeft(value: string, padding: string | number) {
//     if (isNumber(padding)) {
//         return Array(padding + 1).join(" ") + value;
//     }
//     if (isString(padding)) {
//         return padding + value;
//     }
//     throw new Error(`Expected string or number, got '${padding}'.`);
// }

function padLeft(value: string, padding: string | number) {
    // 直接使用typeof不需要写函数
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
}

type Alias = { num: number };
interface Interface {
    num: number;
}
declare function aliased(arg: Alias): Alias;
declare function interfaced(arg: Interface): Interface;

function foo(x: number) {
    if (x !== 1 || x !== 2) {
        //  换句话说，当x与2进行比较的时候，它的值必须为1，这就意味着上面的比较检查是非法的。
        // Operator '!==' cannot be applied to types '1' and '2'.
    }
}

interface Square {
    kind: "square";
    size: number;
}
interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}
interface Circle {
    kind: "circle";
    radius: number;
}
interface Area {
    kind: "Area";
    radius: number;
}

type Shape = Square | Rectangle | Circle | Area;

function area(s: Shape) {
    switch (s.kind) {
        case "square":
            return s.size * s.size;
        case "rectangle":
            return s.height * s.width;
        case "circle":
            return Math.PI * s.radius ** 2;
        default:
            return assertNever(s); // error here if there are missing cases
    }
}

declare function f1(arg: { a: number; b: string }, a: number): void;

type T0 = Parameters<() => string>;
//    []
type T1 = Parameters<(s: string) => void>;
//    [s: string]
type T2 = Parameters<<T>(arg: T) => T>;
//    [arg: unknown]
type T3 = Parameters<typeof f1>;
//    [arg: { a: number; b: string; }]
type T4 = Parameters<any>;
//    unknown[]
type T5 = Parameters<never>;
//    never
type T6 = Parameters<string>;
//   never
//   Type 'string' does not satisfy the constraint '(...args: any) => any'.
type T7 = Parameters<Function>;
//   never
//   Type 'Function' does not satisfy the constraint '(...args: any) => any'.

type T01 = ConstructorParameters<ErrorConstructor>;
//    [message?: string | undefined]
type T11 = ConstructorParameters<FunctionConstructor>;
//    string[]
type T21 = ConstructorParameters<RegExpConstructor>;
//    [pattern: string | RegExp, flags?: string | undefined]
type T31 = ConstructorParameters<any>;
//   unknown[]

type T41 = ConstructorParameters<Function>;
//    never
// Type 'Function' does not satisfy the constraint 'new (...args: any) => any'.

function toHex(this: number) {
    return this.toString(16);
}

function numberToString(n: ThisParameterType<typeof toHex>) {
    return toHex.apply(n);
}

class C {
    x = 0;
    y = 0;
}

interface MyConstructor {
    new (): number;
}
type t0222 = typeof C;
type T022 = InstanceType<typeof C>; // C
type T0221 = InstanceType<MyConstructor>; // C
type T122 = InstanceType<any>; // any
type T222 = InstanceType<never>; // any
type T322 = InstanceType<RegExpConstructor>; // Error
type T422 = InstanceType<Function>; // Error

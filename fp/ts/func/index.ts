import { log } from "console";

// 一种函数类型的变量
const FV = function (arg: number) {
    log(arg);
};

// 一种函数类型
// 类型可以有自己的方法
type FT = {
    (arg: number): void;
    Hello: (arg: number) => void;
};
type FTT = {
    new (arg: number): void;
};

// 类型可以实现接口
interface IFC {
    Hello(arg: number): void;
}

function ex(i: IFC) {
    i.Hello(999);
}
function e1(i: FT) {
    i.Hello(8888);
}

export function Exec() {
    FV(3);
    const foo = (arg: number) => {
        log("", arg);
    };
    foo.Hello = function (arg: number) {
        log("hello", arg);
    };
    const dd: FT = foo;
    dd(33);
    dd.Hello(99);
    ex(dd);
    e1(foo);
    const ddd: FTT = class {
        constructor(arg: number) {}
    };
    new ddd(7);
}

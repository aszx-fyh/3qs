export as namespace myClassLib;

export = MyClass;

declare class MyClass {
    constructor(customGreeting?: string);

    greet: void;

    myMethod(opts: MyClass.MyClassMethodOptions): number;
}

declare namespace MyClass {
    export interface MyClassMethodOptions {
        width?: number;
        height?: number;
    }
}

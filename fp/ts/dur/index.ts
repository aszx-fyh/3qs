import { log } from "console";

// 给原生对象添加扩展方法
Date.prototype.Between = function () {
    return true;
};

log(new Date().Between());

interface IDur {
    Before(): string;
}

// 以基础类型为基类型封装自定义类型
class Dur extends Date implements IDur {
    _value: Date;
    constructor(date?: Date) {
        super();
        this._value = date ?? new Date();
    }
    Between(): boolean {
        return this._value.Between();
    }
    Before() {
        return "before";
    }
}
const dur = new Dur();
const date = <Date>dur;
log(dur.Before(), date);

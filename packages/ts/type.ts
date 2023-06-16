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

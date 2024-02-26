const value: unique symbol = Symbol("dd");
export type Student = {
    [value]: {
        name: string;
        age: string;
    };
};

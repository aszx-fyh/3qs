type Params = {
    params: {
        id: [string | number];
    };
};

type ParamsID<T> = T extends { params: { id: infer R } } ? R : "type error";

type ID = ParamsID<Params>;

type Bar<T> = T extends { a: (x: infer U) => void; b: (x: infer U) => void } ? U : never;
type T21 = Bar<{ a: (x: string) => void; b: (x: "number") => void }>; // string & number

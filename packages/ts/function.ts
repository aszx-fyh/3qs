function minimumLength<Type extends { length: number }>(obj: Type, minimum: number): Type {
    if (obj.length >= minimum) {
        return obj;
    } else {
        return { length: minimum };
    }
}

type voidFunc = () => void;

const f1: voidFunc = () => {
    return true;
};

const f2: voidFunc = () => true;

const f3: voidFunc = function () {
    return true;
};

function f21(): void {
    // @ts-expect-error
    return true;
}

const f31 = function (): void {
    // @ts-expect-error
    return true;
};

type PropEventSource<Type> = {
    on<Key extends string & keyof Type>(eventName: `${Key}Changed`, callback: (newValue: Type[Key]) => void): void;
};

/// Create a "watched object" with an `on` method
/// so that you can watch for changes to properties.
declare function makeWatchedObject<Type>(obj: Type): Type & PropEventSource<Type>;
const person = makeWatchedObject({
    firstName: "Saoirse",
    lastName: "Ronan",
    age: 26,
});

person.on("frstNameChanged", (e) => {});
person.on("firstNameChanged", (e) => {});

class Box<T> {
    value?: T;

    hasValue(): this is { value: T } {
        return this.value !== undefined;
    }
}

const box = new Box();
box.value = "Gameboy";

box.value;
if (box.hasValue()) {
    box.value;
}

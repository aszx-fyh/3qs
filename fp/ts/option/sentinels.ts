import { Option, none, some, fromNullable } from "fp-ts/Option";

function findIndex<A>(as: Array<A>, predicate: (a: A) => boolean): Option<number> {
    const index = as.findIndex(predicate);
    return index === -1 ? none : some(index);
}

function find<A>(as: Array<A>, predicate: (a: A) => boolean): Option<A> {
    return fromNullable(as.find(predicate));
}

import { Either, tryCatch } from "fp-ts/Either";

function parse(s: string): Either<Error, unknown> {
    return tryCatch(
        () => JSON.parse(s),
        (reason) => new Error(String(reason))
    );
}

import { IO } from "fp-ts/IO";

const random: IO<number> = () => Math.random();

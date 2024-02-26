import { none, some, of, fromPredicate, isSome, isNone, getOrElse, getOrElseW } from "fp-ts/Option";
import { pipe } from "fp-ts/function";

import assert = require("assert/strict");

const getOption = fromPredicate((n: number) => n >= 0);

assert.deepStrictEqual(getOption(-1), none);
assert.deepStrictEqual(getOption(1), some(1));
assert.equal(
    pipe(
        some(22),
        getOrElse(() => 99)
    ),
    22
);

assert.equal(
    pipe(
        none,
        getOrElse(() => 99)
    ),
    99
);

import { option } from "fp-ts";

function myFunction(x: number): option.Option<string> {
    if (x > 0) {
        return option.some("Positive");
    } else if (x < 0) {
        return option.some("Negative");
    } else {
        return option.none;
    }
}

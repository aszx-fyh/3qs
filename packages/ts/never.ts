// @errors: 2345
type NetworkLoadingState = { state: "loading" };
type NetworkFailedState = { state: "failed"; code: number };
type NetworkSuccessState = { state: "success" };
type NetworkFromCachedState = { state: "from_cache" };

type NetworkState = NetworkLoadingState | NetworkFailedState | NetworkSuccessState | NetworkFromCachedState;
// ---cut---
function assertNever(x: never): never {
    throw new Error("Unexpected object: " + x);
}

function logger(s: NetworkState): string {
    switch (s.state) {
        case "loading":
            return "loading request";
        case "failed":
            return `failed with code ${s.code}`;
        case "success":
            return "got response";
        default:
            return assertNever(s);
    }
}

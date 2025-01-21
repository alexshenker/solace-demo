import { head as _head } from "lodash";

type NonEmptyArray<T> = [T, ...T[]];

function head<T>(array: NonEmptyArray<T>): T {
    return _head(array) as T;
}

export default head;

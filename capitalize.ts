import { head as _head, capitalize as _capitalize } from "lodash";

type NonEmptyArray<T> = [T, ...T[]];

function head<T>(array: NonEmptyArray<T>): T {
  return _head(array) as T;
}

type Capitalized<T extends string> =
  T extends ${infer FirstLetter}${infer Rest}
    ? ${Uppercase<FirstLetter>}${Rest}
    : T;

function capitalize<T extends string>(st: T): Capitalized<T> {
  return _capitalize(st) as Capitalized<T>;
}
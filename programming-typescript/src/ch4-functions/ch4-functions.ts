import { option } from "fp-ts";
import {Option} from "fp-ts/Option"
// Generators

export function* createFibonacciGen() {
    let a = 0;
    let b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

export function loadDatabase(id: number): Option<string> {
    return id % 2 === 0 ? option.of("user") : option.none;
}
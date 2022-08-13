
export function squareOf(n: number): number {
    return n * n
}

let a: unknown = 30;
let b = a === 31;
let c = (a as number) + 1;

console.log("unknown", a, b, c);


let ab = 12345n;

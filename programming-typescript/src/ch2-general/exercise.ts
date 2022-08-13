let a = 1 + 2;
let b = a + 3;
let c = {
        apple: a,
        banana: b
    };
export let d = c.apple * 4;

console.log(`${a} - ${b} - ${c} - ${d}`)

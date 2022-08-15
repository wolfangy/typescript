import { pipe } from "fp-ts/lib/function";
import {Option, match } from "fp-ts/lib/Option"
import { loadDatabase } from "../ch4-functions/ch4-functions";

const usr1 = loadDatabase(3);
const usr2 = loadDatabase(4);

const report = (usr: Option<string>): void => pipe(usr,
    match(
        () => console.log('value is not there'), 
        (v: string) => console.log('value loaded', v)));

report(usr1);
report(usr2);
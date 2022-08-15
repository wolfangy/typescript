
import { pipe } from 'fp-ts/lib/function';
import { Option, match } from 'fp-ts/lib/Option';
import {createFibonacciGen, loadDatabase} from './ch4-functions/ch4-functions'
import { withEZDebug } from './ch5-classes/ch5-classes';


let fibonacciGen = createFibonacciGen();

console.log("Hello World", [...Array(10).keys()].map(_ => fibonacciGen.next()));


class User{
    constructor(
        private _id: number,
        private _firstName: string,
        private _lastName: string
    ){}

    getDebugValue() {
        return {
            id: this._id,
            name: this._firstName + ' ' + this._lastName
        }
    }
}

let UserDebug = withEZDebug(User);
let usr4 = new UserDebug(4, "Emma", 'Gluzman');
console.log(usr4.debug());
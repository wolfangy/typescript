import { build, LinkedListNode } from "../../models/linked-list";
import { IInputIterator } from "../iterator-input";

export class LinkedListInputIterator<T> implements IInputIterator<T> {

    constructor(public node: LinkedListNode<T> | null) { }

    increment(): void {
        if (!this.node) throw new Error();

        this.node = this.node.next;
    }

    equals(other: IInputIterator<T>): boolean {
        return this.node === (other as unknown as LinkedListInputIterator<T>).node;
    }

    get(): T {
        return this.node.value;
    }

}


const test: LinkedListNode<number> = build([1, 2, 3, 4, 5]) as LinkedListNode<number>;

const begin: IInputIterator<number> = new LinkedListInputIterator<number>(test);
const end: IInputIterator<number> = new LinkedListInputIterator<number>(null);

console.log(begin.get());
begin.increment()
console.log(begin.get());
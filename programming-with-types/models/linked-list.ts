
export class LinkedListNode<T>{
    constructor(public value: T, public next: LinkedListNode<T> | null) { }
}

export const build = <T>(items: T[]): LinkedListNode<T> | null => {
    if (items.length === 0) return null;
    else {
        const [cur, ...rest] = items;
        return new LinkedListNode(cur, build(rest));
    }
}
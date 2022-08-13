import { IOutputIterator } from "../iterator-output";

class ConsoleOutputIterator<T> implements IOutputIterator<T> {

    equals(other: IOutputIterator<T>): boolean {
        return false;
    }

    set(value: T): void {
        console.log(value);
    }

    increment(): void {
    }

}
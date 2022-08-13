export interface IReadable<T> {
    get(): T;
}

export interface IWritable<T>{
    set(value: T): void;
}

export interface IIncrementable<T> {
    increment(): void;
}
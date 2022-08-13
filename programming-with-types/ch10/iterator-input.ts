import { IReadable, IIncrementable } from "./interfaces";

export interface IInputIterator<T> extends IReadable<T>,  IIncrementable<T> {
    equals(other: IInputIterator<T>): boolean;
}
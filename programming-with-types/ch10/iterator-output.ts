import { IIncrementable, IWritable } from "./interfaces";

export interface IOutputIterator<T> extends IWritable<T>, IIncrementable<T> {
    equals (other: IOutputIterator<T>): boolean;
}
import { IInputIterator } from "../iterator-input";
import { IOutputIterator } from "../iterator-output";

function map<T, U> (
    begin: IInputIterator<T>,
    end: IInputIterator<T>,
    out: IOutputIterator<U>,
    func: (value: T) => U
) {
    while(!begin.equals(end)){
        out.set(func(begin.get()));
        begin.increment();
        end.increment();
    }
}
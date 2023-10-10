import {None} from "@/option/None";
import {Some} from "@/option/Some";

export abstract class Option<T> implements Option<T> {
    static of<T>(x: T): Option<T> {
        return new Some<T>(x);
    }

    static ofNullable<T>(x: T): Option<T> {
        return x === null ? new None<T>() : new Some<T>(x);
    }

    abstract map: <S>(f: (x: T) => S) => Option<S>;
    abstract flatMap: <S>(f: (x: T) => Option<S>) => Option<S>;
    abstract filter: (f: (x: T) => boolean) => Option<T>;
    abstract forEach: (f: (x: T) => void) => void;
    abstract orElse: (x: Option<T>) => Option<T>;
    abstract getOrElse: (x: T) => T;
    abstract isDefined: () => boolean;
    abstract isEmpty: () => boolean;
    abstract get: () => T;
}

import { Option } from './Option';

export class None<T> extends Option<T> {
    map = <S>(_: (x: T) => S) => new None<S>();

    flatMap = <S>(_: (x: T) => Option<S>) => new None<S>();

    filter = (_: (x: T) => boolean) => this;

    forEach = (_: (x: T) => void) => {};

    orElse = (x: Option<T>) => x;

    getOrElse = (x: T) => x;

    isDefined = () => false;

    isEmpty = () => true;

    get = () => {
        throw new Error('No such element');
    };
}

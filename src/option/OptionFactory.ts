import { None } from './None';
import { Some } from './Some';
import { Option } from './Option';

export abstract class OptionFactory<T> {
  static of<T>(x: T): Option<T> {
    return new Some<T>(x);
  }

  static ofNullable<T>(x: T): Option<T> {
    return x === null ? new None<T>() : new Some<T>(x);
  }
}

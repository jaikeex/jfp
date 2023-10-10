import { None } from "@/option/None";
import { Option } from './Option';

export class Some<T> extends Option<T> {
  private readonly value: T;

  constructor(x: T) {
    super();
    this.value = x;
  }

  map = <S>(f: (x: T) => S): Option<S> => new Some<S>(f(this.value));

  flatMap = <S>(f: (x: T) => Option<S>): Option<S> => f(this.value);

  filter = (f: (x: T) => boolean): Option<T> => (f(this.value) ? this : new None<T>());

  forEach = (f: (x: T) => void): void => f(this.value);

  orElse = (x: Option<T>): Option<T> => this;

  getOrElse = (x: T): T => this.value;

  isDefined = (): boolean => true;

  isEmpty = (): boolean => false;

  get = (): T => this.value;
}

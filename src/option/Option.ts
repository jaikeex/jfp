export interface Option<T> {
  map: <S>(f: (x: T) => S) => Option<S>;
  flatMap: <S>(f: (x: T) => Option<S>) => Option<S>;
  filter: (f: (x: T) => boolean) => Option<T>;
  forEach: (f: (x: T) => void) => void;
  orElse: (x: Option<T>) => Option<T>;
  getOrElse: (x: T) => T;
  isDefined: () => boolean;
  isEmpty: () => boolean;
  get: () => T;
}

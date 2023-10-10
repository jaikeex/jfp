import type { Option as MyOption } from './option/Option';

declare global {
  interface Option<T> extends MyOption<T> {}
}

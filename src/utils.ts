import { Item } from './types';

export const ensureArray = <T = unknown>(value: T | T[]): T[] => {
  return Array.isArray(value) ? value : [value];
};

export const map = <T, S>(
  fn: (value: T, ...args: unknown[]) => S,
  list: T | T[],
  args: unknown[] = []
): S[] => {
  return ensureArray(list).map((item: T) => fn.apply(null, [item, ...args]));
};

export const ap = <T = void, S = unknown>(
  fn: (item: string, value: S) => T,
  value: S
) => {
  return (item: string) => fn(item, value);
};

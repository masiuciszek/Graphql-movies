export function randomValue<T>(list: T[]): T {
  return list[Math.floor(Math.random() * list.length)];
}

export const wordsXs: string[] = [
  'javascript',
  'haskell',
  'golang',
  'elda',
  'lisp',
  'reason',
];

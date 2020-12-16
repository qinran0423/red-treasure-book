interface IteratorResult{
  done: Boolean;
  value: any;
}

interface Iterator {
  next(): IteratorResult;
}

interface Iterable{
  [Symbol.iterator](): Iterator
}
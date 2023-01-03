export interface Mapper<U, T> {
  mapFrom(input: U): T;
  mapTo(input: T): U;
}

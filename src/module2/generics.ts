{
  // generics overview

  // generic types
  // const numberArray: number[] = [1,2,3,4,5]

  type GenericType<T> = Array<T>;

  const numberArray: GenericType<number> = [1, 2, 3, 4, 5, 6]; // we can set type like this

  const nameArray: GenericType<string> = ["a", "b", "c", "d", "e", "f"];

  // generic tuple
  type GenericTuple<T, U> = [T, U];

  const tuple1: GenericTuple<string, number> = ["a", 1];

  // generic function
}

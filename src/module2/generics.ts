{
  // generics overview

  // generic function
  // const numberArray: number[] = [1,2,3,4,5]

  type GenericType<T> = Array<T>;

  const numberArray: GenericType<number> = [1, 2, 3, 4, 5, 6]; // we can set type like this

  const nameArray: GenericType<string> = ["a", "b", "c", "d", "e", "f"];
}

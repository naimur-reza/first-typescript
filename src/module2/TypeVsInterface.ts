{
  // Type vs Interface

  // Type
  type Person1 = {
    name: string;
    age: number;
  };

  type Person2 = string; // type is used to all primitive types and non primitive types

  // Interface
  interface Person3 {
    name: string;
    age: number;
  } // interface is used to all non primitive types
}

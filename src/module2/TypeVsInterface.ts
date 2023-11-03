{
  // Type vs Interface

  // Type
  type Person1 = {
    name: string;
    age: number;
  };

  type Person2 = string; // type is used to all primitive types and non primitive types

  type NewProps = {
    id: number;
  };

  type SpecialPerson = Person1 & NewProps; // in this way we can extend props using type

  const person: SpecialPerson = {
    id: 230300203,
    name: "Anik",
    age: 20,
  };

  // Interface
  interface Person3 {
    name: string;
    age: number;
  } // interface is used to all non primitive types

  interface NewProps2 extends Person3 {
    id: number;
  } // in this way we can extend props using interface

  const person2: NewProps2 = {
    id: 23232,
    name: "Reza",
    age: 20,
  };
}

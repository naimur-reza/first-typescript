{
  interface Person {
    name: string;
    age: number;
    number: number;
    email: string;
    address: string;
  }

  const person: Person = {
    name: "Anik",
    age: 20,
    number: 23232,
    email: "anik@gmail.com",
    address: "makunda,califronia",
  };

  const getValueByKey = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  console.log(getValueByKey(person, "name"));
}

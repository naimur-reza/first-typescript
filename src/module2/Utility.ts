{
  interface Person {
    name: string;
    age: number;
    email: string;
    nickName?: string;
    maritalStatus: string;
  }

  // pick utility type
  type Profile = Pick<Person, "name" | "maritalStatus" | "nickName">;

  // omit utility type

  type Contact = Omit<Person, "age" | "name" | "maritalStatus">;
}

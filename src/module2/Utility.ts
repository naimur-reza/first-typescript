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

  // required type

  type ShouldProvide = Required<Person>;

  // partial type

  type OptionalProps = Partial<Person>;

  // Readonly type

  type NoUpdate = Readonly<Person>;
}

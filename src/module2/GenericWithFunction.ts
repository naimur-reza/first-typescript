{
  const array = (array: string): string[] => {
    return [array];
  };

  const addCourseToStudent = <T>(student: T) => {
    const course = "Python in 300 days";
    return {
      ...student,
      course,
    };
  };

  const rewardStudent = addCourseToStudent<{
    // we can wrap new things like this
    name: "Naimur";
    email: "naimur@gmail.com";
    age: 20;
  }>;

  // generic with tuple

  const createStudentWithTuple = <T, U>(param: T, param2: U): [T, U] => {
    return [param, param2];
  };

  const newPerson = createStudentWithTuple("Anik", 20);
  const newPerson2 = createStudentWithTuple<string, number>("Banti", 20);
}

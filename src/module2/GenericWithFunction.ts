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
}

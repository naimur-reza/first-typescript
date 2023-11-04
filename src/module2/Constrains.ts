{
  // this is called constraint that i've expands the t params to id, name & email

  const rewardCourse = <T extends { id: number; name: string; email: string }>(
    student: T
  ) => {
    const courseName = "Machine Learning In 365 days";
    return {
      ...student,
      courseName,
    };
  };

  const rewardStudent = rewardCourse({
    id: Math.floor(Math.random() * 1000),
    name: "Banti",
    email: "banti@hotmail.com",
  });
  console.log(rewardStudent);
}

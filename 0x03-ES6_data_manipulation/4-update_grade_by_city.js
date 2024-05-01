export default (students, city, newGrades) => {
  const studentsWithGrades = students.map((student) => {
    let studentWithGrades = { ...student, grade: 'N/A' };
    newGrades.forEach((grade) => {
      if (grade.studentId === student.id) {
        studentWithGrades = { ...student, grade: grade.grade };
      }
    });
    return studentWithGrades;
  }).filter((student) => student.location === city);
  return studentsWithGrades;
};

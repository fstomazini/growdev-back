const admDBAccess = require('./access');

const findAllStudents = async () => {
  let query = "select * from students"

  return (await admDBAccess.executeQuery(query));
};

const findStudent = async (studentId) => {
  let query = `select * from students where RA = '${studentId}';`

  return (await admDBAccess.executeQuery(query))
}

const newStudent = async (studentId, studentName, studendtCpf, studentEmail) => {
  let query = `insert into students (name, email, cpf, ra) values (${studentName, studennotEmail, studendtCpf, studentId});`

  return (await admDBAccess.executeQuery(query))
}
const updateStudent = async (studentId, studentName, studentEmail) => {
  let student = findStudent(studentId);
  let query = `update into students (name, email, cpf, ra) values (${studentName, studentEmail, student.cpf, studentId}) where ra = ${studentId}`

  return (await admDBAccess.executeQuery(query))
}

module.exports = {
  findAllStudents,
  findStudent,
  newStudent,
  updateStudent
};

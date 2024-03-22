const studentsAccess = require('../services/adminDatabase/studentsQueries.js');
const jwt = require('jsonwebtoken');

const findAllStudents = async (req, res) => {
  try {
    const queryResult = await studentsAccess.findAllStudents();
    return res.status(200).send(queryResult);
  } catch (error) {
    console.log(error);
    return error;
  }
};

const findStudent = async (req, res) => {
  try {
    var studentId = req.params['studentId']
    const queryResult = await studentsAccess.findStudent(studentId);
    return res.status(200).send(queryResult);
  } catch (error) {
    console.log(error);
    return  error;
  }
};
const newStudent = async (req, res) => {
  try {
    const queryResult = await studentsAccess.newStudent(cdCliente);
    return res.status(200).send(queryResult);
  } catch (error) {
    console.log(error);
    return  error;
  }
};


const updateStudent = async (req, res) => {
  try {
    const queryResult = await studentsAccess.saldo(cdCliente);
    return res.status(200).send(queryResult);
  } catch (error) {
    console.log(error);
    return  error;
  }
};


module.exports = {
  findAllStudents,
  findStudent,
  newStudent,
  updateStudent
};

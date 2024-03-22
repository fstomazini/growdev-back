require('dotenv').config();

const bodyParser = require('body-parser');
const express = require('express');
const fs = require("fs");
const https = require("https");
const http = require("http");

const app = express();

// Create express router
const router = express.Router();

const studentesController = require('./controllers/students.controller');
//retorna  todos os alunos cadastrados
router.get('/api/students/', studentesController.findAllStudents);

router.get('/api/students/:studentId', studentesController.findStudent)
//
router.post('/api/students/', studentesController.newStudent)

router.put('/api/students/:studentId', studentesController.updateStudent)

const port = process.env.PORT || 3050;
app.set('port', port);

const server = http.createServer(app);

app.use(bodyParser.json());

app.use('/', router);

server.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
server.timeout = 1000000;

require('dotenv').config();

const bodyParser = require('body-parser');
const express = require('express');
const fs = require("fs");
const https = require("https");
const http = require("http");
let healthChecker = new health.HealthChecker();

const app = express();

// Create express router
const router = express.Router();


const extratoController = require('./controllers/extrato.controller');
const dashboardController = require('./controllers/dashboard.controller');
const studantesController = require('./controllers/students.controller');
//retorna  todos os alunos cadastrados
router.get('/api/students/findall', studantesController.findAllStudents);

router.get('/api/students/find/:studentId', studantesController.findStudent)
//
router.post('/api/students/new', studantesController.newStudent)

router.put('/api/students/:studentId', studantesController.updateStudent)

const port = process.env.PORT || 3050;
app.set('port', port);

const server = http.createServer(app);

app.use(bodyParser.json());

app.use('/', router);

server.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
server.timeout = 1000000;

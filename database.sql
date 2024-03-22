create database STUDENTS;
CREATE TABLE students (
  name VARCHAR(255),
  email VARCHAR(255),
  cpf VARCHAR(14),
  ra VARCHAR(9) unique not null,
  primary key(ra) 
  
);

INSERT INTO students (name, email, cpf,ra)
VALUES ('andre da silva', 'andre@email.com', '000.000.000-00', '000000001'); 

INSERT INTO students (name, email, cpf,ra)
VALUES ('andreia da costa', 'andreia@email.com', '000.000.000-01', '000000002');

INSERT INTO students (name, email, cpf,ra)
VALUES ('vitor da costa', 'vitor@email.com', '000.000.000-02', '000000003');

INSERT INTO students (name, email, cpf,ra)
VALUES ('Jonatan da costa', 'jonatan@email.com', '000.000.000-03', '000000004');

INSERT INTO students (name, email, cpf,ra)
VALUES ('joao da costa', 'joao@email.com', '000.000.000-04', '000000005');

CREATE USER studentsAdmin WITH PASSWORD 'jw8s0F4' ;
CREATE DATABASE SMS_db;
USE SMS_db;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  role ENUM('admin','teacher','student','parent') NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO users (name, email, password, role) VALUES
('Admin User', 'admin@school.com', '123456', 'admin'),
('Teacher One', 'teacher@school.com', '123456', 'teacher'),
('Student One', 'student@school.com', '123456', 'student'),
('Parent One', 'parent@school.com', '123456', 'parent');

-- ADMIN USERS
INSERT INTO users (name, email, password, role, created_at) VALUES
('Admin 1', 'admin1@school.com', '123456', 'admin', NOW()),
('Admin 2', 'admin2@school.com', '123456', 'admin', NOW()),
('Admin 3', 'admin3@school.com', '123456', 'admin', NOW()),
('Admin 4', 'admin4@school.com', '123456', 'admin', NOW()),
('Admin 5', 'admin5@school.com', '123456', 'admin', NOW()),
('Admin 6', 'admin6@school.com', '123456', 'admin', NOW()),
('Admin 7', 'admin7@school.com', '123456', 'admin', NOW()),
('Admin 8', 'admin8@school.com', '123456', 'admin', NOW()),
('Admin 9', 'admin9@school.com', '123456', 'admin', NOW()),
('Admin 10', 'admin10@school.com', '123456', 'admin', NOW());

-- TEACHER USERS
INSERT INTO users (name, email, password, role, created_at) VALUES
('Teacher 1', 'teacher1@school.com', '123456', 'teacher', NOW()),
('Teacher 2', 'teacher2@school.com', '123456', 'teacher', NOW()),
('Teacher 3', 'teacher3@school.com', '123456', 'teacher', NOW()),
('Teacher 4', 'teacher4@school.com', '123456', 'teacher', NOW()),
('Teacher 5', 'teacher5@school.com', '123456', 'teacher', NOW()),
('Teacher 6', 'teacher6@school.com', '123456', 'teacher', NOW()),
('Teacher 7', 'teacher7@school.com', '123456', 'teacher', NOW()),
('Teacher 8', 'teacher8@school.com', '123456', 'teacher', NOW()),
('Teacher 9', 'teacher9@school.com', '123456', 'teacher', NOW()),
('Teacher 10', 'teacher10@school.com', '123456', 'teacher', NOW());

-- STUDENT USERS
INSERT INTO users (name, email, password, role, created_at) VALUES
('Student 1', 'student1@school.com', '123456', 'student', NOW()),
('Student 2', 'student2@school.com', '123456', 'student', NOW()),
('Student 3', 'student3@school.com', '123456', 'student', NOW()),
('Student 4', 'student4@school.com', '123456', 'student', NOW()),
('Student 5', 'student5@school.com', '123456', 'student', NOW()),
('Student 6', 'student6@school.com', '123456', 'student', NOW()),
('Student 7', 'student7@school.com', '123456', 'student', NOW()),
('Student 8', 'student8@school.com', '123456', 'student', NOW()),
('Student 9', 'student9@school.com', '123456', 'student', NOW()),
('Student 10', 'student10@school.com', '123456', 'student', NOW());

-- PARENT USERS
INSERT INTO users (name, email, password, role, created_at) VALUES
('Parent 1', 'parent1@school.com', '123456', 'parent', NOW()),
('Parent 2', 'parent2@school.com', '123456', 'parent', NOW()),
('Parent 3', 'parent3@school.com', '123456', 'parent', NOW()),
('Parent 4', 'parent4@school.com', '123456', 'parent', NOW()),
('Parent 5', 'parent5@school.com', '123456', 'parent', NOW()),
('Parent 6', 'parent6@school.com', '123456', 'parent', NOW()),
('Parent 7', 'parent7@school.com', '123456', 'parent', NOW()),
('Parent 8', 'parent8@school.com', '123456', 'parent', NOW()),
('Parent 9', 'parent9@school.com', '123456', 'parent', NOW()),
('Parent 10', 'parent10@school.com', '123456', 'parent', NOW());

SELECT * FROM users;
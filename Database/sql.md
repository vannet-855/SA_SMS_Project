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

SELECT * FROM users;
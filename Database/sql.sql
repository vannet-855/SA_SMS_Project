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

-- Create user using loop
DELIMITER $$
CREATE PROCEDURE insert_users_safe()
BEGIN
    DECLARE i INT DEFAULT 1;

    WHILE i <= 10 DO
        INSERT IGNORE INTO users (name, email, password, role, created_at)
        VALUES 
        (CONCAT('Admin ', i), CONCAT('admin', i, '@school.com'), '123456', 'admin', NOW()),
        (CONCAT('Teacher ', i), CONCAT('teacher', i, '@school.com'), '123456', 'teacher', NOW()),
        (CONCAT('Student ', i), CONCAT('student', i, '@school.com'), '123456', 'student', NOW()),
        (CONCAT('Parent ', i), CONCAT('parent', i, '@school.com'), '123456', 'parent', NOW());

        SET i = i + 1;
    END WHILE;
END$$
DELIMITER ;
CALL insert_users_safe();

-- Clear all User
TRUNCATE TABLE users;

--  Display user by role
SELECT * FROM users WHERE role = 'student';
-- Display all user
SELECT * FROM users;

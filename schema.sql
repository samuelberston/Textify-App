DROP DATABASE IF EXISTS MVP;

CREATE DATABASE MVP;

USE MVP;

CREATE TABLE msgs (
  message_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(50) NOT NULL,
  to INT NOT NULL,
  -- from INT NOT NULL,
  -- text VARCHAR(255) NOT NULL,
  cron VARCHAR(12) NOT NULL
);

INSERT INTO TABLE (title, to, time) VALUES ('trash', '4151234567', '* * * * * *');
INSERT INTO TABLE (title, to, time) VALUES ('trash', '4151234567', 'time');
INSERT INTO TABLE (title, to, time) VALUES ('trash', '4151234567', 'time');
INSERT INTO TABLE (title, to, time) VALUES ('trash', '4151234567', 'time');
INSERT INTO TABLE (title, to, time) VALUES ('trash', '4151234567', 'time');

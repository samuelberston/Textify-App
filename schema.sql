DROP DATABASE IF EXISTS MVP;

CREATE DATABASE MVP;

USE MVP;

CREATE TABLE msgs (
  message_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(50) NOT NULL,
  receiver VARCHAR(12) NOT NULL,
  -- from INT NOT NULL,
  -- text VARCHAR(255) NOT NULL,
  cron VARCHAR(12) NOT NULL
);

INSERT INTO msgs (message_id, title, receiver, cron) VALUES (1, 'trash', '4151234567', '* * * * * *');
INSERT INTO msgs (message_id, title, receiver, cron) VALUES (2, 'trash', '4151234567', 'time');
INSERT INTO msgs (message_id, title, receiver, cron) VALUES (3, 'trash', '4151234567', 'time');
INSERT INTO msgs (message_id, title, receiver, cron) VALUES (4, 'trash', '4151234567', 'time');
INSERT INTO msgs (message_id, title, receiver, cron) VALUES (5, 'trash', '4151234567', 'time');

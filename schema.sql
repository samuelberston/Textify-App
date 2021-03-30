DROP DATABASE IF EXISTS MVP;

CREATE DATABASE MVP;

USE MVP;

CREATE TABLE msgs (
  message_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(50) NOT NULL,
  receiver VARCHAR(14) NOT NULL,
  sender VARCHAR(14) NOT NULL,
  text VARCHAR(255) NOT NULL,
  cron VARCHAR(12) NOT NULL
);

INSERT INTO msgs (message_id, title, receiver, sender, text, cron) VALUES (1, "trash", "+14151234567", "+14158468793", "text", "* * * * *");
INSERT INTO msgs (message_id, title, receiver, sender, text, cron) VALUES (2, "gardener", "+14151234567", "+14158468793", "text", "* * * * *");
INSERT INTO msgs (message_id, title, receiver, sender, text, cron) VALUES (3, "good morning", "+14151234567", "+14158468793", "text", "time");
INSERT INTO msgs (message_id, title, receiver, sender, text, cron) VALUES (4, "reminder", "+14151234567", "+14158468793", "text", "time");
INSERT INTO msgs (message_id, title, receiver, sender, text, cron) VALUES (5, "Rhonda", "+14151234567", "+14158468793", "text", "time");

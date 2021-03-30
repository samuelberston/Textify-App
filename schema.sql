DROP DATABASE IF EXISTS MVP;

CREATE DATABASE MVP;

USE MVP;

CREATE TABLE msgs (
  message_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(50) NOT NULL,
  receiver VARCHAR(14) NOT NULL,
  sender VARCHAR(14) NOT NULL,
  text VARCHAR(255) NOT NULL,
  cron VARCHAR(100) NOT NULL
);

INSERT INTO msgs (message_id, title, receiver, sender, text, cron) VALUES (1, "trash", "+14151234567", "+14158468793", "Remember to take out the trash!", "30 1 Monday * August");
INSERT INTO msgs (message_id, title, receiver, sender, text, cron) VALUES (2, "good morning", "+14151234567", "+14158468793", "good morning beautiful !", "0 24 * 3 September");
INSERT INTO msgs (message_id, title, receiver, sender, text, cron) VALUES (3, "Rhonda", "+14151234567", "+14158468793", "Did you remember to water the plants??", "45 16 Tuesday, Wednesday * *");
INSERT INTO msgs (message_id, title, receiver, sender, text, cron) VALUES (4, "reminder", "+14151234567", "+14158468793", "buy tickets to edc", "* * * * *");

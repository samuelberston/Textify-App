DROP DATABASE IF EXISTS MVP;

CREATE DATABASE MVP;

USE MVP;

CREATE TABLE msgs (
  message_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(50) NOT NULL,
  receiver VARCHAR(14) NOT NULL,
  text VARCHAR(255) NOT NULL,
  cron VARCHAR(100) NOT NULL
);

INSERT INTO msgs (message_id, title, receiver, text, cron) VALUES (1, "trash", "+14151234567", "Remember to take out the trash!", "30 1 Monday * August");
INSERT INTO msgs (message_id, title, receiver, text, cron) VALUES (2, "good morning", "+14151234567", "good morning beautiful !", "0 24 * 3 September");
INSERT INTO msgs (message_id, title, receiver, text, cron) VALUES (3, "Rhonda", "+14151234567", "Did you remember to water the plants??", "45 16 Tuesday, Wednesday * *");
INSERT INTO msgs (message_id, title, receiver, text, cron) VALUES (4, "reminder", "+14151234567", "buy tickets to edc", "* * * * *");

CREATE TABLE contacts (
  contact_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  firstName VARCHAR(25) NOT NULL,
  lastName VARCHAR(25) NOT NULL,
  number VARCHAR(12) NOT NULL,
  email VARCHAR(50) NOT NULL
);

INSERT INTO contacts (contact_id, firstName, lastName, number, email) VALUES (1, "Sam", "Berston", "+14158468793", "samuelberston@gmail.com");
INSERT INTO contacts (contact_id, firstName, lastName, number, email) VALUES (2, "Mariah", "Carey", "+12129276505", "mariahcarey@gmail.com");
INSERT INTO contacts (contact_id, firstName, lastName, number, email) VALUES (3, "Cardi", "B", "+12128082233", "BelcalisAlmánzar@gmail.com");

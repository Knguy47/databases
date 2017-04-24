CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  id int Not Null auto_increment,
  message text,
  room_id int,
  user_id int,
  primary key (id)
);

/* Create other tables and define schemas for them here! */
CREATE TABLE users (
  id int not null auto_increment,
  username text,
  primary key (id)
);

CREATE TABLE rooms (
  id int not null auto_increment,
  roomname text,
  primary key (id)
);

ALTER TABLE messages ADD FOREIGN KEY (user_id) REFERENCES users(id);
ALTER TABLE messages ADD FOREIGN KEY (room_id) REFERENCES rooms(id);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/


-- SOLUTION
-- CREATE DATABASE chat;

-- USE chat;

-- CREATE TABLE messages (
--   /* Describe your table here.*/

--   id int NOT NULL AUTO_INCREMENT,
--   userid int NOT NULL,
--   text varchar(200)  NOT NULL,
--   roomname varchar(20),
--   PRIMARY KEY (ID)
-- );

--  Create other tables and define schemas for them here!


-- CREATE TABLE users (
--   id        int    NOT NULL AUTO_INCREMENT,
--   username  varchar(40)   NOT NULL,
--   PRIMARY KEY (ID)
-- );


-- /*  Execute this file from the command line by typing:
--  *    mysql -u root < server/schema.sql
--  *  to create the database and the tables.*/

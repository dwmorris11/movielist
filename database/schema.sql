DROP DATABASE Movies;

CREATE DATABASE Movies;

USE MOVIES;

CREATE TABLE MovieList (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENTED,
  title VARCHAR(40) NOT NULL
)
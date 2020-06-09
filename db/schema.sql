DROP DATABASE IF EXISTS kenko;

CREATE DATABASE kenko;

\c kenko


CREATE TABLE carbos (
  id INT PRIMARY KEY,
  carbo VARCHAR(255),
  cuisine VARCHAR(255),
  utility VARCHAR(255)
);

COPY carbos(id, carbo, cuisine, utility) FROM '/Users/akshajmody/Documents/kenko_folder/project_kenko/db/csvData/carbos.csv' WITH DELIMITER ',';

CREATE TABLE fats (
  id INT PRIMARY KEY,
  fat VARCHAR(255),
  cuisine VARCHAR(255),
  utility VARCHAR(255)
);

COPY fats(id, fat, cuisine, utility) FROM '/Users/akshajmody/Documents/kenko_folder/project_kenko/db/csvData/fats.csv' WITH DELIMITER ',';

CREATE TABLE fruits (
  id INT PRIMARY KEY,
  fruit VARCHAR(255),
  utility VARCHAR(255)
);

COPY fruits(id, fruit, utility) FROM '/Users/akshajmody/Documents/kenko_folder/project_kenko/db/csvData/fruits.csv' WITH DELIMITER ',';


CREATE TABLE vegetables (
  id INT PRIMARY KEY,
  vegetable VARCHAR(255),
  utility VARCHAR(255)
)

COPY vegetables(id, vegetable, utility) FROM '/Users/akshajmody/Documents/kenko_folder/project_kenko/db/csvData/vegetables.csv' WITH DELIMITER ',';

CREATE TABLE probiotics (
  id INT PRIMARY KEY,
  probiotic VARCHAR(255),
  cuisine VARCHAR(255)
);

COPY probiotics(id, probiotic, cuisine) FROM '/Users/akshajmody/Documents/kenko_folder/project_kenko/db/csvData/probiotics.csv' WITH DELIMITER ',';

CREATE TABLE proteins (
  id INT PRIMARY KEY,
  protein VARCHAR(255),
  cuisine VARCHAR(255),
  utility VARCHAR(255)
);

COPY proteins(id, protein, cuisine, utility) FROM '/Users/akshajmody/Documents/kenko_folder/project_kenko/db/csvData/proteins.csv' WITH DELIMITER ',';

CREATE TABLE seasonings (
  id INT PRIMARY KEY,
  seasoning VARCHAR(255),
  cuisine VARCHAR(255),
);

COPY seasonings(id, seasoning, cuisine) FROM '/Users/akshajmody/Documents/kenko_folder/project_kenko/db/csvData/seasonings.csv' WITH DELIMITER ',';

CREATE TABLE supplements (
  id INT PRIMARY KEY,
  supplement VARCHAR(255),
  utility VARCHAR(255)
);

COPY supplements(id, supplement, utility) FROM '/Users/akshajmody/Documents/kenko_folder/project_kenko/db/csvData/supplements.csv' WITH DELIMITER ',';


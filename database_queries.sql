CREATE DATABASE club_sportiv;
USE club_sportiv;

CREATE TABLE anunt(
	ID INT AUTO_INCREMENT,
    Title VARCHAR(100),
	Author VARCHAR(100),
	Description VARCHAR(500),
    Url VARCHAR(500),
    PRIMARY KEY (ID)
);

-- DATE = YYYY-MM-DD --
CREATE TABLE echipa (
	ID INT AUTO_INCREMENT,
    Nume VARCHAR(100),
    DataInscriere DATE,
    PRIMARY KEY(ID)
);

CREATE TABLE membru_echipa (
	ID INT AUTO_INCREMENT,
    ID_echipa INT,
	Nume VARCHAR(50),
	Prenume VARCHAR(100),
	CNP VARCHAR(20),
    FOREIGN KEY(ID_echipa) REFERENCES echipa(ID),
    PRIMARY KEY(ID)
);

SELECT * FROM echipa;
SELECT * FROM membru_echipa;

INSERT INTO echipa (Nume, DataInscriere)
VALUES
("Steaua", "2024-05-12"),
("Progresul", "1995-05-25"),
("Gara", "1989-12-25");


INSERT INTO membru_echipa (ID_echipa, Nume, Prenume, CNP)
VALUES
(7, "Ene", "Cristian-Alexandru", "5030730284545"),
(9, "Tugulan", "Luca-Mihai", "5030110283895"),
(8, "Burciu", "Alexandru", "5011225288888");

SELECT 	membru_echipa.Nume, membru_echipa.Prenume,
		echipa.Nume AS NumeEchipa
FROM membru_echipa
INNER JOIN echipa 
ON membru_echipa.ID_echipa = echipa.ID;

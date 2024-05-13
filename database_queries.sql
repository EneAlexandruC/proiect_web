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

INSERT INTO anunt (Title, Author, Description, Url)
VALUES
('Hagi a dat gol lui Buffon!!', 'Sarmale Gratis', 'Dupa ce s-a lovit la cap foarte tare, Hagi a primit revelatia divina si a reusit sa inscrie din penalty renumitului Buffon!!', 'https://as.ro/fotbal/fotbal-extern/video-un-gol-magnific-al-lui-gica-hagi-inclus-intr-un-top-urias-nu-si-a-pierdut-geniul-exceptional-74679.html'),
('Mbappe nu prelungește, dar PSG ”câștigă” 150 de milioane de euro', 'Admin', 'În direct la Digi Sport, PSG nu a reușit că învingă pe Lorient în prima etapă din Ligue 1, scor 0-0, iar a doua zi clubul a anunțat revenirea atacantului la antrenamentele echipei.\n\n', 'https://www.digisport.ro/fotbal/ligue-1/mbappe-nu-prelungeste-dar-psg-castiga-150-de-milioane-de-euro-2536957'),
('E gata! Motivul pentru care Kylian Mbappe s-a enervat pe oficialii lui PSG + De ce îi acuză', 'Admin', 'Kylian Mbappe (25 de ani) i-a anunțat pe cei de la PSG că va pleca de la echipă la finalul sezonului, iar jurnaliștii spanioli au dezvăluit că starul francez ar fi semnat deja cu Real Madrid.\n\n', 'https://www.digisport.ro/fotbal/ligue-1/e-gata-motivul-pentru-care-kylian-mbappe-s-a-enervat-pe-oficialii-lui-psg-de-ce-ii-acuza-2850059')

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

SELECT 	CONCAT_WS(' ', membru_echipa.Nume, membru_echipa.Prenume) AS Nume,
        membru_echipa.CNP
FROM membru_echipa
INNER JOIN echipa 
ON membru_echipa.ID_echipa = echipa.ID;

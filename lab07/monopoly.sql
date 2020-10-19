--
-- This SQL script builds a monopoly database, deleting any pre-existing version.
--
-- @author kvlinden
-- @version Summer, 2015
-- 
-- @edited: Jacob Brink
-- @lab: 07

-- Drop previous versions of the tables if they they exist, in reverse order of foreign keys.
DROP TABLE IF EXISTS PlayerGameProperty;
DROP TABLE IF EXISTS PlayerGame;
DROP TABLE IF EXISTS Game;
DROP TABLE IF EXISTS Player;
DROP TYPE IF EXISTS Structure;

-- Create the schema.
CREATE TABLE Game (
	ID integer PRIMARY KEY, 
	time timestamp
	);

CREATE TABLE Player (
	ID integer PRIMARY KEY, 
	emailAddress varchar(50) NOT NULL,
	name varchar(50)
	);

CREATE TABLE PlayerGame (
	gameID integer REFERENCES Game(ID), 
	playerID integer REFERENCES Player(ID),
	score integer,
	cash integer,
	currentPlace integer
	);

CREATE TYPE Structure AS ENUM ('HOUSE', 'HOTEL', 'NONE');

CREATE TABLE PlayerGameProperty (
	gameBoardLocation integer,
	gameID integer REFERENCES Game(ID),
	playerID integer REFERENCES Player(ID),
	propertyStructure Structure NOT NULL,
	PRIMARY KEY (gameBoardLocation, gameID)
	);

-- Allow users to select data from the tables.
GRANT SELECT ON Game TO PUBLIC;
GRANT SELECT ON Player TO PUBLIC;
GRANT SELECT ON PlayerGame TO PUBLIC;
GRANT SELECT ON PlayerGameProperty TO PUBLIC;

-- Add sample records.

INSERT INTO Game VALUES (1, '2006-06-27 08:00:00');
INSERT INTO Game VALUES (2, '2006-06-28 13:20:00');
INSERT INTO Game VALUES (3, '2006-06-29 18:41:00');

INSERT INTO Player(ID, emailAddress) VALUES (1, 'me@calvin.edu');
INSERT INTO Player VALUES (2, 'king@gmail.edu', 'The King');
INSERT INTO Player VALUES (3, 'dog@gmail.edu', 'Dogbreath');

INSERT INTO PlayerGame VALUES (1, 1, 0.00, 0, 4);
INSERT INTO PlayerGame VALUES (1, 2, 0.00, 100, 5);
INSERT INTO PlayerGame VALUES (1, 3, 2350.00, 20, 6);
INSERT INTO PlayerGame VALUES (2, 1, 1000.00, 30, 4);
INSERT INTO PlayerGame VALUES (2, 2, 0.00, 10, 3);
INSERT INTO PlayerGame VALUES (2, 3, 500.00, 200, 10);
INSERT INTO PlayerGame VALUES (3, 2, 0.00, 124, 12);
INSERT INTO PlayerGame VALUES (3, 3, 5500.00, 20, 20);

-- Insert property values
INSERT INTO PlayerGameProperty VALUES (1, 1, 1, 'HOUSE');
INSERT INTO PlayerGameProperty VALUES (2, 1, 3, 'HOUSE');
INSERT INTO PlayerGameProperty VALUES (4, 1, 2, 'HOTEL');
INSERT INTO PlayerGameProperty VALUES (5, 1, 1, 'HOUSE');
INSERT INTO PlayerGameProperty VALUES (2, 2, 1, 'NONE');
INSERT INTO PlayerGameProperty VALUES (5, 2, 2, 'HOUSE');
INSERT INTO PlayerGameProperty VALUES (3, 2, 1, 'HOUSE');


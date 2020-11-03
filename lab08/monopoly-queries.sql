--
-- This SQL script implements sample queries on the Monopoly database.
--
-- @author Jacob Brink
-- @lab 08
--

-- 8.1
-- 8.1.a Retrieve a list of all the games, ordered by date with the most recent game coming first. 
SELECT *
  FROM Game
  ORDER BY time
  DESC;
  
-- 8.1.b Retrieve all the games that occurred in the past week.
SELECT *
  FROM Game
  WHERE time >= current_date - interval '7' day;
  
-- 8.1.c Retrieve a list of players who have (non-NULL) names.
SELECT *
  FROM Player
  WHERE name is NOT NULL;
  
-- 8.1.d Retrieve a list of IDs for players who have some game score larger than 2000.
SELECT *
  FROM Player, PlayerGame
  WHERE Player.ID = PlayerGame.playerID
  AND PlayerGame.score > 2000;
  
-- 8.1.e Retrieve a list of players who have GMail accounts.
SELECT * 
  FROM Player
  WHERE Player.emailAddress LIKE '%@gmail%';
  
  
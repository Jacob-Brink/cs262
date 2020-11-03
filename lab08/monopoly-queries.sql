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

-- 8.2
-- 8.2.a Retrieve all “The King”’s game scores in decreasing order.
SELECT score
  FROM PlayerGame, Player
  WHERE Player.ID = PlayerGame.playerID
  AND Player.name = 'The King'
  ORDER BY score DESC;
  
-- 8.2.b Retrieve the name of the winner of the game played on 2006-06-28 13:20:00. 
SELECT name, score
  FROM Player, PlayerGame, Game
  WHERE Game.time = '2006-06-28 13:20:00'
  AND Player.ID = PlayerGame.playerID
  AND PlayerGame.gameID = Game.ID
  ORDER BY score DESC
  LIMIT 1;
  
-- 8.2.c So what does that P1.ID < P2.ID clause do in the last example query? 

-- Answer: The last example retreives players who share the same name, and since a person shares a name with themselves technically, we need to ensure that that scenario is not reported.
-- We do that by matching only players who are not the same player, which is done by P1.ID < P2.ID.

-- 8.2.d The query that joined the Player table to itself seems rather contrived. Can you think of a realistic situation in which you’d want to join a table to itself? 

-- Answer: Whenever a table references itself, a query might have to join the same table more than once.
-- One example could be a table of family tree, where you want to find all the direct descendants of Person A.
-- The table has two columns: one for the parent, and one for the child. 
-- You would have to join the table on itself to get all direct descendants.
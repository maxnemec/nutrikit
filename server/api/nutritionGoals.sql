DROP table if EXISTS nutritionGoals CASCADE;

CREATE TABLE nutritionGoals (
    id SERIAL PRIMARY KEY NOT NULL,
    goal VARCHAR(30),
    value INTEGER NOT NULL
);


INSERT INTO nutritionGoals(goal, value)	
    VALUES ('Calories', 3180);
INSERT INTO nutritionGoals(goal, value)	
    VALUES ('totalFat', 106);
INSERT INTO nutritionGoals(goal, value)	
    VALUES ('protein', 159);
INSERT INTO nutritionGoals(goal, value)	
    VALUES ('carbs', 398);
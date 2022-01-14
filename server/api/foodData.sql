DROP table if EXISTS foodData CASCADE;

CREATE TABLE foodData (
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(30),
    category VARCHAR(30) NOT NULL,
    calories INTEGER NOT NULL,
    totalFat FLOAT NOT NULL,
    saturatedFat FLOAT NOT NULL,
    transFat FLOAT NOT NULL,
    protein FLOAT NOT NULL,
    carbohydrate FLOAT NOT NULL
);


INSERT INTO foodData(name, category, calories, totalFat, saturatedFat, transFat, protein, carbohydrate)	
    VALUES ('steak', 'proteins', 300, 5.73, 2.183, 0.182, 29.44, 0.0);
INSERT INTO foodData(name, category, calories, totalFat, saturatedFat, transFat, protein, carbohydrate)	
    VALUES ('ground beef', 'proteins', 200, 13.1, 5.3, 0.6, 15.18, 0.0);
INSERT INTO foodData(name, category, calories, totalFat, saturatedFat, transFat, protein, carbohydrate)	
    VALUES ('chicken', 'proteins', 100, 9.3, 2.5, 0.1, 27.14, 0.0);
INSERT INTO foodData(name, category, calories, totalFat, saturatedFat, transFat, protein, carbohydrate)	
    VALUES ('fish', 'proteins', 80, 6.34, 1.0, 0.0, 19.84, 0.0);
INSERT INTO foodData(name, category, calories, totalFat, saturatedFat, transFat, protein, carbohydrate)	
    VALUES ('soy', 'proteins', 50, 19.94, 2.884, 0.0, 36.49, 30.16);

INSERT INTO foodData(name, category, calories, totalFat, saturatedFat, transFat, protein, carbohydrate)	
    VALUES ('orange', 'fruits', 300, 0.12, 0.0, 0.0, 0.94, 11.75);
INSERT INTO foodData(name, category, calories, totalFat, saturatedFat, transFat, protein, carbohydrate)	
    VALUES ('banana', 'fruits', 200, 0.33, 0.0, 0.0, 1.09, 22.84);
INSERT INTO foodData(name, category, calories, totalFat, saturatedFat, transFat, protein, carbohydrate)	
    VALUES ('pineapple', 'fruits', 100, 0.12, 0.0, 0.0, 0.54, 13.12);
INSERT INTO foodData(name, category, calories, totalFat, saturatedFat, transFat, protein, carbohydrate)	
    VALUES ('grapes', 'fruits', 80, 0.16, 0.0, 0.0, 0.72, 18.1);
INSERT INTO foodData(name, category, calories, totalFat, saturatedFat, transFat, protein, carbohydrate)	
    VALUES ('blueberries', 'fruits', 50, 0.33, 0.0, 0.0, 0.74, 14.49);

INSERT INTO foodData(name, category, calories, totalFat, saturatedFat, transFat, protein, carbohydrate)	
    VALUES ('romaine', 'vegetables', 30, 0.3, 0.0, 0.0, 1.2, 3.3);
INSERT INTO foodData(name, category, calories, totalFat, saturatedFat, transFat, protein, carbohydrate)	
    VALUES ('green beans', 'vegetables', 40, 0.22, 0.0, 0.0, 1.83, 6.97);
INSERT INTO foodData(name, category, calories, totalFat, saturatedFat, transFat, protein, carbohydrate)	
    VALUES ('squash', 'vegetables', 100, 0.2, 0.0, 0.0, 1.2, 3.4);
INSERT INTO foodData(name, category, calories, totalFat, saturatedFat, transFat, protein, carbohydrate)	
    VALUES ('spinach', 'vegetables', 50, 0.4, 0.0, 0.0, 2.9, 3.6);
INSERT INTO foodData(name, category, calories, totalFat, saturatedFat, transFat, protein, carbohydrate)	
    VALUES ('kale', 'vegetables', 10, 0.9, 0.0, 0.0, 4.3, 8.8);

INSERT INTO foodData(name, category, calories, totalFat, saturatedFat, transFat, protein, carbohydrate)	
    VALUES ('milk', 'dairy', 300, 3.9, 2.4, 0.0, 3.2, 4.8);
INSERT INTO foodData(name, category, calories, totalFat, saturatedFat, transFat, protein, carbohydrate)	
    VALUES ('yoghurt', 'dairy', 200, 5.0, 0.0, 0.0, 9.0, 3.98);
INSERT INTO foodData(name, category, calories, totalFat, saturatedFat, transFat, protein, carbohydrate)	
    VALUES ('cheddar cheese', 'dairy', 200, 9.0, 6.0, 0.0, 7.0, 0.0);
INSERT INTO foodData(name, category, calories, totalFat, saturatedFat, transFat, protein, carbohydrate)	
    VALUES ('skim milk', 'dairy', 100, 0.2, 0.1, 0.0, 8.3, 12.5);
INSERT INTO foodData(name, category, calories, totalFat, saturatedFat, transFat, protein, carbohydrate)	
    VALUES ('cottage cheese', 'dairy', 80, 4.3, 0.0, 0.0, 11.12, 3.38);

INSERT INTO foodData(name, category, calories, totalFat, saturatedFat, transFat, protein, carbohydrate)	
    VALUES ('bread', 'grains', 200, 1.1, 0.0, 0.0, 4.0, 13.8);
INSERT INTO foodData(name, category, calories, totalFat, saturatedFat, transFat, protein, carbohydrate)	
    VALUES ('bagel', 'grains', 300, 1.7, 0.1, 0.0, 13.8, 68);
INSERT INTO foodData(name, category, calories, totalFat, saturatedFat, transFat, protein, carbohydrate)	
    VALUES ('pita', 'grains', 250, 1.7, 0.3, 0.0, 6.3, 35.2);
INSERT INTO foodData(name, category, calories, totalFat, saturatedFat, transFat, protein, carbohydrate)	
    VALUES ('naan', 'grains', 210, 3.3, 0.1, 0.0, 2.7, 16.9);
INSERT INTO foodData(name, category, calories, totalFat, saturatedFat, transFat, protein, carbohydrate)	
    VALUES ('tortilla', 'grains', 120, 0.5, 0.1, 0.0, 1.1, 8.5);

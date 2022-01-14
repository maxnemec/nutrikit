from flask_restful import Resource

from flask_restful import request
from flask_restful import reqparse
import json
from .swen_344_db_utils import *

class FetchData(Resource):
    def get(self):
       result = exec_get_all("SELECT * from fooddata")
       return result

class FetchGoalData(Resource):
    def get(self):
        result = exec_get_all("SELECT value FROM nutritiongoals")
        return result

class GetFood(Resource):
    def get(self, food):
        query = """
        SELECT * FROM fooddata
        WHERE name = %s
        """

        result = exec_get_one(query, (food,))
        return result;

class GetFoodsByCategory(Resource):
    def get(self, category):
        print(category)
        query = """
        SELECT name FROM fooddata
        WHERE category = %s
        """

        result = exec_get_all(query, (category,))
        print(result)
        return result;

class UpdateFood(Resource):
    def put(self):
        parser = reqparse.RequestParser()
        parser.add_argument('menuItem', type=str)
        parser.add_argument('calories', type=int)
        parser.add_argument('totalFat', type=float)
        parser.add_argument('saturatedFat', type=float)
        parser.add_argument('transFat', type=float)
        parser.add_argument('protein', type=float)
        parser.add_argument('carbohydrates', type=float)
       
        args = parser.parse_args() 
       
        menuItem = args['menuItem']
        calories = args['calories']
        totalFat = args['totalFat']
        saturatedFat = args['saturatedFat']
        transFat = args['transFat']
        protein = args['protein']
        carbohydrates = args['carbohydrates']

        print(menuItem)
        print(calories)
        print(totalFat)
        print(saturatedFat)
        print(transFat)
        print(protein)
        print(carbohydrates)

        query = """
        UPDATE fooddata
        SET calories = %s, totalFat = %s, saturatedFat = %s, transFat = %s, protein = %s, carbohydrate = %s
        WHERE name = %s 
        """

        return exec_commit(query, (calories, totalFat, saturatedFat, transFat, protein, carbohydrates, menuItem))

class UpdateGoals(Resource):
    def put(self):
        parser = reqparse.RequestParser()
        parser.add_argument('calorieValue', type=str)
        parser.add_argument('totalFatValue', type=int)
        parser.add_argument('proteinValue', type=float)
        parser.add_argument('carbValue', type=float)

        args = parser.parse_args() 

        calorieValue = args['calorieValue']
        totalFatValue = args['totalFatValue']
        proteinValue = args['proteinValue']
        carbValue = args['carbValue']

        print(calorieValue)
        print(totalFatValue)
        print(proteinValue)
        print(carbValue)

        query = """
        UPDATE nutritiongoals
        SET value = %s
        WHERE goal = 'Calories'
        """
        exec_commit(query, (calorieValue,))

        query = """
        UPDATE nutritiongoals
        SET value = %s
        WHERE goal = 'totalFat'
        """
        exec_commit(query, (totalFatValue,))

        query = """
        UPDATE nutritiongoals
        SET value = %s
        WHERE goal = 'protein'
        """
        exec_commit(query, (proteinValue,))

        query = """
        UPDATE nutritiongoals
        SET value = %s
        WHERE goal = 'carbs'
        """
        exec_commit(query, (carbValue,))

        return "success"

class DeleteFood(Resource):
    def delete(self):
        parser = reqparse.RequestParser()
        parser.add_argument('menuItem', type=str)

        args = parser.parse_args()

        menuItem = args['menuItem']

        print(menuItem)

        query = """
        DELETE from fooddata
        WHERE name = %s
        """

        return exec_commit(query, (menuItem, ))

class AddFood(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('menuItem', type=str)
        parser.add_argument('category', type=str)
        parser.add_argument('calories', type=int)
        parser.add_argument('totalFat', type=float)
        parser.add_argument('saturatedFat', type=float)
        parser.add_argument('transFat', type=float)
        parser.add_argument('protein', type=float)
        parser.add_argument('carbohydrates', type=float)
       
        args = parser.parse_args() 
       
        menuItem = args['menuItem']
        category = args['category']
        calories = args['calories']
        totalFat = args['totalFat']
        saturatedFat = args['saturatedFat']
        transFat = args['transFat']
        protein = args['protein']
        carbohydrates = args['carbohydrates']

        print(menuItem)
        print(calories)
        print(totalFat)
        print(saturatedFat)
        print(transFat)
        print(protein)
        print(carbohydrates)

        query = """
        INSERT INTO fooddata(name, category, calories, totalfat, saturatedfat, transfat, protein, carbohydrate)
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s)
        """

        return exec_commit(query, (menuItem, category, calories, totalFat, saturatedFat, transFat, protein, carbohydrates))

    


        

        

  
        

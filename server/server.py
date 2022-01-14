from flask import Flask
from flask_restful import Resource, Api


from api.swen_344_db_utils import *
from api.resources import *

app = Flask(__name__) #create Flask instance

api = Api(app) #api router

api.add_resource(FetchData,'/fetchData')
api.add_resource(GetFood, '/getFood/<string:food>')
api.add_resource(GetFoodsByCategory, '/getFoodsByCategory/<string:category>')
api.add_resource(UpdateFood, '/updateFood')
api.add_resource(DeleteFood, '/deleteFood')
api.add_resource(AddFood, '/addFood')
api.add_resource(FetchGoalData, '/fetchGoalData')
api.add_resource(UpdateGoals, '/updateGoals')

if __name__ == '__main__':
    print("Loading db");
    exec_sql_file('foodData.sql');
    exec_sql_file('nutritionGoals.sql');
    print("Starting flask");
    app.run(debug=True), #starts Flask

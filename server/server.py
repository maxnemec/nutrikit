from flask import Flask
from flask_restful import Api
from flask.helpers import send_from_directory
from  flask_cors import CORS, cross_origin


from server.api import *
from server.api.resources import *

app = Flask(__name__, static_folder='mjn7597-react/build', static_url_path='') #create Flask instance
CORS(app)

api = Api(app) #api router

@app.route('/')
@cross_origin()
def serve():
    return send_from_directory(app.static_folder, 'index.html')


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

import '../../src/App.css';
import React from 'react';

import AddFoodItemButton from './AddFoodItemButton';

import { CardBody, Card, CardFooter, Row, Container } from 'reactstrap';


class TotalNutritionFacts extends React.Component {
    getColor(value, nutrient){
        switch (nutrient) {
            case "totalFat":
                if(value < 16)
                {
                    return "text-nowrap text-success";
                }
                return "text-nowrap text-danger";
                
            case "protein": 
                if(value > 2)
                {
                    return "text-nowrap text-success";
                }
                return "text-nowrap text-danger";
            case "carbohydrates":
                if(value <= 55)
                {
                    return "text-nowrap text-success";
                }
                return "text-nowrap text-danger";
            case "calories":
                if(value <= 400)
                {
                    return "text-nowrap text-success";
                }
                return "text-nowrap text-danger";
            default:
                break;
        }
    }

    hanldeAddFoodItemPress = () => {
        this.props.toggleAddFoodItemModal();
    }

    render() { 
        return (
            <Card>
                <CardBody>
                    <Container fluid>
                        <Row>
                            Total
                        </Row>
                        <Row className="text-nowrap">
                            Nutrition Facts
                        </Row>
                        <Row className={this.getColor(this.props.totalCalories, "calories")}>
                            Calories: {this.props.totalCalories} 
                        </Row>
                        <Row className={this.getColor(this.props.totalFat, "totalFat")}>
                            Total Fat: {this.props.totalFat}
                        </Row>
                        <Row className={this.getColor(this.props.totalFat, "totalFat")} >
                            Saturated Fat: {this.props.totalSaturatedFat}
                        </Row>
                        <Row className={this.getColor(this.props.totalFat, "totalFat")} >
                            Trans Fat: {this.props.totalTransFat}
                        </Row>
                        <Row className={this.getColor(this.props.totalProtein, "protein")}>
                            Protein: {this.props.totalProtein} 
                        </Row>
                        <Row className={this.getColor(this.props.totalCarbs, "carbohydrates")}>
                            Carbs: {this.props.totalCarbs} 
                        </Row>
                    </Container>
                </CardBody>
                <CardFooter>
                    <AddFoodItemButton hanldeAddFoodItemPress={this.hanldeAddFoodItemPress}/>
                </CardFooter>
            </Card>
        );
    }

}
export default TotalNutritionFacts;
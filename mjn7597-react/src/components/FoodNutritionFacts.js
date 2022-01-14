import '../../src/App.css';
import React from 'react';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';
import { CardBody, Card,  Row, Col, Container, CardFooter } from 'reactstrap';


class FoodNutritionFacts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isEdit: false,
            newCalories: this.props.calories,
        };
    }

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

    handleEditPress = () =>
    {
        this.props.toggleModal();
    }

    handleDeletePress = () =>
    {
        this.props.toggleDeleteMessage();
    }
    
    capitalize = (str) => {
        const lowercase = str.toLowerCase();
        return str.charAt(0).toUpperCase() + lowercase.slice(1);
    }

    render() {
        let currFood = this.capitalize(this.props.currSelectedFood);
        return (     
            <Card className="h-100">
                <CardBody>
                    <Container fluid>
                        <Row>
                            {currFood}
                        </Row>
                        <Row className="text-nowrap">
                            Nutrition Facts
                        </Row>
                        <Row className={this.getColor(this.props.calories, "calories")}>
                            Calories: {this.props.calories} 
                        </Row>
                        <Row className={this.getColor(this.props.totalFat, "totalFat")}>
                            Total Fat: {this.props.totalFat}
                        </Row>
                        <Row className={this.getColor(this.props.totalFat, "totalFat")} >
                            Saturated Fat: {this.props.saturatedFat}
                        </Row>
                        <Row className={this.getColor(this.props.totalFat, "totalFat")} >
                            Trans Fat: {this.props.transFat}
                        </Row>
                        <Row className={this.getColor(this.props.protein, "protein")}>

                            Protein: {this.props.protein} 
                        </Row>
                        <Row className={this.getColor(this.props.carbs, "carbohydrates")}>
                            Carbs: {this.props.carbs} 
                        </Row>
                    </Container>
                </CardBody>
                <CardFooter>
                    <Container>
                        <Row >
                            <Col xs={6} className="no-padding">
                                <EditButton handleEditPress={this.handleEditPress}/>
                            </Col>
                            <Col xs={6} className="no-padding ">
                                <DeleteButton handleDeletePress={this.handleDeletePress}/>
                            </Col>
                        </Row>
                    </Container>
                </CardFooter>
        </Card>
        );
    

    }

}
export default FoodNutritionFacts;
import '../../src/App.css';
import React from 'react';

import {Modal, ModalBody, ModalHeader, Input, Form, FormGroup, ModalFooter, Container, Button, Row, Col} from 'reactstrap';

class EditModal extends React.Component {

    capitalize = (str) => {
        console.log("str: " + str);
        const lowercase = str.toLowerCase();
        return str.charAt(0).toUpperCase() + lowercase.slice(1);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const formData = e.target;
        console.log("formData.calories.value = " + formData.calories.value);
        console.log("formData.totalFat.value = " + formData.totalFat.value);
        console.log("formData.saturatedFat.value = " + formData.saturatedFat.value);
        console.log("formData.transFat.value = " + formData.transFat.value);
        console.log("formData.protein.value = " + formData.protein.value);
        console.log("formData.carbohydrates.value = " + formData.carbohydrates.value);
        this.updateFood(
            this.props.currSelectedFood, 
            formData.calories.value, 
            formData.totalFat.value, 
            formData.saturatedFat.value,
            formData.transFat.value,
            formData.protein.value,
            formData.carbohydrates.value);
        this.props.toggleModal();
    }

    getResponse(response)
    {
        if (response.status === 200)
        {
        return response.json(); 
        }
        else
        {
        console.log("HTTP error:" + response.status + ":" +  response.statusText);
        return ([ ["status ", response.status]]);
        }
    }

    updateFood = (menuItem, calories, totalFat, saturatedFat, transFat, protein, carbohydrates) => {
        const requestOptions = {
            method: "PUT",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(
                {
                    "menuItem": menuItem,
                    "calories" : calories,
                    "totalFat" : totalFat,
                    "saturatedFat": saturatedFat,
                    "transFat": transFat,
                    "protein" : protein,
                    "carbohydrates" : carbohydrates
                })
        };
        fetch('/updateFood', requestOptions)
        .then(response => this.getResponse(response))
        .then((jsonOutput) => {
            console.log(jsonOutput);
            this.props.refreshFoodData(menuItem);

        })
        .catch((error) => {console.log(error);})
    }
   
    render() {
        let currFood = this.capitalize(this.props.currSelectedFood);
        
        return (
            <Modal isOpen={this.props.isModalOpen}>
                <ModalHeader className="mx-auto" isOpen={this.props.isModalOpen}>
                    Edit {currFood} Nutrition Facts
                </ModalHeader>
                <Form onSubmit={this.handleSubmit}>
                    <ModalBody>
                        <FormGroup onSubmit={this.handleSubmit}>
                            <Container fluid>
                                <Row>
                                    <Col xs={5}>
                                        Calories: 
                                    </Col>
                                    <Col>
                                        <Input defaultValue={this.props.calories} className="mb-2" bsSize="sm" id="caloriesInput" name="calories" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={5}>
                                        Total Fat: 
                                    </Col>
                                    <Col>
                                        <Input defaultValue={this.props.totalFat} className="mb-2" bsSize="sm" id="totalFatInput" name="totalFat" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={5}>
                                        Saturated Fat: 
                                    </Col>
                                    <Col>
                                        <Input defaultValue={this.props.saturatedFat} className="mb-2" bsSize="sm" id="saturatedFatInput" name="saturatedFat" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={5}>
                                        Trans Fat: 
                                    </Col>
                                    <Col>
                                        <Input defaultValue={this.props.transFat} className="mb-2" bsSize="sm" id="transFatInput" name="transFat"  />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={5}>
                                        Protein: 
                                    </Col>
                                    <Col>
                                        <Input defaultValue={this.props.protein} className="mb-2" bsSize="sm" id="proteinInput" name="protein" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={5}>
                                        Carbohydrates: 
                                    </Col>
                                    <Col>
                                        <Input defaultValue={this.props.carbs} className="mb-2" bsSize="sm" id="carbohydratessInput" name="carbohydrates" />
                                    </Col>
                                </Row>
                            </Container>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Container fluid>
                            <Row>
                                <Col>
                                    <Button onClick={this.props.toggleModal} block >Cancel</Button>
                                </Col>
                                <Col>
                                    <Button type="submit" color="success" block >Submit</Button>
                                </Col>
                            </Row>
                        </Container>
                    </ModalFooter>
                </Form>
        
         
            </Modal>
        )
    }
}

export default EditModal;
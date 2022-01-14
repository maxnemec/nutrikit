import React from 'react';

import {Modal, ModalBody, ModalHeader, Input, Form, FormGroup, ModalFooter, Container, Button, Row, Col, DropdownMenu, DropdownToggle, Dropdown, DropdownItem} from 'reactstrap';

class AddFoodItemModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDropDownOpen: false,
            dropDownValue: "Proteins"
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const formData = e.target;
        console.log("formData.FoodItemName.value " + formData.foodItemName.value);
        console.log("formData.category.value " + this.state.dropDownValue);
        console.log("formData.calories.value " + formData.calories.value);
        console.log("formData.totalFat.value = " + formData.totalFat.value);
        console.log("formData.saturatedFat.value = " + formData.saturatedFat.value);
        console.log("formData.transFat.value = " + formData.transFat.value);
        console.log("formData.protein.value = " + formData.protein.value);
        console.log("formData.carbohydrates.value = " + formData.carbohydrates.value);
        this.addFood(
            formData.foodItemName.value, 
            this.state.dropDownValue,
            formData.calories.value,
            formData.totalFat.value,
            formData.saturatedFat.value,
            formData.transFat.value,
            formData.protein.value,
            formData.carbohydrates.value);
        this.props.toggleAddFoodItemModal();
            
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

    dropDownToggle = () => {
        this.setState({
            isDropDownOpen: !this.state.isDropDownOpen
        });
    }
    
    handleDropDownChange = (item) =>
    {
        this.setState({
            dropDownValue: item
        });

    }

    addFood = (menuItem, category, calories, totalFat, saturatedFat, transFat, protein, carbohydrates) => {
        const requestOptions = {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(
                {
                    "menuItem": menuItem,
                    "category": category,
                    "calories" : calories,
                    "totalFat" : totalFat,
                    "saturatedFat": saturatedFat,
                    "transFat": transFat,
                    "protein" : protein,
                    "carbohydrates" : carbohydrates
                })
        };
        fetch('/addFood', requestOptions)
        .then(response => this.getResponse(response))
        .then((jsonOutput) => {
            console.log(jsonOutput);
            this.props.refreshMenuItems();

        })
        .catch((error) => {console.log(error);})
    }
      
    
    render() {
        return (
            <Modal isOpen={this.props.isAddFoodItemModalOpen}>
                    <ModalHeader className="mx-auto">
                        Add New Food
                    </ModalHeader>
                    <Form onSubmit={this.handleSubmit}>
                    <ModalBody>
                        <FormGroup onSubmit={this.handleSubmit}>
                            <Container fluid>
                                <Row>
                                    <Col xs={5}>
                                        Food Name: 
                                    </Col>
                                    <Col>
                                        <Input placeholder="Pineapples" defaultValue={""} className="mb-2" bsSize="sm" id="foodItemName" name="foodItemName" />
                                    </Col>
                                </Row>
                                <Row className="mb-2">
                                    <Col xs={5}>
                                        Category: 
                                    </Col>
                                    <Col>
                                        <Dropdown name="category" toggle={this.dropDownToggle} isOpen={this.state.isDropDownOpen} >
                                            <DropdownToggle caret 
                                                block
                                                size="sm"
                                                color="primary"
                                                onClick={this.dropDownToggle}
                                                aria-expanded={this.state.isDropDownOpen}
                                                data-toggle="dropdown">
                                                {this.state.dropDownValue}
                                            </DropdownToggle>
                                            <DropdownMenu id="category" name="category">
                                                <DropdownItem onClick={() => this.handleDropDownChange(this.props.foodGroups[0])} id="category" value={this.props.foodGroups[0]}>
                                                    {this.props.foodGroups[0]}
                                                </DropdownItem>
                                                <DropdownItem onClick={() => this.handleDropDownChange(this.props.foodGroups[1])} id="category" value={this.props.foodGroups[1]}>
                                                    {this.props.foodGroups[1]}
                                                </DropdownItem>
                                                <DropdownItem onClick={() => this.handleDropDownChange(this.props.foodGroups[2])} id="category" value={this.props.foodGroups[2]}>
                                                    {this.props.foodGroups[2]}
                                                </DropdownItem>
                                                <DropdownItem onClick={() => this.handleDropDownChange(this.props.foodGroups[3])} id="category" value={this.props.foodGroups[3]}>
                                                    {this.props.foodGroups[3]}
                                                </DropdownItem>
                                                <DropdownItem onClick={() => this.handleDropDownChange(this.props.foodGroups[4])} id="category" value={this.props.foodGroups[4]}>
                                                    {this.props.foodGroups[4]}
                                                </DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={5}>
                                        Calories: 
                                    </Col>
                                    <Col>
                                        <Input placeholder={"0"} defaultValue={0} className="mb-2" bsSize="sm" id="caloriesInput" name="calories" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={5}>
                                        Total Fat: 
                                    </Col>
                                    <Col>
                                        <Input placeholder={"0"} defaultValue={0} className="mb-2" bsSize="sm" id="totalFatInput" name="totalFat" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={5}>
                                        Saturated Fat: 
                                    </Col>
                                    <Col>
                                        <Input placeholder={"0"} defaultValue={0} className="mb-2" bsSize="sm" id="saturatedFatInput" name="saturatedFat" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={5}>
                                        Trans Fat: 
                                    </Col>
                                    <Col>
                                        <Input placeholder={"0"} defaultValue={0} className="mb-2" bsSize="sm" id="transFatInput" name="transFat"  />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={5}>
                                        Protein: 
                                    </Col>
                                    <Col>
                                        <Input placeholder={"0"} defaultValue={0} className="mb-2" bsSize="sm" id="proteinInput" name="protein" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={5}>
                                        Carbohydrates: 
                                    </Col>
                                    <Col>
                                        <Input placeholder={"0"} defaultValue={0} className="mb-2" bsSize="sm" id="carbohydratessInput" name="carbohydrates" />
                                    </Col>
                                </Row>
                            </Container>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Container fluid>
                            <Row>
                                <Col>
                                    <Button onClick={this.props.toggleAddFoodItemModal} block >Cancel</Button>
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

export default AddFoodItemModal;
import '../../src/App.css';
import React from 'react';
import { Input, ModalHeader, Modal, ModalBody, Form, FormGroup, Row, Container, Col, Button, ModalFooter } from 'reactstrap';


class ChangeGoalModal extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();
        const formData = e.target;
        console.log("formData.calorieGoal.value = " + formData.calorieGoal.value);
        console.log("formData.totalFatGoal.value = " + formData.totalFatGoal.value);
        console.log("formData.proteinGoal.value = " + formData.proteinGoal.value);
        console.log("formData.carbsGoal.value = " + formData.carbsGoal.value);
        this.updateGoals(
            formData.calorieGoal.value,
            formData.totalFatGoal.value,
            formData.proteinGoal.value,
            formData.carbsGoal.value);
        this.props.toggle();
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

    updateGoals = (calorieValue, totalFatValue, proteinValue, carbValue) => {
        const requestOptions = {
            method: "PUT",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(
                {
                    "calorieValue": calorieValue,
                    "totalFatValue" : totalFatValue,
                    "proteinValue" : proteinValue,
                    "carbValue": carbValue
                })
        };
        fetch('/updateGoals', requestOptions)
        .then(response => this.getResponse(response))
        .then((jsonOutput) => {
            console.log(jsonOutput);
            this.props.updateGoalData();

        })
        .catch((error) => {console.log(error);})
    }

    render() {
        return ( 
            <Modal isOpen={this.props.isModalOpen}>
                <ModalHeader>
                    Nutrition Goals
                </ModalHeader>
                <Form onSubmit={this.handleSubmit}>
                    <ModalBody>
                        <FormGroup onSubmit={this.handleSubmit}>
                            <Container fluid>
                                <Row>
                                    <Col xs={5}>
                                        Calorie Goal: 
                                    </Col>
                                    <Col>
                                        <Input defaultValue={this.props.calorieGoal} className="mb-2" bsSize="sm" id="calorieGoal" name="calorieGoal"/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={5}>
                                        Total Fat Goal: 
                                    </Col>
                                    <Col>
                                        <Input defaultValue={this.props.totalFatGoal} className="mb-2" bsSize="sm" id="totalFatGoal" name="totalFatGoal"/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={5}>
                                        Protein Goal: 
                                    </Col>
                                    <Col>
                                        <Input defaultValue={this.props.proteinGoal} className="mb-2" bsSize="sm" id="proteinGoal" name="proteinGoal"/> 
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={5}>
                                        Carbs Goal: 
                                    </Col>
                                    <Col>
                                        <Input defaultValue={this.props.carbGoal} bsSize="sm" id="carbsGoal" name="carbsGoal"/>
                                    </Col>
                                </Row>
                            </Container>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Container fluid>
                            <Row>
                                <Col>
                                    <Button onClick={this.props.toggle} block >Back</Button>
                                </Col>
                                <Col>
                                    <Button type="submit" color="success" block >Submit Change</Button>
                                </Col>
                            </Row>
                        </Container>
                    </ModalFooter>
                </Form>
            </Modal>
        );
    }
}
export default ChangeGoalModal;

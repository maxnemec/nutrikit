import '../../src/App.css';
import React from 'react';

import { Modal, ModalBody, ModalHeader, ModalFooter, Container, Row, Col, Button } from 'reactstrap';

class DeleteMessageModal extends React.Component {
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

    deleteFood = (menuItem) => {
        const requestOptions = {
            method: "DELETE",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(
                {
                    "menuItem": menuItem,
                })
        };
        fetch('/deleteFood', requestOptions)
        .then(response => this.getResponse(response))
        .then((jsonOutput) => {
            console.log(jsonOutput);
            this.props.toggleDeleteMessage();
            this.props.refreshMenuItems(this.props.category);

        })
        .catch((error) => {console.log(error);})
        
    }

    render() {
       

        return(
            <Modal isOpen={this.props.isModalOpen} >
                <ModalHeader>
                    Are you sure want to remove {this.props.currSelectedFood} from your recorded food items?
                </ModalHeader>
                <ModalBody>
                    This can not be reversed
                </ModalBody>
                <ModalFooter>
                    <Container fluid>
                        <Row>
                            <Col>
                                <Button onClick={this.props.toggleDeleteMessage} block >Cancel</Button>
                            </Col>
                            <Col>
                                <Button onClick={() => this.deleteFood(this.props.currSelectedFood)} color="danger" block >Delete</Button>
                            </Col>
                        </Row>
                    </Container>
                </ModalFooter>
            </Modal>
        )
    }
}

export default DeleteMessageModal
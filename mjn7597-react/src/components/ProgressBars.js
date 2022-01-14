import '../../src/App.css';

import React from 'react';


import { CardBody, Card, Container, CardFooter, Progress, Button } from 'reactstrap';


class ProgressBars extends React.Component {



  render() {

    return (     
        <Card className="h-100" >
            <CardBody>
                <Container fluid className="no-padding">
                  <Progress className="mb-2" value={this.props.calorieProgress} >{"Calories"}</Progress>
                  <Progress className="mb-2" value={this.props.totalFatProgress}>{"Total Fat"}</Progress>   
                  <Progress className="mb-2" value={this.props.proteinProgress}>{"Protein"}</Progress>
                  <Progress  value={this.props.carbProgress}>{"Carbs"}</Progress>
                </Container>
            </CardBody>
            <CardFooter className="d-flex justify-content-center">
              <Button onClick={this.props.toggle} size="sm" color="success">Change Goals</Button>
            </CardFooter>
    </Card>
    );


  }

}
export default ProgressBars;
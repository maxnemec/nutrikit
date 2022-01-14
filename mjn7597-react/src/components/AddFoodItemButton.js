import '../../src/App.css';
import React from 'react';
import { Button } from 'reactstrap';


class AddFoodItemButton extends React.Component {
    
    render() {
        return (
            <Button onClick={this.props.hanldeAddFoodItemPress} size="sm" color="primary">Add Food Item</Button>
        );
    }

}
export default AddFoodItemButton;
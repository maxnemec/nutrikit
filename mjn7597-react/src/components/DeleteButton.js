import '../../src/App.css';
import React from 'react';
import { Button } from 'reactstrap';


class DeleteButton extends React.Component {
    
    render() {
        return (
            <Button onClick={this.props.handleDeletePress} size="sm" color="danger">Delete</Button>
        );
    }

}
export default DeleteButton;
import '../../src/App.css';
import React from 'react';
import { Button } from 'reactstrap';


class EditButton extends React.Component {
    
    render() {
        return (
            <Button size="sm" color="primary" onClick={this.props.handleEditPress} id="editButton" type="button" >Edit</Button>
        );
    }

}
export default EditButton;
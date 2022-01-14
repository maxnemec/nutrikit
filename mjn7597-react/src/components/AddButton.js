import '../../src/App.css';
import React from 'react';
import { Button } from 'reactstrap';


class AddButton extends React.Component {
   
    render() {
        return (
            
            <Button block color="success" onClick={this.props.onClick} id="updateButton" type="button" >{'add'}</Button>
            
        );
    }

}
export default AddButton;
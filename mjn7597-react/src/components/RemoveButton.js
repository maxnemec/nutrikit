import '../../src/App.css';
import React from 'react';
import { Button } from 'reactstrap';


class RemoveButton extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <Button block color="danger" onClick={this.props.onClick} id="updateButton" type="button" >{"remove"}</Button>
        );
    }

}
export default RemoveButton;
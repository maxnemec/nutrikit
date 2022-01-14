import '../../src/App.css';
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { DropdownItem } from 'reactstrap';


class FoodGroupOption extends React.Component {
 

    render() {
        return (
            
            <DropdownItem className="button" value={this.props.value}>{this.props.value}</DropdownItem>
            
        );
    }

}
export default FoodGroupOption;
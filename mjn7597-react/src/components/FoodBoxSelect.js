import '../../src/App.css';
import React from 'react';


class FoodBoxSelect extends React.Component {
 

    render() {
        return (
            
            <option key={this.props.value} value={this.props.value}>{this.props.value}</option>
            
        );
    }

}
export default FoodBoxSelect;
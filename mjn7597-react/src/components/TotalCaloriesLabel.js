import '../../src/App.css';
import React from 'react';


class TotalCaloriesLabel extends React.Component {
    

    render() {
        return (
            <React.Fragment>
                <h4>totalCalories: 
                <label className="totalCaloriesLabel" id="totalCalories" value={this.props.totalCalories}>{this.props.totalCalories}</label>
                </h4>
            </React.Fragment>
        );
    }

}
export default TotalCaloriesLabel;
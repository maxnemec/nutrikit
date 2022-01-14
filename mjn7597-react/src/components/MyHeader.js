import '../../src/App.css';
import React from 'react';



class MyHeader extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <React.Fragment>
                <h1 className="header">Nurtikit Food Planner</h1>
                <h6 className="header">NutriKit allows you to select your groceries, and track your nutritional progress (good or bad)</h6>
            </React.Fragment>
        );
    }

}
export default MyHeader;
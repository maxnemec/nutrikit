import '../../src/App.css';
import React from 'react';



class MyHeader extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <React.Fragment>
                <h1 className="header">Nutrikit Food Planner</h1>
            </React.Fragment>
        );
    }

}
export default MyHeader;
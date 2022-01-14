import '../../src/App.css';
import React from 'react';
import FoodBoxSelect from './FoodBoxSelect'

import 'bootstrap/dist/css/bootstrap.min.css';

import {Input} from 'reactstrap';



class SelectedBox extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    renderOptions(selectedItems)
    {
        
        const getCategoryContent = () => {
            const content = [];
            for(let i = 0; i < selectedItems.length; i++) 
            {
                content.push(<FoodBoxSelect key={i} value={selectedItems[i]}/>);
            }

            return content;
        }
        return (
            
            <React.Fragment>
                {getCategoryContent()}
            </React.Fragment>
        );
    }

    handleChange = (e) =>
    {
        var selectData = [];
        this.setState({value: e.target.value});
        selectData.push(e.target.value);
        selectData.push(true);
        this.props.handleMenuItemChange(selectData);

    }

    render() {
        return (
            
            <Input type="select" onChange={this.handleChange} className="selectBox h-100" id="selectedBox" name="selections" size="5" >
                {this.renderOptions(this.props.selectedItems)}
            </Input> 

        );
    }

}
export default SelectedBox;